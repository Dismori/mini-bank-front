import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmTransfer from "../components/Confirmation/ConfirmTransfer";
import Modal from "../components/Modal/Modal";
import '../styles/App.css'

export default function Transfer() {
    const [modal, setModal] = useState(true);
    const navigate = useNavigate();

    
    if(!modal) {
        navigate("/")
    }

    return (
        <div className="app">
            <Modal visible={modal} setVisible={setModal}>
                <ConfirmTransfer />
            </Modal>
        </div>
    );
};