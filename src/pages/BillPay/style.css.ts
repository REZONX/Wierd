import { style, styleVariants } from "@vanilla-extract/css";
import { FluidContainerStyle } from "../../public/style.css";

export const container = style([
    {
        paddingTop:"14rem",
        background: "#fff",
    },
    FluidContainerStyle
])

export const h = styleVariants({
    "warning":{
        color: "#f6e58d"
    },
    "success":{
        color: "#7bed9f"
    }
})