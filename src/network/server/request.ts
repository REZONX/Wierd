import axios from "axios";
import { AxiosRequestConfig } from "axios";

axios.interceptors.request.use(config =>{
    if(config.headers){
        config.headers.Token = window.localStorage.getItem("__auth_provider_token__") || ""
    }
    return config
})

const formHeader:AxiosRequestConfig = {
    headers:{
        'Content-Type':'multipart/form-data'
    }
}
interface InterfaceResponse<T = any> {
    data:{
        code:number
        data:T
        msg?:string
    }
}

export const post = <T>(url:string,data:any,config?:AxiosRequestConfig) =>
    axios.post<never,InterfaceResponse<T>>(url,data,config)

export const get = <T>(url:string,data?:any) =>
    axios.get<never,InterfaceResponse<T>>(url,{params:data})