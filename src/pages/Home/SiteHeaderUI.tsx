import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import AvatarDropDown from '../../components/AvatarDropdown'
import {
    SiteMainHeaderStyle,
    SiteMainNavUlStyle,
    SiteMainNavLiStyle,
    SiteMainNavLinkStyle,
    ActiveS,
    siteNav
} from './styles.css'

export interface NavRouteInfo {
    path:string,
    content:string,
}

export interface SiteHeaderUIProps extends SiteMainNavigatorProps {
    // isHidden?:boolean
    className?:string
}

const SiteHeaderUI = (props:SiteHeaderUIProps) => {
    return (
        <header
            className={props.className}
        >
            <nav
                className={siteNav}
            >
                <SiteMainNavigatorUI
                    {...props}
                />
                <AvatarDropDown/>
            </nav>
        </header>
    )
}

export interface SiteMainNavigatorProps {
    navLink:Array<NavRouteInfo>
    navStyle?:'large'|'small'
    otherElement?:React.ReactElement
}
export const SiteMainNavigatorUI = (props:SiteMainNavigatorProps) => {
    return (
        <ul
            className={SiteMainNavUlStyle}
        >
            {
                props.navLink.map(({path,content}) => {
                    return (
                        <li
                            className={SiteMainNavLiStyle[props.navStyle ?? 'large']}
                            key={path}
                        >
                            <NavLink
                                className={
                                    ({isActive}) => isActive ? ActiveS :  SiteMainNavLinkStyle[props.navStyle ?? 'large']
                                }
                                to={path}
                            >
                                {content}
                            </NavLink>
                        </li>
                    )
                })
            }
            {
                props.otherElement
            }
        </ul>
    )
}
export default SiteHeaderUI