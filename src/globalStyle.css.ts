import {globalStyle} from '@vanilla-extract/css'

globalStyle('html',{
    fontSize:'10px'
})

globalStyle('body',{
    background: '#eee'
})
globalStyle('*',{
    margin: '0',
    padding: '0',
    boxSizing:'border-box',
    outline: 'none',
    border: 'none',
})

globalStyle('ul',{
    textDecoration:'none',
})

globalStyle('a',{
    textDecoration:'none',
    color:'#fff'
})

