import React from 'react'
import moment from 'moment';
import { btnsContainer, content, date, font, header, imgBG, imgContainer, li, mainContent, middle, mleft, number, type } from './style.css'
import bg from '../../asset/bg.png'
import { Button, Card, Col, Comment, Image, Rate, Row, Tooltip ,Avatar} from 'antd'
import { bmb, MarginLeftAndRight, MarginTopAndBottom, PaddingLeftAndRight } from '../../public/style.css'
import Works from '../../components/works';
import MovieIntroduction from './MovieIntroduction'
import Title from '../../components/title';
import UserComment from './UserCommand';
import Sider from 'antd/lib/layout/Sider';
import { Content } from 'antd/lib/layout/layout';
import Layout, { Main, Side } from '../../components/layout';
interface MovieDetailProps {

}
const MovieDetail = (props:MovieDetailProps) => {
    const {

    } = props
    React.useEffect(()=>{

    },[])
    return (
       <div>
           <div
            className={imgBG}
           >
               <MovieDetailContent/>
           </div>
           <div
               className={mainContent} 
           >
                <Layout>
                    <Main>
                        <MovieIntroduction
                            name={"剧情介绍"}
                            content={"阿不思·邓布利多教授（裘德·洛 饰）意识到强大的黑巫师盖勒特·格林德沃（麦斯·米科尔森 饰）正试图夺取魔法世界的控制权。"}
                        />
                        <UserComment/>
                        <Works/>
                    </Main>
                    <Side>
                        <Title
                            name='相关电影'
                        />
                    </Side>
                </Layout>
           </div>
       </div>
    )
}

interface MovieDetailContentProps {

}
const MovieDetailContent = (props:MovieDetailContentProps) => {
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
                           <div
                            className={btnsContainer}
                           >
                                <Row
                                    gutter={[4,9]}
                                >
                                    <Col
                                        span={12}
                                    >
                                        <Button
                                            block
                                        >
                                            想看
                                        </Button>
                                    </Col>
                                    <Col
                                        span={12}
                                    >
                                        <Button
                                            block
                                        >
                                            评分
                                        </Button>
                                    </Col>
                                    <Col
                                        span={24}
                                    >
                                        <Button
                                            block
                                            type="primary"
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


export const Introduction = () => {}
export default MovieDetail