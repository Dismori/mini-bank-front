import React, { useState } from "react";
import AccountItem from "./AccountItem";

function AccountList(props) {


    return (
        <div className="Accounts">
            <div className="Description">Номер счета</div>
            {props.list.map(item =>
                <AccountItem account={item} key={item.id}/>
            )}
        </div>
    );
}

export default AccountList;