import { Image } from 'antd'
import classNames from 'classnames'
import React from 'react'
import { useParams } from 'react-router'
import DetailHeader from '../../components/DetailHeader'
import SubTitle from '../../components/SubTitle'
import { Category, Cinema, CinemaInfo, ICinemaDetail, MovieInfo, Session } from '../../types'
import { parseImg } from '../../utils/parse'
import { imgBG } from '../Actors/style.css'
import CinemaDetailList from './CinemaList'
import { fetchCinemaDetail, fetchSpecCinemaDetail } from './net'
import { baseColor, detailTitle, itemContainer, itemContent, listContainer, movieItem, movieItemActive, movieList, movieName, moviePoster, movieScore, sectionContainer, sessionDate, sessionDateActive, sessionTitle } from './style.css'

const CinemaDetail = () => {
    const params:any = useParams()
    const defaultValue:ICinemaDetail = {
        cinema:{} as Cinema,
        sessions:[]
    }
    const [cinemaDetail,setCinemaDetail] = React.useState<ICinemaDetail>(defaultValue)
    const [specDetail,setSpecDetail] = React.useState<ICinemaDetail>(defaultValue)
    const [currentMovie,setCurrentMovie] = React.useState(0)
    const [active,setActive] = React.useState(0)
    const [currentDate,setCurrentDate] = React.useState("")
    const [dates,setDates] = React.useState([""])
    React.useEffect(()=>{
        fetchCinemaDetail(params.cinemaId).then(res=>{
            setCinemaDetail(res)
            setCurrentMovie(res?.cinema?.sysMovieList?.[0]?.movieId)
        })
    },[params.cinemaId])
    React.useEffect(()=>{
        fetchSpecCinemaDetail(params.cinemaId,currentMovie?.toString()).then(res=>{
            setSpecDetail(res)
            setCurrentDate(res?.sessions?.[0]?.sessionDate)
            const dates:Array<string> = []
            res?.sessions?.forEach(session=>{
                if(dates.indexOf(session?.sessionDate)===-1){
                    dates.push(session?.sessionDate)
                }
            })
            setDates(dates)
        })
    },[currentMovie])

    const {
        cinema,
    } = cinemaDetail

    const filterDate = (date:string,sessions:Session[]) => {
        return sessions.filter(session=>{
            return session.sessionDate===date
        })
    }

    const filterMovie = (movieId:number,movieList:MovieInfo[]) => {
        return movieList?.filter(movie=>{
            return movie.movieId === movieId
        })[0]
    }

    const formatList = (name:string[]) => {
        const str = name?.slice(0,3)?.reduce((pre,cur)=>{
            return pre + cur +"/"
        },'')
        return str?.slice(0,str.length-1)
    }
    const specMovie = filterMovie(currentMovie,specDetail?.cinema?.sysMovieList)
    return (
        <div>
            <DetailHeader
                width={300}
                src={parseImg(cinema?.cinemaPicture)}
            >
                <h1
                    className={baseColor}
                >
                    {cinema?.cinemaName}
                </h1>
                <div
                    className={baseColor}
                >
                    {cinema?.cinemaAddress}
                </div>
                {/* <div
                    className={baseColor}
                >
                    <span>电话</span>
                    <span>{10642125}</span>
                </div> */}
            </DetailHeader>
            <div
                className={listContainer}
            >
                <SubTitle
                    title='Movie Information'
                />
                <div
                    className={sectionContainer}
                >
                    <ul
                        className={movieList}
                    >
                        {
                            cinemaDetail?.cinema?.sysMovieList?.map((movie,index)=>{
                                return (
                                    <li
                                        className={classNames(movieItem,{
                                            [`${movieItemActive}`]:index === active
                                        })}
                                        onClick={()=>{
                                            setActive(index)
                                            setCurrentMovie(movie?.movieId)
                                        }}
                                    >
                                        <img className={moviePoster} src={parseImg(movie?.moviePoster)} alt="" />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <div>
                        <span className={movieName}>{specMovie?.movieNameCn}</span>
                        <span className={movieScore}>{specMovie?.movieScore}分</span>
                    </div>
                    <div>
                        <div className={itemContainer}>
                            <span className={detailTitle}>时长：</span>
                            <span className={itemContent}>{specMovie?.movieLength}分</span>
                        </div>
                        <div className={itemContainer}>
                            <span className={detailTitle}>类型：</span>
                            <span className={itemContent}>{specMovie?.movieCategoryList.slice(0,3).reduce((pre,cur)=>{
                                return pre  + cur.movieCategoryName + '/'
                            },"")}</span>
                        </div>
                        <div className={itemContainer}>
                            <span className={detailTitle}>主演：</span>
                            <span className={itemContent}>{formatList(specMovie?.majorActorNameList)}</span>
                        </div>
                    </div>
                </div>
                <div
                    className={sectionContainer}
                >
                    <span className={sessionTitle}>观影时间：</span>
                    {
                        dates.map((date ,index)=> {
                            return (
                                <span 
                                    className={classNames(sessionDate,{
                                        [`${sessionDateActive}`]:date === currentDate
                                    })}
                                    onClick={()=>{
                                        setCurrentDate(date)
                                    }}
                                >
                                    {date}
                                </span>
                            )
                        })
                    }
                </div>
                <CinemaDetailList
                    sourceData={filterDate(currentDate,specDetail.sessions)}
                />
            </div>
        </div>
    )
}

export default CinemaDetail