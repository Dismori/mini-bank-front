import React, { useEffect, useState } from "react";
import PostService from "./API/PostService";
import AccountList from "./components/AccountList";
import Modal from "./components/Modal/Modal";
import NavBar from "./components/NavBar";
import './styles/App.css'


function App() {

  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    fetchAccounts()
  }, [])

  const [modal, setModal] = useState(false);

  async function fetchAccounts() {
    const response = await PostService.getAll();
    setAccounts(response)
  }

  return (
    <div className="App">
      <button onClick={()=>setModal(true)}>Button</button>
      <Modal visible={modal} setVisible={setModal}>fgdfg</Modal>
      <NavBar />
      {accounts.length
        ? <AccountList list={accounts} />
        : <span style={{textAlign: 'center'}}>Нет активных счетов</span>
      }
    </div>
  );
}

export default App;
