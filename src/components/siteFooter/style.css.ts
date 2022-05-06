import { style } from "@vanilla-extract/css";
import { MarginLeftAndRight, MarginTopAndBottom } from "../../public/style.css";

export const container = style({
    background: "#000",
    padding: "60px 0 60px",
    position: "fixed",
    width: "100%",
    zIndex:"0",
    bottom: "0",
    left: "0",
})

export const oneColContaienr = style([
    {
        display:"flex",
        flexDirection:"column",
        margin: "2rem"
    },
])

export const titleS = style({
    fontSize:"2rem",
    color:"#fff",
    fontWeight:"500",
})
export const a = style({
    fontSize:"1.5rem",
    fontWeight:"800",
    ":hover":{
        color:"#e74c3c"
    }
})

export const font = style({
    color:"#969faf",
    textTransform:"uppercase",
    fontSize:"1.2rem",

})

export const divider = style({
    width: "100%",
    height: "1px",
    background: "#4b4b4b",
    margin: "2rem 0"
})

export const myName = style({
    display: "inline-block",
    marginLeft:"1rem",
    color:"#fff",
    fontSize:"2.5rem",
    fontWeight:"800"
})

export const heart = style({
    display:"inline-block",
    color:"#ff3838",
    fontSize:"2rem",
    margin: "0 1rem",
})

export const lastContainer = style({
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
})