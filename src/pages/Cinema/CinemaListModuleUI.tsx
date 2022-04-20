import { CinemaListModuleContainerS } from "./style.css"

export interface CinemaListModuleUIProps {
    cinemaName?:string
    cinemaLocation?:string
    ticketPrice?:number
}
const CinemaListModuleUI = (props:CinemaListModuleUIProps) => {
    const {
        cinemaName,
        cinemaLocation,
        ticketPrice,
    } = props
    return (
        <div
            className={CinemaListModuleContainerS}
        >
            <div className="cienam-information">
                <div className="name">
                    {cinemaName}
                </div>
                <div className="location">
                    {cinemaLocation}
                </div>
                <div className="tag">
                    <ul>
                        <li>
                            改签
                        </li>
                    </ul>
                </div>
            </div>
            <div className="price">
                {ticketPrice}98 
            </div>
            <div>
                <button>
                    选座购票
                </button>
            </div>
        </div>
    )
}

export default CinemaListModuleUI