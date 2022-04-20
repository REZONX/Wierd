import SiteTabs, { SiteTabsProps } from "../tabs"
import { container, name } from "./style.css"
import { movieTabs } from "../../pages/movie/config"
import { Tabs, TabsGroup, ITabsGroups } from "../tabs/types"

interface TabsGroupsProps {
    tabsGroups:ITabsGroups
}
const TabsGroups = (props:TabsGroupsProps) => {
    const {
        tabsGroups
    } = props
    return (
        <div
            className={container}
        >
            {
                tabsGroups.map(item =>{
                    return <TabsItem
                                typeName={item.name}
                                tabs={item.tabs}
                            />
                })
            }
        </div>
    )
}

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
export default TabsGroups