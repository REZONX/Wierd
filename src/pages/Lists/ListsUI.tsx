import React from 'react'
import { Link } from "react-router-dom"
import Radios from "../../components/radios"
import ListsProvider, { useLists } from '../../context/ListsProvider'
import SiteHeaderUI from "../Home/SiteHeaderUI"
import ListsList from './List'
import ListsModuleUI from "./ListsModuleUI"
import ListsRadio from './ListsRadio'
import { ListContentS, ListHeaderS, ListNameS, ListsUIContainerS, ListsUIContentContainerS, ListsUIHeaderContainerS, ListsUIHeaderContentS, ListsUIHeaderS, ListsUIHeaderTitleContainerS, nav } from "./style.css"

export interface ListsUIProps {
    listName?:string
}

const ListsUI = (props:ListsUIProps) => {
    let {
        listName
    } = props
    return (
        <ListsProvider>
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
                                     <ListsRadio/>
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
                            <ListsList/>
                        </div>
                    </div>
                </div>
        </ListsProvider>
    )
}
export default ListsUI