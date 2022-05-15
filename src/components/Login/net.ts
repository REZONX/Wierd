import {post} from '../../network/server/request'
import actions from '../../actions'
import {message} from 'antd'
export const postRegister = async (params:object) => {
    const {data} = await post(actions.register,params)
    if(data.code === 200){
        message.success("注册登陆现在请登陆")
        window.location.href = '/login'
    }else{
        message.error(data.msg || "注册失败")
    }
} 