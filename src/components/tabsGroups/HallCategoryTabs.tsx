import React from 'react'
import SiteTabs, { SiteTabsProps } from "../tabs"
import { container, name } from "./style.css"
import { movieTabs } from "../../pages/movie/config"
import { TabsGroup, ITabsGroups } from "../tabs/types"
import { get } from '../../network/server/request'
import TabsItem from './TabsItem'
import { AgeProps, AreaProps, BrandProps, Category, HallCategoryProps } from '../../types'
import {Tabs} from 'antd'
import { useMovies } from '../../context/MoviesProvider'
import { useCinemas } from '../../context/CinemasProvider'

interface TabsGroupsProps {
    action:string
}
const HallCategoryTabs = (props:TabsGroupsProps) => {
    const {
        action,
    } = props
    const {
        setHallCategory
    } = useCinemas()
    const base:Array<HallCategoryProps> = [{
        hallCategoryId:"0",
        hallCategoryName:"全部",
    }]
    const [categories,setHallCategories] = React.useState<Array<HallCategoryProps>>([])
    const handleChange = (key:string) => {
        setHallCategory(key)
    }
    const fetchTagProps = async () => {
        const {data:{
            data
        }} = await get<Array<HallCategoryProps>>(action)
        setHallCategories(base.concat(data))
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
                特殊厅
            </span>
            <Tabs
                onChange={handleChange}
            >
                {
                    categories.map(item => {
                        return (
                            <Tabs.TabPane
                               key={item.hallCategoryId} 
                               tab={item.hallCategoryName}
                            />
                        )
                    })
                }
            </Tabs>
        </div>
    )
}


export default HallCategoryTabs