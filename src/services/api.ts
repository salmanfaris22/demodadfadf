import axios from 'axios';
import { API_URL } from '../config';

import store from '../store';

import { clearUserAndToken, selectToken } from '../store/authSlice';
import { showToast } from '../store/toastSlice';




const api = axios.create({
    baseURL: API_URL,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token")

        console.log("ad;lfkjahfgjahkl;")
        console.log(token)
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            const status = error.response.status;
        
            switch (status) {
                case 400:
                    console.error('Bad Request');
                    break;
                case 401:
                    console.error('Unauthorized: Please log in to continue.');
                    store.dispatch(clearUserAndToken())
                    store.dispatch(
                        showToast({
                            message: 'Please log in to continue',
                            type: 'error',
                            timeout: 5000,
                        })
                    );
                    // window.location.replace('/login');
                    break;
                case 500:
                    console.error('Internal Server Error');
                    break;
                default:
                    console.error(`Error: ${status}`);
            }
        }
        return Promise.reject(error);
    }
);

export default api;