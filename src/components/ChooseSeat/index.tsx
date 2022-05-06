import React from 'react'
import Screen from './Screen'
import Seat from './Seat'
import { container } from './styles.css'
interface ChooseSeatProps {
    // source:Array<any>
}
export const ChooseSeat = (props:ChooseSeatProps) => {
    const {
        // source
    } = props
    return (
        <div
            className={container}
        >
            <Screen/>
            <ul>
                {/* {
                    source.map(item => {
                        return (
                            <Seat/>
                        )
                    })
                } */}
                <Seat/>
            </ul>
        </div>
    )
}

export default ChooseSeat