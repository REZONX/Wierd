import { message } from "antd";
import axios from "axios";
import { AxiosRequestConfig } from "axios";
import { string } from "fp-ts";

axios.interceptors.request.use(config =>{
    if(config.headers){
        config.headers.Token = window.localStorage.getItem("__auth_provider_token__") || ""
    }
    return config
})

const codeMessage = {
    401: '用户没有权限，请登录',
    403: '用户没有权限，请联系管理员',
    404: '访问的资源不存在',
    406: '请求的格式不可得',
    410: '请求的资源被永久删除，且不会再得到的',
    422: '当创建一个对象时，发生一个验证错误',
    500: '服务器发生错误，请检查服务器',
    502: '网关错误',
    503: '服务不可用，服务器暂时过载或维护',
    504: '网关超时'
  } as const;

  type code = 401|403|404|406|410|422|500|502|503|504
axios.interceptors.response.use(response=>{
    return response
},error=>{
    if(error){
        if(!error.response){
          return console.log('Error', error.message);
        }
        //获取状态码
        const status= error.response.status as code;
        const errortext = codeMessage[status] || error.response.statusText;
    
        //提示错误信息
        message.error(errortext)
    
        // 错误状态处理
        if (status === 401&&window.location.href!=='/login') {
            window.location.href = '/login'
            console.log(window.location.href)
        } 
        else if (status === 403&&window.location.href!=='/login') {
            window.location.href = '/login'
        } 
        // else if (status >= 404 && status < 422) {
        //   router.push('/404')
        // }
      }
      return Promise.reject(error)
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

interface PageInterfaceResponse<T = any> {
    data:{
        code:number
        data:T
        msg?:string
        pageNum:number
        pageSize:number
        total:number
    }
} 
export const post = <T>(url:string,data:any,config?:AxiosRequestConfig) =>
    axios.post<never,InterfaceResponse<T>>(url,data,config)

export const get = <T>(url:string,data?:any) =>
    axios.get<never,InterfaceResponse<T>>(url,{params:data})

export const put = <T>(url:string,data:any,config?:AxiosRequestConfig) => 
    axios.put<never,InterfaceResponse<T>>(url,data,config)

export const pageGet = <T>(url:string,data?:any) =>
    axios.get<never,PageInterfaceResponse<T>>(url,{params:data})