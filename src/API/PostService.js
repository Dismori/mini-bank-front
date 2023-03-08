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
        const response = await axios.get('http://localhost:8080/getAccountsInfo', {
            headers: { 'clientId': clientIdValue }
        })
        console.log('getAll', response)
        return response;
    }

    //создать счет
    static createAccount(clientId) {
        // const clientIdValue = localStorage.getItem('clientId')
        const response = axios.post('http://localhost:8080/create', {}, {
            headers: { 'clientId': clientId }
        })
        console.log('create', response)
    }

    //закрыть счет
    static closeAccount(id) {
        const clientIdValue = localStorage.getItem('clientId')
        const response = axios.delete('http://localhost:8080/delete', {
            headers: { 'accountId': id, 'clientId': clientIdValue }
        })

        console.log('closeAccount', response)
        return response.data;
    }

    //пополнить баланс
    static updateAccount(id, sum) {
        const clientIdValue = localStorage.getItem('clientId')
        const response = axios.put('http://localhost:8080/deposit', {
            accountId: id,
            amount: sum
        }, {
            headers: { 'clientId': clientIdValue }
        })
        console.log('update', sum, id)
    }

    //зарегистрировать клиента
    static clientRegistration(message) {
        const response = axios.post('http://localhost:8080/registre', message)
        console.log('registre', response)
        return response;
    }

    //перевод между своими счетами
    static intTransfer(accountFrom, accountTo, sum) {
        const clientIdValue = localStorage.getItem('clientId')
        console.log(accountFrom, accountTo, sum)
        axios.put('http://localhost:8080/transfer', {
            accountIdFrom: accountFrom,
            accountIdTo: accountTo,
            amount: sum
        }, {
            headers: { 'clientId': clientIdValue }
        })
    }

}