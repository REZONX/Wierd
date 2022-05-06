import { Input } from 'antd'
import React from 'react'
import {Link, NavLink,useNavigate} from 'react-router-dom'
import AvatarDropDown from '../../components/AvatarDropdown'
import SiteSearch from '../../components/SiteSearch'
import { useAuth } from '../../context/AuthProvider'
import {
    SiteMainHeaderStyle,
    SiteMainNavUlStyle,
    SiteMainNavLiStyle,
    SiteMainNavLinkStyle,
    ActiveS,
    siteNav
} from './styles.css'

const {Search} = Input
export interface NavRouteInfo {
    path:string,
    content:string,
}

export interface SiteHeaderUIProps extends SiteMainNavigatorProps {
    // isHidden?:boolean
    className?:string
}

interface MenuInfo {
    key: string;
    keyPath: string[];
    /** @deprecated This will not support in future. You should avoid to use this */
    item: React.ReactInstance;
    domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}
const SiteHeaderUI = (props:SiteHeaderUIProps) => {
    const {
        logout
    } = useAuth()
    let navigate = useNavigate()
    const handleClick = (e:MenuInfo) => {
        if(e.key === "center"){
            navigate("/user/user-info")
        }
        if(e.key === "logout"){
            logout()
            navigate("/login")
        }
    }
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
                <SiteSearch/>
                <AvatarDropDown
                    onClick={handleClick}
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