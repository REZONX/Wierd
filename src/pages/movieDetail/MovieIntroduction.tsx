import React from 'react'
import Title from '../../components/title'
import { MarginTopAndBottom } from '../../public/style.css'
import { p } from './style.css'

interface IntroductionProps {
    name:string
    content:string
}

const MovieIntroduction = (props:IntroductionProps) => {
    const {
        name,
        content,
    } = props
    return (
        <div
            className={MarginTopAndBottom}
        >
            <Title
                name={name}
            />
            <p
                className={p}
            >
                {content}
            </p>
        </div>
    )
}
export default MovieIntroduction