import React from 'react'
import SiteTabs, { SiteTabsProps } from "../tabs"
import { container, name } from "./style.css"
import { movieTabs } from "../../pages/movie/config"
import { TabsGroup, ITabsGroups } from "../tabs/types"
import { get } from '../../network/server/request'
import TabsItem from './TabsItem'
import { AgeProps, AreaProps, BrandProps, Category, CinemaArea, HallCategoryProps } from '../../types'
import {Tabs} from 'antd'
import { useMovies } from '../../context/MoviesProvider'
import { useCinemas } from '../../context/CinemasProvider'

interface TabsGroupsProps {
    action:string
}
const CinemaAreaTabs = (props:TabsGroupsProps) => {
    const {
        action,
    } = props
    const {
        setCinemaArea
    } = useCinemas()
    const base:Array<CinemaArea> = [{
        cinemaAreaId:"0",
        cinemaAreaName:"全部",
    }]
    const [areas,setAreas] = React.useState<Array<CinemaArea>>([])
    const handleChange = (key:string) => {
        setCinemaArea(key)
    }
    const fetchTagProps = async () => {
        const {data:{
            data
        }} = await get<Array<CinemaArea>>(action)
        setAreas(base.concat(data))
    }
    React.useEffect(()=>{
        fetchTagProps()
    },[])
    return (
        <div
            className={container}
        >
            <span
                className={name}
            >
                行政区
            </span>
            <Tabs
                onChange={handleChange}
            >
                {
                    areas.map(item => {
                        return (
                            <Tabs.TabPane
                               key={item.cinemaAreaId} 
                               tab={item.cinemaAreaName}
                            />
                        )
                    })
                }
            </Tabs>
        </div>
    )
}


export default CinemaAreaTabs