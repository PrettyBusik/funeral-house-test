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

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file || !company) return;

        api.postImage(company.id, file)
            .then(() => {
                console.log("Фото отправлено");
                // можно перезагрузить список фото, если нужно
            })
            .catch((err) => {
                console.error("Ошибка загрузки фото:", err);
            });
    };

    // const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = event.target.files?.[0];
    //     if (!file || !company) return;
    //
    //     if (file.size > 5 * 1024 * 1024) { // 5MB лимит
    //         alert("Файл слишком большой. Пожалуйста, выбери файл до 5MB.");
    //         return;
    //     }
    //
    //     try {
    //         await api.postImage(company.id, file);
    //         const updatedPhotos = await api.getCompanyPhotos(company.id);
    //         setPhotos(updatedPhotos);
    //     } catch (err) {
    //         console.error("Ошибка загрузки:", err);
    //     }
    // };



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
            {/*<CardWithPhoto photos={company.photo ?? []}*/}
            {/*               header='Photos'*/}
            {/*               headerButton={<Button text='Add' icon={<Icon nameForIcon={'add'} />} style={StylesForButton.flattened}/>}*/}
            {/*/>*/}

            {/*<CardWithPhoto photos={[*/}
            {/*    {name: '0b8fc462dcabf7610a91.jpg',*/}
            {/*        filepath: 'https://i.ytimg.com/vi/3zIv_6iz_Nw/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gEygXMA8=&rs=AOn4CLARoFNuubB6o80V3pTWn6laeZX0Fw',*/}
            {/*        thumbpath: 'https://i.ytimg.com/vi/3zIv_6iz_Nw/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gEygXMA8=&rs=AOn4CLARoFNuubB6o80V3pTWn6laeZX0Fw',*/}
            {/*        createdAt: '123'},*/}
            {/*    {*/}
            {/*        name: '0b8fc462dcabf7610a91.jpg',*/}
            {/*        filepath: 'https://www.reconnectwithnature.org/getmedia/6ae123ba-b242-45c3-b7d6-6906663cfe4b/Double-rainbow-Shutterstock.jpg?width=1500&height=1001&ext=.jpg',*/}
            {/*        thumbpath: 'https://www.reconnectwithnature.org/getmedia/6ae123ba-b242-45c3-b7d6-6906663cfe4b/Double-rainbow-Shutterstock.jpg?width=1500&height=1001&ext=.jpg',*/}
            {/*        createdAt: '123'*/}
            {/*    }*/}
            {/*]}*/}
            {/*               header='Photos'*/}
            {/*               headerButton={<Button text='Add' icon={<Icon nameForIcon={'add'} />} style={StylesForButton.flattened}/>}*/}
            {/*/>*/}

            <CardWithPhoto photos={[
                {
                    name: '0b8fc462dcabf7610a91.jpg',
                    filepath: 'https://i.ytimg.com/vi/3zIv_6iz_Nw/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gEygXMA8=&rs=AOn4CLARoFNuubB6o80V3pTWn6laeZX0Fw',
                    thumbpath: 'https://i.ytimg.com/vi/3zIv_6iz_Nw/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gEygXMA8=&rs=AOn4CLARoFNuubB6o80V3pTWn6laeZX0Fw',
                    createdAt: '123'
                },
                {
                    name: '0b8fc462dcabf7610a91.jpg',
                    filepath: 'https://www.reconnectwithnature.org/getmedia/6ae123ba-b242-45c3-b7d6-6906663cfe4b/Double-rainbow-Shutterstock.jpg?width=1500&height=1001&ext=.jpg',
                    thumbpath: 'https://www.reconnectwithnature.org/getmedia/6ae123ba-b242-45c3-b7d6-6906663cfe4b/Double-rainbow-Shutterstock.jpg?width=1500&height=1001&ext=.jpg',
                    createdAt: '123'
                }
            ]}
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

