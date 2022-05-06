import React from 'react'
import SiteTabs, { SiteTabsProps } from '../tabs'
import { name } from './style.css'

interface TabsItemProps extends SiteTabsProps{
    typeName:string
}
const TabsItem = (props:TabsItemProps) => {
    const {
        typeName,
        tabs
    } = props
    return (
        <div>
            <span
                className={name}
            >
                {typeName}
            </span>
            <SiteTabs
                tabs={tabs}
            />
        </div>
    )
}

export default TabsItem