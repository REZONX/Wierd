import { style } from "@vanilla-extract/css";

export const container = style({
    display: "flex"
})

export const main = style({
    width: "66.6%",
    padding: "2rem",
})

export const side = style({
    width: "33.3%",
    position: "relative",
    padding: "2rem",
})

export const sticky = style({
    position: "sticky",
    top:"9rem"
})