import {Header} from "../header";
import {CardProps} from "./types";
import "./styles.css"

export const Card = (props:CardProps) => {
    return <div className='card-container'>
        <div className='card-container-title'>
            <h3 className='card-container-title-text'>{props.header} </h3>
            <div className='card-container-title-button'>{props.headerButton}</div>
        </div>
        {Object.entries(props.data).map(([key, value])=>(
            <div className='card-container-line'>
                <div className='card-container-line-key'>{key}</div>
                <div className='card-container-line-value'>{value}</div>
            </div>
        ))}
    </div>
}