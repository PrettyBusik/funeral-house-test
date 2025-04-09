import {Header} from "../../components/header/index.tsx";
import {BackendApi} from "../../servises/backendApi.ts";
import './styles.css'
import {Card} from "../../components/card/index.tsx";
import {Button} from "../../components/buttons/button/index.tsx";
import {StylesForButton} from "../../components/buttons/button/types.ts";
import {CardWithPhoto} from "../../components/card/cardWithPhoto/index.tsx";
import {Icon} from "../../components/icon/index.tsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import React from "react";

export const OrganizationPage = () => {
    const [company, setCompany] = useState(null); // Состояние для хранения данных компании
    const [contact, setContact] = useState(null); // Состояние для хранения данных контакта
    const [error, setError] = useState(null); // Состояние для ошибки
    const [loading, setLoading] = useState(true); // Состояние для загрузки
    const [photos, setPhotos]= useState([]);


    const api = new BackendApi();
    const {id} = useParams();
    const navigate = useNavigate();

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
    };

    const handelDeletePhoto = () => {

    }

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file || !company) return;

        try {
           const photo =await api.postImage(company.id, file); // отправляем
            setPhotos([...photos,photo]); // обновляем стейт
        } catch (err) {
        }
    };



    return <>
        <Header text={`${company?.name}`} onDelete={handleDeleteOrganization}/>
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
                           headerButton={
                               <label className='button button-flattened'>
                                   <Icon nameForIcon={'add'}/>
                                   &nbsp;Add
                                   <input className='inputForFiles' type='file'
                                          onChange={handleFileUpload}/>
                               </label>}
            />
        </div>
    </>

}

