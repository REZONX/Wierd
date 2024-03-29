import { FluidContainerStyle } from "../../public/style.css"
import { HeroModuleContainer, HeroModuleDetail, HeroModuleImage, HeroModuleImageContainer, HeroModuleMovieName, HeroModuleMovieDiscription, PlayContainer, PlaySvg, PlayText } from "./style.css"

export interface HeroModuleProps {
    movieImg?:string
    movieName?:string
    imageLink?:string
    videoLong?:string
    movieDescription?:string
}
const HeroModuleUI = (props:HeroModuleProps) => {
    return (
        <div
            className={HeroModuleContainer}
        >
            <div className={HeroModuleImageContainer}>
                <img className = {HeroModuleImage} src={props.imageLink} alt="" />
            </div>
            <div className={HeroModuleDetail}>
                <div
                    className={PlayContainer}
                >
                    <div className={PlaySvg}>
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="ipc-icon ipc-icon--play-circle-outline-large-inline ipc-icon--inline AutorotatePeekstyle__PlayIcon-sc-1jqsg2a-14 gzVGNN editorial-play-icon" id="iconContext-play-circle-outline-large-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"></path><path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path></svg>
                    </div>
                    <span
                        className={PlayText}
                    >
                        {/* {props.videoLong} */}
                        Watch Now
                    </span>
                </div>
                <h2
                    className={HeroModuleMovieName}
                >{props.movieName}</h2>
                <p
                    className={HeroModuleMovieDiscription}
                >{props.movieDescription}</p>
            </div>
            
        </div>
    )
}

export default HeroModuleUI