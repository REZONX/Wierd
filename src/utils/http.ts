import {filter} from 'fp-ts/Array'
import {pipe} from 'fp-ts/lib/function'



interface HttpOptions extends RequestInit{
    data?:object
}

type ObjectItem<V = unknown> = [key:string,val:V]

export const arrayToObject = Object.fromEntries

export const isObjectArrayVoid = (arr:ObjectItem) => arr[1] !== null && arr[1]!==undefined

export const deleteVoid = 
                        (obj:object):object => 
                                            pipe(
                                                Object.entries({...obj}),
                                                filter(isObjectArrayVoid),
                                                arrayToObject
                                            )


export const http = (url:string,options?:HttpOptions) => {
    const _options:RequestInit = {
        method: 'GET',
        headers: {
            'Content-Type':'application/json;charset=utf-8'
        },
        ...options
    }

    const isPost = (options:HttpOptions):boolean => options.method === 'POST'

    const isData = (options:HttpOptions):boolean => !!options.data

    const handleBody = (options:HttpOptions):HttpOptions => {
        options = {...options}
        return {
            ...options,
            body:isPost(options)&&isData(options)?JSON.stringify(options.data):undefined
        }
        
    }

    const dealWithOptions = pipe(_options,handleBody,deleteVoid)
    
    return fetch(url,dealWithOptions)
}

export const useHttp = http