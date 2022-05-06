import React from 'react'
import { ArrowRightOutlined } from '@ant-design/icons'
import { button } from './style.css'

interface IconButtonProps {
    onClick:()=>void
}
const IconButton = (props:IconButtonProps) => {
    const {
        onClick
    } = props
    return (
        <button
            className={button}
            onClick={onClick}
        >
            全部
        </button>
    )
}

export default IconButton