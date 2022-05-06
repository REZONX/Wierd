import React from 'react'
import { Key } from '../components/tabs/types'

export interface IMovieContext {
    currentMovie:Key
    currentCinema:Key
    setCurrentMovie:(key:Key)=>void
    setCurrentCinema:(key:Key) => void
    pay:boolean
    setPay:(pay:boolean) => void
    show:Key,
    setShow:(show:Key) => void
}
export const MovieContext = React.createContext<IMovieContext | null>(null)