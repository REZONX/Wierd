export const parseImg = (str?:string) => str?`http://127.0.0.1:8181/${JSON.parse(str)[0]}`:""

export const parse  =(str?:string) => str?JSON.parse(str):""