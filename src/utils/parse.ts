import { Seats, UserInfo } from "../types"

export const parseImg = (str?:string) => str?`http://127.0.0.1:8181/${JSON.parse(str)[0]}`:""

export const parse  =(str?:string):UserInfo => str?JSON.parse(str):{} 

export const parseSeat = (str?:string):Seats => str?JSON.parse(str):{} as Seats

export const parsePickSeats = (str?:string):Array<string> => str?JSON.parse(str):[]

export const parseImgs = (str?:string):Array<string> => str?JSON.parse(str).map((item:string)=>`http://127.0.0.1:8181/${item}`):[]