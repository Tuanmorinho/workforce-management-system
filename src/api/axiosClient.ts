import { ACCESS_TOKEN } from 'constants/index';
import axios, { AxiosResponse } from "axios";

export const axiosClient = axios.create({
    baseURL: process.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
})

axiosClient.interceptors.request.use(function (config) {
    const userToken = localStorage.getItem(ACCESS_TOKEN)
    if (userToken) {
        config.headers.Authorization = `Bearer ${userToken}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});


axiosClient.interceptors.response.use(function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});