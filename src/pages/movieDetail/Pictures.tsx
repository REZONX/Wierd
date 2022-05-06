import React from 'react'
import IconButton from '../../components/Button'
import Title from '../../components/title'
import { actorsContainer, actorsLi, actorsUl, container, iconContainer } from './style.css'

interface PicturesProps {
    onClick:()=>void
}
const Pictures = (props:PicturesProps) => {
    const {
        onClick
    } = props
    return (
        <div
            className={container}
        >
            <Title
                name="图集"
            />
            <div
                className={iconContainer}
            >
                <IconButton
                    onClick={onClick}
                />
            </div>
        </div>
    )
}

export default Pictures