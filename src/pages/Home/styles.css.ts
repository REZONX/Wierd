import {style,styleVariants} from '@vanilla-extract/css'
import {LinkUnderLine} from '../../lib.css'

export const SiteMainHeaderStyle  = styleVariants({
    large:{
        padding: '20px 0',
    },
    small:{
        position: 'fixed',
        top:'0',
        width: '100%',
        background:'#1a1a1a',
        zIndex:'50'
    },
})

export const SiteMainHeaderSmoothS = style({
    transition: 'top .5s ease',
})



export const SiteMainNavUlStyle = style({
    listStyle:'none',
})

export const baseSiteMainNavLiStyle = style({
    display: 'inline-block',
})
export const SiteMainNavLiStyle = styleVariants({
    large:[
        baseSiteMainNavLiStyle,
        {
            margin: '30px 0',
            marginLeft:'50px',
            selectors:{
                '&:last-child':{
                    paddingRight:'50px',
                    borderRight:'solid rgba(0, 0, 0, 0.4) 1px',
                }
            }
        }
    ],
    small:[
        baseSiteMainNavLiStyle,
        {
            margin: '30px 20px',
        }
    ]
})

export const baseSiteMainNavLinkStyle = style({
    display: 'block',
    textAlign:'center',
})

// export const SiteMainNavLinkStyle = style([
//     baseSiteMainNavLinkStyle,
    // {
    //     position: 'relative',
    //     color: '#5e5e5e',
    //     transition: 'color .5s ease',
    //     ':hover':{
    //         color: '#fff',
    //     },
    // },
//     LinkUnderLine
// ])

export const SiteMainNavLinkStyle = styleVariants({
    large:[
        baseSiteMainNavLinkStyle,
        {
            fontWeight:'500',
            fontSize:'1.5rem',
            textTransform:'capitalize',
            color:'rgba(0, 0, 0, 0.4)',
            position: 'relative',
            '::before':{
                content: '',
                position: 'absolute',
                bottom: '-2px',
                width:'0',
                height: '.5px',
                background:'#e84118',
            },
            ':hover':{
                color:'black',      
            },
            'selectors':{
                '&:hover::before':{
                    width: '100%',
                }
            }
        },
    ],
    small:[
        baseSiteMainNavLinkStyle,
        {
            fontWeight:'600',
            fontSize:'1.2rem',
            textTransform:'uppercase',
            position: 'relative',
            color: '#5e5e5e',
            transition: 'color .5s ease',
            ':hover':{
                color: '#fff',
            },
        },
    ]
})
export const SiteMainHeaderHidden = style({
    top:'-80px',
})

export const HomeStyle = style({
    width: '100%'
})