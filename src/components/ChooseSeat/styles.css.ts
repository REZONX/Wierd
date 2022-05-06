import { style, styleVariants } from "@vanilla-extract/css";

export const container = style({
    maxWidth:"20rem",
    perspective: "1000px",
    margin: "auto",
})

export const seatBase = style({
    display: "inline-block",
    width: "1.2rem",
    height: "1.5rem",
    margin: "3px",
    borderTopLeftRadius:"10px",
    borderTopRightRadius:"10px",
})

export const seat = styleVariants({
    "normal":[
        seatBase,
        {
            background: "#fff",
        }
    ],
    "selected":[
        seatBase,
        {
            background: "#F79F1F"
        }
    ],
    "occupied":[
        seatBase,
        {
            background: "#EA2027",
            ":disabled":{

            }
        }
    ]
})

export const screen = style({
    background: "#fff",
    height: "7rem",
    width: "100%",
    transform: "rotateX(-45deg)",
    boxShadow:"0 3px 10px rgba(255, 255, 255, 0.7)"
})