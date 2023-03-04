import React, { useEffect, useState } from "react";
import PostService from "../API/PostService";
import AccountList from "../components/AccountList";
import '../styles/App.css'


function AllAccounts() {

  const [accounts, setAccounts] = useState([]);

  //загрузка счетов при загрузке страницы
  useEffect(() => {
    fetchAccounts()
  }, [])


  // получить список открытых счетов
  async function fetchAccounts() {
    const response = await PostService.getAll();
    console.log("Accounts", response.data.accounts)
    setAccounts(response.data.accounts)
  }

  return (
    <div className="app">
      {accounts.length
        ? <AccountList list={accounts} />
        : <span style={{ textAlign: 'center' }}>Нет активных счетов</span>
      }
    </div>
  );
}

export default AllAccounts;
