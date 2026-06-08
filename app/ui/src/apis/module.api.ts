import type { Module } from "../types/module.type";
import axiosRequest from "./axios";


export const moduleApi ={
    create: async (data: Omit<Module, 'id'>) => {
        const response = await axiosRequest.post('/module', data);
        return response.data;
    }
}