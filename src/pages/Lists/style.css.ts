import { style } from "@vanilla-extract/css";
import { ContentS, FluidContainerStyle, ImageS, PaddingLeftAndRight, PaddingTopAndBottom } from "../../public/style.css";

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

export const ListsUIHeaderContainerS = style([
    FluidContainerStyle,
    {
        justifyContent:'center',
        alignItems:'center',
        display: 'flex',
    }
])

export const ListsUIHeaderS = style({
    fontSize:'6rem',
    fontWeight:'900',
    textTransform:'uppercase',
})

export const ListsUIHeaderContentS = style([
    ContentS,
    {
        width: '100%',
    }
])

export const ListsUIHeaderTitleContainerS = style([
    {
        width: '100%',
        textAlign:'center',
        position: 'relative',
        '::after':{
            content:'',
            position: 'absolute',
            width: '100%',
            height: '1rem',
            background: "black",
            left: '50%',
            transform: 'translateX(-50%)'
        }
    }
])



//Module
export const ListsModuleUIContainerS = style([
    PaddingTopAndBottom,
    {
        width: '100%',
        display: 'flex',
        // justifyContent:'center',
        alignItems:'center',
    }
])

export const ListsModuleUINumS = style({
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    width: '5rem',
    height: '5rem',
    background: '#eee',
    fontSize:'3rem',
    fontWeight:'600',
})

export const ListsModuleUIImageContainerS = style([
    PaddingLeftAndRight,
    {
        display: 'flex',
        flex: '2',
    }
])

export const ListsModuleUIImageS = style([
    ImageS,
    {
        width: '100%',
    }
])

export const ListsModuleUIDescContainerS = style([
    PaddingLeftAndRight,
    {
        flex:'8',
        display: 'flex',
        alignSelf:'stretch',
        
    }
])

export const ListsModuleUIDescContentUnderLineS = style({
    width: '100%',
    display: 'flex',
    alignItems:'center',
    borderBottom:'solid 1px #eee',
})

export const ListsModuleUIDescInfoContainerS = style({
    display: 'flex',
    flexDirection:'column',
    flex:'1',
    alignSelf:'stretch',
    justifyContent:'center',
})

export const ListsModuleUIScoreContainerS = style({
    color:'#f5c518',
    fontStyle:'italic',
})

export const ListsModuleUIScoreLargeS = style({
    fontSize:'7rem',
    fontWeight:'600',
})

export const ListsModuleUIScoreSmalleS = style({
    fontSize:'3rem',
    fontWeight:'500',
})

export const nav = style([
    {
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        paddingTop:"4rem"
    }
])