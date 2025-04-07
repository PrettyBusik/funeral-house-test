import './App.css';
import {Button} from "./components/buttons/button/index.tsx";
import {TypeOfButton} from "./components/buttons/button/types.ts"
import {Input} from "./components/input/index.tsx";
import {BackendApi} from "./servises/backendApi.ts";
import {OrganizationPage} from "./pages/orgaanization/orgsnizationPage.tsx";


function App() {
//   const request= new BackendApi();
//     request.getCompany(12);
//   request.getContact(16);
//
//   const updatedCompany = {
//     name: "New Name",
//     shortName: "Short Name",
//     businessEntity: "Partnership",
//     contract: {
//       no: "12345",
//       issue_date: "2025-04-01",
//     },
//   };
//
//   request.updateInfoForCompany(updatedCompany, 12);
//
//
//   const updatedContact = {
//     lastname: "New Name",
//     firstname: "Short Name",
//     phone: "20200003000",
//     email: "fff@j.com"
//   };
//
//   request.updateInfoForContact(updatedContact, 16);
//
// request.deleteCompany(12);
// request.getCompany(12);
  return (
    <div className="App">
      <Button text={'Label'} type={TypeOfButton.primary}/>
        <div style={{'margin':'50px'}}></div>
        <Input businessEntity='Partnership' type={[]}/>
      <div style={{'margin':'50px'}}></div>
      <OrganizationPage/>
    </div>
  );
}

export default App;
