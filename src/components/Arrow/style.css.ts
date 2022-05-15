import { style, styleVariants } from "@vanilla-extract/css";

export const baseArrow = style(
    {
        zIndex:"10",
        fontSize:"3rem",
        color:"#fff",
        top:"50%",
        position: "absolute",
        cursor: "pointer"
    }
)

export const arrowVar = styleVariants({
    "left":[
        baseArrow,
        {
            left: "2rem"
        }
    ],
    "right":[
        baseArrow,
        {
            right: "2rem"
        }
    ]
})