import { Image } from 'antd'
import React from 'react'
import { useParams } from 'react-router'
import DetailHeader from '../../components/DetailHeader'
import { CinemaInfo, ICinemaDetail } from '../../types'
import { parseImg } from '../../utils/parse'
import { imgBG } from '../Actors/style.css'
import CinemaDetailList from './CinemaList'
import { fetchCinemaDetail } from './net'
import { baseColor, listContainer } from './style.css'

const CinemaDetail = () => {
    const params:any = useParams()
    const defaultValue:ICinemaDetail = {
        cinema:{} as CinemaInfo,
        sessions:[]
    }
    const [cinemaDetail,setCinemaDetail] = React.useState<ICinemaDetail>(defaultValue)
    React.useEffect(()=>{
        fetchCinemaDetail(params.cinemaId).then(res=>{
            setCinemaDetail(res)
        })
    },[params.cinemaId])
    const {
        cinema,
        sessions
    } = cinemaDetail
    console.log(sessions)
    return (
        <div>
            <DetailHeader
                width={300}
                src={parseImg(cinema.cinemaPicture)}
            >
                <h1
                    className={baseColor}
                >
                    {cinema.cinemaName}
                </h1>
                <div
                    className={baseColor}
                >
                    {cinema.cinemaAddress}
                </div>
                <div
                    className={baseColor}
                >
                    <span>电话</span>
                    <span>{10642125}</span>
                </div>
            </DetailHeader>
            <div
                className={listContainer}
            >
                <CinemaDetailList
                    sourceData={sessions}
                />
            </div>
        </div>
    )
}

export default CinemaDetail