import {CardProps} from "./types";
import "./styles.css"

export const Card = (props:CardProps) => {
    return <div className='card-container'>
        <div className='card-container-title'>
            {props.children}
        </div>
        <div className='card-body'>
            {Object.entries(props.data).map(([key, value])=>(
                <div className='card-body-line'>
                    <div className='card-body-line-key label'>{key}</div>
                    <div className='card-body-line-value'>{value}</div>
                </div>
            ))}
        </div>

    </div>
}