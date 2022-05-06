import React from 'react'
import {List} from 'antd'
import { Key } from '../../components/tabs/types'
import { post,get } from '../../network/server/request'
import action from '../../actions'
import { useLists } from '../../context/ListsProvider'
import ListsModuleUI from './ListsModuleUI'
import {MovieInfo} from '../../types/index'

interface IProps {
    
}
const ListsList = (props:IProps) => {
    const {
        
    } = props
    const {
        currentList,
        setCurrentList
    } = useLists()
    const [movieInfo,setMovieInfo] = React.useState<Array<MovieInfo>>([])
    const fetchLists = async (listKey:Key) => {
        let url = `${action.getLists}/${listKey}`
        const data = await get<Array<MovieInfo>>(url,{
            pageNum:1,
            pageSize:10,
        })
        setMovieInfo(data.data.data)
    }
    React.useEffect(()=>{
        fetchLists(currentList)
    },[currentList])
    return (
        <List>
            {
                movieInfo.map((item,index)=>{
                    console.log(item)
                    return <ListsModuleUI
                        index={index+1}
                        {...item}
                    />
                })
            }
        </List>
    )
}

export  default ListsList