import { style } from "@vanilla-extract/css";
import { center, FluidContainerStyle, hcenter, MarginTopAndBottom, mb } from "../../public/style.css";

export const imgBG = style({
    width: "100%",
    height: "37rem",
    background: "black",
    position: "relative",
    objectFit:"cover",
})

// export const img = style({
//     width: "100%",
//     height: "100%",
//     filter: "blur(40px)",
// })

export const content = style([
    {
        width: "100%",
        position: "absolute",
        // background: "black",
        margin: "auto",
        top:"10rem",
        // display: "flex",
    },
    FluidContainerStyle,
    hcenter,
])

export const white = style({
    color:"#fff"
})


export const font = style([
    {
        fontSize:"1.4rem",
        fontWeight:"bolder",
        display: "inline-block",
        marginLeft:"1rem",
    },
    white,
    MarginTopAndBottom,
])

export const number = style({
    fontSize:"2.5rem",
    color:"#fadb14",
    fontWeight:"800",
    fontStyle:"italic",
})

export const header = style([
    {
        fontSize:"4rem",
        fontWeight:"200",
        color: "rgb(238, 238, 238)",
        letterSpacing:'5px'
    },
    mb
])

export const type = style([
    {
        color:"#d63031",
        fontSize:"3rem",
        fontWeight:"bolder",
        letterSpacing:"1.5rem",
        marginBottom:"1rem",
    },
    // font,
    mb
])

export const date = style({
    fontSize:"1.2rem",
    fontWeight:"1000",
    color:"#fff",
})

export const li = style([
    {
        fontWeight:"1000",
        color:"rgb(238, 238, 238)",
    },
    mb,
    font
])

export const mainContent = style([
    FluidContainerStyle,
    {
        background: "#fff",
        paddingTop:"10rem",
    }
])

export const ratePnumber = style({

})

export const imgContainer = style({
    padding: "2rem",
    border: ".5px solid #ced6e0"
})

export const middle = style(
    {
        display: 'flex',
        flexDirection:"column",
        justifyContent:'center',
        margin: "0 2rem",
    })

export const mleft = style({
    marginLeft:"4rem",
    marginRight:"2rem"
})

export const btnsContainer = style({
    marginTop:"12.7rem"
})

export const p = style({
    fontSize:"1.2rem",
    letterSpacing:".2rem",
    color:"#2d3436"
})