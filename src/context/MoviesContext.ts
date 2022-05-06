import React from 'react'
import { AgeProps, AreaProps, Category, Key } from '../types'

export interface IMoviesContext {
    age:string
    setAge:(age:string) => void
    area:string
    setArea:(area:string) => void
    category:string
    setCategory:(category:string) => void
}

export const MoviesContext = React.createContext<IMoviesContext | null>(null)