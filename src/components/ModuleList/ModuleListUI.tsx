import ModuleUI, { ModuleUIProps } from "../Module/ModuleUI"
import { FluidContainerStyle } from "../../public/style.css"
import { ModuleListContainer, ModuleListContainerS, ModuleListName, ModuleListNameDesc, ModulesContainer, SideContainer, SideContent } from "./style.css"
import SideSliderUI from "./SideSliderUI"
import { MovieInfo } from "../../types"
import { parseImg } from "../../utils/parse"

export interface ModuleListUIProps{
    moduleListName:string
    moduleListNameDesc:string
    source:MovieInfo[]
    sideSource:MovieInfo[]
}

const ModuleListUI = (props:ModuleListUIProps) => {
    const {
        moduleListName,
        moduleListNameDesc,
        source,
        sideSource,
    } = props
    return (
        <div
            className={ModuleListContainerS}
        >
            <h1
                className={ModuleListName}
            >
                    {
                        moduleListName ?? "hot line"
                    }
            </h1>
            <span
                className={ModuleListNameDesc}
            >
                    {
                        moduleListNameDesc ?? "Rencently Top Movies"
                    }
            </span>
            <div>
            </div>
            <div
                className={ModuleListContainer}
            >
                <div className={ModulesContainer}>
                    {
                        source.map(item=>{
                            return <ModuleUI
                                        movieImg={parseImg(item.moviePoster)}
                                        movieLink={`/movies/${item.movieId}`}
                                        movieName={item.movieNameCn}
                                        moduleType='oneTwo'
                                        movieScore={item.movieScore}
                                    />
                        })
                    }
                </div>

                <SideSliderUI
                    sideName='hot'
                    charts={sideSource}
                />
            </div>
        </div>
    )
}
export default ModuleListUI