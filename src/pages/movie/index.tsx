import {Card, Tabs, Radio} from 'antd'
import SiteTabs from '../../components/tabs'
import { PaddingTopAndBottom, pages } from '../../public/style.css'
import MovieCard from './MovieCard'
import { movieTabs, MovieTabsGroups } from './config'
import TabsGroups from '../../components/tabsGroups'
import ModuleUI from '../../components/Module/ModuleUI'
import Radios, { Order } from '../../components/radios'
import Title from '../../components/title'
const {TabPane} = Tabs
const MoviePage = () => {
    return (
        <div
            className={pages}
        >
            <Title
                name="电影列表"
            />
            {/* <SiteTag/> */}
            <TabsGroups
                tabsGroups={MovieTabsGroups}
            />
            {/* <MovieCard/> */}
            <div
                className={PaddingTopAndBottom}
            >
                <Radios
                    radioProps={[
                        {
                            value:Order.Hot,
                            name:"按热门排序"
                        },
                        {
                            value:Order.Time,
                            name:"按时间排序"
                        },
                        {
                            value:Order.Rate,
                            name:"按评价排序"
                        },
                    ]}
                />
            </div>
            <div
                className={PaddingTopAndBottom}
            >
                <ModuleUI
                    movieImg="https://tse1-mm.cn.bing.net/th/id/OIP-C.jfrG_XRPBS24z7Bi9dEJmAHaJ4?pid=ImgDet&rs=1"
                    movieLink="Alice"
                    movieName="Alice in Wanderland"
                    moduleType="oneFourth"
                />
            </div>
        </div>
    )
}
export const SiteTag = () => {
    return (
        <div>
            {/* <SiteTabs
                tabs={movieTabs}
            /> */}
            {/* <TabsGroup/> */}
        </div>
    )
}
export default MoviePage