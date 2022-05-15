import React from 'react'
import {List, Pagination} from 'antd'
import { Key } from '../../components/tabs/types'
import { post,get,pageGet } from '../../network/server/request'
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
        setCurrentList,
        page,
        pageSize,
        setPage,
        setPageSize
    } = useLists()
    const [movieInfo,setMovieInfo] = React.useState<Array<MovieInfo>>([])
    const [total,setTotal] = React.useState(0)
    const fetchLists = async (listKey:Key) => {
        let url = `${action.getLists}/${listKey}`
        const {data} = await pageGet<Array<MovieInfo>>(url,{
            pageNum:page,
            pageSize,
        })
        setMovieInfo(data.data)
        setTotal(data.total)
    }
    React.useEffect(()=>{
        fetchLists(currentList)
    },[currentList,page,pageSize])
    const handleChange = (page:number,pageSize:number) => {
        setPage(page)
        setPageSize(pageSize)
    }
    return (
        <React.Fragment>
            <List>
                {
                    movieInfo.map((item,index)=>{
                        console.log(item)
                        return <ListsModuleUI
                            index={index+1+(page-1)*pageSize}
                            {...item}
                        />
                    })
                }
            </List>
            <Pagination
                defaultCurrent={1}
                defaultPageSize={10}
                current={page}
                hideOnSinglePage
                total={total}
                onChange={handleChange}
                showSizeChanger
            />
        </React.Fragment>
    )
}

export  default ListsList