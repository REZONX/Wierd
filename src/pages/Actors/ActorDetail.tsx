import { Image } from 'antd'
import React from 'react'
import { useParams } from 'react-router'
import DetailHeader from '../../components/DetailHeader'
import { Main, Side } from '../../components/layout'
import Works from '../../components/works'
import { FluidContainerStyle } from '../../public/style.css'
import { ActorInfo ,MovieInfo} from '../../types'
import { parseImg } from '../../utils/parse'
import ActorBase from './ActorBase'
import ActorsRel from './ActorsRel'
import { fetchActor, fetchActorsRel } from './net'
import { container } from './style.css'
import { parseAge } from './utils'

interface DetailProps {

}
const ActorDetail = (props:DetailProps) => {
    const {

    } = props
    const params:any = useParams()
    const defaultValue = {} as ActorInfo
    const [actorInfo,setActorInfo] = React.useState<ActorInfo>(defaultValue)
    const [actors,setActors] = React.useState<ActorInfo[]>([])
    const {
        actorName,
        actorAge,
        actorHeight,
        actorPhoto,
        movieList,
        actorInformation
    } = actorInfo
    React.useEffect(()=>{
        fetchActor(params.actorId).then(res=>{
            setActorInfo(res)
        })
    },[params.actorId])

    React.useEffect(()=>{
        fetchActorsRel({pageSize:9,pageNum:1}).then(res=>{
            setActors(res)
        })
    },[])


    const agesList = parseAge(movieList??[])
    // console.log(parseAge(movieList))
    return (
        <div>
            <DetailHeader
                width={200}
                src={parseImg(actorPhoto)}
            >
                <h1>
                    {actorName}
                </h1>
                <div>
                    <span
                        style={{
                            'color':"#fff"
                        }}
                    >{actorAge}岁</span>
                    <span
                        style={{
                            "color":"#fff"
                        }}
                    >{actorHeight}cm</span>
                </div>
                <div>
                    <div>代表作</div>
                    {
                        movieList&&movieList.slice(0,3).map(item=>{
                            return (
                                <div
                                    style={{
                                        "display":"inline-block",
                                        "margin":"1rem"
                                    }}
                                >
                                    <Image
                                        src={parseImg(item.moviePoster)}
                                        width={100}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </DetailHeader>
            <div
                className={container}
            >
                <Main>
                    <ActorBase
                        content={actorInformation}
                        info={actorInfo}
                    />
                    <Works
                        agesList={agesList}
                    />
                </Main>
                <Side>
                    <ActorsRel
                        actors={actors}
                    />
                </Side>
            </div>

        </div>
    )
}

export default ActorDetail