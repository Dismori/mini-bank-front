import React from "react";

function AccountItem(props) {

    return (
        <div className="AccountItem">
            <div className="">
                {props.account.id}
            </div>
            <div>
                {props.account.name}
            </div>
        </div>
    )
}

export default AccountItem;