import { Button, Table } from "antd"
import React from 'react'
import { useNavigate } from "react-router"
import { useMovie } from "../../context/MovieProvider"
import { Session } from "../../types"
import { beginTime, endTime, priceS } from "./style.css"
interface CinemaListProps {
    sourceData:Array<Session>
}
const CinemaDetailList = (props:CinemaListProps) => {
    const {
        sourceData
    } = props
    const {
        show,
        setShow
    } = useMovie()
    const navigate = useNavigate()
    console.log(show)
    const columns = [
        {
            title:"放映时间",
            dataIndex:"sysMovieRuntime",
            key:"sysMovieRuntime",
            render:(runtime:any)=>{
                return (
                    <div>
                        <div className={beginTime}>{runtime.beginTime}</div>
                        <div>
                            <span className={endTime}>{runtime.endTime} 散场</span>
                        </div>
                    </div>
                )
            }
        },
        {
            title:"语言版本",
            dataIndex:"languageVersion",
            key:"languageVersion",
            render:(language:any) => {
                return <div>
                    {language}
                </div>
            }
        },
        {
            title:"放映厅",
            dataIndex:"sysHall",
            key:"sysHall",
            render:(hall:any) => {
                return (
                    <div>
                        {hall.hallName}
                    </div>
                )
            }
        },
        {
            title:"售价",
            dataIndex:"sessionPrice",
            key:"sessionPrice",
            render:(price:any)=>{
                return (
                    <div className={priceS}>
                        {price}
                    </div>
                )
            }
        },
        {
            title:"选座购票",
            dataIndex:"sessionId",
            key:"purchase",
            render:(id:any)=>{
                return (
                    <Button
                        onClick={()=>{
                            setShow(id)
                            navigate(`/choose-seat/${id}`)
                        }}
                    >
                        选座购票
                    </Button>
                )
            }
        }
    ]
    return <Table
        columns={columns}
        dataSource={sourceData}
    />
}

export default CinemaDetailList