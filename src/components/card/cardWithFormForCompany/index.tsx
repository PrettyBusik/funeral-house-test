import {Form} from "../../form/index.tsx";
import {Input} from "../../input/index.tsx";
import {CardWithFormForCompanyProps} from "/types.ts";
import "./styles.css";
import React, {useState} from "react";

export const CardWithFormForCompany = (props:CardWithFormForCompanyProps) => {
    const [formData, setFormData] = useState({
        contract: {
            no: props.company.contract.no,
            issue_date: props.company.contract.issue_date
        },
        businessEntity: props.company.businessEntity,
        type: props.company.type,
    });

    const handleChangeContractNo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target;
        setFormData((prev) => ({ ...prev, contract: {
                ...prev.contract,
                no: value,
            } }));
    };
    const handleChangeContractIssueDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target;
        setFormData((prev) => ({ ...prev, contract: {
                ...prev.contract,
                issue_date: value,
            } }));
    };
    const handleChangeBusinessEntity = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target;
        setFormData((prev) => ({ ...prev, businessEntity: value, }));
    };
    const handleChangeCompanyType = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target;
        setFormData((prev) => ({ ...prev, type: value }));
    };

    return <div className='card-container'>
        <Form header='Company Details'>
            <div className='fields'>
                <div className='input-container'>
                    <span className='input-label input-label-long'>Agreement number:</span>
                    <Input
                           value={formData.contract.no}
                           onChange={handleChangeContractNo}/>
                </div>
                <div className='input-container'>
                    <span className='input-label input-label-short'>Date:</span>
                    <Input
                           value={formData.contract.issue_date}
                           onChange={handleChangeContractIssueDate}/>
                </div>
            </div>
            <div className='input-container'>
                <span className='input-label input-label-long'>Business entity:</span>
                <Input
                       value={formData.businessEntity}
                       onChange={handleChangeBusinessEntity}/>
            </div>
            <div className='input-container'>
                <span className='input-label input-label-long'>Company type:</span>
                <Input
                       value={formData.type}
                       onChange={handleChangeCompanyType}/>
            </div>
        </Form>
    </div>
}