import React from "react"

type Stat = 'loading' |'success'|'error'|'idle'

export interface State<D = any> {
    data:D | null
    err:Error | null
    stat:Stat
}

const defaultState:State<null> = {
    data:null,
    err:null,
    stat:'idle',
}
export enum Acitons {
    Success = 'SUCCESS',
    Error = 'ERROR',
}
export interface Action<D = any> {
    type:Acitons
    payload?:D | Error
}

export const asyncReducer = (state:State,action:Action):State => {
    const {
        type,
        payload
    } = action
    switch(type){
        case 'SUCCESS':
            return {
                data:payload, 
                err:null,
                stat:'success',
            }
        case 'ERROR':
            return {
                err:payload,
                data:null,
                stat:'error',
            }
        default:
            return defaultState
    }
}
export const useAsync = <D = any>(intialState:State<D>) => {
    const [state,dispatch] = React.useReducer(asyncReducer,intialState)
    const run = (promise:Promise<Response>) => {
        if(!promise||!promise.then()){
            throw new Error("the params must be promise type")
        }
        promise.then(async (res) => {
            if(res.ok){
                let data = await res.json()
                dispatch({
                    type:Acitons.Success,
                    payload:data
                })
            }
        })
        .catch(err =>{
            dispatch({
                type:Acitons.Error,
                payload:err
            })
        })
    }
    return {
        isLoading:state.stat === 'loading',
        isSuccess:state.stat === 'success',
        isError:state.stat === 'error',
        dispatch,
        run,
    }
}