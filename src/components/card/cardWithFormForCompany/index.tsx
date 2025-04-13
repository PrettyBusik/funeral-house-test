
import {Input} from "../../input/index.tsx";
import {CardWithFormForCompanyProps} from "/types.ts";
import "./styles.css";
import React, {useState} from "react";
import {Header} from "../../header/index.tsx";
import {TypeForHeader} from "../../header/types.ts";
import {Button} from "../../buttons/button/index.tsx";
import {StylesForButton} from "../../buttons/button/types.ts";
import {Icon} from "../../icon/index.tsx";
import {BackendApi} from "../../../servises/backendApi.ts";

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

    const handelSubmit=()=>{
        const api= new BackendApi();
        const updatedCompany={
            name:props.company.name,
            shortName:props.company.shortName,
            contract:{
                no:formData.contractNo,
                issue_date:formData.contractIssue_date
            },
            businessEntity:formData.businessEntity,
            type:formData.type
        }
        api.updateInfoForCompany(props.company.id,updatedCompany )
            .then((company)=>{
                props.onCompanyDataUpdated(company)
            })
    }
    return <div className='card-container'>
        <Header
            text='Company Details'
            type={TypeForHeader.secondary}>
            <Button text='Save changes' style={StylesForButton.flattened} onClick={handelSubmit}
                    icon={<Icon nameForIcon={'check'}/>}/>
            <Button text='Cancel' style={StylesForButton.flattened} onClick={props.onCancel} icon={<Icon nameForIcon={'cancel'}/>}/>
        </Header>
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
    </div>
}