import React from "react";
import { useNavigate } from "react-router-dom";
import conf from "./ConfirmTransfer.module.css";

export default function ConfirmTransfer() {

const navigate = useNavigate();



    return(
        <div className={conf.confirmation}>
            <div className={conf.act} onClick={() => navigate('/int_transfer')}>Между своими счетами</div>
            <div className={conf.act} onClick={() => navigate('/ext_transfer')}>Другому человеку</div>
        </div>
    );
}