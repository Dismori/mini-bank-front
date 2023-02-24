import React from "react";
import conf from "./Confirmation.module.css"

function Confirmation(props) {

    const handleClick = () => {
        props.createAcc()
        props.setVisible(false)
    }

    return(
        <div className={conf.confirmation}>
            <div>Подтвердить открытие</div>
            <div className={conf.act} onClick={handleClick}>Да</div>
            <div className={conf.act} onClick={() => props.setVisible(false)}>Нет</div>
        </div>
    );
}

export default Confirmation;