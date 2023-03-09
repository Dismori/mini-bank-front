import axios from "axios";

export default class PostService {

    //Логин
    static login(login, pass, callback) {
        axios.get('http://localhost:8080/client/auth', {
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
    static createAccount(clientId) {
        // const clientIdValue = localStorage.getItem('clientId')
        const response = axios.post('http://localhost:3001/create', {}, {
            headers: { 'clientId': clientId }
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
        return response;
    }

    //зарегистрировать клиента
    static clientRegistration(message) {
        const response = axios.post('http://localhost:8080/client', message)
        console.log('registre', response)
        return response;
    }

    //перевод между своими счетами
    static intTransfer(accountFrom, accountTo, sum) {
        const clientIdValue = localStorage.getItem('clientId')
        console.log(accountFrom, accountTo, sum)
        axios.put('http://localhost:3001/transfer', {
            accountIdFrom: accountFrom,
            accountIdTo: accountTo,
            amount: sum
        }, {
            headers: { 'clientId': clientIdValue }
        })
    }

    //перевод другому клиенту
    static extTransfer(accountIdFromValue, accountNumberToValue, sum) {
        const clientIdValue = localStorage.getItem('clientId')
        console.log(accountIdFromValue, accountNumberToValue, sum)
        axios.put('http://localhost:3001/exttransfer', {
            accountIdFrom: accountIdFromValue,
            accountNumberTo: accountNumberToValue,
            amount: sum
        }, {
            headers: { 'clientId': clientIdValue }
        })
    }

    static getCommission() {
        const response = axios.get('http://localhost:3001/commission')
        return response;
    }

}