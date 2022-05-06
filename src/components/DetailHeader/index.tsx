import { Col, Image, Row } from 'antd'
import React from 'react'
import { contentC, imgBG, imgContainer } from './style.css'

interface DetailHeaderProps {
    src:string
    children?:React.ReactNode
    width:number
}
const DetailHeader = (props:DetailHeaderProps) => {
    const {
        src,
        width,
        children
    }  = props
    return (
        <div>
            <div
                className={imgBG}
            >
                <Row>
                    <Col
                    >
                        <div
                            className={imgContainer}
                        >
                            <Image
                                preview={false}
                                width={width}
                                src={src}
                            />
                        </div>
                    </Col>
                    <Col
                        flex={6}
                    >
                        <div
                            className={contentC}
                        >
                            {children}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default DetailHeader