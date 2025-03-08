import axios from "axios";

const api_url = import.meta.env.VITE_JSON_SERVER_URL;

const api = axios.create({
    baseURL: api_url,
});

const prepareFormData = (data: any) => {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
        if (key === "cover_image" && data[key]?.rawFile) {
            formData.append(key, data[key].rawFile);
            return;
        }

        if (key === "image" && data[key]?.rawFile) {
            formData.append(key, data[key].rawFile);
            return;
        }

        if (key === "file" && data[key]?.rawFile) {
            formData.append(key, data[key].rawFile);
            return;
        }

        if (key === "images" && Array.isArray(data[key])) {
            data[key].forEach((file) => {
                if (file.rawFile) {
                    formData.append(key, file.rawFile);
                }
            });
            return;
        }

        if (key === "importance" && Array.isArray(data[key])) {
            const formattedImportance = data[key].map((item) => {
                const importanceItem: any = { ...item };

                if (item.file?.rawFile) {
                    formData.append("importance_files", item.file.rawFile);
                    importanceItem.file = item.file.rawFile.name;
                }

                return importanceItem;
            });

            formData.append("importance", JSON.stringify(formattedImportance));
            return;
        }

        formData.append(key, data[key]);
    });

    return formData;
};

const formatImageUrls = (data: any) => {
    if (data.image) {
        data.image = `http://localhost:3000/${data.image}`;
    }
    if (data.cover_image) {
        data.cover_image = `http://localhost:3000/${data.cover_image}`;
    }
    if (data.images) {
        data.images = data.images.map((image: string) => `http://localhost:3000/${image}`);
    }
    return data;
};

const dataProvider = {
    getList: async (resource: string, params: any) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;

        const query = new URLSearchParams({
            _page: String(page),
            _limit: String(perPage),
            _sort: field,
            _order: order,
        });

        // Apply filters dynamically
        if (params.filter) {
            Object.keys(params.filter).forEach((key) => {
                query.append(key, params.filter[key]);
            });
        }

        const url = `/${resource}?${query.toString()}`;
        const { data, headers } = await api.get(url, {
            headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))?.token}` },
        });

        console.log(headers)

        return {
            data: data.map(formatImageUrls),
            total: parseInt(headers["x-total-count"], 10) || data.length,
        };
    },
    getOne: async (resource: string, params: { id: number }) => {
        const { data } = await api.get(`/${resource}/${params.id}`, {
            "headers": { "authorization": `Bearer ${JSON.parse(localStorage.getItem("auth"))?.token}` }
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