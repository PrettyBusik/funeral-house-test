import * as React from "react";

export interface ButtonProps {
    text?: string,
    style: StylesForButton,
    icon?: React.ReactNode,
    size:SizesOfButton,
    fullWidth?:boolean,
    onClick: () => void,
}

export enum StylesForButton {
    primary,
    outline,
    flattened,
    icon
}

export enum SizesOfButton {
    big,
    small
}