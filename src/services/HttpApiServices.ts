import axios, { AxiosInstance } from "axios";

export class HttpApiServices{
    axios: AxiosInstance;

    constructor(){
        
        this.axios = axios.create({
            baseURL: import.meta.env.VITE_PUBLIC_API_URL + '/api'
        });

        this.axios.interceptors.request.use((config: any) =>{
            const token = localStorage.getItem('token');

            if(token){
                config.headers.Authorization = 'Bearer' + token;
            }
            return config;
        })
    }
}