import {style} from "@vanilla-extract/css"
import {FluidContainerStyle} from '../../public/style.css'
export const listContainer = style([
    FluidContainerStyle,
    {
        background: "#fff",
        paddingTop:"7rem"
    }
])

export const baseColor = style({
    color:"#fff",
})