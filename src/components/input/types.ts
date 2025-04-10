import React from "react";

export type InputProp={
    value:string;
    onChange:(()=> Promise<void>)|((e: React.ChangeEvent<HTMLInputElement>) => void);
}

