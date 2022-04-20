import React from 'react'
import { container, inside } from './style.css'
interface SiteOverProps {
    children?:React.ReactNode
}
const SiteOver = (props:SiteOverProps) => {
    const {
        children
    } = props
    return (
        <div
            className={container}
        >
            <div
                className={inside}
            >
                {children}
            </div>
        </div>
    )
}

export default SiteOver