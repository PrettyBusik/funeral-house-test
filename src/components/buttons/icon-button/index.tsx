import {ButtonIconProp} from "./types";

export const IconButton=(props:ButtonIconProp)=>{
    return <button className={`button ${props.type}`}>{props.text}</button>
}