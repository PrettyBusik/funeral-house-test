import {HeaderProp, TypeForHeader} from "./types.ts";
import './styles.css'


export const Header =(props:HeaderProp)=> {
    const getCssClass = () => {
        switch (props.type) {
            case TypeForHeader.main:
                return 'title-main';
            case TypeForHeader.secondary:
                return 'title-secondary';
        }
    }

    return <div className='header-container'>
        <p className={getCssClass()}>{props.text}</p>
        <div className='header-container-buttons'>
            {props.children}
        </div>
    </div>
}