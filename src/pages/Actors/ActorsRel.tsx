import { Image } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../../components/title/index'
import { ActorInfo } from '../../types'
import { parseImg } from '../../utils/parse'
import { relImg } from './style.css'
interface ActorsRelProps {
    actors:Array<ActorInfo>
}
const ActorsRel = (props:ActorsRelProps) => {
    const {
        actors
    } = props
    return (
        <div>
            <Title
                name={"相关艺人"}
            />
            <div>
                {
                    actors.map(item=>{
                        return (
                            <div
                                className={relImg}
                            >
                                <Link
                                    to={`/actors/${item.actorId}`}
                                >
                                    <Image
                                        preview={false}
                                        src={parseImg(item.actorPhoto)}
                                        width={80}
                                    />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ActorsRel