import React from 'react'
import AuthProvider from './AuthProvider'
import CinemasProvider from './CinemasProvider'
import MovieProvider from './MovieProvider'
import MoviesProvider from './MoviesProvider'
interface AppProviderProps {
    children?:React.ReactNode
}
const AppProvider = (props:AppProviderProps) => {
    const {
        children
    } = props
    return (
        <AuthProvider>
            <MovieProvider>
                <MoviesProvider>
                    <CinemasProvider>
                        {children}
                    </CinemasProvider>
                </MoviesProvider>
            </MovieProvider>
        </AuthProvider>
    )
}

export default AppProvider