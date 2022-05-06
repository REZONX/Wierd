import React from 'react'
import {Card, Tabs, Radio, RadioChangeEvent} from 'antd'
import SiteTabs from '../../components/tabs'
import { PaddingTopAndBottom, pagesContent } from '../../public/style.css'
import PageHero from '../../components/PageHero'
import SiteOver from '../../components/siteOver'
import SiteFooter from '../../components/siteFooter'
import SubTitle from '../../components/SubTitle'
import MovieRadios from './movieRadios'
import MovieTabs from './MovieTabs'
import ShowList from '../../components/ShowList'
import { fetchMovieList, MovieParams } from './net'
import { MovieInfo } from '../../types'
import moment from 'moment'
import Radios from '../../components/radios'
import { movieRadios } from './config'
import { useMovies } from '../../context/MoviesProvider'

const {TabPane} = Tabs

export type Order = "releaseDate" | "movieScore"
const MoviePage = () => {
    const [currentPage,setCurrentPage] = React.useState(1)
    const [currentPageSize,setCurrentPageSize] = React.useState(30)
    const [startDate,setStartDate] = React.useState(moment().format("YYYY-MM-DD"))
    // const [endDate,setEndDate] = React.useState(moment().add(1,"months").format("YYYY-MM-DD"))
    const [endDate,setEndDate] = React.useState("")
    const [order,setOrder] = React.useState<Order>("releaseDate")
    const [isAsc,setIsAsc] = React.useState("desc")
    React.useState<MovieParams | null>(null)
    const defaultMovieInfos:Array<MovieInfo> = []
    const {
        category,
        age,
        area,
    } = useMovies()
    const params:MovieParams = Object.assign({},{
        movieCategoryId:category,
        movieAgeId:age,
        movieAreaId:area,
        orderByColumn:order,
        pageSize:currentPageSize,
        pageNum:currentPage,
        startDate,
        endDate,
        isAsc,
    })
    const [data,setData] = React.useState<MovieInfo[]>(defaultMovieInfos)
    React.useEffect(()=>{
        if(params){
            fetchMovieList(params).then(res => {
                setData(res)
            })
        }
    },[currentPageSize,currentPage,startDate,endDate,order,isAsc,age,area,category])
    const handleChange = (page:number,pageSize:number) => {
        setCurrentPage(page)
        setCurrentPageSize(pageSize)
    }

    const handleRadiosChange = (evt:RadioChangeEvent) => {
        evt.preventDefault()
        setOrder(evt.target.value)
    }
    return (
        <div
            style={{
                "overflow":"hidden"
            }}
        >
            <SiteOver>
                <PageHero
                    desc="Here is the Movies for you"
                    title="movie"
                    color="red"
                />
                <div
                    className={pagesContent}
                >
                    <SubTitle
                        title="movie list"
                    />
                    <MovieTabs/>
                    <div
                        className={PaddingTopAndBottom}
                    >
                        <Radios
                            radioProps={movieRadios}
                            defaultValue={"releaseDate"}
                            handleChange={handleRadiosChange}
                        />
                    </div>
                    <div
                        className={PaddingTopAndBottom}
                    >
                        
                    </div>
                    <ShowList
                        handleChange={handleChange}
                        defaultPageSize={currentPageSize}
                        data={data}
                    />
                </div>
            </SiteOver>
            <SiteFooter/>
        </div>
    )
}
export const SiteTag = () => {
    return (
        <div>
            {/* <SiteTabs
                tabs={movieTabs}
            /> */}
            {/* <TabsGroup/> */}
        </div>
    )
}
export default MoviePage