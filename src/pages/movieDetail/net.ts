import {get, post} from '../../network/server/request'
import actions from '../../actions/index'
import { MovieInfo } from '../../types';
import {message} from 'antd'

export const fetchMovieInfo = async (key:string) => {
    const {
        data
    } = await get<MovieInfo>(`${actions.getMovieDetail}/${key}`)
    if(data.code === 200){
        return data.data
    }else{
        message.error(data.msg || "请求错误")
        return {} as MovieInfo
    }
}

export const putCommentInfo = async (params:object) => {
    const {data} = await post(actions.putComment,params)
    if(data.code === 200) {
        message.success("评论成功")
    }else {
        message.error(data.msg || "请求错误")
    }
}