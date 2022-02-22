import React from 'react'
import classnames from 'classnames'
import SiteHeaderUI,{SiteHeaderUIProps} from "./SiteHeaderUI"
import { debounce } from '../../utils'
import {
    SiteMainHeaderHidden,
    SiteMainHeaderStyle
} from './styles.css'
import { useScroll,Action } from '../../utils/useScroll'

export interface SiteHeaderProps extends SiteHeaderUIProps {}

export enum ScrollEvent {
    below = 'BELOW',
    above = 'ABOVE',
}

const SiteHeader = (props:SiteHeaderProps) => {

    const [isHidden,subscribe] = useScroll(true,reducer)
    
    subscribe(createEvent)

    let classNames = classnames(SiteMainHeaderStyle[props.navStyle ?? 'large'],{
        [`${SiteMainHeaderHidden}`]:isHidden
    })
    return (
        <SiteHeaderUI
            className = {classNames}
            {...props}
        />
    )
}

const createEvent = () => {
    switch(document.documentElement.scrollTop > 200){
        case true:
            return ScrollEvent.above
        case false:
            return ScrollEvent.below
        default:
            return 'nothing'
    }
}

const reducer = (state:any,action:Action) => {
    switch(action.type){
        case 'ABOVE' :
            return false
        case 'BELOW':
            return true
        default :
            break
    }
}

export default SiteHeader