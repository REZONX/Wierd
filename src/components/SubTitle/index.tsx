import React from 'react'
import { h, span } from './style.css'
interface SubTitleProps {
    title:string
}
const SubTitle = (props:SubTitleProps) => {
    const {
        title
    } = props
    return (
        <h1
            className={h}
        > 
            <span
                className={span}
            >
                {title}
            </span>
        </h1>
    )
}

export default SubTitle