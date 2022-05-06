import React from 'react'
import {Card, Image, Timeline} from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons';
import 'antd/lib/timeline/style'
import Title from '../title';
import { AgeMoviesProps } from '../../types';
import { parseImg } from '../../utils/parse';
import { age, imgContainer } from './style.css';
import { Link } from 'react-router-dom';
// import 'antd/dist/antd.css';


const {Item:TimelineItem} = Timeline
interface WorksProps {
    children?:React.ReactNode
    agesList:AgeMoviesProps
}
const Works = (props:WorksProps) => {
    const {
        agesList
    } = props
    return(
        <div>
            <Title
                name='作品集'
            />
            <Timeline>
                {
                    Object.keys(agesList).map(item=>{
                        return (
                            <TimelineItem
                                dot={<ClockCircleOutlined className="timeline-clock-icon"/>}
                                color={"#eb4d4b"}
                            >
                                <div
                                    className={age}
                                >{item}年</div>
                                <div>
                                    {
                                        agesList[item].map(movie => {
                                            return (

                                                <div
                                                    className={imgContainer}
                                                >
                                                    <Link
                                                        to={`/movies/${movie.movieId}`}
                                                    >
                                                        <Card
                                                            style={{
                                                                width:"200px"
                                                            }}
                                                            cover={<Image
                                                                        preview={false}
                                                                        width={200}
                                                                        src={parseImg(movie.moviePoster)}
                                                                    />}
                                                        >
                                                            <Card.Meta
                                                                title={movie.movieNameCn}
                                                            />
                                                        </Card>
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </TimelineItem>
                        )
                    })
                }
            </Timeline>
        </div>
    )
}

export default Works