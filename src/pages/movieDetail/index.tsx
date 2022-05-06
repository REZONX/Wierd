import React from 'react'
import moment from 'moment';
import { btnsContainer, cinemaContainer, content, date, font, header, imgBG, imgContainer, li, mainContent, menuContainer, middle, mleft, number, type } from './style.css'
import bg from '../../asset/bg.png'
import { Button, Card, Col, Comment, Image, Rate, Row, Tooltip ,Avatar, message, Menu} from 'antd'
import { bmb, MarginLeftAndRight, MarginTopAndBottom, PaddingLeftAndRight } from '../../public/style.css'
import Works from '../../components/works';
import MovieIntroduction from './MovieIntroduction'
import Title from '../../components/title';
import UserComment from './UserCommand';
import Sider from 'antd/lib/layout/Sider';
import { Content } from 'antd/lib/layout/layout';
import Layout, { Main, Side } from '../../components/layout';
import { useNavigate, useParams } from 'react-router';
import { post,get} from '../../network/server/request';
import { useMovie } from '../../context/MovieProvider';
import actions from '../../actions/index'
import { Category, MovieInfo } from '../../types';
import { fetchMovieInfo } from './net';
import { parseImg } from '../../utils/parse';
import Actors from './Actors';
import Pictures from './Pictures';
interface MovieDetailProps {

}

interface MovieParams {
    movieId:string
}
type CurrentContent = "introduction" | "actors" | "pictures"
const MovieDetail = (props:MovieDetailProps) => {
    const {

    } = props
    const params:any = useParams()
    const navigate = useNavigate()
    const {setCurrentMovie,currentMovie} = useMovie()
    const handleClick = () => {
        setCurrentMovie(params.movieId)
        navigate("/cinemas")
    }
    const defaultValue = {} as MovieInfo
    const [data,setData] = React.useState<MovieInfo>(defaultValue)
    const [content,setContent] = React.useState<CurrentContent|string>("introduction")
    React.useEffect(()=>{
        fetchMovieInfo(params.movieId).then(res=>{
            setData(res)
        })
    },[params])

    const clickActorsAll = () => {
        setContent("actors")
    }

    const clickPituresAll = () => {
        setContent("pictures")
    }
    return (
       <div>
           <div
            className={imgBG}
           >
               <MovieDetailContent
                name={data.movieNameCn||""}
                score={data.movieScore||10}
                poster={data.moviePoster||""}
                time={data.releaseDate||""}
                handleClick={handleClick}
                types={data.movieCategoryList||[]}
               />
           </div>
           <div
               className={mainContent} 
           >
                <Layout>
                    <Main>
                        <div
                            className={menuContainer}
                        >
                            <Menu
                                onClick={(e)=>{
                                    setContent(e.key)
                                }}
                                mode="horizontal"
                                selectedKeys={["introduction"]}
                                // items={menuItems}
                            >
                                <Menu.Item
                                    key={"introduction"}
                                >介绍</Menu.Item>
                                <Menu.Item
                                    key={"actors"}
                                >演员</Menu.Item>
                                <Menu.Item
                                key={"pictures"}>图集</Menu.Item>
                            </Menu>
                        </div>
                        <MovieIntroduction
                            name={"剧情介绍"}
                            content={data.movieIntroduction||""}
                        />
                        <Actors
                            onClick={clickActorsAll}
                        />
                        <Pictures
                            onClick={clickPituresAll}
                        />
                        <UserComment
                            comments={data.movieCommentList||[]}
                        />
                    </Main>
                    <Side>
                    </Side>
                </Layout>
           </div>
       </div>
    )
}

interface MovieDetailContentProps {
    handleClick:()=>void
    name:string
    types:Array<Category>
    time:string
    poster:string
    score:number
}
export const MovieDetailContent = (props:MovieDetailContentProps) => {
    const {
        handleClick,
        name,
        types,
        time,
        poster,
        score
    } = props
    return (
        <div
            className={content}
        >
            <Row>
            <Col
                flex={"auto"}
            >
                    <div
                        className={middle}
                    >
                        <header
                            className={header}
                        >
                            {name}
                        </header>
                        <ul
                            className={bmb}
                        >
                            {
                                types.map(item=>{
                                    return (
                                        <li
                                            className={type}
                                        >
                                            {item.movieCategoryName}
                                        </li>
                                    )
                                })
                            }
                            {/* <li
                            className={li}>中国大陆/90分钟</li> */}
                            <li
                            className={date}>
                                {time}
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col
                    flex={"200px"}
                >
                    <div
                        className={MarginLeftAndRight}
                    >
                        <div
                            className={imgContainer}
                        >
                            <Image
                                preview={false}
                                width={200}
                                src={parseImg(poster)}
                            />
                        </div>
                    </div>
                </Col>
                <Col
                    flex={"300px"}
                >
                    <div
                        className={mleft}
                    >
                        <Rate
                            disabled
                            count={score/2}
                            allowHalf={true}
                            value={4}
                        />
                        <div
                            className={MarginTopAndBottom}
                        >
                            <span
                                className={number}
                            >16854</span>
                            <span
                                className={font}
                            >人评分</span>
                        </div>
                           <div
                            className={btnsContainer}
                           >
                                <Row
                                    gutter={[4,9]}
                                >
                                    <Col
                                        span={24}
                                    >
                                        <Button
                                            block
                                            type="default"
                                            onClick={handleClick}
                                        >
                                            特惠购票
                                        </Button>
                                    </Col>
                                </Row>
                           </div>
                        </div>
                </Col>
            </Row>
        </div>
    )
}

export const MovieDetailCinema = () =>{
    return (
        <div
            className={cinemaContainer}
        >
            <Row>
            <Col
                flex={"auto"}
            >
                    <div
                        className={middle}
                    >
                        <header
                            className={header}
                        >我们的东奥</header>
                        <ul
                            className={bmb}
                        >
                            <li
                                className={type}
                            >动画</li>
                            {/* <li
                            className={li}>中国大陆/90分钟</li> */}
                            <li
                            className={date}>2022 4.32</li>
                        </ul>
                    </div>
                </Col>
                <Col
                    flex={"200px"}
                >
                    <div
                        className={MarginLeftAndRight}
                    >
                        <div
                            className={imgContainer}
                        >
                            <Image
                                preview={false}
                                width={200}
                                src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                            />
                        </div>
                    </div>
                </Col>
                <Col
                    flex={"300px"}
                >
                    <div
                        className={mleft}
                    >
                        <Rate
                            disabled
                            count={5}
                            allowHalf={true}
                            value={4}
                        />
                        <div
                            className={MarginTopAndBottom}
                        >
                            <span
                                className={number}
                            >16854</span>
                            <span
                                className={font}
                            >人评分</span>
                        </div>
                        </div>
                </Col>
            </Row>
        </div>
    )
}

export default MovieDetail