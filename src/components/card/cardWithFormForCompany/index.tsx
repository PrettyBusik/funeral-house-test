import {Form} from "../../form/index.tsx";
import {Input} from "../../input/index.tsx";
import {CardWithFormForCompanyProps} from "/types.ts";
import "./styles.css";
import React, {useState} from "react";

export const CardWithFormForCompany = (props: CardWithFormForCompanyProps) => {
    const [formData, setFormData] = useState({
        contractNo: props.company.contract.no||"",
        contractIssue_date: props.company.contract.issue_date||"",
        businessEntity: props.company.businessEntity||"",
        type: props.company.type||"",
    });

    const handleChange = (fieldName, value) => {
        setFormData((prev) => ({
            ...prev, [fieldName]:  value
        }));
    };

    return <div className='card-container'>
        <Form header='Company Details'>
            <div className='fields'>
                <div className='fields-item fields-item-long'>
                    <span className='label'>Agreement number:</span>
                </div>
                <div className='fields-item'>
                    <Input
                        value={formData.contractNo}
                        onChange={(e)=>{handleChange('contractNo',e.target.value )}}/>
                </div>

                <div className='fields-item fields-item-short'>
                    <span className='label'>Date:</span>

                </div>
                <div className='fields-item'>
                    <Input
                        value={formData.contractIssue_date}
                        onChange={(e)=>{handleChange('contractIssue_date',e.target.value )}}/>
                </div>
            </div>
            <div className='fields'>
                <div className='fields-item fields-item-long'>
                    <span className='label'>Business entity:</span>
                </div>
                <div className='fields-item'>
                    <Input
                        value={formData.businessEntity}
                        onChange={(e)=>{handleChange('businessEntity',e.target.value )}}/>
                </div>

            </div>
            <div className='fields'>
                <div className='fields-item fields-item-long'>
                    <span className='label'>Company type:</span>
                </div>
                <div className='fields-item'>
                    <Input
                        value={formData.type}
                        onChange={(e)=>{handleChange('type',e.target.value )}}/>
                </div>
            </div>
        </Form>
    </div>
}