import React from 'react'
import {Link} from 'react-router-dom'
import {
    SiteMainHeaderStyle,
    SiteMainNavUlStyle,
    SiteMainNavLiStyle,
    SiteMainNavLinkStyle
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
                className="site-nav"
            >
                <SiteMainNavigatorUI
                    {...props}
                />
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
                            <Link
                                className={SiteMainNavLinkStyle[props.navStyle ?? 'large']}
                                to={path}
                            >
                                {content}
                            </Link>
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