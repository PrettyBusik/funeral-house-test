import { Contact} from "../../../types/types";

export type CardWithFormForContactsProps={
    contact:Contact,
    onContactDataUpdated: (Contact) => void,
    onCancel:()=> void;
}