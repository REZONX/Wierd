import { message } from 'antd'
import actions from '../../actions/index'
import {get} from '../../network/server/request'
import { CinemaInfo } from '../../types'
export const fetchCinemaList = async (params:object) => {
    const {data} = await get<Array<CinemaInfo>>(actions.getCinemaList,params)
    if(data.code === 200) {
        return data.data
    }else {
        message.error(data.msg||"请求影院列表失败")
        return []
    }
}