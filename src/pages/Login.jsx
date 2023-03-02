import { useNavigate } from "react-router-dom";

export default function Login() {
    var navigate = useNavigate();

    const login = event => {
        event.preventDefault();
        localStorage.setItem('user', 'user');
        navigate('/');
    }

    return (
        <div>
            <form onSubmit={login}>
                <input type="text" placeholder="Логин" />
                <input type="password" placeholder="Пароль" />
                <button>Войти</button>
            </form>
        </div>
    )
};