import React from "react"
import { container, main, side, sticky } from "./style.css"

interface LayoutProps {
    children?:React.ReactNode
}

const Layout = (props:LayoutProps) => {
    const {
        children
    } = props
    return (
        <div
            className={container}
        >
            {children}
        </div>
    )
}

interface MainProps {
    children?:React.ReactNode
}
export const Main = (props:MainProps) => {
    const {
        children
    } = props
    return (
        <main
            className={main}
        >
            {children}
        </main>
    )
}

interface SideProps {
    children?:React.ReactNode
}
export const Side = (props:SideProps) => {
    const {
        children
    } = props
    return (
        <aside
            className={side}
        >
            <div
                className={sticky}
            >
                {children}
            </div>
        </aside>
    )
}
export default Layout
