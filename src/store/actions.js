import { DEC, INC } from "./actionTypes"

export function incAction(){
    return {type:INC}
}
export function decAction(){
    return {type:DEC}
}