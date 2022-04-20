import axios from "axios";
import { AxiosRequestConfig } from "axios";

const formHeader:AxiosRequestConfig = {
    headers:{
        'Content-Type':'multipart/form-data'
    }
}
interface InterfaceResponse<T = any> {
    success:boolean
    data:T
    msg?:string
}

export const post = <T>(url:string,data:any,config?:AxiosRequestConfig) =>
    axios.post<never,InterfaceResponse<T>>(url,data,config)

export const get = <T>(url:string,data:any) =>
    axios.get<never,InterfaceResponse<T>>(url,{params:data})