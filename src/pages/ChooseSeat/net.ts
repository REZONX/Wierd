import {get, post} from '../../network/server/request'
import { Session ,BillProps} from '../../types'
import actions from '../../actions'
import { message } from 'antd'

export const fetchSeat = async (param:string) => {
    const {data} = await get<Session>(`${actions.getSeats}/${param}`)
    if(data.code === 200) {
        return data.data
    }else{
        message.error(data.msg||"获取座位失败")
        return {} as Session
    }
}

export const fetchBill = async (params:object) => {
    const {data} = await post<BillProps>(actions.getBill,params)
    if(data.code === 200) {
        return data.data
    }else{
        message.error(data.msg||"获取账单信息失败")
        return {} as BillProps
    }
}