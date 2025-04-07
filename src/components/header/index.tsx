import {HeaderProp} from "./types.ts";
import './styles.css'
import {Button} from "../buttons/button/index.tsx";
import {TypeOfButton} from "../buttons/button/types.ts";
import {IconButton} from "../buttons/icon-button/index.tsx";

export const Header =(props:HeaderProp)=> {
    return <div className='container'>
        <p className='header'>{props.text}</p>
        {/*<Button text='Edit' type={TypeOfButton.flattened} onClick={() => props.onEdit}/>*/}
        {/*<Button text='Delete' type={TypeOfButton.flattened} onClick={() => props.onDelete()}/>*/}
        <IconButton type='edit' text='Edit'></IconButton>
        <IconButton type='delete' text='Delete'></IconButton>

    </div>
}