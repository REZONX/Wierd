import React from 'react'
import { Image, Input,Select} from "antd"
import { container, imgContainer, itemContainer, span } from "./style.css"
import { searchActor } from './net'
import { ActorInfo } from '../../types'
import { Link } from 'react-router-dom'
import { parseImg } from '../../utils/parse'
const {Option} = Select
const {Search} = Input
const SiteSearch = () => {
    const [value,setValue] = React.useState("")
    const [actors,setActors] = React.useState<ActorInfo[]>([])
    React.useEffect(()=>{
        searchActor({
            actorName:value
        }).then(res=>{
            setActors(res)
        })
    },[value])
    const handleSearch = (value:string) => {
        setValue(value)
    }
    // const handleChange = (value:string) => {
    //     // setValue(value)
    //     console.log(value)
    // }
    return (
        <div
            className={container}
        >
            <Select
                style={{"width":"250px"}}
                showSearch
                onSearch={handleSearch}
                // onChange={handleChange}
                optionFilterProp="children"
            >
                {
                    actors.map(actor=>{
                        return (
                            <Option value={actor?.actorId}>
                                <div
                                    className={itemContainer}
                                >
                                    <span
                                        className={span}
                                    >{actor?.actorName}</span>
                                    <Link
                                        to={`/actors/${actor?.actorId}`}
                                    >
                                        <div className={imgContainer}>
                                            <Image
                                                width={100}
                                                preview={false}
                                                src={parseImg(actor?.actorPhoto)}
                                            />
                                        </div>
                                    </Link>
                                </div>
                            </Option>
                        )
                    })
                }
            </Select>
        </div>
    )
}

export default SiteSearch