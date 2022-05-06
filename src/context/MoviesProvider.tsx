import React from 'react'
import { AgeProps, AreaProps, Category } from '../types'
import { IMoviesContext, MoviesContext } from './MoviesContext'

interface MovieProviderProps {
    children?:React.ReactNode
}
type Key = string | number
const MoviesProvider = (props:MovieProviderProps) => {
    const {
        children
    } = props
    const [age,setAge] = React.useState("0")
    const [area,setArea] = React.useState("0")
    const [category,setCategory] = React.useState("0")
    const context:IMoviesContext = {
        age,
        setAge,
        area,
        setArea,
        category,
        setCategory,
    } 
    return (
        <MoviesContext.Provider
            value={context}
        >
            {children}
        </MoviesContext.Provider>
    )
}

export const useMovies = () => {
    const context = React.useContext(MoviesContext)
    if(!context){
        throw new Error("useAuth必须在MoviesProvider中使用")
    }
    return context
}
export default MoviesProvider