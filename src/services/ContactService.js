import axios from 'axios';


export class ContactService{
    static server_URL = `http://localhost:9000`

    static getAllContacts(){
        let data_URL = `${this.server_URL}/contacts`
        return axios.get(data_URL)
    }

    static getContact(id){
        let data_URL = `${this.server_URL}/contacts/${id}`
        return axios.get(data_URL)
    }

    static createContact(contact){
        let data_URL = `${this.server_URL}/contacts`
        return axios.post(data_URL, contact)
    }

    static updateContact(contact , id){
        let data_URL = `${this.server_URL}/contacts/${id}`
        return axios.put(data_URL, contact)
    }

    static deleteContact(id){
        let data_URL = `${this.server_URL}/contacts/${id}`
        return axios.delete(data_URL)
    }

    static getAllGroups(){
        let data_URL = `${this.server_URL}/groups`
        return axios.get(data_URL)
    }

    static getGroup(contact){
        let groupId = contact.groupId;
        let data_URL = `${this.server_URL}/groups/${groupId}`
        return axios.get(data_URL)
    }
    
}