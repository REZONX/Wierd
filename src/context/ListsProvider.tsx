import React from 'react'
import {IListsContext, ListsContext} from './ListsContext'
interface ListsProviderProps {
    children:React.ReactNode
}
const ListsProvider = (props:ListsProviderProps) => {
    const {
        children
    } = props
    const [currentList,setCurrentList] = React.useState(2)
    const [page,setPage] = React.useState(1)
    const [pageSize,setPageSize] = React.useState(10)
    const context:IListsContext = {
        currentList,
        setCurrentList,
        page,
        pageSize,
        setPage,
        setPageSize
    }
    return (
        <ListsContext.Provider
            value={context}
        >
            {children}
        </ListsContext.Provider>
    )
}

export const useLists = () => {
    const context = React.useContext(ListsContext)
    if(!context){
        throw new Error("请在ListsProvider中使用")
    }
    return context
}
export default ListsProvider