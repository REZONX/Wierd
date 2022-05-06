import React from 'react'

export interface ICinemasContext {
    brand:string
    setBrand:(age:string) => void
    cinemaArea:string
    setCinemaArea:(area:string) => void
    hallCategory:string
    setHallCategory:(category:string) => void
}

export const CinemasContext = React.createContext<ICinemasContext | null>(null)