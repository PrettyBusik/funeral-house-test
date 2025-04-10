import {FormProps} from "./types";
import {Header} from "../header/index.tsx";
import {Button} from "../buttons/button/index.tsx";
import {StylesForButton} from "../buttons/button/types.ts";
import {Icon} from "../icon/index.tsx";
import {TypeForHeader} from "../header/types.ts";

export const Form = (props: FormProps) => {
    return <>
        <Header
            text={props.header}
            type={TypeForHeader.secondary}>
            <Button text='Save changes' style={StylesForButton.flattened} onClick={() => {
            }} icon={<Icon nameForIcon={'check'}/>}/>
            <Button text='Cancel' style={StylesForButton.flattened} onClick={() => {
            }} icon={<Icon nameForIcon={'cancel'}/>}/>
        </Header>
        <form></form>
    </>

}