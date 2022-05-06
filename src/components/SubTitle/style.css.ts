import { style } from "@vanilla-extract/css";

export const h = style({
    textTransform:"uppercase",
    textAlign:"center",
    fontSize:"1.4rem",
    letterSpacing:"1.2px",
    color:"#1a1a1a",
    marginBottom:"3rem"
})

export const span = style({
    display: "inline-block",
    position: "relative",
    paddingBottom:"2rem",
    ":after":{
        content: "",
        position: "absolute",
        width: "4rem",
        height: "2px",
        background: "#ff3530",
        bottom: "0",
        left: "calc(50% - 20px)"
    }
})