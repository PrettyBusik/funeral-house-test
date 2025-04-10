import * as React from "react";

export type ButtonProps = {
    text?: string,
    style: StylesForButton,
    icon?: React.ReactNode,
    onClick: () => void,
}

export enum StylesForButton {
    primary,
    outline,
    flattened,
    onlyIcon
}
