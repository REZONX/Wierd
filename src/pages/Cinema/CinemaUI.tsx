import { Link, NavLink } from "react-router-dom"
import ChooseSeat from "../../components/ChooseSeat"
import CinemaList from "../../components/list/CinemaList"
import PageHero from "../../components/PageHero"
import SiteFooter from "../../components/siteFooter"
import SiteOver from "../../components/siteOver"
import SubTitle from "../../components/SubTitle"
import TabsGroups from "../../components/tabsGroups/CategoryTabs"
import Title from "../../components/title"
import { ListsUIContainerS } from "../Lists/style.css"
import CinemaListModuleUI from "./CinemaListModuleUI"
import CinemaListUI from "./CinemaListUI"
import CinemaTabs from "./CinemaTabs"
import { cinemaTabsGroups } from "./config"
import ShowList from "./showList"
import { CinemaLinkActiveS, CinemaLinkS, CinemaLiS, CinemaUIContentS, CinemaUlS, container } from "./style.css"

const CinemaUI = () => {
    return (
        <div
            style={{
                "overflow":"hidden"
            }}
        >
            <SiteOver>
                <PageHero
                    title="cinemas"
                    desc="Chose your fav cinemas"
                    color="yellow"
                />
                <div
                    className={container}
                >
                   <SubTitle
                        title={"choose cinemas"}
                    />
                    {/* <TabsGroups
                        tabsGroups={cinemaTabsGroups}
                    /> */}
                    <CinemaTabs/>
                    <Title
                        name="影院列表"
                    />
                    {/* <CinemaList/> */}
                    <ShowList/>
                </div>
            </SiteOver>
            <SiteFooter/>
        </div>
    )
}
export default CinemaUI