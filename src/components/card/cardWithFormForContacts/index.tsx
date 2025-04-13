import {Header} from "../../header/index.tsx";
import {TypeForHeader} from "../../header/types.ts";
import {Button} from "../../buttons/button/index.tsx";
import {StylesForButton} from "../../buttons/button/types.ts";
import {Icon} from "../../icon/index.tsx";
import {CardWithFormForContactsProps} from "./types.ts";
import {Input} from "../../input/index.tsx";
import {BackendApi} from "../../../servises/backendApi.ts";
import React, {useState} from "react";

export const CardWithFormForContacts=(props:CardWithFormForContactsProps)=>{
    console.log(props.contact.id)
    const [formData, setFormData] = useState({
        personName: `${props.contact.firstname} ${props.contact.lastname}`||"",
        phone: props.contact.phone||"",
        email: props.contact.email||"",
    });

    const handleChange = (fieldName, value) => {
        setFormData((prev) => ({
            ...prev, [fieldName]:  value
        }));
    };

    const handelSubmit=()=>{
        const api= new BackendApi();
        const [firstName, lastName] = formData.personName.split(" ");
        const updatedContact={
            lastname:lastName,
            firstname:firstName,
            phone:formData.phone,
            email:formData.email,
        }
        api.updateInfoForContact(updatedContact,props.contact.id )
            .then((contact)=>{
                props.onContactDataUpdated(contact)
            })
    }
    return<div className='card-container'>
        <Header
            text='Contacts'
            type={TypeForHeader.secondary}>
            <Button text='Save changes' style={StylesForButton.flattened} onClick={handelSubmit}
                    icon={<Icon nameForIcon={'check'}/>}/>
            <Button text='Cancel' style={StylesForButton.flattened} onClick={props.onCancel} icon={<Icon nameForIcon={'cancel'}/>}/>
        </Header>
        <div className='fields'>
            <div className='fields-item fields-item-long'>
                <span className='label'>Responsible person:</span>
            </div>
            <div className='fields-item'>
                <Input
                    value={formData.personName}
                    onChange={(e)=>{handleChange('personName',e.target.value )}}/>
            </div>
        </div>
        <div className='fields'>
            <div className='fields-item fields-item-long'>
                <span className='label'>Phone number:</span>
            </div>
            <div className='fields-item'>
                <Input
                    value={formData.phone}
                    onChange={(e)=>{handleChange('phone',e.target.value )}}/>
            </div>
        </div>
        <div className='fields'>
            <div className='fields-item fields-item-long'>
                <span className='label'>E-mail:</span>
            </div>
            <div className='fields-item'>
                <Input
                    value={formData.email}
                    onChange={(e)=>{handleChange('email',e.target.value )}}/>
            </div>
        </div>
    </div>
}