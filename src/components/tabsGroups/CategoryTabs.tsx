import React from 'react'
import SiteTabs, { SiteTabsProps } from "../tabs"
import { container, name } from "./style.css"
import { movieTabs } from "../../pages/movie/config"
import { TabsGroup, ITabsGroups } from "../tabs/types"
import { get } from '../../network/server/request'
import TabsItem from './TabsItem'
import { Category } from '../../types'
import {Tabs} from 'antd'
import { useMovies } from '../../context/MoviesProvider'

interface TabsGroupsProps {
    action:string
}
const CategoryTabs = (props:TabsGroupsProps) => {
    const {
        action,
    } = props
    const {
        category,
        setCategory
    } = useMovies()
    const [categories,setCategories] = React.useState<Array<Category>>([])
    const handleChange = (key:string) => {
        setCategory(key)
    }
    const base = [{
        movieCategoryId:0,
        movieCategoryName:"全部"
    }]
    const fetchTagProps = async () => {
        const {data:{
            data
        }} = await get<Array<Category>>(action)
        setCategories(base.concat(data))
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
                类型
            </span>
            <Tabs
                onChange={handleChange}
            >
                {
                    categories.map(item => {
                        return (
                            <Tabs.TabPane
                               key={item.movieCategoryId} 
                               tab={item.movieCategoryName}
                            />
                        )
                    })
                }
            </Tabs>
        </div>
    )
}


export default CategoryTabs