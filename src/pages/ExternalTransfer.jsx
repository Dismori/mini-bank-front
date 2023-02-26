import React, { useEffect, useState } from "react";
import PostService from "../API/PostService";
import { useNavigate } from "react-router-dom";
import '../styles/App.css'

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import Button from '@mui/material/Button';


export default function ExternalTransfer() {
    const [accounts, setAccounts] = useState([]);
    const [selectedFrom, setSelectedFrom] = useState('');
    const [selectedTo, setSelectedTo] = useState('');
    const [sum, setSum] = useState(0);
    const navigate = useNavigate();

    //загрузка счетов при загрузке страницы
    useEffect(() => {
        fetchAccounts()
    }, [])


    //получить список открытых счетов
    async function fetchAccounts() {
        const response = await PostService.getAll();
        setAccounts(response)
    }

    //отправить запрос на перевод между своими счетами
    async function intTransfer() {
        console.log('Transfered done')
        navigate("/")
    }


    return (
        <div className="up_account">
            <div className="up_account_form">
                <Autocomplete
                    disablePortal
                    disableClearable={true}
                    id="combo-box-demo"
                    options={accounts}
                    getOptionLabel={(param) => param.name}
                    sx={{ width: 300 }}
                    onChange={(event, value) => setSelectedFrom(value)}
                    renderInput={(params) => <TextField {...params} label="Откуда" />}
                />
                <div className="balance">
                    <div>{selectedFrom.id}</div>
                    <div><CurrencyRubleIcon fontSize="small" /></div>
                </div>
            </div>
            <div className="up_account_form">
            <TextField id="outlined-basic" label="Счет получателя" variant="outlined" />
            </div>
            <div className="up_account_btn">
                <div>
                    <TextField id="standard-basic" label="Сумма" variant="standard" onChange={(event) => setSum(event.target.value)} />
                </div>
                <div>
                    <Button variant="contained" onClick={intTransfer}>Перевести</Button>
                </div>
            </div>
        </div>
    );
}