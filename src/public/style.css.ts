import { style } from "@vanilla-extract/css";

export const FluidContainerStyle = style({
    maxWidth:'1280px',
    padding: '2rem 4rem',
    margin: 'auto',
})

export const BottomLine = style({
    marginBottom:'2rem'
})

export const BottomLineSmall = style({
    marginBottom:'1rem',
})

export const MovieName = style({
    fontSize:'2rem',
    fontWeight:'700',
    textTransform:'capitalize',
})

export const MovieDesc = style({
    fontSize:'1.3rem',
    fontWeight:'600',

})

export const JumpLink = style({
    display: 'block',
    color: 'black',
    fontSize:'.5rem',
    fontWeight:'900',
    textTransform:'uppercase',
    letterSpacing:'1px',
    textAlign:'center',
    paddingTop:'2rem',
    transition: 'all .4s ease',
    '::after':{
        content: "\\2192",
        display: 'block',
        color:'#ff3530',
        fontSize:'1.8rem',
    },
    ':hover':{
        color:'#ff3530',
    }
})

export const LineLeftSmall = style({
    marginLeft:'.5rem',
})

export const ContentS = style({
    maxWidth:'97rem',
})

export const BackgroudWS = style({
    background: '#fff'
})

export const ImageS = style({
    objectFit:'cover',
})

export const MarginLeftAndRight = style({
    margin: '0 2rem'
})

export const PaddingLeftAndRight = style({
    padding: '0 2rem'
})

export const ImageLinkBaseS = style({
    display: 'flex',
})

export const PaddingTopAndBottom = style({
    padding: '2rem 0',
})

export const MarginTopAndBottom = style({
    margin: '1rem 0',
})

export const MovieNameBaseS = style({
    fontSize:'3rem',
    fontWeight:'800',
    textTransform:'capitalize',
})

export const MainActorUlS = style({
    display: 'inline-block',
})

export const MainActorLiS = style({
    fontSize:'.6rem',
    fontWeight:'1000',
    letterSpacing:'2px',
})

export const MainActorNameLiS = style([
    MainActorLiS,
    {
        display: 'inline-block',
        '::after':{
            content: '/',
            color:'#ff3530',
        }
    }
])