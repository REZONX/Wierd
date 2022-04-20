import React from 'react'
import AuthProvider from './AuthProvider'
interface AppProviderProps {
    children?:React.ReactNode
}
const AppProvider = (props:AppProviderProps) => {
    const {
        children
    } = props
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}

export default AppProvider