import { RadioChangeEvent } from 'antd'
import React from 'react'
import { Order } from '.'
import Radios from '../../components/radios'
import { movieRadios } from './config'

interface MovieRadiosProps {
    order:Order,
    setOrder:(order:Order) => void
}
const MovieRadios = (props:MovieRadiosProps) => {
    const {
        order,
        setOrder
    } = props
    console.log(order)
    const handleChange = (e:RadioChangeEvent) => {
        setOrder(e.target.value)
    }
    return (
        <Radios
            radioProps={movieRadios}
            defaultValue={"releaseDate"}
            handleChange={handleChange}
        />
    )
}

export default MovieRadios