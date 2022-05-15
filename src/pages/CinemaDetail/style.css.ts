import {style} from "@vanilla-extract/css"
import {FluidContainerStyle, MarginTopAndBottom} from '../../public/style.css'
export const listContainer = style([
    FluidContainerStyle,
    {
        background: "#fff",
        paddingTop:"2rem"
    }
])

export const baseColor = style({
    color:"#fff",
})

export const movieList = style({
    width: "100%",
    display: "flex",
    background: "#eee",
    overflow: "hidden",
    height: "280px",
    alignItems:'center',
})

export const movieItem = style({
    display: "inline-block",
    margin: "2rem",
    width: "150px",
    padding: ".5rem",
    background: "#fff",
    transition: "transform .5s ease"
})

export const movieItemActive = style({
    transform: "scale(1.1)",
    background: "#e74c3c"
})
export const moviePoster = style({
    display: "flex",
    objectFit:"cover",
    width: "100%"
})

export const sessionTitle = style({
    color:"#999"
})

export const sessionDate = style({
    display: "inline-block",
    marginRight:'2rem',
    padding: "2px 10px",
    cursor: "pointer",
    color:"#2f3640"
})

export const sessionDateActive = style({
    borderRadius:"40px",
    background: "#e74c3c",
    color:"#fff",
})
export const sectionContainer = style({
    margin: "4rem 0"
})
// export const moviePosterContainer = style({
//     padding: ".5rem",
//     background: "#fff",
// })