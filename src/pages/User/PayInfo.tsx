import { Col, Row ,Image} from 'antd'
import React from 'react'
import { content, money, payInfoHeader, state } from './style.css'
import { useAuth } from '../../context/AuthProvider'
import { fetchBillPay } from './net'
import { BillInfo } from '../../types'
import { parseImg } from '../../utils/parse'

interface PayInfoProps {

}
const PayInfo = (props:PayInfoProps) => {
    const {} = props
    const {
        user
    } = useAuth()
    const [bills,setBills]  =React.useState<BillInfo[]>([] as BillInfo[])
    React.useEffect(()=>{
        fetchBillPay(user.sysUser.userId).then(res=>{
            setBills(res)
        })
    },[])
    return (
        <div>
            {
                bills.map(item=>{
                    return (
                        <Line
                            billDate={item.billDate}
                            billId={item.billId}
                            movieName={item.sysSession.sysMovie.movieNameCn}
                            cinemaName={item.sysSession.sysCinema.cinemaName}
                            moviePoster={parseImg(item.sysSession.sysMovie.moviePoster)}
                        />
                    )
                })
            }
        </div>
    )
}

interface LineProps {
    billDate:string,
    billId:number,
    movieName:string,
    moviePoster:string,
    cinemaName:string,
    // price:string,
}
const Line = (props:LineProps) => {
    const {
        billDate,
        billId,
        movieName,
        cinemaName,
        moviePoster,
    } = props
    return (
        <div>
            <header
                className={payInfoHeader}
            >
                {billDate} <span>狗眼订单号为{billId}</span>
            </header>
            <div className={content}>
                <Row>
                    <Col
                        flex={6}
                        
                    >
                        <div
                            style={{
                                "display":"flex",
                                "alignItems":'center',
                            }}
                        >
                            <div>
                                <Image
                                    width={100}
                                    preview={false}
                                    src={moviePoster} 
                                />
                            </div>
                            <div
                                style={{
                                    "marginLeft":"2rem",
                                }}
                            >
                                <h1>
                                    {movieName}
                                </h1>
                                <div>
                                    {cinemaName}
                                </div>
                                <div>
                                    {billDate}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col
                        flex={2}
                    >
                        <div
                            className={money}
                        >
                            $32
                        </div>
                    </Col>
                    <Col
                        flex={2}
                    >
                        <div
                            className={state}
                        >
                            已完成
                        </div>
                    </Col>
                    <Col
                        flex={2}
                    >
                        <div>
                            查看详情
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default PayInfo