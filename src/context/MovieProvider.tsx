import React from 'react'
import { IMovieContext, MovieContext } from './MovieContext'

interface MovieProviderProps {
    children?:React.ReactNode
}
type Key = string | number
const MovieProvider = (props:MovieProviderProps) => {
    const {
        children
    } = props
    const [currentMovie,setCurrentMovie] = React.useState<Key>("")
    const [currentCinema,setCurrentCinema] = React.useState<Key>("")
    const [pay,setPay] = React.useState(false)
    const [show,setShow] = React.useState<Key>("")
    const context:IMovieContext = {
        currentMovie,
        currentCinema,
        setCurrentCinema,
        setCurrentMovie,
        pay,
        setPay,
        show,
        setShow,
    } 
    return (
        <MovieContext.Provider
            value={context}
        >
            {children}
        </MovieContext.Provider>
    )
}

export const useMovie = () => {
    const context = React.useContext(MovieContext)
    if(!context){
        throw new Error("useAuth必须在MovieProvider中使用")
    }
    return context
}
export default MovieProvider