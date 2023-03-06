import axios from "axios";

export default class PostService {

    //Логин
    static login(login, pass, callback) {
        axios.get('http://localhost:3002/login', {
            headers: { Authorization: 'Basic ' + window.btoa(login + ':' + pass) }
        }).then(response => {
            callback(response)
            console.log(response);
        }).catch(err => {
            console.log(err);
        })
    }

    //получить все счета и баланс по счетам клиента
    static async getAll() {
        const clientIdValue = localStorage.getItem('clientId')
        const response = await axios.get('http://localhost:3001/getAccountsInfo', {
            headers: { 'clientId': clientIdValue }
        })
        console.log('getAll', response)
        return response;
    }

    //создать счет
    static createAccount() {
        const clientIdValue = localStorage.getItem('clientId')
        const response = axios.post('http://localhost:3001/create', {}, {
            headers: { 'clientId': clientIdValue }
        })
        console.log('create', response)
    }

    //закрыть счет
    static closeAccount(id) {
        const clientIdValue = localStorage.getItem('clientId')
        const response = axios.delete('http://localhost:3001/delete', {
            headers: { 'accountId': id, 'clientId': clientIdValue }
        })

        console.log('closeAccount', response)
        return response.data;
    }

    //пополнить баланс
    static updateAccount(id, sum) {
        const clientIdValue = localStorage.getItem('clientId')
        const response = axios.put('http://localhost:3001/deposit', {
            accountId: id,
            amount: sum
        }, {
            headers: { 'clientId': clientIdValue }
        })
        console.log('update', sum, id)
    }

    //зарегистрировать клиента
    static clientRegistration(message) {
        const response = axios.post('http://localhost:3002/registre', JSON.stringify(message))
        console.log('registre', response)
    }

}