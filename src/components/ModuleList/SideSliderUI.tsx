import { Link } from "react-router-dom"
import { JumpLink, MovieDesc, MovieName } from "../public/style.css"
import { SideContainer, SideContent, SideDetailContainer, SideHeader, SideListContainer, SideModuleNum, SideModuleStyle, SideMovieDesc, SideMovieName } from "./style.css"

export interface SideSliderUIProps<T = any> {
    sideName:string,
    charts:Array<T>
}
const SideSliderUI = (props:SideSliderUIProps) => {
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
                    <SideModule
                        num={1}
                        movieName = {'Alice in wanderland'}
                        movieDesc = {'this is movie is so good!!!!!!'}
                    />
                    <SideModule
                        num={2}
                        movieName = {'The advanture'}
                        movieDesc = {'scalet witch is so strong'}
                    />
                    <SideModule
                        num={3}
                        movieName = {'lana del rey'}
                        movieDesc = {'my favorite singer in the world'}
                    />
                    <SideModule
                        num={4}
                        movieName = {'Under the sea'}
                        movieDesc = {'i feel sick when i take long time to play it'}
                    />
                    <SideModule
                        num={5}
                        movieName = {'Kate bush'}
                        movieDesc = {'a gorgero woman '}
                    />
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