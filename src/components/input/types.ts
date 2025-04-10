import {TypeOfCompany} from "../../types/types";

export type InputProp={
    value:string;
    onChange:()=> Promise<void>;
    // businessEntity:string;
    // type:TypeOfCompany[]
}

