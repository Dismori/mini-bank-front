import axios from "axios";

export default class PostService {
    static async getAll() {
        const response = await axios.get('http://localhost:3001/getAccountsInfo', {headers: {ClientId: 12345}})
        console.log('getAll', response)
        return response.data;
    }

    static async createAccount() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log('createAccount', response)
        return response.data;
    }

    static updateAccount(prop) {
        axios.post('/', {
            id: prop.id,
            name: prop.name
        }).then()
    }

}