import { Link } from "react-router-dom"
import {LineLeftSmall } from "../public/style.css"
import { Image, ImageContainer, ImageCover, ImageCoverContent, ImageLink, ModuleLi, ModuleLink, ModuleMovieName, ModuleStyle, ModuleSvg, MovieInformContainer, Score, ScoreSvg } from "./module.css"

export type ModuleType = 'oneThird' | 'oneFourth' | 'oneTwo'
export interface ModuleUIProps {
    moduleType?:ModuleType
    movieName?:string
    movieImg?:string
    movieLink?:string
    movieScore?:number
}
const ModuleUI = (props:ModuleUIProps) => {
    return (
        <div
            className={ModuleStyle({
                width: props.moduleType ?? 'oneThird'
            })}
        >
            <div
                className={ImageContainer}
            >
                <Link
                    to={props.movieLink??''}
                    className={ImageLink}
                >
                    <img src={props.movieImg} alt="" 
                        className={Image}
                    />
                </Link>
                <div
                    className={ImageCover}
                >
                    <div
                        className={ImageCoverContent}
                    >
                        <span
                            className={ModuleMovieName['inner']}
                        >
                            {props.movieName}
                        </span>
                        <ul
                            style={{
                                display:'flex'
                            }}
                        >
                            <li
                                className={ModuleLi}
                            >
                                <Link
                                    className={ModuleLink}
                                    to={'collection'}
                                >
                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" role="img" className={ModuleSvg}><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>
                                </Link>
                            </li>
                            <li
                                className={ModuleLi}
                            >
                                <Link
                                    className={ModuleLink}
                                    to={'like'}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" role="img" className={ModuleSvg}><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div
                className={MovieInformContainer}
            >
                <div
                    className={ModuleMovieName['outside']}
                >
                    {
                        props.movieName
                    }
                </div>
                <div
                    className={Score}
                >
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className={ScoreSvg} id="iconContext-star-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>
                    <span
                        className={LineLeftSmall}
                    >
                        {props.movieScore ?? '8.6'}
                    </span>
                </div>
            </div>
        </div>
    )
}
export default ModuleUI