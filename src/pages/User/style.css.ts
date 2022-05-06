import { style } from "@vanilla-extract/css";

export const infoContainer = style({
    padding: "4rem",
    background: "#fff",
})

export const payInfoHeader = style({
    background: "#eee",
    height: "4.5rem",
    padding: "1rem",
})

export const payInfoSpan = style({
    display: "inline-block",

})

export const money = style({
    display: "flex",
    flex: "1",
    justifyContent:"center",
    alignItems:"center",
    color:"#ff6348",
    textAlign:"center",
})

export const state = style({
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    color:"#2ed573",
    textAlign:"center"
})

export const check = style({
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center"
})
export const content = style({
    padding: "2rem"
})