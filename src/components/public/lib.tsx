import { FluidContainerStyle } from "./style.css"

export interface FluidContainer {
    child:React.ReactChild
}
export const FluidContainer = (props:FluidContainer) => {
    return (
        <div
            className={FluidContainerStyle}
        >
            {props.child}
        </div>
    )
}
