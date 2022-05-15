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
                                    <SideModule
                                        movieId={item.movieId}
                                        num={index+1}
                                        movieName = {item.movieNameCn}
                                        movieDesc = {item.movieIntroduction.substring(0,13)+"..."}
                                    />
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
    movieId:number

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
                <Link
                    to={`movies/${props.movieId}`}
                >
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
                </Link>
            </div>
        </div>
    )
}
export default SideSliderUI