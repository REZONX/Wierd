import { number } from "fp-ts"

export const useThrottle = (time:number,callback:Function) => {
    let timeout:NodeJS.Timeout | undefined = undefined
    return (...args:Array<any>) => {
        if(!timeout){
            timeout = setTimeout(()=>{
                timeout = undefined
                callback.apply(null,args)
            },time)
        }
    }
}

export const debounce = (callback:Function,time:number) => {
    let timeout:number | undefined = undefined
    return (...args:Array<any>) => {
        if(!timeout)  callback.apply(null,args)
        timeout = window.setTimeout(()=>{
            clearTimeout(timeout)
        },time)
    }
}
// export function debounce(fn:Function, wait:number) {
//     var timeout:number| undefined = undefined;
//     return function() {
//         if(timeout) clearTimeout(timeout);
//         timeout = window.setTimeout(()=>fn(), wait);
//     }
// }
