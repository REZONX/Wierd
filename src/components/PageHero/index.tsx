import React from 'react'
import { h, header, hero, mouse, mouseSpan, span } from './style.css'

type Colors = "red" | "yellow"
interface PageHeroProps {
    desc:string
    title:string
    color:Colors
}
const PageHero = (props:PageHeroProps) => {
    const {
        title,
        desc,
        color
    } = props
    return (
        <div className={hero}>

            <h1
                className={h}
            ><span
                className={span[color]}
            >
                {desc}
            </span>
                <div
                    className={header}
                >{title}</div>
            </h1>


            <div className={mouse[color]}>
                <span
                    className={mouseSpan[color]}
                ></span>
            </div>

        </div>
    )
}
export default PageHero