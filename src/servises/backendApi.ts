import {Company, CompanyUpdate, Contact, ContactUpdate, Photo} from "../types/types";
import {DELETE} from "mobx/dist/types/observablemap";

export class BackendApi {
    private auth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVVNFUk5BTUUiLCJpYXQiOjE3NDQyODIzMjksImV4cCI6MTc0NDg4NzEyOX0.XvqAd2mhX9uFRAlWaAGeS0sDOrnamkFtsdty_HBMMGA';
    private URL = 'https://test-task-api.allfuneral.com';

    checkResponse = <T>(res: Response): Promise<T> =>
        res.ok ? res.json() : res.json().then((err) => Promise.reject(err));


    getCompany = (id: number): Promise<Company> => {
        return fetch(`${this.URL}/companies/${id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.auth}`
                }
            })
            .then((res) => this.checkResponse(res))
    }

    getContact = (id: number): Promise<Contact> => {
        return fetch(`${this.URL}/contacts/${id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.auth}`
                }
            })
            .then((res) => this.checkResponse(res))
    }

    updateInfoForCompany = (companyId: number, data: CompanyUpdate) => {
        const body = {
            name: data.name,
            shortName: data.shortName,
            businessEntity: data.businessEntity,
            contract: {
                no: data.contract.no,  // предполагаю, что данные могут быть в contractNo и contractDate
                issue_date: data.contract.issue_date,  // так как в документации ожидается строка с датой
            },
            type: data.type,  // массив типов
        };
        return fetch(`${this.URL}/companies/${companyId}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.auth}`,
                },
                body: JSON.stringify(body)
            })
            .then((res) => this.checkResponse(res))
    }

    updateInfoForContact = (data: ContactUpdate, contactId: number) => {
        return fetch(`${this.URL}/contacts/${contactId}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.auth}`,
                },
                body: JSON.stringify(data)
            })
            .then((res) => this.checkResponse(res))
    }

    postImage=(idCompany:number, photo:File):Promise<Photo>=>{
        const formData = new FormData();
        formData.append('file', photo);
        return fetch(`${this.URL}/companies/${idCompany}/image`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.auth}`,
                },
                body: formData
            })
            .then((res) => this.checkResponse(res))
    }

    deleteCompany = (id: number) => {
        return fetch(`${this.URL}/companies/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${this.auth}`,
                }
            })
    }

    deletePhoto= (idCompany:number, photoName:string)=>{
        return fetch(`${this.URL}/companies/${idCompany}/image/${photoName}`,
            {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${this.auth}`,
                }
            })
    }
}