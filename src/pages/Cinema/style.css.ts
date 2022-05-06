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

export const cinemaInfoContainer = style([
    {
        paddingTop:"8rem",
        position: "relative",
    },
])

export const header = style({
    position: "relative",
    background: "black"
})
export const showListCotainer = style([
    
])

export const tabsContainer = style({
    border: "2px solid #eee"
})

export const itemContainer = style({
    padding: "2rem",
})

export const itemContent = style({
    borderBottom:"1px solid #eee",
    display: "flex",
    justifyContent:"space-between"
})
export const cinemaName = style({
    fontWeight:"800",
    marginBottom:"2rem",
    letterSpacing:"2px"
})

export const cinemaAdd = style({
    marginBottom:"2rem"
})

export const tagsContainer = style({
    marginBottom:"2rem",
})