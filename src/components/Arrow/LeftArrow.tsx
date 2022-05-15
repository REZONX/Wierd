import React from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import {arrowVar, baseArrow} from './style.css'
interface LeftArrowProps {
    arrowClassNmae?:string
    onClick:()=>void
}
const LeftArrow = (props:LeftArrowProps) => {
    const {
        onClick
    } = props
    return (
      <LeftOutlined
        onClick={onClick}
        // IMPORTANT: do not spread props after className otherwise it will be overwritten by only slick carousel classes
        className={arrowVar["left"]}
      />
    )
  }

export default LeftArrow