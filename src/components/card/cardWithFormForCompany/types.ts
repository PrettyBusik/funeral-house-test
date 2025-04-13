import {Company} from "../../../types/types.ts";

export type CardWithFormForCompanyProps ={
    company:Company;
    onCancel: () => void
    onCompanyDataUpdated: (Company) => void
}