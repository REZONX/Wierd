import { post } from "../server/request"

interface LoginParams {
    name:string
    pwd:string
}

interface ModifyPwdParams {
    oldPwd:string
    newPwd:string
    checkPwd:string
}

export const accountHelper = () => {
    const login = (params:LoginParams) => post("登陆接口",params)
    const modifyPwd = (params:ModifyPwdParams) => post("修改密码接口",params)
    return {
        login,
        modifyPwd,
    }
}