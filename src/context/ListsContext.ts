import React from 'react'

export interface IListsContext {
    currentList:number
    setCurrentList:(key:number)=>void
    page:number
    setPage:(page:number)=>void
    pageSize:number
    setPageSize:(pageSize:number) =>void
}
export const ListsContext = React.createContext<IListsContext | null>(null)