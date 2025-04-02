export type Company = {
    id: number;
    contactId: number;
    name: string;
    shortName: string;
    businessEntity: BusinessType;
    contract: {
        no: number;
        issue_date: string
    };
    type: TypeOfCompany[];
    status: string;
    createdAt: string;
    updatedAt: string;
    photo: Photo[]
}

export  type BusinessType = 'Partnership' | 'Limited Liability Company' | 'Sole Proprietorship';

export type TypeOfCompany = 'funeral_home' | 'logistics_service' | 'burial_care_contractor';

export type Photo = {
    name: string;
    filepath: string;
    thumbpath: string;
    createdAt: string;
}

export type Contact = {
    id: number;
    lastname: string;
    firstname: string;
    phone: string;
    email: string;
    createdAt: string;
    updatedAt: string
}

export type CompanyUpdate = Pick<Company, "name" | "businessEntity" | "contract" | "type" | "shortName">;


export type ContactUpdate = Pick<Contact, "lastname" | "firstname" | "phone" | "email" >;