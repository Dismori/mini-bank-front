import { useNavigate, Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PostService from "../API/PostService";

export default function Login() {
    var navigate = useNavigate();
    var userName = ''
    var password = '';

    const sendCred = () => {
        PostService.login(userName, password, function (response) {
            if (response.data.clientId !== undefined) {
                console.log('clientId', response.data.clientId)
                localStorage.setItem('clientId', response.data.clientId);
                console.log('LocalStorage', localStorage.getItem('clientId'))
                navigate('/');
            }
        })
    }

    const handleChangeUserName = (event) => {
        userName = event.target.value;
    }

    const handleChangePassword = (event) => {
        password = event.target.value;
    }

    return (
        <div className="login">
            <div className="input">
                <TextField
                    id="outlined-basic"
                    label="Login"
                    variant="outlined"
                    onChange={handleChangeUserName}
                />
            </div>
            <div className="input">
                <TextField
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