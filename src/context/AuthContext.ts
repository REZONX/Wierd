import React from 'react'
import {LoginData,RegisterData} from './AuthProvider'
import {User} from './AuthProvider'
// export interface IUserInfo {
//     userName:string
//     userPicture:string
//     userId:number
// }
// export interface IAuthContext {
//     userInfo:IUserInfo
// }
type Id = number | string


export interface IAuthContext {
    user:User,
    login:(data:LoginData)=>void
    register:(data:RegisterData)=>void
    logout:()=>void
    getToken:()=>string | null
}


export const AuthContext = React.createContext<IAuthContext | null>(null)
