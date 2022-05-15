import { chainFirstReaderK } from "fp-ts/lib/FromReader"
import { Link } from "react-router-dom"
import { JumpLink, MovieDesc, MovieName} from "../../public/style.css"
import { ActorInfo, MovieInfo } from "../../types"
import { link,moduleNumVar,score, SideContainer, SideContent, SideDetailContainer, SideHeader, SideListContainer, SideModuleNum, SideModuleStyle, SideMovieDesc, SideMovieName } from "./style.css"

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
                                        score = {item.movieScore}
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
    num:number,
    movieName?:string,
    movieDesc?:string,
    movieId:number
    score:number
}
export const SideModule = (props:SideModuleProps) => {
    const parseNum = (idx:number) => {
        switch(idx){
            case 1:
                return "one"
            case 2:
                return "two"
            case 3:
                return "three"
            default :
                return "else"
        }
    }
    return (
        <div
            className={SideModuleStyle}
        >
            <div
                className={moduleNumVar[parseNum(props.num)]}
            >
                <span>
                    {
                        props.num
                    }
                </span>
            </div>
            <div className={SideDetailContainer}>
                <Link
                    className={link}
                    to={`movies/${props.movieId}`}
                >
                    <span
                        className={SideMovieName}
                    >
                        {props.movieName}
                    </span>
                    <span
                        className={score}
                    >{props.score} 分</span>
                </Link>
            </div>
        </div>
    )
}
export default SideSliderUI