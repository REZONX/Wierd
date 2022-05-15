import { Button, Col, message, Result, Row, Steps, Table, Timeline } from 'antd'
import moment from 'moment'
import Countdown from 'antd/lib/statistic/Countdown'
import 'antd/lib/statistic/style'
import React from 'react'
import SiteSteps from '../../components/SiteStep'

import { container, h } from './style.css'
import { useNavigate, useParams } from 'react-router'
import { useMovie } from '../../context/MovieProvider'
import { fetchBillInfo, PutBillInfo } from './net'
import { BillInfo, putBillParams, Session } from '../../types'
import { VideoCameraAddOutlined, TableOutlined,PayCircleOutlined,VerticalAlignTopOutlined} from '@ant-design/icons' 
import { parsePickSeats, parseSeat } from '../../utils/parse'

type ResultState = "success" | "warning"

interface BillPayProps {

}
const BillPay = (props:BillPayProps) => {
    const {} = props
    const params:any = useParams()
    const navigate = useNavigate()
    const {pay,setPay,setCurrentCinema,setCurrentMovie,seats} = useMovie()
    console.log(seats)
    const [result,setResult] = React.useState<ResultState>("warning")
    const defaultBillInfo:BillInfo = {
        billDate:"",
        billState:false,
        billId:0,
        seats:"",
        sessionId:0,
        sysSession:{
            cinemaId:0,
            hallId:0,
            languageVersion:"",
            movieId:0,
            movieRuntimeId:0,
            seatNums:0,
            sessionDate:"",
            sessionId:0,
            sessionPrice:0,
            sessionSeats:"",
            sessionState:false,
            sysHall:{
                cinemaId:0,
                hallCategoryId:0,
                hallId:0,
                hallName:"",
                hallState:false,
                rowNums:0,
                rowStart:"",
                seatNums:0,
                seatNumsRow:0,
                seatState:"",
            },
            sysMovieRuntime:{
                beginTime:"",
                endTime:"",
                movieRuntimeId:0,
                movieRuntimeName:"",
            },
            sysMovie:{
                actorRoleList:[],
                majorActorNameList:[],
                movieAgeId:0,
                movieAreaId:0,
                movieBoxOffice:0,
                movieCategoryList:[],
                movieCommentList:[],
                movieLength:0,
                movieIntroduction:"",
                movieNameCn:"",
                movieNameEn:"",
                moviePoster:"",
                movieRateNum:0,
                movieScore:0,
                releaseDate:"",
                movieId:0,
                moviePictures:"",
            },
            sysCinema:{
                cinemaName:"",
                cinemaId:0,
                cinemaAddress:"",
                cinemaAreaId:0,
                cinemaBrandId:0,
                cinemaPicture:"",
                isRefunded:false,
                isTicketChanged:false,
                sysHallCategoryList:[],
            },
        },
        sysUser:{
            userId:0,
            userName:"",
            userPicture:"",
        },
        userId:0,
    }
    const [billInfo,setBillInfo] = React.useState<BillInfo>(defaultBillInfo)
    const handleFinish = () => {
        message.error("未完成操作")
        setCurrentCinema("")
        setCurrentMovie("")
        navigate("/")
    }
    React.useEffect(()=>{
        fetchBillInfo(params.billId).then(res=>{
            setBillInfo(res)
        })
    },[params.billId])
    
    // Object.keys(seats).map(row=>{
    //     seats[row].map((seat,index)=>{
    //         if(seat === 2){
    //             return {
    //                 ...seats,
    //                 seats[row]:[...seats[row]]
    //             }
    //         }
    //     })
    // })
    console.log(seats)
    const billParams:putBillParams = {
        sessionSeats:JSON.stringify(seats),
        sysBill:{
            billDate:billInfo.billDate,
            billId:billInfo.billId,
            billState:billInfo.billState,
            sessionId:billInfo.sessionId,
            seats:billInfo.seats
        },
        sysSession:billInfo.sysSession,
        sysUser:billInfo.sysUser
    }
    const handleClick = () => {
        PutBillInfo(billParams)
        setPay(true)
        setResult("success")
        navigate("/")
        //TODO调用接口
        message.success("支付成功，请在订单信息中查询")
    }
    const deadline = React.useRef(moment(Date.now()).add(15,"minutes").valueOf())
    const colunms = [
        {
            title:"影片",
            dataIndex:"sysSession",
            render:(sysSession:Session)=>{
                return (
                    <div>
                        {
                            sysSession.sysMovie.movieNameCn
                        }
                    </div>
                )
            }
        },
        {
            title:"时间",
            dataIndex:"billDate",
            render:(billDate:string) =>{
                return (
                    <div>
                        {billDate}
                    </div>
                )
            }
        },
        {
            title:"影院",
            dataIndex:"sysSession",
            render:(sysSession:Session)=>{
                return (
                    <div>
                        {sysSession.sysCinema.cinemaAddress}
                    </div>
                )
            }
        },
        {
            title:"座位",
            dataIndex:"seats",
            render:(seats:string)=>{
                return (
                    <React.Fragment>
                        {
                            parsePickSeats(billInfo.seats).map(seat=>{
                                return (
                                    <span>
                                        {seat}
                                    </span>
                                )
                            })
                        }
                    </React.Fragment>
                )
            }
        }
    ]
    let source = [billInfo]
    return (
        <div
            className={container}
        >
            <SiteSteps
                current={2}
                stepsProps={[
                    {
                        title:"选择影片场次",
                        incon:<VideoCameraAddOutlined />,
                    },
                    {
                        title:"选择座位",
                        incon:<TableOutlined />,
                    },
                    {
                        title:"15分钟内付款",
                        incon:<PayCircleOutlined />,
                    },
                    {
                        title:"影院获取观影票",
                        incon:<VerticalAlignTopOutlined />,
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
                        {billInfo.billId}
                    </span>
                    <Table
                        columns={colunms}
                        dataSource={source}
                    />
                </div>
            </div>
            <div>
                <Row>
                    <Col
                        flex={4}
                    >
                        <h2>{billInfo.sysSession.sysCinema.cinemaName}</h2>
                        <div>{billInfo.sysSession.sysCinema.cinemaAddress}</div>
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