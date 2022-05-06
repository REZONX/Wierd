import React from 'react'
import { Avatar } from "antd"
// import 'antd/lib/icon/style'
// import 'antd/lib/avatar/style'
import { bg, bgNoPhoto } from './style.css'
import 'antd/lib/avatar/style'
// import { bg } from './style.css'

interface SiteAvatarProps {
    children?:React.ReactNode
    username?:string
    src?:string
}
const SiteAvatar = (props:SiteAvatarProps) => {
    const {
        children,
        username,
        src
    } = props
    return (
        src?(
            <Avatar
                // size={"large"}
                style={{
                    display: "inline-block",
                    verticalAlign:'middle',
                    // marginLeft:'2rem',
                    marginRight:'1rem',
                }}
                src={src}
            />
        ):(
            <Avatar
                // className={bgNoPhoto}
                style={{
                    display: "inline-block",
                    background: "#eb4d4b",
                    verticalAlign:'middle',
                    // marginLeft:'2rem',
                    marginRight:'1rem',
                }}
            >
                {username?username[0]:"U"}
            </Avatar>
        )
        
    )

}

export default SiteAvatar