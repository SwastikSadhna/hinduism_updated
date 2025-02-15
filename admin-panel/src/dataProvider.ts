import axios from "axios";

const api_url = import.meta.env.VITE_JSON_SERVER_URL;

const api = axios.create({
    baseURL: api_url,
});

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
        const { data } = await api.get(`/${resource}/${params.id}`,{
            headers: { "authorization": `Bearer ${JSON.parse(localStorage.getItem("auth"))?.token}` }
        });
        return { data: data[0]};
    },
    create: async (resource: string, params: { data: any }) => {
        const { data } = await api.post(`/${resource}`, params.data,{
            headers: { "authorization": `Bearer ${JSON.parse(localStorage.getItem("auth"))?.token}` }
    });
        return { data };
    },
    update: async (resource: string, params: { id: number; data: any }) => {
        const { data } = await api.put(`/${resource}/${params.id}`, params.data,{
            headers: { "authorization": `Bearer ${JSON.parse(localStorage.getItem("auth"))?.token}` }
        });
        return { data };
    },
    delete: async (resource: string, params: { id: number }) => {
        await api.delete(`/${resource}/${params.id}`,{
            headers: { "authorization": `Bearer ${JSON.parse(localStorage.getItem("auth"))?.token}` }
        });
        return { data: params.id };
    },
    deleteMany: async (resource: string, params: { ids: number[] }) => {
        await Promise.all(params.ids.map((id) => api.delete(`/${resource}/${id}`,{
            headers: { "authorization": `Bearer ${JSON.parse(localStorage.getItem("auth"))?.token}` }
        })));
        return { data: params.ids };
    },
};

export default dataProvider;