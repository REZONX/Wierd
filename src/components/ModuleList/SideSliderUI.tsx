import { chainFirstReaderK } from "fp-ts/lib/FromReader"
import { Link } from "react-router-dom"
import { JumpLink, MovieDesc, MovieName } from "../../public/style.css"
import { ActorInfo, MovieInfo } from "../../types"
import { SideContainer, SideContent, SideDetailContainer, SideHeader, SideListContainer, SideModuleNum, SideModuleStyle, SideMovieDesc, SideMovieName } from "./style.css"

export interface SideSliderUIProps {
    sideName:string,
    charts:Array<MovieInfo>
}
const SideSliderUI = (props:SideSliderUIProps) => {
    const {
        charts
    } = props
    return (
        <aside
            className={SideContainer}
        >
            <div
                className={SideContent}
            >
                <header
                    className={SideHeader}
                >
                    {
                        props.sideName
                    }
                </header>
                <div className={SideListContainer}>
                    {
                        charts.map((item,index)=>{
                            return (
                                <div>
                                    <Link
                                        to={`movies/${item.movieId}`}
                                    >
                                        <SideModule
                                            num={index+1}
                                            movieName = {item.movieNameCn}
                                            movieDesc = {item.movieIntroduction.substring(0,13)+"..."}
                                        />
                                    </Link>
                                </div>
                            )
                        })
                    }
                    <Link
                        className={JumpLink}
                        to={'lists'}
                    >
                        All the list
                    </Link>
                </div>
            </div>
        </aside>
    )
}
export interface SideModuleProps {
    num?:number,
    movieName?:string,
    movieDesc?:string,

}
export const SideModule = (props:SideModuleProps) => {
    return (
        <div
            className={SideModuleStyle}
        >
            <div
                className={SideModuleNum}
            >
                <span>
                    {
                        props.num
                    }
                </span>
            </div>
            <div className={SideDetailContainer}>
                <h2
                    className={SideMovieName}
                >
                    {props.movieName}
                </h2>
                <p
                    className={SideMovieDesc}
                >
                    {props.movieDesc}
                </p>
            </div>
        </div>
    )
}
export default SideSliderUI