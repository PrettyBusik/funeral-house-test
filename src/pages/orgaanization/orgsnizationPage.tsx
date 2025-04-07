import {Header} from "../../components/header/index.tsx";
import {BackendApi} from "../../servises/backendApi.ts";
import './styles.css'
import {Card} from "../../components/card/index.tsx";
import {Button} from "../../components/buttons/button/index.tsx";
import {TypeOfButton} from "../../components/buttons/button/types.ts";
import {CardWithPhoto} from "../../components/card/cardWithPhoto/index.tsx";

export const OrganizationPage = () => {
    const api = new BackendApi();

    return <div className='container-page'>
        <Header text='Eternal Rest Funeral Home'
                onDelete={() => api.deleteCompany(12)}
                type='main'
        />

        <Card header='Company detailes'
              data={{
                  'Agreement': '1010',
                  'Business entity': 'PartnerShip',
                  'Company type:': 'Funeral Home, Logistics services'
              }}
              headerButton={<Button text='Edit' type={TypeOfButton.flattened} onClick={() => {
                  console.log(12)
              }}/>}
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
                       headerButton={<Button text='Add' type={TypeOfButton.flattened} onClick={() => {
                           console.log(12)
                       }}/>}
        />
    </div>
}