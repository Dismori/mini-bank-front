import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostService from "../API/PostService";
import Confirmation from "../components/Confirmation/Confirmation";
import Modal from "../components/Modal/Modal";
import '../styles/App.css'


export default function CreateAccount() {

    const [modal, setModal] = useState(true);
    const navigate = useNavigate();

    //создать счет и редирект на главную страницу
    function createAccount() {
        const response = PostService.createAccount();
        navigate("/")
    }
    
    if(!modal) {
        navigate("/")
    }

    return (
        <div className="app">
            <Modal visible={modal} setVisible={setModal}>
                <Confirmation setVisible={setModal} createAcc={createAccount} />
            </Modal>
        </div>
    );
}