import {CardWithPhotoProps} from "./types";
import './styles.css'
import {Button} from "../../buttons/button/index.tsx";
import {StylesForButton} from "../../buttons/button/types.ts";
import {Icon} from "../../icon/index.tsx";

export const CardWithPhoto=(props:CardWithPhotoProps)=>{
    return <div className='card-container'>
        <div className='card-container-title'>
            {props.children}
        </div>
        <div className='images-container'>
            {props.photos && props.photos.map((image) => (
                <div className='image' key={image.filepath}>
                    <div className='image-wrapper' key={image.filepath}>
                        <img src={image.thumbpath} alt={image.name} className='image-preview' />
                        <div className='image-button' >
                            <Button icon={<Icon nameForIcon='trashWhite'/>}
                                    style={StylesForButton.onlyIcon}
                                    onClick={(image)=>props.onDeletePhoto(image.name)}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
}


