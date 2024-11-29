import api from "./api";



export const dashboardItems = async () => {
    try {
        const response = await api.get('/admin/dashboard/', { withCredentials: true });
        return response.data;
    } catch (error) {
        console.log(error)
        throw error;
    }
};