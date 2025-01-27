import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
});

const dataProvider = {
    getList: async (resource: string, params: any) => {
      console.log(resource + " and " + params);
        const { data } = await api.get(`/${resource}`);
        return {
            data: data.data, // List of records
            total: data.data.length, // Total count
        };
    },
    getOne: async (resource: string, params: { id: number }) => {
        const { data } = await api.get(`/${resource}/${params.id}`);
        return { data };
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
};

export default dataProvider;