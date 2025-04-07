import {CardWithPhotoProps} from "./types";
import './styles.css'
export const CardWithPhoto=(props:CardWithPhotoProps)=>{
    return <div className='card-container'>
        <div className='card-container-title'>
            <h3 className='card-container-title-text'>{props.header} </h3>
            <div className='card-container-title-button'>{props.headerButton}</div>
        </div>
        <div className='images-container'>
            {props.data.map((image) => (
                <div className='image' key={image.filepath}>
                    <div className='image-wrapper'>
                        <img src={image.thumbpath} alt={image.name} className='image-preview' />
                        <button className='image-button'>X</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
}