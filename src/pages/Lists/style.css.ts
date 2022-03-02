import { style } from "@vanilla-extract/css";
import { ContentS, FluidContainerStyle } from "../../public/style.css";

export const ListsUIContainerS = style({
    padding: '76px 4rem'
})

export const ListsUIContentContainerS = style([
    FluidContainerStyle,
    {
        display: 'flex',
        justifyContent:'center',
    }
])

export const ListContentS = style([
    ContentS,{
        flexGrow:'1',
        background: '#fff',
        padding: '2rem 2rem'
    }
])
export const ListHeaderS = style([
    {
        position: 'relative',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        '::after':{
            content: '',
            position: 'absolute',
            width: '100%',
            height: '1rem',
            background: '#e1e1e1',
            left: '50%',
            top: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
            zIndex:'0',
        }
    }
])
export const ListNameS = style([
    {
        fontSize:'4rem',
        fontWeight:'900',
        textTransform:'capitalize',
        textAlign:'center',
        zIndex:'10',
        background: '#fff',
        position: 'relative',
        padding: '0 4rem',
    }
])