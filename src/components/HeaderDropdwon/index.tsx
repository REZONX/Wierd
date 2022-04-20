import { Dropdown, DropDownProps } from "antd";
import { ReactNode } from "react";
import classNames from 'classnames'

declare type OverlayFunc = () => ReactNode
export interface HeaderDropdownProps extends Omit<DropDownProps,'overlay'> {
    children?:ReactNode,
    overlayClassName?:string
    overlay:ReactNode | OverlayFunc | any
    placement?:'bottomLeft'
        | 'bottomRight'
        | 'topLeft'
        | 'topCenter'
        | 'topRight'
        | 'bottomCenter'
}

const HeaderDropdown = (props:HeaderDropdownProps) => {
    const {
        overlayClassName:cls,
        children,
        ...restProps
    } = props
    return (
        <Dropdown
            // overlayClassName={cls}
            {...restProps}
        >
            {children}
        </Dropdown>
    )
}

export default HeaderDropdown