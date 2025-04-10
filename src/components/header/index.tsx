import { useNavigate } from "react-router-dom";
import {HeaderProp} from "./types.ts";
import './styles.css'
import {Button} from "../buttons/button/index.tsx";
import {StylesForButton} from "../buttons/button/types.ts";
import {Icon} from "../icon/index.tsx";


export const Header =(props:HeaderProp)=> {
    return <div className='header-container'>
        <p className='header-container-header'>{props.text}</p>
        <div className='header-container-buttons'>
            <Button onClick={props.onEdit} style={StylesForButton.onlyIcon}  icon={<Icon nameForIcon={'edit'} />} ></Button>
            <Button onClick={props.onDelete} style={StylesForButton.onlyIcon}  icon={<Icon nameForIcon={'trash'}/>} ></Button>
        </div>

    </div>
}