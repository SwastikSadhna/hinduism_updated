import axios from "axios";

const api_url = import.meta.env.VITE_JSON_SERVER_URL;

const api = axios.create({
    baseURL: api_url,
});

const prepareFormData = (data: any) => {
    const formData = new FormData();
    
    Object.keys(data).forEach((key) => {
        if (key === "image" && data[key]?.rawFile) {
            formData.append(key, data[key].rawFile); 
            return
        } 
        if (key === "images" && Array.isArray(data[key])) {
            data[key].forEach((file) => {
                if (file.rawFile) {
                    formData.append(key, file.rawFile); // Append each file separately
                }
            });
            return;
        } 
        if (key === "importance" && Array.isArray(data[key])) {
            // Flatten any nested arrays and stringify as JSON
            const flatImportance = data[key].flat(Infinity); // Removes extra nesting
            formData.append(key, JSON.stringify(flatImportance));
            return;
        }
        if (key === "cover_image" && data[key]?.rawFile) {
            formData.append(key, data[key].rawFile); 
        } else {
            formData.append(key, data[key]);
        }
    });
    console.log(formData)
    return formData;
};

const formatImageUrls = (data: any) => {
        data.image = `http://localhost:3000/${data.image}`;
        data.cover_image = `http://localhost:3000/${data.cover_image}`; 
        if(data.images)
            data.images = data.images.map((image)=> `http://localhost:3000/${image}`)
    return data;
};

const dataProvider = {
    getList: async (resource: string, params: any) => {
        const { data } = await api.get(`/${resource}`, {
            headers: { "authorization": `Bearer ${JSON.parse(localStorage.getItem("auth"))?.token}` }
        });
        return {
            data: data, // List of records
            total: data.length, // Total count
        };
    },

    getOne: async (resource: string, params: { id: number }) => {
        const { data } = await api.get(`/${resource}/${params.id}`, {
            headers: { "authorization": `Bearer ${JSON.parse(localStorage.getItem("auth"))?.token}` }
        });
        return { data: data[0] };
    },

    create: async (resource: string, params: { data: any }) => {
        const formData = prepareFormData(params.data);

        const { data } = await api.post(`/${resource}`, formData, {
            headers: { 
                "authorization": `Bearer ${JSON.parse(localStorage.getItem("auth"))?.token}`,
                "Content-Type": "multipart/form-data"
            }
        });

        return { data };
    },

    update: async (resource: string, params: { id: number; data: any }) => {
        const formData = prepareFormData(params.data);

        const { data } = await api.put(`/${resource}/${params.id}`, formData, {
            headers: { 
                "authorization": `Bearer ${JSON.parse(localStorage.getItem("auth"))?.token}`,
                "Content-Type": "multipart/form-data"
            }
        });

        return { data };
    },

    delete: async (resource: string, params: { id: number }) => {
        await api.delete(`/${resource}/${params.id}`, {
            headers: { "authorization": `Bearer ${JSON.parse(localStorage.getItem("auth"))?.token}` }
        });
        return { data: params.id };
    },

    deleteMany: async (resource: string, params: { ids: number[] }) => {
        await Promise.all(params.ids.map((id) => 
            api.delete(`/${resource}/${id}`, {
                headers: { "authorization": `Bearer ${JSON.parse(localStorage.getItem("auth"))?.token}` }
            })
        ));
        return { data: params.ids };
    },
};

export default dataProvider;
