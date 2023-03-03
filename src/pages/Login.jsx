import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Login() {
    var navigate = useNavigate();

    const login = () => {
        localStorage.setItem('user', 'user');
        navigate('/');
    }

    return (
        <div className="login">
            <div className="input">
                <TextField
                    id="outlined-basic"
                    label="Login"
                    variant="outlined"
                />
            </div>
            <div className="input">
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
            </div>
            <div>
                <Button
                    variant="contained"
                    onClick={() => {
                        login()
                    }}>
                    Продолжить
                </Button>
            </div>
        </div>
    )
};