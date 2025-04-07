export type ButtonProps = {
    text: string,
    type: TypeOfButton,
    onClick:()=> void
}

export enum TypeOfButton {
    primary,
    outline,
    flattened
}