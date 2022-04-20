import ModuleUI, { ModuleUIProps } from "../Module/ModuleUI"
import { FluidContainerStyle } from "../../public/style.css"
import { ModuleListContainer, ModuleListContainerS, ModuleListName, ModuleListNameDesc, ModulesContainer, SideContainer, SideContent } from "./style.css"
import SideSliderUI from "./SideSliderUI"

export interface ModuleListUIProps extends ModuleUIProps{
    moduleListName?:string
    moduleListNameDesc?:string
}

const ModuleListUI = (props:ModuleListUIProps) => {
    const {
        moduleListName,
        moduleListNameDesc,
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
                        [0,0,0,0,0,0].map(item=>{
                            return <ModuleUI
                                        movieImg="https://tse1-mm.cn.bing.net/th/id/OIP-C.jfrG_XRPBS24z7Bi9dEJmAHaJ4?pid=ImgDet&rs=1"
                                        movieLink="Alice"
                                        movieName="Alice in Wanderland"
                                        moduleType='oneTwo'
                                    />
                        })
                    }
                </div>

                <SideSliderUI
                    sideName='hot'
                    charts={[]}
                />
            </div>
        </div>
    )
}
export default ModuleListUI