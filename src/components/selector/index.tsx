import {SelectorProps} from "./types.ts";
import React from "react";

export const Selector=(props:SelectorProps)=>{
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOptions = Array.from(event.target.selectedOptions).map(option => option.value);
        props.onChange(props.isMultiple ? selectedOptions : selectedOptions[0]);
    };
    return <>
        <select
            id="selector"
            multiple={props.isMultiple}
            size={props.options.length}
            value={props.value}
            onChange={handleChange}
        >
            {Object.entries(props.options).map(([key, label]) => (
                <option key={key} value={key}>
                    {label}
                </option>
            ))}
        </select>
    </>

}