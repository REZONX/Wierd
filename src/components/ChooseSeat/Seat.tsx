import React from 'react'
import { seat } from './styles.css'
type SeatState = "normal" | "selected" | "occupied"
interface SeatProps {

}
const Seat = (props:SeatProps) => {
    const [seatState,setSeatState] = React.useState<SeatState>("normal")
    return (
        <li
            className={seat[seatState]}
        >

        </li>
    )
}

export default Seat