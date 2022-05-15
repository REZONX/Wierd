import {get,put} from '../../network/server/request'
import actions from '../../actions'
import { message } from 'antd'
import { BillInfo, putBillParams } from '../../types'
export const fetchBillInfo = async (billId:number) => {
    const {data} = await get<BillInfo>(`${actions.getBill}/${billId}`)
    if(data.code === 200) {
        return data.data
    }else{
        message.error(data.msg||"获取账单信息失败")
        return {} as BillInfo
    }
}

export const PutBillInfo = async (params:putBillParams) => {
    const {data} = await put<BillInfo>(actions.getBill,params)
    if(data.code === 200) {
        return data.data
    }else{
        message.error(data.msg||"添加账单信息失败")
        return {} as BillInfo
    }
}