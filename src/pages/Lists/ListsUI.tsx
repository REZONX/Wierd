import { Link } from "react-router-dom"
import Radios, { Order } from "../../components/radios"
import SiteHeaderUI from "../Home/SiteHeaderUI"
import ListsModuleUI from "./ListsModuleUI"
import { ListContentS, ListHeaderS, ListNameS, ListsUIContainerS, ListsUIContentContainerS, ListsUIHeaderContainerS, ListsUIHeaderContentS, ListsUIHeaderS, ListsUIHeaderTitleContainerS, nav } from "./style.css"

export interface ListsUIProps {
    listName?:string
}

const ListsUI = (props:ListsUIProps) => {
    let {
        listName
    } = props
    return (
        <div
        className={ListsUIContainerS}
        >
                <header
                    className={ListsUIHeaderContainerS}
                >
                    <div
                        className={ListsUIHeaderContentS}
                    >
                        <div
                            className={ListsUIHeaderTitleContainerS}
                        >
                            <h1
                                className={ListsUIHeaderS}
                            >
                                Lists
                            </h1>
                        </div>
                        <div
                            className={nav}
                        >
                            <Radios
                                radioProps={[
                                    {
                                        value:Order.Hot,
                                        name:"按热度排名"
                                    },
                                    {
                                        value:Order.Rate,
                                        name:"按评分排序"
                                    },
                                    {
                                        value:Order.Time,
                                        name:"按时间排序"
                                    }
                                ]}
                            />
                        </div>
                    </div>
                </header>
            <div
                className={ListsUIContentContainerS}
            >
                <div
                    className={ListContentS}
                >
                    <header
                        className={ListHeaderS}
                    >
                        <span
                            className={ListNameS}
                        >
                            {
                                listName??'hot 100'
                            }
                        </span>
                    </header>
                    <ListsModuleUI/>
                </div>
            </div>
        </div>
    )
}
export default ListsUI