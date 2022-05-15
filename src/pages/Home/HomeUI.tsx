import React from 'react'
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
import { HomeStyle, SiteMainHeaderStyle} from "./styles.css"
import carousel1 from '../../asset/carousel1.jpg'
import carousel2 from '../../asset/carousel2.jpg'
import carousel3 from '../../asset/carousel3.jpg'
import carousel4 from '../../asset/carousel4.jpg'
import moment from 'moment'
import { Carousel, Image } from 'antd'

export const A = () => {
    return (
        <a href="./">Sign in</a>
    )
}
export const HomeUI = () => {
  const defaultValue = [] as MovieInfo[]
  const [hot,setHot] = React.useState<MovieInfo[]>(defaultValue)
  const [now,setNow] = React.useState<MovieInfo[]>(defaultValue)
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
    console.log(now)
    return <div className={HomeStyle}>
            <SiteOver>
            <div
              className={FluidContainerStyle}
            >
              <Carousel autoplay>
                  <div>
                  <Image
                      width={"100%"}
                      preview={false}
                      src={carousel1}
                  />
                  </div>
                  <div>
                  <Image
                      width={"100%"}
                      preview={false}
                      src={carousel2}
                  />
                  </div>
                  <div>
                  <Image
                      width={"100%"}
                      preview={false}
                      src={carousel3}
                  />
                  </div>
                  <div>
                  <Image
                      width={"100%"}
                      preview={false}
                      src={carousel4}
                  />
                  </div>
              </Carousel>
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