import {get} from '../../network/server/request'
import actions from '../../actions'
import { ActorInfo, CinemaInfo, MovieInfo } from '../../types'
import { message } from 'antd'

export const searchMovie = async (params:object) => {
    const {data} = await get<MovieInfo>(actions.searchMovie,params)
    if(data.code === 200) {
        return data.data
    }else{
        message.error(data.msg||"获取电影失败")
        return {} as MovieInfo
    }
}

export const searchActor = async (params:object) => {
    const {data} = await get<ActorInfo[]>(actions.searchActor,params)
    if(data.code === 200) {
        return data.data
    }else{
        return [] as ActorInfo[]
    }
}

export const searchCinema = async (params:object) => {
    const {data} = await get<CinemaInfo>(actions.searchCinema,params)
    if(data.code === 200) {
        return data.data
    }else{
        message.error(data.msg||"获取电影失败")
        return {} as CinemaInfo
    }
}