import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import SiteHeaderUI,{SiteHeaderUIProps} from "./SiteHeaderUI"
import { debounce, useIsPathnameMatch } from '../../utils'
import {
    SiteMainHeaderHidden,
    SiteMainHeaderSmoothS,
    SiteMainHeaderStyle
} from './styles.css'
import { useScroll,Action } from '../../utils/useScroll'
import { useLocation } from 'react-router'

export interface SiteHeaderProps extends SiteHeaderUIProps {}

export enum ScrollEvent {
    below = 'BELOW',
    above = 'ABOVE',
}

const parsePathname = (pathname:string) => {
    let pathnameArr = pathname.split('/')
    return pathnameArr[pathnameArr.length - 1]
}

const useIsPathnameMatchHome = () => {
    return useIsPathnameMatch('/')
}

const SiteHeader = (props:SiteHeaderProps) => {

    let isPathnameMatchHome = useIsPathnameMatchHome()
    const [isHidden,subscribe] = useScroll(true,reducer)
    subscribe(createEvent)

    let SiteHeaderUIS = classnames(SiteMainHeaderStyle[props.navStyle ?? 'large'],{
        [`${SiteMainHeaderHidden}`]: isPathnameMatchHome && isHidden,
        [`${SiteMainHeaderSmoothS}`] : isPathnameMatchHome
    })

    return (
        <SiteHeaderUI
            className = {SiteHeaderUIS}
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