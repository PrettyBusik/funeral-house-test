import {ButtonProps, SizesOfButton, StylesForButton} from "./types.ts";
import "./styles.css"

export const Button = (
    {
        text,
        icon,
        style = StylesForButton.flattened,
        fullWidth = false,
        size = SizesOfButton.small,
        onClick
    }: ButtonProps
) => {
    const getCssClass = () => {
        let classes = ['button'];

        switch (style) {
            case StylesForButton.primary:
                classes.push('button-primary');
                break;
            case StylesForButton.outline:
                classes.push('button-outline');
                break;
            case StylesForButton.flattened:
                classes.push('button-flattened');
                break;
            case StylesForButton.icon:
                classes.push('button-icon');
                break;
        }

        switch (size) {
            case SizesOfButton.big:
                classes.push('button-big');
                break;
            case SizesOfButton.small:
                classes.push('button-small');
                break;
        }

        if (fullWidth) {
            classes.push('button-wide')
        }

        return classes.join(' ');
    }
    return <button className={getCssClass()} onClick={onClick}>
        {icon}
        {text && <span className="button-text">{text}</span>}
    </button>

}
