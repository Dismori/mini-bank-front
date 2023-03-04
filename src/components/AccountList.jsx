import React, { useState } from "react";
import AccountItem from "./AccountItem";

function AccountList(props) {


    return (
        <div className="accounts">
            <div className="description">Номер счета</div>
            {props.list.map(item =>
                <AccountItem account={item} key={item.balance}/>
            )}
        </div>
    );
}

export default AccountList;