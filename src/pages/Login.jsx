import { useNavigate, Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PostService from "../API/PostService";
import { useState } from "react";

export default function Login() {
    const [error, setError] = useState(false);
    const [helperText, setHelperText]= useState("");
    var navigate = useNavigate();
    var userName = ''
    var password = '';

    const sendCred = () => {
        PostService.login(userName, password, function (response) {
            if (response.data.data !== undefined) {
                console.log('clientId', response.data.data)
                localStorage.setItem('clientId', response.data.data);
                console.log('LocalStorage', localStorage.getItem('clientId'))
                navigate('/');
            }
            else {
                setError(true)
                setHelperText("Неверный логин или пароль");
            }
        })
    }

    const handleChangeUserName = (event) => {
        if(event.target.value === "") {
            setError(false)
            setHelperText("")
        }
        userName = event.target.value;
    }

    const handleChangePassword = (event) => {
        password = event.target.value;
    }

    return (
        <div className="login">
            <div className="input">
                <TextField
                    error = {error}
                    id="outlined-basic"
                    label="Login"
                    variant="outlined"
                    onChange={handleChangeUserName}
                />
            </div>
            <div className="input">
                <TextField
                    error = {error}
                    helperText={helperText}
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={handleChangePassword}

                />
            </div>
            <div className="btn">
                <Button
                    variant="contained"
                    onClick={() => {
                        sendCred()
                    }}>
                    Продолжить
                </Button>
            </div>
            <div className="reg">
                <Link to="/registration">
                    Регистрация
                </Link>
            </div>
        </div>
    )
};