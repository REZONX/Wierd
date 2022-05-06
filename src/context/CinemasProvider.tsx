import React from 'react'
import { AgeProps, AreaProps, Category } from '../types'
import { ICinemasContext, CinemasContext } from './CinemasContext'

interface MovieProviderProps {
    children?:React.ReactNode
}
type Key = string | number
const CinemasProvider = (props:MovieProviderProps) => {
    const {
        children
    } = props
    const [brand,setBrand] = React.useState("0")
    const [cinemaArea,setCinemaArea] = React.useState("0")
    const [hallCategory,setHallCategory] = React.useState("0")
    const context:ICinemasContext = {
        brand,
        cinemaArea,
        hallCategory,
        setBrand,
        setCinemaArea,
        setHallCategory,
    } 
    return (
        <CinemasContext.Provider
            value={context}
        >
            {children}
        </CinemasContext.Provider>
    )
}

export const useCinemas = () => {
    const context = React.useContext(CinemasContext)
    if(!context){
        throw new Error("useCinemas必须在CinemasProvider中使用")
    }
    return context
}
export default CinemasProvider