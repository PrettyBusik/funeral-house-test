export type ButtonProps = {
    text: string
    type: TypeOfButton
}

export enum TypeOfButton {
    primary,
    outline,
    flattened
}