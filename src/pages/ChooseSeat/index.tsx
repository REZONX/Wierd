import { Button, Image } from 'antd'
import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useMovie } from '../../context/MovieProvider'
import { Seats, Session } from '../../types'
import { parseImg, parseSeat } from '../../utils/parse'
import { fetchBill, fetchSeat } from './net'
import { container, infoItem, left, right, rightContent, rightHeader, row, screen, seat, seatExample, seatVariant, stepsContainer, whole } from './style.css'
import { VideoCameraAddOutlined, TableOutlined,PayCircleOutlined,VerticalAlignTopOutlined} from '@ant-design/icons' 
import SiteSteps from '../../components/SiteStep'
import { useAuth } from '../../context/AuthProvider'

interface ChooseSeatProps {

}
export enum SeatState {
    Void = 0,
    Occupated = 1,
    Selected = 2,
}
const ChooseSeat = (props:ChooseSeatProps) => {
    const params:any = useParams()
    const {user} = useAuth()
    const defaultSesson:Session = {
        cinemaId:0,
        hallId:0,
        languageVersion:"",
        movieId:0,
        movieRuntimeId:0,
        seatNums:0,
        sessionDate:"",
        sessionId:0,
        sessionPrice:0,
        sessionSeats:"",
        sessionState:false,
        sysHall:{
            cinemaId:0,
            hallCategoryId:0,
            hallId:0,
            hallName:"",
            hallState:false,
            rowNums:0,
            rowStart:"",
            seatNums:0,
            seatNumsRow:0,
            seatState:"",
        },
        sysMovieRuntime:{
            beginTime:"",
            endTime:"",
            movieRuntimeId:0,
            movieRuntimeName:"",
        },
        sysMovie:{
            actorRoleList:[],
            majorActorNameList:[],
            movieAgeId:0,
            movieAreaId:0,
            movieBoxOffice:0,
            movieCategoryList:[],
            movieCommentList:[],
            movieLength:0,
            movieIntroduction:"",
            movieNameCn:"",
            movieNameEn:"",
            moviePoster:"",
            movieRateNum:0,
            movieScore:0,
            releaseDate:"",
            movieId:0,
            moviePictures:"",
        },
        sysCinema:{
            cinemaName:"",
            cinemaId:0,
            cinemaAddress:"",
            cinemaAreaId:0,
            cinemaBrandId:0,
            cinemaPicture:"",
            isRefunded:false,
            isTicketChanged:false,
            sysHallCategoryList:[],
        },
    }
    const [session,setSession] = React.useState<Session>(defaultSesson)
    const {seats,setSeats} = useMovie()
    // console.log(session)
    // console.log()
    // const [seats,setSeats] = React.useState<Seats>({} as Seats)
    // console.log(parseSeat(session.sessionSeats))
    console.log(seats)
    // let pickedSeats:string[] = []
    const [pickedSeats,setPickedSeats] = React.useState<string[]>([])
    React.useEffect(()=>{
        fetchSeat(params.sessionId).then(res=>{
            setSession(res)
            setSeats(parseSeat(res.sessionSeats))
        })
    },[params.sessionId])
    const {

    } = props
    const navigate = useNavigate()
    console.log(pickedSeats)
    const pressSeat = (key:string, idx:number) =>{
        const seatList:string[] = []
        let seat_str = key + "排" + (idx+1) + "座"
        if (seats[key][idx] === SeatState.Void){
          if (pickedSeats.length === 5){
          }
          setSeats({
              ...seats,
              [key]:seats[key].map((state ,index)=> {
                  if(index ===idx) {
                      return SeatState.Selected
                  }
                  return state
              })
          })
          seatList.push(seat_str)
          setPickedSeats((seats)=>[...seats,...seatList])
        } else if (seats[key][idx] === SeatState.Selected){
          setSeats({
              ...seats,
              [key]:seats[key].map((state,index)=>{
                  if(index === idx){
                      return SeatState.Void
                  }
                  return state
              })
          })
          setPickedSeats(pickedSeats.filter(seat=>{
              return seat!== seat_str
          }))
        }
      }

      const convert = (state:number) => {
          switch(state){
            case 0:
                return "unpick"
            case 1:
                return "empty"
            case 2:
                return "pick"
            case 3:
                return "forbidden"
            default:
                return "unpick"
          }
      }
      const billParams ={
        seats:JSON.stringify(pickedSeats),
        sessionId:session.sessionId,
        userId:user.sysUser.userId
      }
      const handleClick = () => {
          console.log()
          fetchBill(billParams).then(res=>{
              navigate(`/bill-pay/${res.billId}`)
          })
      }
    return (
        <div
            className={container}
        >
            <div
                className={stepsContainer}
            >
                <SiteSteps
                    current={1}
                    stepsProps={[
                        {
                            title:"选择影片场次",
                            incon:<VideoCameraAddOutlined />,
                        },
                        {
                            title:"选择座位",
                            incon:<TableOutlined />,
                        },
                        {
                            title:"15分钟内付款",
                            incon:<PayCircleOutlined />,
                        },
                        {
                            title:"影院获取观影票",
                            incon:<VerticalAlignTopOutlined />,
                        },
                    ]}
                />
            </div>
            <div className={whole}>
                <div className={left}>
                    <div className={seatExample}>
                        <span className={seatVariant[convert(0)]}></span>
                        <span style={
                            {
                                "margin":"0 2rem"
                            }
                        }>可选座位</span>
                        <span className={seatVariant[convert(1)]}></span>
                        <span style={{
                                "margin":"0 2rem"
                            }}>已售座位</span>
                        <span className={seatVariant[convert(2)]}></span>
                        <span style={
                            {
                                "margin":"0 2rem"
                            }
                        }>已选座位</span>
                    </div>

                    <div className={screen}>银幕中央</div>

                    <div className="seat-content">
                        {
                            Object.keys(seats).map(key=>{
                                return (
                                    <div className={row}>
                                        <span style={{
                                            "width":"10px",
                                            "marginRight":"50px",
                                        }}>
                                            第{key}排
                                        </span>
                                        <div style={{
                                            "display":"flex",
                                            "justifyContent":"flex-end"
                                        }}>
                                            {
                                                seats[key].map((state,index)=>{
                                                    return (
                                                        <span onClick={()=>{pressSeat(key,index)}} className={seatVariant[convert(state)]}/>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className={right}>
                        <div className={rightContent}>
                        <div className={rightHeader}>
                            <div className="poster">
                                <Image
                                    preview={false}
                                    width={150}
                                    src={parseImg(session.sysMovie.moviePoster)}
                                />
                            </div>
                            <div className="movie-info">
                            <p style={{
                                "fontSize":"20px",
                                "fontWeight":"700",
                            }}>
                                {session.sysMovie.movieNameCn}
                            </p>
                            <span>时长：{session.sysMovie.movieLength}分钟</span>
                            </div>
                        </div>
                        <div className={rightContent}>
                            <div className={infoItem}>
                                <span>影院：{session.sysCinema.cinemaName}</span>
                            </div>
                            <div className={infoItem}>
                            <span>影厅：</span>
                            <span>{session.sysHall.hallName}</span>
                            </div>
                            <div className={infoItem}>
                            <span>版本：</span>
                            <span>{session.languageVersion}</span>
                            </div>
                            <div className={infoItem}>
                            <span>场次：</span>
                            <span>{session.sessionDate} {session.sysMovieRuntime.movieRuntimeName}</span>
                            </div>
                            <div className="info-item">
                            <span>票价：</span>
                            <span>￥{session.sessionPrice}/张</span>
                            </div>
                            <span style={
                                {
                                    "color":"#999"
                                }
                            }>座位：</span>
                            {
                                pickedSeats.map(item=>{
                                    return (
                                        <div className="seat-chose">
                                            <span >
                                                {
                                                    item
                                                }
                                            </span>
                                        </div>
                                    )
                                })
                            }
                            <div className="info-item" style={{
                                "alignItems":'center'
                            }}>
                            <span style={
                                {
                                    "color":"#333"
                                }
                            }>总价：</span>
                            <span style={
                                {
                                    "fontSize":"2rem",
                                    "color":"#fd3037",
                                }
                            }>￥{session.sessionPrice * pickedSeats.length}</span>
                            </div>
                            <div style={{
                                "textAlign":"center",
                                "marginTop":"3rem"
                            }}>
                            </div>
                        </div>
                        <Button
                            onClick={handleClick}
                        >
                            提交订单
                        </Button>

                    </div>
                </div>
                </div>
        </div>
    )
}

export default ChooseSeat