import React, { useState } from "react";
import AccountItem from "./AccountItem";

function AccountList(props) {


    return (
        <div className="Accounts">
            <span>Номер счета</span>
            {props.list.map(item =>
                <AccountItem account={item} key={item.accountNumber}/>
            )}
        </div>
    );
}

export default AccountList;