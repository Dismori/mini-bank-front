import React, { useEffect, useState } from "react";
import PostService from "../API/PostService";
import { useNavigate } from "react-router-dom";
import '../styles/App.css'

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import Button from '@mui/material/Button';


export default function InternalTransfer() {
    const [accounts, setAccounts] = useState([]);
    const [selectedFrom, setSelectedFrom] = useState('');
    const [selectedTo, setSelectedTo] = useState('');
    const [sum, setSum] = useState(0);
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [statusButton, setStatusButton] = useState(false);

    //загрузка счетов при загрузке страницы
    useEffect(() => {
        fetchAccounts()
    }, [])


    //получить список открытых счетов
    async function fetchAccounts() {
        const response = await PostService.getAll();
        setAccounts(response.data.accounts)
    }

    //отправить запрос на перевод между своими счетами
    async function intTransfer() {
        PostService.intTransfer(selectedFrom.id, selectedTo.id, sum)
        navigate("/")
    }

    //валидация поля ввода суммы
    const handleChange = (e) => {
        const regex = /^[0-9]*[.,]?[0-9]{0,2}$/;
        if (regex.test(e.target.value)) {
            setSum(e.target.value)
            setError("")
            setStatusButton(false)
        }
        else {
            setError("error");
            setStatusButton(true)
        }
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
                    onChange={(event, value) => setSelectedFrom(value)}
                    renderInput={(params) => <TextField {...params} label="Откуда" />}
                />
                <div className="balance">
                    <div>{selectedFrom.balance}</div>
                    <div><CurrencyRubleIcon fontSize="small" /></div>
                </div>
            </div>
            <div className="up_account_form">
                <Autocomplete
                    disablePortal
                    disableClearable={true}
                    id="combo-box-demo"
                    options={accounts}
                    getOptionLabel={(param) => param.number}
                    sx={{ width: 300 }}
                    onChange={(event, value) => setSelectedTo(value)}
                    renderInput={(params) => <TextField {...params} label="Куда" />}
                />
                <div className="balance">
                    <div>{selectedTo.balance}</div>
                    <div><CurrencyRubleIcon fontSize="small" /></div>
                </div>
            </div>
            <div className="up_account_btn">
                <div>
                    <TextField color={error} id="standard-basic" label="Сумма" variant="standard" onChange={(event) => handleChange(event)} />
                </div>
                <div>
                    <Button disabled={statusButton} variant="contained" onClick={intTransfer}>Перевести</Button>
                </div>
            </div>
        </div>
    );
}