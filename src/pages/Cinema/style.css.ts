import { style } from "@vanilla-extract/css";
import { FluidContainerStyle, InlineS, MarginLeftAndRight } from "../../public/style.css";

export const CinemaUIContentS = style([
    FluidContainerStyle,{
        marginTop:'78.85px'
    }
])

export const CinemaUlS = style([
    InlineS,
    {

    }
])

export const CinemaLiS = style([
    InlineS,
    {

    }
])

export const BaseCinemaLinkS = style({
    fontSize:'1.5rem',
    fontWeight:'500',
    color:'black',
    position: 'relative',
})

export const CinemaLinkHoverS = style({
    ':hover':{
        color:'#e74c3c',
    }
})
export const CinemaLinkS = style([
    MarginLeftAndRight,
    CinemaLinkHoverS,
    BaseCinemaLinkS,
])

export const CinemaLinkActiveS = style([
    BaseCinemaLinkS,
    {
        '::after':{
            content:'',
            position:'absolute',
        }
    }
])

export const CinemaListModuleContainerS = style([
    {
        display: 'flex',
    }
])

export const container = style([
    {
        marginTop:"7rem",
        background:"#fff",
    },
    FluidContainerStyle
])