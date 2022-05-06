import React from 'react'
import SiteTabs, { SiteTabsProps } from "../tabs"
import { container, name } from "./style.css"
import { movieTabs } from "../../pages/movie/config"
import { TabsGroup, ITabsGroups } from "../tabs/types"
import { get } from '../../network/server/request'
import TabsItem from './TabsItem'
import { AgeProps, AreaProps, Category } from '../../types'
import {Tabs} from 'antd'
import { useMovies } from '../../context/MoviesProvider'

interface TabsGroupsProps {
    action:string
}
const AreaTabs = (props:TabsGroupsProps) => {
    const {
        action,
    } = props
    const {
        area,
        setArea
    } = useMovies()
    const base:Array<AreaProps> = [{
        movieAreaId:0,
        movieAreaName:"全部",
    }]
    const [areas,setAreas] = React.useState<Array<AreaProps>>([])
    const handleChange = (key:string) => {
        setArea(key)
    }
    const fetchTagProps = async () => {
        const {data:{
            data
        }} = await get<Array<AreaProps>>(action)
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
                地区
            </span>
            <Tabs
                onChange={handleChange}
            >
                {
                    areas.map(item => {
                        return (
                            <Tabs.TabPane
                               key={item.movieAreaId} 
                               tab={item.movieAreaName}
                            />
                        )
                    })
                }
            </Tabs>
        </div>
    )
}


export default AreaTabs