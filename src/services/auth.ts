/* eslint-disable no-useless-catch */

import api from "./api";






export const login = async (data: any) => {
    try {
        const response = await api.post('/auth/login', data, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.log(error)
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
