import {Company, CompanyUpdate, Contact, ContactUpdate} from "../types/types";
import {DELETE} from "mobx/dist/types/observablemap";

export class BackendApi {
    private auth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVVNFUk5BTUUiLCJpYXQiOjE3NDM2MDUzNjUsImV4cCI6MTc0NDIxMDE2NX0.1MnH7HqrMrhTHdMs7bzSnEb9Kqet9rrwUiopQIvAwD8';
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

    updateInfoForCompany = (data: CompanyUpdate, id: number) => {
        return fetch(`${this.URL}/companies/${id}`,
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

    updateInfoForContact = (data: ContactUpdate, id: number) => {
        return fetch(`${this.URL}/contacts/${id}`,
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

    deleteCompany = (id: number) => {
        return fetch(`${this.URL}/companies/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${this.auth}`,
                }
            })
    }
}