import React from 'react'

export interface IListsContext {
    currentList:number
    setCurrentList:(key:number)=>void
}
export const ListsContext = React.createContext<IListsContext | null>(null)