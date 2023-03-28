import { PDF_TOKEN } from 'constants/index';
import axios, { AxiosResponse } from "axios";

export const axiosClientPDF = axios.create({
    baseURL: 'https://api.ilovepdf.com',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
})

axiosClientPDF.interceptors.request.use(function (config) {
    const pdfToken = localStorage.getItem(PDF_TOKEN)
    if (pdfToken) {
        config.headers.Authorization = `Bearer ${pdfToken}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});


axiosClientPDF.interceptors.response.use(function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});