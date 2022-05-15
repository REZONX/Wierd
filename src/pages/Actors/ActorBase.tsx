import React from 'react'
import Title from '../../components/title/index'
import {Descriptions} from 'antd'
import 'antd/lib/descriptions/style'
import { ActorInfo } from '../../types'
import { baseContainer } from './style.css'

interface ActorBaseProps {
    content:string
    info:ActorInfo
}
const ActorBase = (props:ActorBaseProps) => {
    const {
        content,
        info
    } = props
    return (
        <div
        >
            <Title
                name='介绍'
            />
            <div>
                {content}
            </div>
            <div
                className={baseContainer}
            >
                <Descriptions>
                    <Descriptions.Item
                        label = "别名"
                    >
                        {info?.actorName}
                    </Descriptions.Item>
                    <Descriptions.Item
                        label = "血型"
                    >
                        {info?.actorBloodType}
                    </Descriptions.Item>
                    <Descriptions.Item
                        label = "年龄"
                    >
                        {info?.actorAge}
                    </Descriptions.Item>
                    <Descriptions.Item
                        label = "身高"
                    >
                        {info?.actorHeight}
                    </Descriptions.Item>
                    {/* <Descriptions.Item
                        label = "出生地"
                    >
                        {info?.actor}
                    </Descriptions.Item> */}
                    <Descriptions.Item
                        label = "星座"
                    >
                        {info?.actorConstellation}
                    </Descriptions.Item>
                    {/* <Descriptions.Item
                        label = "身份"
                    >
                        {info?.}
                    </Descriptions.Item> */}
                    <Descriptions.Item
                        label = "性别"
                    >
                        {info?.actorGender?'男':'女'}
                    </Descriptions.Item>
                    <Descriptions.Item
                        label = "国籍"
                    >
                        {info?.actorNationality}
                    </Descriptions.Item>
                </Descriptions>
            </div>
        </div>
    )
}

export default ActorBase