import { style } from "@vanilla-extract/css";
import { MarginLeftAndRight } from "../../public/style.css";

export const bg = style([
    {
        display: "inline-block",
        background: "#eb4d4b",
        verticalAlign:'middle',
        // marginLeft:'2rem',
        marginRight:'1rem',
    }
])

export const bgNoPhoto = style([
    bg
])

export const username = style({
    display: "inline-block",
    color:"#5e5e5e",
    fontSize:"1.4rem",
    fontWeight:"900",
    letterSpacing:'2px',
    // padding:"1rem 0"
})

export const container = style({
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
})