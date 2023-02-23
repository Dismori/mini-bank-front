import React from "react";

function AccountItem(props) {

    return (
        <div className="AccountItem">
            <div className="">
                {props.account.accountNumber}
            </div>
            <div>
                {props.account.balance}
            </div>
        </div>
    )
}

export default AccountItem;