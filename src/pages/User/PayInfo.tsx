import { Col, Row ,Image} from 'antd'
import React from 'react'
import { content, money, payInfoHeader, state } from './style.css'

interface PayInfoProps {

}
const PayInfo = (props:PayInfoProps) => {
    const {} = props
    return (
        <div>
            <Line/>
        </div>
    )
}

const Line = () => {
    return (
        <div>
            <header
                className={payInfoHeader}
            >
                2020 11-30 16:44:02 <span>狗眼订单号为{}</span>
            </header>
            <div className={content}>
                <Row>
                    <Col
                        flex={6}
                        
                    >
                        <div
                            style={{
                                "display":"flex",
                                "alignItems":'center',
                            }}
                        >
                            <div>
                                <Image
                                    width={100}
                                    preview={false}
                                    src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" 
                                />
                            </div>
                            <div
                                style={{
                                    "marginLeft":"2rem",
                                }}
                            >
                                <h1>
                                    送你一朵小红花
                                </h1>
                                <div>
                                    万达影城（金开万达广场店）
                                </div>
                                <div>
                                    激光厅1号激光厅
                                </div>
                                <div>
                                    2022年12月25日 12:00
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col
                        flex={2}
                    >
                        <div
                            className={money}
                        >
                            $32
                        </div>
                    </Col>
                    <Col
                        flex={2}
                    >
                        <div
                            className={state}
                        >
                            已完成
                        </div>
                    </Col>
                    <Col
                        flex={2}
                    >
                        <div>
                            查看详情
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default PayInfo