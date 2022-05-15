import React, { useRef,Ref } from 'react'
import HeroUI from "../../components/Hero/HeroUI"
import Logo from "../../components/logo"
import ModuleUI from "../../components/Module/ModuleUI"
import ModuleListUI from "../../components/ModuleList/ModuleListUI"
import SiteFooter from "../../components/siteFooter"
import SiteOver from "../../components/siteOver"
import { FluidContainerStyle } from "../../public/style.css"
import { MovieInfo } from '../../types'
import { fetchMovieList } from '../movie/net'
import { fetchHot, fetchNow } from './net'
import SiteHeaderUI, { SiteMainNavigatorUI } from "./SiteHeaderUI"
import { arrowVar, HomeStyle, SiteMainHeaderStyle} from "./styles.css"
import moment from 'moment'
import { Carousel, Image} from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import LeftArrow from '../../components/Arrow/LeftArrow'
import RightArrow from '../../components/Arrow/RightArrow'
import SiteCarousel from '../../components/siteCarousel'


export const A = () => {
    return (
        <a href="./">Sign in</a>
    )
}
const {} = Carousel
export const HomeUI = () => {
  const defaultValue = [] as MovieInfo[]
  const [hot,setHot] = React.useState<MovieInfo[]>(defaultValue)
  const [now,setNow] = React.useState<MovieInfo[]>(defaultValue)
  // const carouselRef = useRef<any>()
  // React.useEffect(()=>{
  //   carouselRef.current.next()
  // },[])
    React.useEffect(()=>{
      fetchHot({
        pageSize:10,
        pageNum:1,
      }).then(res => {
        setHot(res)
      })
    },[])

    const endDate = moment().format("YYYY-MM-DD")
    const startDate = moment().subtract(1,'month').format("YYYY-MM-DD")
    React.useEffect(()=>{
      fetchNow({
        total:0,
        pageSize: 8,
        pageNum: 1,
        startDate: startDate,
        endDate,
      }).then(res=>{
        setNow(res)
      })
    },[])
    return <div className={HomeStyle}>
            <SiteOver>
            <div
              className={FluidContainerStyle}
            >
             <div
              style={{
                "position":"relative"
              }}
             >
              <SiteCarousel/>
             </div>
            </div>
              {/* <HeroUI/> */}
              <ModuleListUI
                moduleListName='正在热映'
                moduleListNameDesc='为您提供正在热映的电影信息'
                sideSource={hot}
                source={now}
              />
            </SiteOver>
            <SiteFooter/>
        </div>
}