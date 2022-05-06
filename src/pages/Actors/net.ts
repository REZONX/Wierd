import {get} from '../../network/server/request'
import {message} from 'antd'
import actions from '../../actions/index'
import { ActorInfo, Key } from '../../types'
export const fetchActor = async (key:Key) => {
    const {data} = await get<ActorInfo>(`${actions.getActor}/${key}`)
    if(data.code === 200){
        return data.data
    }else{
        message.error(data.msg || "获取演员信息有误")
        return {} as ActorInfo
    }
}

export const fetchActorsRel = async (params:object) => {
    const {data} = await get<ActorInfo[]>(`${actions.getActors}`,params)
    if(data.code === 200){
        return data.data
    }else{
        message.error(data.msg || "获取相关演员信息有误")
        return [] as ActorInfo[]
    }
}