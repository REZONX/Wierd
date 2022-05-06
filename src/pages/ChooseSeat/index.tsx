import React from 'react'
import { row, screen, seat, seatExample } from './style.css'

interface ChooseSeatProps {

}
const ChooseSeat = (props:ChooseSeatProps) => {
    const {

    } = props
    return (
        <div>
            <div className="whole">
                <div className="left">
                    <div className={seatExample}>
                        <span className={seat}></span>
                        <span style={
                            {
                                "margin":"0 2rem"
                            }
                        }>可选座位</span>
                        <span className={seat}></span>
                        <span style={{
                                "margin":"0 2rem"
                            }}>已售座位</span>
                        <span className={seat}></span>
                        <span style={
                            {
                                "margin":"0 2rem"
                            }
                        }>已选座位</span>
                    </div>

                    <div className={screen}>银幕中央</div>

                    <div className="seat-content">
                        <div className={row}>
                        <span style={{
                            "width":"10px",
                            "marginRight":"50px",
                        }}>{}</span>
                        <div style={{
                            "display":"flex",
                            "justifyContent":"flex-end"
                        }}>
                            <span className={seat}></span>
                        </div>
                        </div>
                    </div>
                </div>

                {/* <div className="right">
                        <div className="right-content">
                        <div className="right-header">
                            <div className="poster"><img  alt=""/> </div>
                            <div className="movie-info">
                            <p style="font-size: 20px;font-weight: 700">{{session.sysMovie.movieNameCn}}</p>
                            <span>类型：{}</span>
                            <span>时长：{}分钟</span>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="info-item">
                            <span>影院：</span>
                            <span>{{session.sysCinema.cinemaName}}</span>
                            </div>
                            <div className="info-item">
                            <span>影厅：</span>
                            <span>{{session.sysHall.hallName}}</span>
                            </div>
                            <div className="info-item">
                            <span>版本：</span>
                            <span>{{session.languageVersion}}</span>
                            </div>
                            <div className="info-item">
                            <span>场次：</span>
                            <span>{{session.sessionDate}} {{session.sysMovieRuntime.movieRuntimeName}}</span>
                            </div>
                            <div className="info-item">
                            <span>票价：</span>
                            <span>￥{{session.sessionPrice}}/张</span>
                            </div>
                            <span style="color: #999">座位：</span>
                            <div className="seat-chose">
                            <span className="ticket" v-if="pickedSeats.length > 0" v-for="item in pickedSeats">{{ item }}</span>
                            </div>
                            <div className="info-item" style="align-items: center">
                            <span style="color: #333">总价：</span>
                            <span style="font-size: 20px;color: #f03d37">￥{{session.sessionPrice * pickedSeats.length}}</span>
                            </div>
                            <div style="text-align: center;margin-top: 30px">
                            </div>
                        </div> */}
                    {/* </div>
                </div>
                </div> */}

            </div>
        </div>
    )
}

export default ChooseSeat