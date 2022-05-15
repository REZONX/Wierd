import React from 'react'
import {Link, Route,Routes,Outlet} from 'react-router-dom'
import PayInfo from './PayInfo'
import { Layout, Menu} from 'antd'
import Sider from 'antd/lib/layout/Sider'
import UserInfo from './UserInfo'
import { infoContainer } from './style.css'

const User = () => {

    return (
        <div
            style={{
                "paddingTop":"9rem",
                "paddingLeft":'4rem',
                "paddingRight":"4rem",
                "maxWidth":"1280px",
                "margin":"auto"
            }}
        >
            <Layout>
                <header
                    style={{
                        "fontSize":"2.5rem",
                        "fontWeight":"800",
                        "color":"#ff4757",
                        "marginLeft":"2rem",
                        "marginTop":"1rem",
                    }}
                >个人中心</header>
                <Layout.Content>
                    <Layout
                        style={{
                            padding: '24px 0',
                            flexDirection:'row',
                        }}
                    >
                        <Sider
                            width={200}
                        >
                            <Menu
                                mode="inline"
                                defaultValue={"userInfo"}
                                defaultOpenKeys={['sub1']}
                                style={{
                                height: '100%',
                                }}
                            >
                                <Menu.Item
                                    key={"payInfo"}
                                >
                                    <Link
                                        to={"pay-info"}
                                    >
                                        我的账单
                                    </Link>
                                </Menu.Item>
                                <Menu.Item
                                    key={"userInfo"}
                                >
                                    <Link
                                        to={"user-info"}
                                    >
                                        我的信息
                                    </Link>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout.Content>
                            <div
                                className={infoContainer}
                            >
                                <Outlet/>
                            </div>
                        </Layout.Content>
                    </Layout>
                </Layout.Content>
            </Layout>
        </div>
    )
}

export default User