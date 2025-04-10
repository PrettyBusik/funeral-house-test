import {Header} from "../../components/header/index.tsx";
import {BackendApi} from "../../servises/backendApi.ts";
import './styles.css'
import {Card} from "../../components/card/index.tsx";
import {Button} from "../../components/buttons/button/index.tsx";
import {StylesForButton} from "../../components/buttons/button/types.ts";
import {CardWithPhoto} from "../../components/card/cardWithPhoto/index.tsx";
import {Icon} from "../../components/icon/index.tsx";
import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Modal} from "../../components/modal/index.tsx";
import {Input} from "../../components/input/index.tsx";

export const OrganizationPage = () => {
    const [company, setCompany] = useState(null); // Состояние для хранения данных компании
    const [contact, setContact] = useState(null); // Состояние для хранения данных контакта
    const [error, setError] = useState(null); // Состояние для ошибки
    const [loading, setLoading] = useState(true); // Состояние для загрузки
    const [photos, setPhotos] = useState([]);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [organizationName, setOrganizationName] = useState('');


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
        const updatedPhotos = photos.filter((photo) => photo.name !== photoName);
        setPhotos(updatedPhotos);
        api.deletePhoto(company.id, photoName)
    }

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file || !company) return;

        try {
            const photo = await api.postImage(company.id, file); // отправляем
            setPhotos((prevPhotos) => [...prevPhotos, photo]); // обновляем стейт
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
            await api.updateInfoForCompany(company.id, { name: organizationName });
            setIsEditModalOpen(false);
            setCompany({ ...company, name: organizationName });
        } catch (error) {
            console.error("Ошибка при обновлении имени организации", error);
        }
    };



    return <>
        <Header text={`${company?.name}`} onDelete={handleOpenDeleteModal} onEdit={handleOpenEditeModal}/>
        <div className='content-organization'>
            <Card
                header='Company detailes'
                data={{
                    "Agreement:": `${company.contract.no} / ${company.contract.issue_date}`,
                    "Business entity:": company.businessEntity,
                    "Company type:": company.type
                }}
                headerButton={<Button text='Edit' icon={<Icon nameForIcon={'edit'}/>}
                                      style={StylesForButton.flattened}/>}
            />

            <Card header='Contacts'
                  data={{
                      'Responsible person:': `${contact.firstname} ${contact.lastname}`,
                      'Phone number:': `${contact.phone}`,
                      'E-mail::': `${contact.email}`
                  }}
                  headerButton={<Button text='Edit' icon={<Icon nameForIcon={'edit'}/>}
                                        style={StylesForButton.flattened}/>}
            />

            <CardWithPhoto photos={photos}
                           header='Photos'
                           onDeletePhoto={handelDeletePhoto}
                           headerButton={
                               <label className='button button-flattened'>
                                   <Icon nameForIcon={'add'}/>
                                   &nbsp;Add
                                   <input className='inputForFiles' type='file'
                                          onChange={handleFileUpload}/>
                               </label>}
            />
        </div>

        {isDeleteModalOpen && (
            <Modal header='Remove the Organization?'
                   subtitle='Are you sure you want to remove this Organozation?'
                   content={
                       <>
                           <div className="modal-buttons">
                               <Button style={StylesForButton.outline}
                                       text='No'
                                       onClick={() => setIsDeleteModalOpen(false)}/>
                               <Button style={StylesForButton.primary}
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
                           <Input value={organizationName}
                                  onChange={(e) => setOrganizationName(e.target.value)}/>
                           <div className="modal-buttons">
                               <Button style={StylesForButton.outline}
                                       text='Cancel'
                                       onClick={() => setIsEditModalOpen(false)}/>
                               <Button style={StylesForButton.primary}
                                       text='Save changes'
                                       onClick={handelUpdatingCompanyName}/>
                           </div>
                       </>
                   }/>
        )}

    </>

}

