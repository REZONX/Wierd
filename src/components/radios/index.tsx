import React from 'react'
import { Radio, RadioChangeEvent } from "antd"

interface RadioProps {
    value:Order
    name:string
}
interface RadiosProps {
    radioProps:Array<RadioProps>
}
export enum Order {
    Hot = "hot",
    Time = "time",
    Rate = "rate"
}
const Radios = (props:RadiosProps) => {
    const {
        radioProps
    } = props
    const [value,setValue] = React.useState<Order>(Order.Hot)
    const handleChange = (evt:RadioChangeEvent) => {
        setValue(evt.target.value)
    }
    return(
        <div>
            <Radio.Group
                defaultValue={value}
                onChange={handleChange}
            >
                {
                    radioProps.map(item=>{
                        return (
                            <Radio
                                value={item.value}
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