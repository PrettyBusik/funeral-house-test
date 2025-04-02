import {ButtonProps, TypeOfButton} from "./types.ts";
import "./styles.css"

export const Button = (props: ButtonProps) => {
    return <button className={`button ${props.type===TypeOfButton.primary? 'button-primary':'button-outline'}`}>{props.text}</button>

}
