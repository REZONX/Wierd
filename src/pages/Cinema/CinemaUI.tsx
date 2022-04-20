import { Link, NavLink } from "react-router-dom"
import CinemaList from "../../components/list/CinemaList"
import TabsGroups from "../../components/tabsGroups"
import Title from "../../components/title"
import { ListsUIContainerS } from "../Lists/style.css"
import CinemaListModuleUI from "./CinemaListModuleUI"
import CinemaListUI from "./CinemaListUI"
import { cinemaTabsGroups } from "./config"
import { CinemaLinkActiveS, CinemaLinkS, CinemaLiS, CinemaUIContentS, CinemaUlS, container } from "./style.css"

const CinemaUI = () => {
    return (
        <div
            className={container}
        >
            TODO 更换
            <Title
                name="影院"
            />
            <TabsGroups
                tabsGroups={cinemaTabsGroups}
            />
            <Title
                name="影院列表"
            />
            <CinemaList/>
        </div>
    )
}
export default CinemaUI