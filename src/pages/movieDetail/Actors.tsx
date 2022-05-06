import React from 'react'
import Title from '../../components/title'
import {Image} from 'antd'
import {Link} from 'react-router-dom'
import { actorsContainer, actorsLi, actorsUl, container, iconContainer } from './style.css'
import IconButton from '../../components/Button'
interface ActorsProps {
    onClick:()=>void
}
const Actors = (props:ActorsProps) => {
    const {
        onClick
    } = props
    return (
        <div
            className={container}
        >
            <Title
                name="演员"
            />
            <div
                className={iconContainer}
            >
                <IconButton
                    onClick={onClick}
                />
            </div>
            <div
                className={actorsContainer}
            >
                <ul
                    className={actorsUl}
                >
                    <div>导演</div>
                    <li
                        className={actorsLi}
                    >
                        <Link
                            to={""}
                        >
                            <Image
                                preview={false}
                                width={120}
                                src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                            />
                        </Link>
                    </li>
                </ul>
                <ul
                    className={actorsUl}
                >
                    <div>演员</div>
                    <li
                        className={actorsLi}
                    >
                        <Link
                            to={""}
                        >
                            <Image
                                preview={false}
                                width={120}
                                src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                            />
                        </Link>
                    </li>
                    <li
                        className={actorsLi}
                    >
                        <Link
                            to={""}
                        >
                            <Image
                                preview={false}
                                width={120}
                                src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                            />
                        </Link>
                    </li>
                    <li
                        className={actorsLi}
                    >
                        <Link
                            to={""}
                        >
                            <Image
                                preview={false}
                                width={120}
                                src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                            />
                        </Link>
                    </li>
                    <li
                        className={actorsLi}
                    >
                        <Link
                            to={""}
                        >
                            <Image
                                preview={false}
                                width={120}
                                src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                            />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Actors