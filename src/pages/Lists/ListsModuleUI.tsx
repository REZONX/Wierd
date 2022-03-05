import { Link } from "react-router-dom"
import { ImageLinkBaseS, MainActorLiS, MainActorNameLiS, MainActorUlS, MarginTopAndBottom, MovieNameBaseS } from "../../public/style.css"
import { ListsModuleUIContainerS, ListsModuleUIDescContainerS, ListsModuleUIDescContentUnderLineS, ListsModuleUIDescInfoContainerS, ListsModuleUIImageContainerS, ListsModuleUIImageS, ListsModuleUINumS, ListsModuleUIScoreContainerS, ListsModuleUIScoreLargeS, ListsModuleUIScoreSmalleS } from "./style.css"

export interface ListsModuleUIProps {
    movieImage?:string
    movieLink?:string
    movieName?:string
}
const ListsModuleUI = (props:ListsModuleUIProps) => {
    return (
        <div
            className={ListsModuleUIContainerS}
        >
            <div className={ListsModuleUINumS}>
                1
            </div>
            <div className={ListsModuleUIImageContainerS}>
                <Link
                    to={"/alice-in-wonderland"}
                    className = {ImageLinkBaseS}
                >
                    <img 
                        className={ListsModuleUIImageS}
                        src="https://tse1-mm.cn.bing.net/th/id/R-C.ffeddf064643593393e0f9075a4d98bd?rik=UsIrzvUBJn6O0g&riu=http%3a%2f%2fimg.sj33.cn%2fuploads%2fallimg%2f201410%2f1022344335-23.jpg&ehk=NvbP1K5BO7n%2fW08fbNAE5IJn9%2bi4GcFYR4voTVm8ZsA%3d&risl=&pid=ImgRaw&r=0" alt="" 
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
                            Movie Name
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
                                <li
                                    className={MainActorNameLiS}
                                >
                                    吴京
                                </li>
                                <li
                                    className={MainActorNameLiS}
                                >
                                    易烊千玺
                                </li>
                                <li
                                    className={MainActorNameLiS}
                                >
                                    王一博
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={ListsModuleUIScoreContainerS}>
                        <span
                            className={ListsModuleUIScoreLargeS}
                        >
                            9.
                        </span>
                        <span
                            className={ListsModuleUIScoreSmalleS}
                        >
                            6
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListsModuleUI