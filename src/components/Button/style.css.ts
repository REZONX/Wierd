import { style } from "@vanilla-extract/css";

export const button = style({
    background:"none",
    outline: "none",
    border: "none",
    fontSize:"1.5rem",
    fontWeight:"800",
    cursor: "pointer",
    transition: "color .5s ease",
    ":hover":{
        color:"#ff3530"
    },
    "::after":{
        width: "2rem",
        content: "\\2192",
        display: "inline-block",
        color:"#ff3530",
        marginTop: "0.4em",
        fontSize: "2rem",
        marginLeft:".5rem",
    }
})