import {get} from '../../network/server/request'
import actions from '../../actions/index'
import {message} from 'antd'
import {BillInfo} from '../../types'
export const fetchBillPay = async (userId:number | string) => {
    const {data} = await get<BillInfo[]>(actions.getBill,{userId})
    if(data.code === 200){
        return data.data
    }else{
        message.error(data.msg || "请求错误")
        return {} as BillInfo[]
    }
}