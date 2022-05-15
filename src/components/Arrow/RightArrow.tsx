import React from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import {arrowVar, baseArrow} from './style.css'
interface LeftArrowProps {
    onClick:()=>void
}
const RightArrow = (props:LeftArrowProps) => {
    const {
        onClick
    } = props
    return (
      <RightOutlined
        onClick={onClick}
        // IMPORTANT: do not spread props after className otherwise it will be overwritten by only slick carousel classes
        className={arrowVar['right']}
      />
    )
  }

export default RightArrow