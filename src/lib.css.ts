import { style } from "@vanilla-extract/css";

export const LinkUnderLine = style({
    '::before':{
        position: 'absolute',
        content: '',
        width: '0',
        height: '1.3px',
        background: '#5e5e5e',
        bottom: '-5px',
        transition: 'all .5s ease',
    },
})