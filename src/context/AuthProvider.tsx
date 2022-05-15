import React from 'react'
import { post } from '../network/server/request'
import { AuthContext, IAuthContext } from './AuthContext'
import axios from 'axios'
import { json } from 'stream/consumers'
import { useNavigate } from 'react-router'
import { message } from 'antd'
import action from '../actions/index'


export interface User {
    sysUser:{
        userId:string | number
        information?:string
        userName:string
        userPicture?:string
        sex?:boolean
    }
    token?:string
}  

export interface LoginData {
    userName:string
    password:string
    isRememberMe:boolean
}

export interface RegisterData {
    username:string
    password:string
    email:string
}

export interface AuthProviderProps {
    children?:React.ReactNode
}

const AuthProvider = (props:AuthProviderProps) => {
    const {
        children
    } = props
    let navigate = useNavigate()
    const [user,setUser] = React.useState<User | null>(null)
    const localStorageKey = "__auth_provider_token__"
    
    const getToken = () => window.localStorage.getItem(localStorageKey)
    
    const saveToken = (user:User) => {
        window.localStorage.setItem(localStorageKey,user.token || '')
    } 
    
    const login = async (loginData:LoginData) => {
        let {data} = await post<User>(action.login,loginData)
        if(data.code === 200){
            saveToken(data.data)
            setUser(data.data)
            navigate("/")
        }else {
            message.error(data.msg)
        }
        
        
    }
    
    const register = async (data:RegisterData) => {
        // let res = await post<User>("url",data)
        
    }
    
    const logout = () => window.localStorage.removeItem(localStorageKey)

    const defaultUser:User  = {
        sysUser:{
            userId:0,
            userName:"未登陆",
            userPicture:"",
            sex:true,
            information:""
        },
        token:""
    }
    const context:IAuthContext = {
        user:user ?? defaultUser,
        login,
        register,
        logout,
        getToken,
    }

    return (
        <AuthContext.Provider
            value={context}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = React.useContext(AuthContext)
    if(!context){
        throw new Error("useAuth必须在AuthProvider中使用")
    }
    return context
}

export default AuthProvider