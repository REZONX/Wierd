import { Button, List, Table, Tag } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router'
import { useCinemas } from '../../context/CinemasProvider'
import { CinemaInfo, HallCategoryProps } from '../../types'
import { fetchCinemaList } from './net'
import { cinemaAdd, cinemaName, itemContainer, itemContent, tagsContainer } from './style.css'
interface ShowList {
    handleClick:()=>void
}
const ShowList = () => {

    const [cinemas,setCinemas] = React.useState<CinemaInfo[]>([])
    const {
        brand,
        cinemaArea,
        hallCategory
    } = useCinemas()
    const params = Object.assign({},{
        cinemaBrandId:brand,
        cinemaAreaId:cinemaArea,
        hallCategoryId:hallCategory,
    })
    React.useEffect(()=>{
        fetchCinemaList(params).then(res => {
            setCinemas(res)
        })
    },[brand,cinemaArea,hallCategory])
    return (
        <List
            itemLayout="horizontal"
            dataSource={cinemas}
            renderItem={item=>{
                return (
                    <List.Item>
                        <ListItem
                            name={item.cinemaName}
                            address={item.cinemaAddress}
                            tags={item.sysHallCategoryList}
                            isRefund={item.isRefunded}
                            isTicketChanged={item.isTicketChanged}
                            cinemaId={item.cinemaId}
                        />
                    </List.Item>
                )
            }}
        />
    )
}

interface ListItemProps {
    name:string
    address:string
    tags:Array<HallCategoryProps>,
    isTicketChanged:boolean
    isRefund:boolean
    cinemaId:number
}
const ListItem = (props:ListItemProps) => {
    const {
        name,
        address,
        tags,
        isRefund,
        isTicketChanged,
        cinemaId
    } = props
    const navigate = useNavigate()
    return (
        <div
            className={itemContainer}
        >
            <div
                className={itemContent}
            >
                <div>
                    <div
                        className={cinemaName}
                    >
                        <span>
                            {name}
                        </span>
                    </div>
                    <div
                        className={cinemaAdd}
                    >
                        <span>
                            {address}
                        </span>
                    </div>
                    <div
                        className={tagsContainer}
                    >
                        {
                            isRefund&&<Tag color={"red"}>可退款</Tag>
                        }
                        {
                            isTicketChanged&&<Tag color={"red"}>可改签</Tag>
                        }
                        {
                            tags.map(item => {
                                return (
                                    <Tag
                                        color={"blue"}
                                    >
                                        {item.hallCategoryName}
                                    </Tag>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <Button
                        type="primary"
                        onClick={()=>{
                            navigate(`/cinemas/${cinemaId}`)
                        }}
                    >
                        选座购票
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default ShowList