import React from "react";
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import '../styles/App.css'

function AccountItem(props) {

    return (
        <div className="accountItem">
            <div className="">
                {props.account.number}
            </div>
            <div className="balance">
                <div>{props.account.balance}</div>
                <div><CurrencyRubleIcon fontSize="small"/></div> 
            </div>
        </div>
    )
}

export default AccountItem;