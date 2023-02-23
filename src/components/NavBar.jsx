import React from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function NavBar() {

    function createAccount() {
        console.log('Hello')
    }


    return (
        <div className="NavBar">
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button>Пополнить счет</Button>
            <Button onClick={createAccount}>Открыть счет</Button>
            <Button>Перевести</Button>
            <Button>Закрыть счет</Button>
        </ButtonGroup>
        </div>
    );
}

export default NavBar;

