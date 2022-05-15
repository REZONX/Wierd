import React from 'react'
import Title from '../../components/title'
import {Card, Image} from 'antd'
import {Link} from 'react-router-dom'
import { actorsContainer, actorsLi, actorsUl, container, iconContainer } from './style.css'
import IconButton from '../../components/Button'
import { ActorRoleList } from '../../types'
import { parseImg } from '../../utils/parse'
interface ActorsProps {
    actorRoleList:ActorRoleList[]
    onClick:()=>void
}
const Actors = (props:ActorsProps) => {
    const {
        onClick,
        actorRoleList
    } = props
    return (
        <div
            className={container}
        >
            <Title
                name="演员"
            />
            <div
                className={iconContainer}
            >
                <IconButton
                    onClick={onClick}
                />
            </div>
            <div
                className={actorsContainer}
            >
               {
                   actorRoleList.slice(0,2).map(actorRole=>{
                       return (
                        <ul
                            className={actorsUl}
                        >
                            <div>{actorRole?.actorRoleName}</div>
                            {
                                actorRole?.actorList.slice(0,4).map(actor=>{
                                    return (
                                        <li
                                            className={actorsLi}
                                        >
                                            <Link
                                                to={`/actors/${actor?.actorId}`}
                                            >
                                                <Card
                                                    cover={
                                                        <Image
                                                            preview={false}
                                                            width={120}
                                                            src={parseImg(actor?.actorPhoto)}
                                                        />
                                                    }
                                                >
                                                    <Card.Meta
                                                        title={actor?.actorName}
                                                    />
                                                </Card>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                       )
                   })
               }
            </div>
        </div>
    )
}

export default Actors