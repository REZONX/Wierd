import { message } from 'antd'
import actions from '../../actions'
import {get} from '../../network/server/request'
import { MovieInfo } from '../../types'

export const fetchHot = async (params:object) => {
    const {data} = await get<MovieInfo[]>(actions.getHot,params)
    if(data.code === 200) {
        return data.data
    }else {
        message.error(data.msg || "获取电影列表失败")
        return [] as MovieInfo[]
    }
}

export const fetchNow = async (params:object) => {
    const {data} = await get<MovieInfo[]>(actions.getNow,params)
    if(data.code === 200) {
        return data.data
    }else {
        message.error(data.msg || "获取电影列表失败")
        return [] as MovieInfo[]
    }
}
