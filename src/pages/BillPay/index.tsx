import { Button, Col, message, Result, Row, Steps, Table, Timeline } from 'antd'
import moment from 'moment'
import Countdown from 'antd/lib/statistic/Countdown'
import 'antd/lib/statistic/style'
import React from 'react'
import SiteSteps from '../../components/SiteStep'

import { container, h } from './style.css'
import { useNavigate } from 'react-router'
import { useMovie } from '../../context/MovieProvider'

type ResultState = "success" | "warning"

interface BillPayProps {

}
const BillPay = (props:BillPayProps) => {
    const {} = props
    const navigate = useNavigate()
    const {pay,setPay,setCurrentCinema,setCurrentMovie} = useMovie()
    const [result,setResult] = React.useState<ResultState>("warning")
    const handleFinish = () => {
        message.error("未完成操作")
        setCurrentCinema("")
        setCurrentMovie("")
        navigate("/")
    }
    const handleClick = () => {
        setPay(true)
        setResult("success")
        //TODO调用接口
        message.success("支付成功，请在订单信息中查询")
    }
    const deadline = React.useRef(moment(Date.now()).add(15,"minutes").valueOf())
    const colunms = [
        {
            title:"影片",
            dataIndex:"movieName",
        },
        {
            title:"时间",
            dataIndex:"time",
        },
        {
            title:"影院",
            dataIndex:"cinema"
        },
        {
            title:"座位",
            dataIndex:"cinema"
        }
    ]
    return (
        <div
            className={container}
        >
            <SiteSteps
                current={2}
                stepsProps={[
                    {
                        title:"选择影片场次"
                    },
                    {
                        title:"选择座位"
                    },
                    {
                        title:"15分钟内付款"
                    },
                    {
                        title:"影院获取观影票"
                    },
                ]}
            />
            <Result
                status={result}
            >
                {
                  result==="warning"  ?
                  (
                    <div
                        
                    >
                        <h1
                            className={h[result]}
                        >待支付</h1>
                        <div>
                            <span>请在</span>
                            <Countdown
                            valueStyle={{
                                "color":"#f1c40f"
                            }}
                                onFinish={handleFinish}
                                value={deadline.current}
                            />
                            <span>完成支付</span>
                        </div>
                    </div>
                  ):(
                      <div>
                          <h1
                            className={h[result]}
                          >已完成</h1>
                      </div>
                  )
                }
            </Result>
            <div>
                <div>
                    订单编号为
                    <span>
                        {10}
                    </span>
                </div>
                <Table
                    columns={colunms}
                />
            </div>
            <div>
                <Row>
                    <Col
                        flex={4}
                    >
                    <h2>万达影院(经开万达广场店)</h2>
                    <div>地址荆州区经济技术开发区辽河西路117号万达广场四楼</div>
                    <div>电话:13111212312</div>
                    </Col>
                    <Col
                        flex={1}
                    >
                        <div>
                            总价<span>20元</span>
                        </div>
                        <Button
                            type="primary"
                            onClick={handleClick}
                            style={{
                                "background":"#e74c3c"
                            }}
                        >
                            立即支付
                        </Button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default BillPay