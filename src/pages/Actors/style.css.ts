import { style } from "@vanilla-extract/css"
import { FluidContainerStyle } from "../../public/style.css"

export const imgBG = style({
    width: "100%",
    height: "37rem",
    background: "black",
    position: "relative",
    objectFit:"cover",
})

export const container = style([
    FluidContainerStyle,
    {
        display: "flex",
        position: "relative",
        background: "#fff",
    }
])

export const relImg = style({
    padding: "1rem",
    display: "inline-block",
})

export const baseContainer = style({
    "padding":"2rem 0"
})