import { Link } from "react-router-dom"
import SiteHeaderUI from "../Home/SiteHeaderUI"
import ListsModuleUI from "./ListsModuleUI"
import { ListContentS, ListHeaderS, ListNameS, ListsUIContainerS, ListsUIContentContainerS, ListsUIHeaderContainerS, ListsUIHeaderContentS, ListsUIHeaderS, ListsUIHeaderTitleContainerS } from "./style.css"

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
                            className={"nav-container"}
                        >
                            <ul>
                                <li>
                                    <Link
                                        to={'the-hot-10'}
                                    >
                                        The Hot 10
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={'the-rate-high'}
                                    >
                                        the rate high
                                    </Link>
                                </li>
                            </ul>
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