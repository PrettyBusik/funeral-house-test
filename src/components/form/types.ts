import {React} from "react";

export type FormProps={
    header:string;
    children:React.ReactNode;
    onSave:()=>void;
    onCancel:()=>void;
}