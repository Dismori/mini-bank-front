import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, Link } from "react-router-dom";
import PostService from "../API/PostService";

export default function Registration() {
    const navigate = useNavigate();
    const [message, setMessage] = useState({})
    const [password, setPassword] = useState();
    const [statusButton, setstatusButton] = useState(true);
    const [error, setError] = useState("");

    //отправить запрос на регистрацию пользователя
    function clientReg() {
        const response = PostService.clientRegistration(message);
        navigate("/")
    }
    const handleChangeSecondName = (event) => {
        const tag = 'secondName'
        const secondName = event.target.value
        setMessage({ ...message, [tag]: secondName })
    }

    const handleChangeFirstName = (event) => {
        const tag = 'firstName'
        const firstName = event.target.value
        setMessage({ ...message, [tag]: firstName })
    }

    const handleChangeBirthDate = (event) => {
        const tag = 'birthDate'
        const birthDate = event.target.value
        setMessage({ ...message, [tag]: birthDate })

    }

    const handleChangePassport = (event) => {
        const tag = 'passportNumber'
        const passportNumber = event.target.value
        setMessage({ ...message, [tag]: passportNumber })
    }

    const handleChangeLogin = (event) => {
        const tag = 'login'
        const login = event.target.value
        setMessage({ ...message, [tag]: login })
    }

    const handleChangePassword = (event) => {
        const tag = 'password'
        const password = event.target.value
        setPassword(password)
        setMessage({ ...message, [tag]: password })
    }

    const handleChangePasswordCheck = (event) => {
        const passwordCheck = event.target.value
        if (password != passwordCheck) {
            console.log("wrong!!!")
            setstatusButton(true)
            setError("error");
        }
        else {
            setstatusButton(false)
            setError("");
        }

    }

    return (
        <div className="registration">
            <div>
                <Link to="/login">
                    Назад
                </Link>
            </div>
            <div className="input">
                <TextField
                    id="outlined-basic"
                    label="Фамилия"
                    type="text"
                    variant="outlined"
                    onChange={handleChangeSecondName}
                />
            </div>
            <div className="input">
                <TextField
                    id="outlined-basic"
                    label="Имя"
                    variant="outlined"
                    onChange={handleChangeFirstName}
                />
            </div>
            <div className="input">
                <TextField
                    id="outlined-basic"
                    label="Дата рождения"
                    variant="outlined"

                    onChange={handleChangeBirthDate}

           
                />
            </div>
            <div className="input">
                <TextField
                    id="outlined-basic"
                    label="Серия и номер паспорта"
                    variant="outlined"
                    onChange={handleChangePassport}
                />
            </div>
            <div className="input">
                <TextField
                    id="outlined-basic"
                    label="Логин"
                    variant="outlined"
                    onChange={handleChangeLogin}
                />
            </div>
            <div className="input">
                <TextField
                    id="outlined-password-input"
                    label="Пароль"
                    type="password"
                    autoComplete="current-password"
                    onChange={handleChangePassword}

                />
            </div>
            <div className="input">
                <TextField
                    color={error}
                    id="outlined-password-input"
                    label="Повторите пароль"
                    type="password"
                    autoComplete="current-password"
                    onChange={handleChangePasswordCheck}
                />
            </div>
            <div className="btn">
                <Button
                    variant="contained"
                    disabled={statusButton}
                    onClick={clientReg}>
                    Зарегистироваться
                </Button>
            </div>
        </div>
    )
}