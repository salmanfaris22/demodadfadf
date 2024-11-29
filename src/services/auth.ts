/* eslint-disable no-useless-catch */
import api from "./api";






export const login = async (data: any) => {
    try {
        const response = await api.post('/login', data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const register = async (userData: any) => {
    try {
        const response = await api.post('/register', userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};
