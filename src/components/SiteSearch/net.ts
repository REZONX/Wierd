import {get} from '../../network/server/request'
import actions from '../../actions'
import { MovieInfo } from '../../types'
import { message } from 'antd'

export const searchMovie = async (params:object) => {
    const {data} = await get<MovieInfo>(actions.searchMovie,params)
    if(data.code === 200) {
        return data.data
    }else{
        message.error(data.msg||"获取电影失败")
        return {}
    }
}