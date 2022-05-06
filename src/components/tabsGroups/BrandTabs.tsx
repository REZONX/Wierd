import React from 'react'
import SiteTabs, { SiteTabsProps } from "../tabs"
import { container, name } from "./style.css"
import { movieTabs } from "../../pages/movie/config"
import { TabsGroup, ITabsGroups } from "../tabs/types"
import { get } from '../../network/server/request'
import TabsItem from './TabsItem'
import { AgeProps, AreaProps, BrandProps, Category } from '../../types'
import {Tabs} from 'antd'
import { useMovies } from '../../context/MoviesProvider'
import { useCinemas } from '../../context/CinemasProvider'

interface TabsGroupsProps {
    action:string
}
const BrandTabs = (props:TabsGroupsProps) => {
    const {
        action,
    } = props
    const {
        brand,
        setBrand
    } = useCinemas()
    const base:Array<BrandProps> = [{
        cinemaBrandId:"0",
        cinemaBrandName:"全部",
    }]
    const [brands,setBrands] = React.useState<Array<BrandProps>>([])
    const handleChange = (key:string) => {
        setBrand(key)
    }
    const fetchTagProps = async () => {
        const {data:{
            data
        }} = await get<Array<BrandProps>>(action)
        setBrands(base.concat(data))
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
                    brands.map(item => {
                        return (
                            <Tabs.TabPane
                               key={item.cinemaBrandId} 
                               tab={item.cinemaBrandName}
                            />
                        )
                    })
                }
            </Tabs>
        </div>
    )
}


export default BrandTabs