import React from 'react'
import {Timeline} from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons';
import 'antd/lib/timeline/style'
import Title from '../title';
// import 'antd/dist/antd.css';


const {Item:TimelineItem} = Timeline
interface WorksProps {
    children?:React.ReactNode
}
const Works = (props:WorksProps) => {
    const {

    } = props
    return(
        <div>
            <Title
                name='作品集'
            />
            <Timeline>
            <TimelineItem
                dot={<ClockCircleOutlined className="timeline-clock-icon"/>}
                color={"#eb4d4b"}
            >
                Technical testing
            </TimelineItem>
            <TimelineItem
                dot={<ClockCircleOutlined className="timeline-clock-icon" />}
                color={"#eb4d4b"}
            >
                Technical testing
            </TimelineItem>
            <TimelineItem
                dot={<ClockCircleOutlined className="timeline-clock-icon"/>}
                color={"#eb4d4b"}
            >
                Technical testing
            </TimelineItem>
        </Timeline>
        </div>
    )
}

export default Works