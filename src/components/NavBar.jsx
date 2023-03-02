import React from "react";
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Outlet, useNavigate } from "react-router-dom";

function NavBar(props) {
    const navigate = useNavigate();

    const theme = createTheme({
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        margin: "10px",
                        padding: "10px",
                        // fontSize: '1rem'
                    }
                }
            }
        }
    });

    return (
        <div>
            <div>
            <Button variant="contained" onClick={() => {
                localStorage.removeItem('user')
                navigate("/login")}}>Выйти</Button>
            </div>

            <div className="NavBar">
                <ThemeProvider theme={theme}>
                    <Button variant="contained" onClick={() => navigate("/update")}>Пополнить счет</Button>
                    <Button variant="contained" onClick={() => navigate("/create")}>Открыть счет</Button>
                    <Button variant="contained" onClick={() => navigate("/transfer")}>Перевести</Button>
                    <Button variant="contained" onClick={() => navigate("/close")}>Закрыть счет</Button>
                </ThemeProvider>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default NavBar;
