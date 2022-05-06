import React from 'react'
import SiteTabs, { SiteTabsProps } from "../tabs"
import { container, name } from "./style.css"
import { movieTabs } from "../../pages/movie/config"
import { TabsGroup, ITabsGroups } from "../tabs/types"
import { get } from '../../network/server/request'
import TabsItem from './TabsItem'
import { AgeProps, Category } from '../../types'
import {Tabs} from 'antd'
import { useMovies } from '../../context/MoviesProvider'

interface TabsGroupsProps {
    action:string
}
const AgeTabs = (props:TabsGroupsProps) => {
    const {
        action,
    } = props

    const {
        age,
        setAge
    } = useMovies()
    const base:Array<AgeProps> = [
        {
            movieAgeId:0,
            movieAgeName:"全部",
        }
    ]
    const [ages,setAges] = React.useState<Array<AgeProps>>([])
    const handleChange = (key:string) => {
        setAge(key)
    }
    const fetchTagProps = async () => {
        const {data:{
            data
        }} = await get<Array<AgeProps>>(action)
        setAges(base.concat(data))
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
                年代
            </span>
            <Tabs
                onChange={handleChange}
            >
                {
                    ages.map(item => {
                        return (
                            <Tabs.TabPane
                               key={item.movieAgeId} 
                               tab={item.movieAgeName}
                            />
                        )
                    })
                }
            </Tabs>
        </div>
    )
}


export default AgeTabs