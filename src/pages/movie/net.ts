import { get } from "../../network/server/request"
import actions from "../../actions"
import { Key, MovieInfo } from "../../types"
import { message } from "antd"

export interface MovieParams {
    movieCategoryId:Key
    movieAgeId:Key
    movieAreaId:Key
    orderByColumn:string
    pageSize:number
    pageNum:number
    startDate:string
    endDate:string
    isAsc:string
}
export const fetchMovieList = async (params:object) => {
    const {data} = await get<Array<MovieInfo>>(actions.getMovieList,params)
    if(data.code === 200){
        return data.data
    }else {
        message.error(data.msg)
        return [] as MovieInfo[]
    }
}