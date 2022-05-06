import { style ,keyframes, createTheme, styleVariants} from "@vanilla-extract/css";

export const hero = style({
    position:"relative",
    background: "#333 url(http://srdjanpajdic.com/slike/2.jpg) no-repeat center center fixed",
    backgroundSize:"cover",
    textAlign:"center",
    color:"#fff",
    paddingTop:"11rem",
    minHeight:"40rem",
    letterSpacing:"2px",
    fontFamily:"Montserrat"

})

export const h = style({
    fontSize:"50px",
    lineHeight:"1.3"
})

export const baseSpan = style({
    fontSize:"2.5rem",
    paddingBottom:"12px",
    lineHeight:"3",
})

export const baseMouse = style({
    display: "block",
    margin:"0 auto",
    width: "26px",
    height: "46px",
    borderRadius:"13px",
    bottom: "4rem",
    position: "absolute",
    left: "50%",
    marginLeft:"-14px"
})

export const scroll = keyframes({
    "0%":{
        opacity: "1",
        transform: "translateY(0)"
    },
    "100%":{
        opacity: "0",
        transform: "translateY(2.5rem)"
    }
})

export const baseMouseSpan = style({
    display: "block",
    margin: "6px auto",
    width: "2px",
    height: "2px",
    borderRadius:"4px",
    border: "1px solid transparent",
    animationDuration:"1s",
    animationFillMode:"both",
    animationIterationCount:"infinite",
    animationName:scroll,
})

export const header = style({
    fontSize:"5rem",
    color:"#fff",
    textTransform:"uppercase",
})

export const mouse = styleVariants({
    red:[
        baseMouse,
        {
            border: "2px solid #eb4d4b",
        }
    ],
    yellow:[
        baseMouse,
        {
            border: "2px solid #e8f380",
        }
    ]
})

export const span = styleVariants({
    red:[
        baseSpan,
        {
            borderBottom:"2px solid #eb4d4b",
            color:"#eb4d4b"
        }
    ],
    yellow:[
        baseSpan,
        {
            borderBottom:"2px solid #e8f380",
            color:"#e8f380"
        }
    ]
})

export const mouseSpan = styleVariants({
    red:[
        baseMouseSpan,
        {
            background:"#eb4d4b",
        }
    ],
    yellow:[
        baseMouseSpan,
        {
            background:"#e8f380",
        }
    ]
})