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
import moment from 'moment'

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
        {/* <ModuleUI
          movieImg="https://tse1-mm.cn.bing.net/th/id/OIP-C.jfrG_XRPBS24z7Bi9dEJmAHaJ4?pid=ImgDet&rs=1"
          movieLink="Alice"
          movieName="Alice in Wanderland"
        /> */}
        <SiteOver>
          {/* <header
              className = {SiteMainHeaderStyle['large']}
          >
            <Logo/>
            <SiteMainNavigatorUI
                  navStyle="large"
                  navLink={
                      [
                          {
                            path:'movies',
                            content:'movies',
                          },
                          {
                            path:'cinema',
                            content:'cinema',
                          },
                          {
                            path:'lists',
                            content:'lists',
                          },
                          {
                            path:'videos',
                            content:'videos'
                          }
                        ]
                  }
                  otherElement = {
                      <A/>
                  }
            />

          </header> */}
          <HeroUI/>
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