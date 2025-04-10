import {ModalProps} from "./types";
import "./styles.css"

export const Modal=(props:ModalProps)=>{

    return    <div className='modal-overlay'>
        <div className='modal-content'>
            <p className='modal-content-header'>{props.header}</p>
            {props.subtitle && <p className='modal-header-subtitle'>{props.subtitle}</p>}

            {props.content}
        </div>
    </div>
}