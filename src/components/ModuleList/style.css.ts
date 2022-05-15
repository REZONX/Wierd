import { style, styleVariants } from "@vanilla-extract/css";
import { BackgroudWS, BottomLineSmall, clearFix, FluidContainerStyle, MovieDesc, MovieName } from "../../public/style.css";
import { vars } from "../../vars.css";

//Modules
export const ModuleListContainerS = style([
    FluidContainerStyle,
    BackgroudWS,
    clearFix
])

export const ModuleListName = style({
    fontSize:'4rem',
    fontWeight:'800',
    padding: '2rem',
    position: 'relative',
    textTransform:'capitalize',
    '::before':{
        content: '',
        width: '1rem',
        height: '100%',
        background: '#ff3530',
        position: 'absolute',
        borderRadius:'8px',
        top: '20%',
        // transform: 'translateY(-50%)',
        left: '0',
    }
})

export const ModuleListNameDesc = style({
    fontSize:'1.2rem',
    textTransform:'uppercase',
    fontWeight:'800',
    letterSpacing:'3px',
    paddingLeft: '2rem',
})

export const ModuleListContainer = style(
    {
        display: 'flex',
        position: 'relative'
    }
)

export const ModulesContainer = style([
    {
        width: '66.6%',
        display: 'flex',
        flexWrap:'wrap',
    }
])


//Side
export const SideContainer = style([
    {
        width: '33.3%',
        padding: '2rem',
        // background: '#eee',
        // height: '600px'
        position: 'relative',
    },
    clearFix,
])

export const SideContent = style({
    // background: '#eee',
    position: 'sticky',
    top: '90px',

})

export const SideHeader = style({
    background: '#eee',
    padding: '.5rem 2rem',
    fontSize:'2rem',
    fontWeight:'800',
    textTransform:'uppercase',
    letterSpacing:'2px',
    textAlign:'center',
})

export const SideListContainer = style([
    FluidContainerStyle,
    {
        border: 'solid 1px #eee',
    }
])

export const SideModuleStyle = style({
    borderBottom: 'solid 1px #eee',
    padding: '1rem 0',
    display: 'flex',
    // justifyContent:'center',
    alignItems:'center',
})

export const SideModuleNum = style({
    width: '4rem',
    height: '4rem',
    // paddingTop:'10%',
    background: '#eee',
    fontSize:'2rem',
    fontWeight:'600',
    flex: '1',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
})
export const moduleNumBase = style({
    width: '4rem',
    height: '4rem',
    // paddingTop:'10%',
    fontSize:'2rem',
    fontWeight:'600',
    flex: '1',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
}) 

export const moduleNumVar = styleVariants({
    "one":[
        moduleNumBase,
        {
            background: "#fed330"
        }
    ],
    "two":[
        moduleNumBase,
        {
            background: "#f1f2f6"
        }
    ],
    "three":[
        moduleNumBase,
        {
            background: "#cc8e35"
        }
    ],
    "else":[
        moduleNumBase,
        {
            background: "#eee"
        }
    ]
})
export const SideDetailContainer = style({
    marginLeft:'2rem',
    flex: '5'
})

export const SideMovieName = style([
    MovieName,
    BottomLineSmall,
    {
        textAlign:"center",
        color:"#1e272e",
    }
])

export const SideMovieDesc = style([
    MovieDesc,
    BottomLineSmall,
])

export const link = style({
    display: "flex",
    justifyContent:"space-between",
    padding: "2rem",
    alignItems:"center",
})

export const score = style({
    color:"#fdb863",
    fontSize:"1rem",
    fontWeight:"700"
})