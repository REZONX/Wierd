import { style,styleVariants } from "@vanilla-extract/css";
import {calc} from '@vanilla-extract/css-utils';
import { BackgroudWS, BottomLineSmall, FluidContainerStyle } from "../../public/style.css";
import { BottomLine } from "../../public/style.css";

export const HeroContainer = style({
    position: 'relative',
    display: 'flex',
})
export const HeroBackground = style({
    width: '100%',
    height: '50rem',
    background: 'black',
    margin: '3rem 0',
})

export const HeroContent = style([
    FluidContainerStyle,
    {
        display: 'flex',
        position: 'absolute',
        zIndex:'2',
        width: '100%',
        // height: '40rem',
        background: '#fff',
        top: '50%',
        transform: 'translateY(-50%) translateX(-50%)',
        // left:calc.divide(calc.subtract('100vw','1280px'),2),
        left: '50%'
    }
])

export const HeroContentLeft  = style({
    // width: '849px',
    // background: '#fff',
    display: 'flex',
    flex: '846 1 0%',
    padding: '2rem',
})

export const HeroContentRight = style({
    display: 'flex',
    flexDirection:'column',
    // background: '#fff',
    height: '100%',
    flex:'402 1 0%',
    padding: '2rem',
    // paddingRight:'4rem',
})

export const HeroContentBg = style({
    // background:'#fff',
    display: 'flex',
    // position: 'absolute',
    zIndex:'2',
    width: '100%',
    // height: '40rem',
    // background: '#fff',
    // top: '50%',
    // transform: 'translateY(-50%) translateX(-50%)',
    // left:calc.divide(calc.subtract('100vw','1280px'),2),
    // left: '50%'
    
})

//HeroModule

export const HeroModuleContainer = style([
    BottomLine,
    BackgroudWS,
    {
        display: 'flex',
    }
])

export const HeroModuleImageContainer = style({
    display: 'flex',
    flex:'1',
})

export const HeroModuleImage = style({
    width: '100%',
    objectFit:'cover',
})

export const HeroModuleDetail = style({
    display: 'flex',
    flex:'3',
    flexDirection:'column',
    marginLeft:'1rem',
})

export const PlayContainer = style({
    display: 'flex',
    alignItems:'center',
})
export const PlaySvg = style({
    color: 'red',
    marginRight:'1rem',
})

export const PlayText = style({
    fontWeight:'600',
    fontSize:'1rem',
    textTransform:'uppercase',
    letterSpacing:'2px',
    ':hover':{
        color:'red',
    }
})
export const HeroModulesTitle = style([
    BottomLine,
    {
        color:'black',
        fontSize:'2rem',
        textTransform:'uppercase',
        letterSpacing:'2px',
        position: 'relative',
        '::after':{
            content: '',
            position: 'absolute',
            height: '.5px',
            width: '100%',
            left: '0',
            top: '45%',
            background: '#ddd',
            zIndex:'4',
        }
    }
])

export const HeroModulesTitleBg = style({
    position: 'relative',
    background: '#fff',
    zIndex:'5',
    paddingRight: '2rem'
})
export const HeroModuleMovieName = style([
    BottomLineSmall,
    {
        fontSize:'2rem',
        fontWeight:'900',
        textTransform:'capitalize',
    }
])

export const HeroModuleMovieDiscription = style([
    BottomLineSmall,
    {
        fontSize:'1.5rem',
        fontWeight:'500',
    }
])



