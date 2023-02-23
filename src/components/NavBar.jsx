import React from "react";
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function NavBar() {

    const theme = createTheme({
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        margin: "10px",
                        padding: "10px",
                        fontSize: '1rem'
                    }
                }
            }
        }
    });

    function createAccount() {
        console.log('Hello')
    }


    return (
        <div className="NavBar">
            <ThemeProvider theme={theme}>
                <Button variant="contained">Пополнить счет</Button>
                <Button variant="contained" onClick={createAccount}>Открыть счет</Button>
                <Button variant="contained">Перевести</Button>
                <Button variant="contained">Закрыть счет</Button>
            </ThemeProvider>
        </div>
    );
}

export default NavBar;
