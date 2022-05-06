import React from 'react'
import Title from '../../components/title/index'
import {Descriptions} from 'antd'
import 'antd/lib/descriptions/style'

interface ActorBaseProps {
    content:string
}
const ActorBase = (props:ActorBaseProps) => {
    const {
        content,
    } = props
    return (
        <div>
            <Title
                name='介绍'
            />
            <div>
                {content}
            </div>
            <div>
                <Descriptions>
                    <Descriptions.Item
                        label = "别名"
                    >

                    </Descriptions.Item>
                    <Descriptions.Item
                        label = "血型"
                    >
                        
                    </Descriptions.Item>
                    <Descriptions.Item
                        label = "年龄"
                    >
                        
                    </Descriptions.Item>
                    <Descriptions.Item
                        label = "身高"
                    >
                        
                    </Descriptions.Item>
                    <Descriptions.Item
                        label = "出生地"
                    >
                        
                    </Descriptions.Item>
                    <Descriptions.Item
                        label = "星座"
                    >
                        
                    </Descriptions.Item>
                    <Descriptions.Item
                        label = "身份"
                    >
                        
                    </Descriptions.Item>
                    <Descriptions.Item
                        label = "性别"
                    >
                        
                    </Descriptions.Item>
                    <Descriptions.Item
                        label = "国籍"
                    >
                        
                    </Descriptions.Item>
                </Descriptions>
            </div>
        </div>
    )
}

export default ActorBase