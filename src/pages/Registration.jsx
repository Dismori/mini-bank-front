import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, Link } from "react-router-dom";
import PostService from "../API/PostService";

export default function Registration() {
    const navigate = useNavigate();
    const [message, setMessage] = useState({})
    const [password, setPassword] = useState();
    const [checkPassword, setCheckPassword] = useState();
    const [statusButton, setstatusButton] = useState(true);
    const [error, setError] = useState("");
    const [errorBirthDate, setErrorBirthDate] = useState("");
    const [checkBirthDate, setCheckBirthDate] = useState("");
    const formRef = React.useRef();

    useEffect(() => {
        checkPass()
    }, [password, checkPassword])

    const checkPass = () => {
        if (password !== checkPassword) {
            setstatusButton(true)
            setError("error");
        }
        else {
            setstatusButton(false)
            setError("");
        }
    }

    useEffect(() => {
        checkBD()
    }, [checkBirthDate])

    const checkBD = () => {
        const regex = /^[0-9]{4}-[0-1]{1}[0-9]{1}-[0-3]{1}[0-9]$/;
        if (regex.test(checkBirthDate) || checkBirthDate === "") {
            setErrorBirthDate("")
        } else {
            setErrorBirthDate("error")
            setstatusButton(true)
        }
    }

    useEffect(() => {
        errorValidation()
    }, [error, errorBirthDate])

    const errorValidation = () => {
        if (error === "" && errorBirthDate === "") {
            setstatusButton(false)
        }
        else {
            setstatusButton(true)
        }
    }
    //отправить запрос на регистрацию пользователя
    function clientReg() {
        if (formRef.current.reportValidity()) {
            const response = PostService.clientRegistration(message);
            navigate("/")
        }
        // response.then(function (response) {
        //     console.log(response.data.data.id)
        //     const clientId = response.data.data.id
        //     if (clientId != undefined) {
        //         PostService.createAccount(clientId)
        //     }
        // })
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
        setCheckBirthDate(birthDate)
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
        setCheckPassword(passwordCheck)
    }

    return (
        <div className="registration">
            <form ref={formRef}>
                <div>
                    <Link to="/login">
                        Назад
                    </Link>
                </div>
                <div className="input">
                    <TextField
                        required
                        id="outlined-basic"
                        label="Фамилия"
                        type="text"
                        variant="outlined"
                        onChange={handleChangeSecondName}
                    />
                </div>
                <div className="input">
                    <TextField
                        required
                        id="outlined-basic"
                        label="Имя"
                        variant="outlined"
                        onChange={handleChangeFirstName}
                    />
                </div>
                <div className="input">
                    <TextField
                        required
                        color={errorBirthDate}
                        id="outlined-basic"
                        label="Дата рождения"
                        variant="outlined"
                        helperText="Например 1998-06-23"
                        onChange={handleChangeBirthDate}


                    />
                </div>
                <div className="input">
                    <TextField
                        required
                        id="outlined-basic"
                        label="Серия и номер паспорта"
                        variant="outlined"
                        onChange={handleChangePassport}
                    />
                </div>
                <div className="input">
                    <TextField
                        required
                        id="outlined-basic"
                        label="Логин"
                        variant="outlined"
                        onChange={handleChangeLogin}
                    />
                </div>
                <div className="input">
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Пароль"
                        type="password"
                        autoComplete="current-password"
                        onChange={handleChangePassword}

                    />
                </div>

                <div className="input">
                    <TextField
                        required
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
            </form>
        </div>
    )
}