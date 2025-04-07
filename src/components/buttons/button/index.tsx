import {ButtonProps, TypeOfButton} from "./types.ts";
import "./styles.css"

export const Button = (props: ButtonProps) => {
    // return <button className={`button ${props.type===TypeOfButton.primary? 'button-primary':'button-outline'}`}>{props.text}</button>
    // return <button className={`button ${props.type===TypeOfButton.primary? 'button-primary':'button-outline'}`}>{props.text}</button>

    const getCssClass = () => {
        switch (props.type) {
            case TypeOfButton.primary:
                return 'button-primary';
            case TypeOfButton.outline:
                return 'button-outline';
            case TypeOfButton.flattened:
                return 'button-flattened'
        }
    }
    return <button className={`button ${getCssClass()}`}>
        {props.text}
    </button>

}
