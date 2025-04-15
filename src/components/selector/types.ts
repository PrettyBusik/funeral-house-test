export type SelectorProps={
    options: { value: string; label: string }[];
    value: string | string[];
    onChange: (value: string | string[]) => void;
    isMultiple?: boolean;
}