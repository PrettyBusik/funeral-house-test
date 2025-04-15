import {Header} from "../../components/header/index.tsx";
import {BackendApi} from "../../servises/backendApi.ts";
import './styles.css'
import {Card} from "../../components/card/index.tsx";
import {Button} from "../../components/buttons/button/index.tsx";
import {SizesOfButton, StylesForButton} from "../../components/buttons/button/types.ts";
import {CardWithPhoto} from "../../components/card/cardWithPhoto/index.tsx";
import {Icon} from "../../components/icon/index.tsx";
import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Modal} from "../../components/modal/index.tsx";
import {Input} from "../../components/input/index.tsx";
import {TypeForHeader} from "../../components/header/types.ts";
import {CardWithFormForCompany} from "../../components/card/cardWithFormForCompany/index.tsx";
import {CardWithFormForContacts} from "../../components/card/cardWithFormForContacts/index.tsx";
import {BusinessTypeOptions, TypeOfCompanyOptions} from "../../types/types.ts";

export const OrganizationPage = () => {
    const [company, setCompany] = useState(null); // Состояние для хранения данных компании
    const [contact, setContact] = useState(null); // Состояние для хранения данных контакта
    const [error, setError] = useState(null); // Состояние для ошибки
    const [loading, setLoading] = useState(true); // Состояние для загрузки
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [organizationName, setOrganizationName] = useState('');
    const [isEditingCompanyFormOpened, setIsEditingCompanyFormOpened] = useState(false);
    const [isEditingContactsFormOpened, setIsEditingContactsFormOpened] = useState(false);

    const navigate = useNavigate();
    const api = new BackendApi();
    const {id} = useParams();

    const goToOrganizationList = () => {
        navigate("/");
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const companyInfo = await api.getCompany(id);
                setCompany(companyInfo);

                const contactInfo = await api.getContact(companyInfo.contactId);
                setContact(contactInfo);

                setOrganizationName(companyInfo.name)
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    // Если произошла ошибка
    if (error) {
        return <p>Company doesn't exist</p>;
    }

    const handleDeleteOrganization = async () => {
        await api.deleteCompany(company.id);
        goToOrganizationList();
        setIsDeleteModalOpen(false);
    };

    const handelDeletePhoto = (photoName: string) => {
        const updatedPhotos = company.photos.filter((photo) => photo.name !== photoName);
        setCompany((prev) => {
            return {...prev, photos: updatedPhotos}
        })
        api.deletePhoto(company.id, photoName)
    }

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file || !company) return;

        try {
            const photo = await api.postImage(company.id, file);
            setCompany((prev) => {
                return {...prev, photos: [...prev.photos, photo]}
            })
        } catch (err) {
        }
    };

    const handleOpenDeleteModal = () => {
        setIsDeleteModalOpen(true);
    };

    const handleOpenEditeModal = () => {
        setIsEditModalOpen(true);
    };

    const handelUpdatingCompanyName = async () => {
        try {
            await api.updateInfoForCompany(company.id, {name: organizationName});
            setIsEditModalOpen(false);
            setCompany({...company, name: organizationName});
        } catch (error) {
            console.error("Ошибка при обновлении имени организации", error);
        }
    };

    const onCompanyFormSubmitted = (company) => {
        setCompany(company)
        setIsEditingCompanyFormOpened(false)
    }

    const onContactFormSubmitted = (contact) => {
        setContact(contact)
        setIsEditingContactsFormOpened(false)
    }

    return <>
        {/*<Header text={`${company?.name}`} onDelete={handleOpenDeleteModal} onEdit={handleOpenEditeModal}/>*/}
        <Header text={`${company?.name}`}
                type={TypeForHeader.main}>
            <Button onClick={handleOpenEditeModal} style={StylesForButton.icon}
                    icon={<Icon nameForIcon={'edit'}/>}/>
            <Button onClick={handleOpenDeleteModal} style={StylesForButton.icon}
                    icon={<Icon nameForIcon={'trash'}/>}/>
        </Header>
        <div className='content-organization'>
            <Card
                data={{
                    "Agreement:": `${company.contract.no} / ${company.contract.issue_date}`,
                    "Business entity:": BusinessTypeOptions[company.businessEntity],
                    "Company type:": company.type.map((type)=> TypeOfCompanyOptions[type]).join(', ')
                }}
            >
                <Header text='Company detailes' type={TypeForHeader.secondary}>
                    <Button text='Edit'
                            style={StylesForButton.flattened}
                            onClick={() => setIsEditingCompanyFormOpened(true)}
                            icon={<Icon nameForIcon='edit'/>}/>
                </Header>
            </Card>

            <Card
                data={{
                    'Responsible person:': `${contact.firstname} ${contact.lastname}`,
                    'Phone number:': `${contact.phone}`,
                    'E-mail::': `${contact.email}`
                }}
            >
                <Header text='Contacts' type={TypeForHeader.secondary}>
                    <Button text='Edit'
                            style={StylesForButton.flattened}
                            onClick={() => setIsEditingContactsFormOpened(true)}
                            icon={<Icon nameForIcon='edit'/>}/>
                </Header>
            </Card>


            <CardWithPhoto photos={company.photos}
                           onDeletePhoto={handelDeletePhoto}>
                <Header text='Photos' type={TypeForHeader.secondary}>
                    <label className='button button-flattened button-small'>
                        <Icon nameForIcon={'add'}/> Add
                        <input className='inputForFiles' type='file'
                               onChange={handleFileUpload}/>
                    </label>
                </Header>
            </CardWithPhoto>
        </div>

        {isDeleteModalOpen && (
            <Modal header='Remove the Organization?'
                   subtitle='Are you sure you want to remove this Organozation?'
                   content={
                       <>
                           <div className="modal-buttons">
                               <Button style={StylesForButton.outline}
                                       size={SizesOfButton.big}
                                       fullWidth
                                       text='No'
                                       onClick={() => setIsDeleteModalOpen(false)}/>
                               <Button style={StylesForButton.primary}
                                       size={SizesOfButton.big}
                                       fullWidth
                                       text='Yes, remove'
                                       onClick={handleDeleteOrganization}/>
                           </div>
                       </>
                   }/>
        )}

        {isEditModalOpen && (
            <Modal header="Specify the Organization's name"
                   content={
                       <>
                           <Input
                               value={organizationName}
                               onChange={(e) => setOrganizationName(e.target.value)}/>
                           <div className="modal-buttons">
                               <Button style={StylesForButton.outline}
                                       size={SizesOfButton.big}
                                       fullWidth
                                       text='Cancel'
                                       onClick={() => setIsEditModalOpen(false)}/>
                               <Button style={StylesForButton.primary}
                                       size={SizesOfButton.big}
                                       fullWidth
                                       text='Save changes'
                                       onClick={handelUpdatingCompanyName}/>
                           </div>
                       </>
                   }/>
        )}
        <div style={{marginBottom: '50px'}}></div>
        {isEditingCompanyFormOpened && <CardWithFormForCompany company={company}
                                                               onCancel={() => setIsEditingCompanyFormOpened(false)}
                                                               onCompanyDataUpdated={onCompanyFormSubmitted}/>}

        <div style={{marginBottom: '50px'}}></div>
        {isEditingContactsFormOpened && <CardWithFormForContacts contact={contact}
                                                                 onContactDataUpdated={onContactFormSubmitted}
                                                                 onCancel={()=>{setIsEditingContactsFormOpened(false)}}/>}



    </>

}

