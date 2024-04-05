import instance from "@/configs/axios";
import { IProduct } from "@/common/types/product";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAllProducts = async (params?: any): Promise<IProduct[]> => {
    try {
        const response = await instance.get("/products", { params });
        return response.data;
    } catch (error) {
        return [];
    }
};
export const getProductById = async (id: number | string) => {
    try {
        const response = await instance.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
export const addProduct = async (product: IProduct) => {
    try {
        const response = await instance.post(`/products`, product);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
export const editProduct = async (id: number | string, data: any) => {
    try {
        const response = await instance.put(`/products/${id}`, data);
        console.log(data);

        return response.data;
    } catch (error) {
        console.log(error);
    }
};
export const removeProduct = async (id: number | string) => {
    try {
        const response = await instance.delete(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};