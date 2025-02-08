import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
});

const dataProvider = {
    getList: async (resource: string, params: any) => {
        const { data } = await api.get(`/${resource}`);
        return {
            data: data, // List of records
            total: data.length, // Total count
        };
    },
    getOne: async (resource: string, params: { id: number }) => {
        const { data } = await api.get(`/${resource}/${params.id}`);
        console.log(data[0])
        return { data: data[0]};
    },
    create: async (resource: string, params: { data: any }) => {
        const { data } = await api.post(`/${resource}`, params.data);
        return { data };
    },
    update: async (resource: string, params: { id: number; data: any }) => {
        const { data } = await api.put(`/${resource}/${params.id}`, params.data);
        return { data };
    },
    delete: async (resource: string, params: { id: number }) => {
        await api.delete(`/${resource}/${params.id}`);
        return { data: params.id };
    },
    deleteMany: async (resource: string, params: { ids: number[] }) => {
        await Promise.all(params.ids.map((id) => api.delete(`/${resource}/${id}`)));
        return { data: params.ids };
    },
};

export default dataProvider;