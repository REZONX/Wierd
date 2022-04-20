import React from 'react'
import { Tabs } from "antd"
import { movieTabs ,Tab} from '../../pages/movie/config'
const {TabPane} = Tabs
export type TabsArr = Array<Tab>
export interface SiteTabsProps {
    tabs:TabsArr
    handleChange?:(activeKey:string) => void
}
const SiteTabs = (props:SiteTabsProps) => {
    const {
        tabs,
        handleChange
    } = props
    const [currentTab,setCurrentTab] = React.useState("")
    return(
        <Tabs
            defaultActiveKey="0"
            onChange={handleChange}
        >
            {
                tabs.map(item=>{
                    return (
                        <TabPane
                            tab={item.tab}
                            key={item.key}
                        >
                            
                        </TabPane>
                    )
                })
            }
        </Tabs>
    )
}

export default SiteTabs