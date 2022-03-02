import SiteHeaderUI from "../Home/SiteHeaderUI"
import { ListContentS, ListHeaderS, ListNameS, ListsUIContainerS, ListsUIContentContainerS } from "./style.css"

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
                </div>
            </div>
        </div>
    )
}
export default ListsUI