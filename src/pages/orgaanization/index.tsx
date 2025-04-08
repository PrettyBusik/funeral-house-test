import {Header} from "../../components/header/index.tsx";
import {BackendApi} from "../../servises/backendApi.ts";
import './styles.css'
import {Card} from "../../components/card/index.tsx";
import {Button} from "../../components/buttons/button/index.tsx";
import {StylesForButton} from "../../components/buttons/button/types.ts";
import {CardWithPhoto} from "../../components/card/cardWithPhoto/index.tsx";
import {OrganizationProps} from "./typse.ts";
import {Icon} from "../../components/icon/index.tsx";

export const OrganizationPage = (props:OrganizationProps) => {
    const api = new BackendApi();


    return<>
        <Header text={`${props?.company?.name}`}
                onDelete={() => api.deleteCompany(props.company.id)}
                type='main'
        />
        <div className='content-organization'>
            <Card
                header='Company detailes'
                data={{
                    "Agreement:":`${props.company.contract.no} / ${props.company.contract.issue_date}`,
                    "Business entity:":props.company.businessEntity,
                    "Company type:":props.company.type
                }}
                headerButton={<Button text='Edit' icon={<Icon nameForIcon={'edit'} />} style={StylesForButton.flattened}/>}
            />

            <Card header='Contacts'
                  data={{
                      'Responsible person:': 'David Rosenberg',
                      'Phone number:': '+1 702 555 2345',
                      'E-mail::': 'david_rosenberg88@gmail.com'
                  }}
                  headerButton={<Button text='Edit' icon={<Icon nameForIcon={'edit'} />} style={StylesForButton.flattened}/>}
            />

            <CardWithPhoto data={[
                {name: '0b8fc462dcabf7610a91.jpg',
                    filepath: 'https://i.ytimg.com/vi/3zIv_6iz_Nw/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gEygXMA8=&rs=AOn4CLARoFNuubB6o80V3pTWn6laeZX0Fw',
                    thumbpath: 'https://i.ytimg.com/vi/3zIv_6iz_Nw/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gEygXMA8=&rs=AOn4CLARoFNuubB6o80V3pTWn6laeZX0Fw',
                    createdAt: '123'},
                {
                    name: '0b8fc462dcabf7610a91.jpg',
                    filepath: 'https://www.reconnectwithnature.org/getmedia/6ae123ba-b242-45c3-b7d6-6906663cfe4b/Double-rainbow-Shutterstock.jpg?width=1500&height=1001&ext=.jpg',
                    thumbpath: 'https://www.reconnectwithnature.org/getmedia/6ae123ba-b242-45c3-b7d6-6906663cfe4b/Double-rainbow-Shutterstock.jpg?width=1500&height=1001&ext=.jpg',
                    createdAt: '123'
                }
            ]}
                           header='Photos'
                           headerButton={<Button text='Add' icon={<Icon nameForIcon={'add'} />} style={StylesForButton.flattened}/>}
            />
        </div>
    </>

}