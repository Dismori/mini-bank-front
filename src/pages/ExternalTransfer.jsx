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
    const [error, setError] = useState("");
    const [statusButton, setStatusButton] = useState(true);
    const [commission, setCommission] = useState(0);
    const [result, setResult] = useState(0);
    const [errorSelectedTo, setErrorSelectedTo] = useState("")

    const validationFields = () => {
        if (!selectedTo || !selectedFrom || !sum || error || (result > selectedFrom.balance) || errorSelectedTo || selectedFrom.number === selectedTo) {
            setStatusButton(true)
        }
        else (
            setStatusButton(false)
        )
    }

    useEffect(() => {
        validationFields()
    }, [result, selectedTo, selectedFrom, error, errorSelectedTo])

    //загрузка счетов при загрузке страницы
    useEffect(() => {
        fetchAccounts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        calculateSum(sum, commission)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sum])

    //получить список открытых счетов и комиссию
    async function fetchAccounts() {
        const response = await PostService.getAll();
        setAccounts(response.data.accounts)
        PostService.getCommission()
            .then(function (response) {
                setCommission(response.data)
                console.log(commission)
            })
    }

    //отправить запрос на перевод между своими счетами
    async function transfer() {
        PostService.extTransfer(selectedFrom.id, selectedTo, result)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error)
            })
            .finally(function () {
                navigate("/")
            })
    }

    //валидация поля ввода суммы
    const handleChange = (e) => {
        const regex = /^[0-9]*[.]?[0-9]{0,2}$/;
        if (regex.test(e.target.value)) {
            setSum(e.target.value)
            setError("")
        }
        else {
            setError("error");
        }
    }

    const handleChangeSelectedTo = (e) => {
        const regex = /^[0-9]{20}$/;
        if (regex.test(e.target.value)) {
            setSelectedTo(e.target.value)
            setErrorSelectedTo("")
        }
        else {
            setErrorSelectedTo("error")
        }
    }

    const rounded = (number) => {
        return Math.round(number * 100) / 100

    }

    const calculateSum = (sum, commission) => {
        if (sum === "") {
            setResult(0)
        }
        else {
            setResult(rounded(sum * commission / 100 + parseFloat(sum)))
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
                <TextField color={errorSelectedTo} id="outlined-basic" label="Счет получателя" variant="outlined" onChange={(event) => handleChangeSelectedTo(event)} />
                <div>
                    Комиссия перевода {commission} %
                </div>
            </div>
            <div className="up_account_btn">
                <div>
                    <TextField color={error} id="standard-basic" label="Сумма" variant="standard" onChange={(event) => handleChange(event)} />
                </div>
                <div>
                    <Button disabled={statusButton} variant="contained" onClick={transfer}>Перевести</Button>
                </div>
            </div>
        </div>
    );
}