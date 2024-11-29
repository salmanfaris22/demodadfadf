
import api from "./api";


export const partners = async (data: any) => {
    try {
        console.log("dkflanhjdfvags",data)
        const response = await api.post('/admin/partners/', data,
            {
                headers: {
                  'Content-Type': 'multipart/form-data',  // This is essential
                }}

        );
        return response.data;
    } catch (error) {
        console.log(error)
        throw error;
    }
};