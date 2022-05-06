import { Link } from "react-router-dom"
import { ImageLinkBaseS, MainActorLiS, MainActorNameLiS, MainActorUlS, MarginTopAndBottom, MovieNameBaseS } from "../../public/style.css"
import { ListsModuleUIContainerS, ListsModuleUIDescContainerS, ListsModuleUIDescContentUnderLineS, ListsModuleUIDescInfoContainerS, ListsModuleUIImageContainerS, ListsModuleUIImageS, ListsModuleUINumS, ListsModuleUIScoreContainerS, ListsModuleUIScoreLargeS, ListsModuleUIScoreSmalleS } from "./style.css"
import { MovieInfo } from "../../types"
import { parseImg } from "../../utils/parse"

export interface ListsModuleUIProps extends MovieInfo {
    index:number
}
const ListsModuleUI = (props:ListsModuleUIProps) => {
    const {
        movieNameCn,
        movieScore,
        moviePoster,
        majorActorNameList,
        index,
        movieId
    } = props
    const parseMovieScore = (score?:number) => {
        const scoreArr = []
        if(score){
            if(score.toString().length>1){
                scoreArr.push(score.toString().substring(0,2))
                scoreArr.push(score.toString().substr(-1))
            }else{
                scoreArr.push(score)
                scoreArr.push("")
            }
        }
        return scoreArr
    }
    return (
        <div
            className={ListsModuleUIContainerS}
        >
            <div className={ListsModuleUINumS}>
                {index}
            </div>
            <div className={ListsModuleUIImageContainerS}>
                <Link
                    to={movieId?`/movies/${movieId.toString()}`:""}
                    className = {ImageLinkBaseS}
                >
                    <img 
                        className={ListsModuleUIImageS}
                        src={parseImg(moviePoster)} alt="" 
                    />
                </Link>
            </div>
            <div className={ListsModuleUIDescContainerS}>
                <div
                    className={ListsModuleUIDescContentUnderLineS}
                >
                    <div className={ListsModuleUIDescInfoContainerS}>
                        <h1
                            className={MovieNameBaseS}
                        >
                            {movieNameCn}
                        </h1>
                        <div
                            className={MarginTopAndBottom}
                        >
                            <ul
                                className={MainActorUlS}
                            >
                                <li
                                    className={MainActorLiS}
                                >
                                    主演:
                                </li>
                            </ul>
                            <ul
                                className={MainActorUlS}
                            >
                                {
                                    majorActorNameList?.map(actor => {
                                        return (
                                            <li
                                                className = {MainActorNameLiS}
                                            >
                                                {actor}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className={ListsModuleUIScoreContainerS}>
                        <span
                            className={ListsModuleUIScoreLargeS}
                        >
                            {parseMovieScore(movieScore)[0]}
                        </span>
                        <span
                            className={ListsModuleUIScoreSmalleS}
                        >
                            {parseMovieScore(movieScore)[1]}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListsModuleUI