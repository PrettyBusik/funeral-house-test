import { Contact} from "../../../types/types";

export type CardWithFormForContactsProps={
    companyId:number,
    contact:Contact,
    onContactDataUpdated: (Contact) => void,
    onCancel:()=> void;
}