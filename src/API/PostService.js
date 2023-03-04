import axios from "axios";

export default class PostService {

    static authHeader() {
        let user = JSON.parse(localStorage.getItem('user'));
    
        if (user && user.authdata) {
            return { 'Authorization': 'Basic ' + user.authdata };
        } else {
            return {};
        }
    }

    static async getAll() {
        const response = await axios.get('http://localhost:3001/getAccountsInfo', {headers: {clientId: 12345}})
        console.log('getAll', response)
        return response;
    }

    static async createAccount() {
        const response = await axios.get('http://localhost:3001/createAccount', {headers: {clientId: 12345}})
        console.log('createAccount', response)
        return response.data;
    }

    static async closeAccount() {
        const response = await axios.get('http://localhost:3001/closeAccount', {headers: {clientId: 12345}})
        console.log('closeAccount', response)
        return response.data;
    }

    static updateAccount(prop) {
        axios.post('/', {
            id: prop.id,
            name: prop.name
        }).then()
    }



}