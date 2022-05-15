import { style } from "@vanilla-extract/css";

export const container = style({
    maxWidth:"30rem",
    position: "absolute",
    top: "33%",
    right: "15%"
})

export const span = style({
    display: "inline-block",
    marginRight:"2rem",
    fontSize:"2rem",
    fontWeight:"700"
})

export const itemContainer = style({
    display: "flex",
    justifyContent:"space-around",
    alignItems:"center",
})

export const imgContainer = style({
    padding: "2rem"
})