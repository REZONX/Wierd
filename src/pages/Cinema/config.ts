import { ITabsGroups, Tabs } from "../../components/tabs/types";


const brandTabs:Tabs = [
    {
        tab:"全部",
        key:"allCinema"
    },
    {
        tab:"太平洋影院",
        key:"ocean"
    },
    {
        tab:"万达影城",
        key:"wanda"
    }
]

const cinemaServer:Tabs = [
    {
        tab:"全部",
        key:"allServer"
    },
    {
        tab:"可改签",
        key:"allowModify"
    },
    {
        tab:"可退票",
        key:"allowReturn"
    }
]
export const cinemaTabsGroups:ITabsGroups = [
    {
        name:"品牌",
        tabs:brandTabs
    },
    {
        name:"影院服务",
        tabs:cinemaServer
    }
]