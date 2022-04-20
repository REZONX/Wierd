import { Col, Divider, Row } from 'antd'
import React from 'react'
import { a, container, divider, font, heart, lastContainer, myName, oneColContaienr, titleS } from './style.css'
interface SiteFooterProps {

}
const SiteFooter = (props:SiteFooterProps) => {
    return (
        <footer
            className={container}
        >
           <div>
            <Row>
                    <OneCol
                        title="技术选型"
                        links={[
                            {
                                name:"React",
                                link:"https://reactjs.org/"
                            },
                            {
                                name:"Typescript",
                                link:"https://www.typescriptlang.org/"
                            },
                            {
                                name:"VanillaExtract",
                                link:"https://vanilla-extract.style/"
                            }
                        ]}
                    />
                    <OneCol
                        title="技术选型"
                        links={[
                            {
                                name:"React",
                                link:"https://reactjs.org/"
                            },
                            {
                                name:"Typescript",
                                link:"https://www.typescriptlang.org/"
                            },
                            {
                                name:"VanillaExtract",
                                link:"https://vanilla-extract.style/"
                            }
                        ]}
                    />
                    <OneCol
                        title="技术选型"
                        links={[
                            {
                                name:"React",
                                link:"https://reactjs.org/"
                            },
                            {
                                name:"Typescript",
                                link:"https://www.typescriptlang.org/"
                            },
                            {
                                name:"VanillaExtract",
                                link:"https://vanilla-extract.style/"
                            }
                        ]}
                    />
                    <OneCol
                        title="技术选型"
                        links={[
                            {
                                name:"React",
                                link:"https://reactjs.org/"
                            },
                            {
                                name:"Typescript",
                                link:"https://www.typescriptlang.org/"
                            },
                            {
                                name:"VanillaExtract",
                                link:"https://vanilla-extract.style/"
                            }
                        ]}
                    />
                    <div className={divider}/>
                </Row>
           </div>
           <div
            className={lastContainer}
           >
               <span
                className={font}
               >
                   Made with 
               </span>
               <span
                    className={heart}
                >
                    ♥
               </span>
               <span
                className={font}
               >
                   by 
               </span>
               <span
                    className={myName}
               >
                   Rozen
               </span>
           </div>
        </footer>
    )
}

interface AProps {
    link:string
    name:string
}

interface OneColProps {
    title:string
    links:Array<AProps>
}
const OneCol = (props:OneColProps) => {
    const {
        title,
        links
    } = props
    return (
        <Col
            span={6}
        >
            <div
                className={oneColContaienr}
            >
                <h1
                    className={titleS}
                >{title}</h1>
                {
                    links.map(link => {
                        return (
                            <a className={a} href={link.link}>
                                {link.name}
                            </a>
                        )
                    })
                }
                </div>
        </Col>
    )
}
export default SiteFooter