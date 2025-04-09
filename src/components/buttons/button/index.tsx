import {ButtonProps, StylesForButton} from "./types.ts";
import "./styles.css"

export const Button = (props: ButtonProps) => {
    const getCssClass = () => {
        switch (props.style) {
            case StylesForButton.primary:
                return 'button-primary';
            case StylesForButton.outline:
                return 'button-outline';
            case StylesForButton.flattened:
                return 'button-flattened';
            case StylesForButton.onlyIcon:
                return 'button-icon'
        }
    }
    return <button className={`button ${getCssClass()}`} onClick={props.onClick}>
        {props.icon && <span className='button-icon-slot'>{props.icon}</span>}
        {props.text && <span className="button-text">{props.text}</span>}
    </button>

}
