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
        const response = await axios.get('http://localhost:3001/getAccountsInfo', {
            headers: { clientId: 12345 }
        })
        console.log('getAll', response)
        return response;
    }

    static createAccount() {
        const response = axios.post('http://localhost:3001/create', {}, {
            headers: { clientId: 12345 }
        })
        console.log('create', response)
    }

    static closeAccount(id) {
        const response = axios.delete('http://localhost:3001/delete', {
            headers: { accountId: id, clientId: 12345 }
        })

        console.log('closeAccount', response)
        return response.data;
    }

    static updateAccount(id, sum) {
        const response = axios.put('http://localhost:3001/deposit', {
            accountId: id,
            amount: sum
        }, {
            headers: { clientId: 12345 }
        })
        console.log('update', sum, id)
    }

}