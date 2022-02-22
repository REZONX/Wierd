import React,{Reducer} from "react"
import { debounce } from "."

export type Listener = () => Event

export type Event = string

export type Action = {
    type: string
}

export const useScroll = (intialState:any,reducer:Reducer<any,Action>) => {
    let Listeners = React.useRef<Array<Listener>>([]).current
    const [state,dispatch] = React.useReducer(reducer,intialState)
    const handleScroll = () => {
        modifyState()
    }
    const subscribe = (listener:Listener) => {
        Listeners.push(listener)
        return function unsubscribe(){
            let index = Listeners.indexOf(listener)
            Listeners.splice(index,1)
        }

    }

    const modifyState = () => {
        let events = Listeners.map(listener => {
            return listener()
        })
        events.forEach(event => dispatch({type:event}))
        //??why state true false true false
        // console.log(state)
    }


    React.useEffect(()=>{
        //TODO attempt to add debounce but fail
        window.addEventListener('scroll',handleScroll)
        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[state])

    return [
        state,
        subscribe
    ]
}