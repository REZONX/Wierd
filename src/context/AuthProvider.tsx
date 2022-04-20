import { boolean } from 'fp-ts'
import { UserInfo } from 'os'
import React from 'react'
import { post } from '../network/server/request'
import { AuthContext, IAuthContext } from './AuthContext'



export interface User {
    id:string | number
    name:string
    pic:string
    token?:string
}  

export interface LoginData {
    username:string
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
    
    const [user,setUser] = React.useState<User | null>(null)
    const localStorageKey = "__auth_provider_token__"
    
    const getToken = () => window.localStorage.getItem(localStorageKey)
    
    const saveToken = (user:User) => {
        window.localStorage.setItem(localStorageKey,user.token || '')
    } 
    
    const login = async (data:LoginData) => {
        let res = await post<User>("http://42.192.81.240:8607/hunan-admin/auth/login",data)
        saveToken(res.data)
        setUser(res.data)
    }
    
    const register = async (data:RegisterData) => {
        let res = await post<User>("url",data)
        
    }
    
    const logout = () => window.localStorage.removeItem(localStorageKey)

    const defaultUser:User  = {
        id:0,
        name:"未登陆",
        pic:""

    }
    const context:IAuthContext = {
        user:user ?? defaultUser,
        login,
        register,
        logout,
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