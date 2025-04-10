import * as React from "react";

export type HeaderProp ={
    text:string;
    type:TypeForHeader;
    children: React.ReactNode;
}


export enum TypeForHeader{
    main,
    secondary
}