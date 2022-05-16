import React from 'react'
import { Key } from '../components/tabs/types'
import { Seats } from '../types'

type seatsCallback = (seats:Seats)=>Seats
export interface IMovieContext {
    currentMovie:Key
    currentCinema:Key
    setCurrentMovie:(key:Key)=>void
    setCurrentCinema:(key:Key) => void
    pay:boolean
    setPay:(pay:boolean) => void
    show:Key,
    setShow:(show:Key) => void
    seats:Seats
    setSeats:(seats:Seats | seatsCallback )=>void
}
export const MovieContext = React.createContext<IMovieContext | null>(null)