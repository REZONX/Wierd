import { style } from "@vanilla-extract/css";

export const container = style({
    display:"flex",
    alignItems:"center",
    margin: "2rem 0"
})
export const front = style({
    width:"3px",
    height: "30px",
    background: "#d63031",
    display: "inline-block",
    borderRadius:"5px",
    marginRight:'1rem'
})
export const content = style({
    display:"inline-block",
    fontSize:"1.4rem",
    fontWeight:"600",
    color:"rgba(0, 0, 0, 0.85)",
    letterSpacing:"3px",
})