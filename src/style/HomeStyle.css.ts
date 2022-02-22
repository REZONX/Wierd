import {style} from '@vanilla-extract/css'

export const className = style({
    display: 'flex',
    width: '100%',
    ':hover':{
        color:'red',
    }
})