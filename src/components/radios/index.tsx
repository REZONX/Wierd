import React from 'react'
import { Radio, RadioChangeEvent } from "antd"
import { useLists } from '../../context/ListsProvider'
import { Key } from '../../types'

export interface RadioProps {
    key:Key
    name:string
}
interface RadiosProps {
    defaultValue:Key
    handleChange:(e:RadioChangeEvent)=>void
    radioProps:Array<RadioProps>
}

const Radios = (props:RadiosProps) => {
    const {
        defaultValue,
        handleChange,
        radioProps
    } = props

    return(
        <div>
            <Radio.Group
                defaultValue={defaultValue}
                onChange={handleChange}
            >
                {
                    radioProps.map(item=>{
                        return (
                            <Radio
                                value={item.key}
                            >
                                {item.name}
                            </Radio>
                        )
                    })
                }
            </Radio.Group>
        </div>
    )
}

export default Radios