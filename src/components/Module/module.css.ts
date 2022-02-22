import { style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const ModuleStyle = recipe({
    base:{
        padding: '2rem 2rem'
    },
    variants:{
        width:{
            oneThird:{
                width:'33.3%'
            },
            oneFourth:{
                width: '25%'
            },
            oneTwo:{
                width:'50%',
            }
        }
    },
      // Finally, we define default variants in case we don't specify any.
      defaultVariants: {
        width: 'oneThird',
      }
})

export const ImageContainer = style({
    position: 'relative',
    borderRadius:'8px',
    overflow: 'hidden',
})



export const Image = style({
    width: '100%',
    objectFit:'cover',
    position:'relative',
})



export const ImageLink = style({
    display: 'flex',
    cursor: 'pointer',
    color:'black'
})

//TODO ImageCover Hover
export const ImageCover = style({
    display: 'flex',
    padding: '2rem',
    background: 'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
    position: 'absolute',
    zIndex:'2',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    pointerEvents:'none',
    opacity: '0',
    transition: 'opacity .5s ease',
    alignItems:'flex-end',
    //why change IamgeLink with ImageContainer work???
    selectors:{
        [`${ImageContainer}:hover &`]:{
            opacity: '1',
        }
    }

})

export const ImageCoverContent = style({
    display: 'flex',
    flex: '1',
    justifyContent: 'space-between',
})


export const baseModuleMovieName = style({
    display: 'flex',
    textTransform:'capitalize',
    // justifyContent:'center',
    alignItems:'center',
})
export const ModuleMovieName = styleVariants({
    outside:[
        baseModuleMovieName,
        {
            flex:'4',
            fontSize:'1.5rem',
            fontWeight:'700',
            color:'#0d0c22',
        }
    ],
    inner:[
        baseModuleMovieName,
        {
            color:'#fff',
            fontSize:'1.6rem',
            fontWeight:'600',
            // textAlign:'center',
        }
    ]
})

export const ModuleSvg = style({
    width: '2rem',
    height: '2rem',
    fill: 'currentColor',
})

export const ModuleLi = style({
    display: 'block',
    borderRadius:'8px',
    background: '#f3f3f4',
    padding: '.8rem',
    marginLeft:'1.5rem',
    textAlign:'center',
})

export const ModuleLink = style({
    display:'flex',
    color: '#6e6d7a',
})

export const MovieInformContainer = style({
    display: 'flex',
    padding: '1rem',
})

export const ScoreSvg = style({
    fill: '#f5c518',
    width: '1.8rem',
    height: '2rem',
})

export const Score = style({
    flex: '1',
    color:'#0d0c22',
    fontWeight:'600',
    fontSize:'1.8rem',
    display:'flex',
    alignContent:'center',
    justifyContent:'center',
})