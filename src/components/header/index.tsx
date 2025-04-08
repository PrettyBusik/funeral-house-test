import {HeaderProp} from "./types.ts";
import './styles.css'
import {Button} from "../buttons/button/index.tsx";
import {StylesForButton} from "../buttons/button/types.ts";
import {Icon} from "../icon/index.tsx";

export const Header =(props:HeaderProp)=> {
    return <div className='header-container'>
        <p className='header-container-header'>{props.text}</p>
        <div className='header-container-buttons'>
            <Button style={StylesForButton.onlyIcon}  icon={<Icon nameForIcon={'edit'} />} ></Button>
            <Button style={StylesForButton.onlyIcon}  icon={<Icon nameForIcon={'trash'} />} ></Button>
        </div>

    </div>
}