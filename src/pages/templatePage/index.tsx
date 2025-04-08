import {Menu} from "../../components/menu/index.tsx";
import {TemplatePageProps} from "./types.ts";
import "./styles.css"

export const TemplatePage=(props:TemplatePageProps)=>{
    return<div className='page-container'>
    <Menu/>
        <div className='content-container'>
            <div className='content'>
                {props.content}
            </div>
        </div>
    </div>
}