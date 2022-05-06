import {get} from '../../network/server/request'
import actions from '../../actions'
import { ICinemaDetail } from '../../types'
import { message } from 'antd'
export const fetchCinemaDetail = async (key:string) => {
    const {data} = await get<ICinemaDetail>(`${actions.getCinemaInfo}/${key}`)
    if(data.code === 200) {
        return data.data
    }else {
        message.error(data.msg||"获取场次失败")
        return {} as ICinemaDetail
    }
}