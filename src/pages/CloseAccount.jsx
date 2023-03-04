import React, { useEffect, useState } from "react";
import PostService from "../API/PostService";
import { useNavigate } from "react-router-dom";
import '../styles/App.css'

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import Button from '@mui/material/Button';


export default function CloseAccount() {
    const [accounts, setAccounts] = useState([]);
    const [selected, setSelected] = useState('');
    const navigate = useNavigate();
    var statusButton = true;


    //загрузка счетов при загрузке страницы
    useEffect(() => {
        fetchAccounts()
    }, [])


    //получить список открытых счетов
    async function fetchAccounts() {
        const response = await PostService.getAll();
        setAccounts(response.data.accounts)
    }

    //отправить запрос на закрытие счета
    //убрать async!!!
    function closeAccount() {
        const response = PostService.closeAccount(selected.id);        
        navigate("/")
    }

    if (selected.balance == 0) {
        statusButton = false
    }

    return (
        <div className="up_account">
            <div className="up_account_form">
                <Autocomplete
                    disablePortal
                    disableClearable={true}
                    id="combo-box-demo"
                    options={accounts}
                    getOptionLabel={(param) => param.number}
                    sx={{ width: 300 }}
                    onChange={(event, value) => setSelected(value)}
                    renderInput={(params) => <TextField {...params} label="Номер счета" />}
                />
                <div className="balance">
                    <div>{selected.balance}</div>
                    <div><CurrencyRubleIcon fontSize="small" /></div>
                </div>
            </div>
            <div className="up_account_btn">
                <div>
                    <Button disabled={statusButton} variant="contained" onClick={closeAccount}>Закрыть счет</Button>
                </div>
            </div>
            <div style={{marginTop: 'inherit', fontSize: 'small'}}>
                <span>
                    Чтобы закрыть счет баланс должен быть равен 0
                </span>
            </div>
        </div>
    );
}