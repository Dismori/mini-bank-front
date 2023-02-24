import React, { useEffect, useState } from "react";
import PostService from "./API/PostService";
import AccountList from "./components/AccountList";
import Confirmation from "./components/Confirmation/Confirmation";
import Modal from "./components/Modal/Modal";
import NavBar from "./components/NavBar";
import './styles/App.css'


function App() {

  const [accounts, setAccounts] = useState([]);
  const [modal, setModal] = useState(false);
  const [upd, setUpd] = useState(0);

  //загрузка счетов при загрузке/изменении переменной upd страницы
  useEffect(() => {
    fetchAccounts()
  }, [upd])


  // получить список открытых счетов
  async function fetchAccounts() {
    const response = await PostService.getAll();
    setAccounts(response)
  }

  //создать счет
  async function createAccount() {
    const response = await PostService.createAccount();
    setUpd(upd + 1)
  }

  return (
    <div className="app">
      <Modal visible={modal} setVisible={setModal}>
        <Confirmation setVisible={setModal} createAcc={createAccount} />
      </Modal>
      <NavBar mod={setModal} />
      {accounts.length
        ? <AccountList list={accounts} />
        : <span style={{ textAlign: 'center' }}>Нет активных счетов</span>
      }
    </div>
  );
}

export default App;
