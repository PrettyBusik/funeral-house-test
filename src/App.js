import './App.css';
import {OrganizationPage} from "./pages/orgaanization/orgsnizationPage.tsx";
import {Menu} from "./menu/index.tsx";


function App() {


    const company={
        "id": 12,
        "contactId": 16,
        "name": "Eternal Rest Funeral Home",
        "shortName": "ERFH",
        "businessEntity": "Partnership",
        "contract": {
            "no": "1624/2-24",
            "issue_date": "2024-03-12T00:00:00Z"
        },
        "type":  ["funeral home", " logistics services", " burial care contractor"],
        "status": "active",
        "photo": [
            {
                "name":"0b8fc462dcabf7610a91.jpg",
                "filepath": "https://test-task-api.allfuneral.com/0b8fc462dcabf7610a91.jpg",
                "thumbpath": "https://test-task-api.allfuneral.com/0b8fc462dcabf7610a91_thumb.jpg",
                "createdAt": "2024-12-17T08:00:00Z",
            }
        ],
        "createdAt": "2020-11-21T08:03:00Z",
        "updatedAt": "2020-11-23T09:30:00Z"
    }

  return (
    <div className="App">



        <div style={{'margin':'50px'}}></div>
      <div style={{'margin':'50px'}}></div>
      <OrganizationPage company={company}/>
        <div style={{'margin':'50px'}}></div>
        <Menu/>
    </div>
  );
}

export default App;
