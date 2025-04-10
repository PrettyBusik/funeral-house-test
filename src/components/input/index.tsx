import {InputProp} from "./types";
import './styles.css'

export const Input=(props:InputProp)=>{
    return <input className='input' type='text' value={props.value} onChange={props.onChange}/>
}