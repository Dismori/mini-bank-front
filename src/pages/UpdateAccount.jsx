import React, { useEffect, useState } from "react";
import PostService from "../API/PostService";
import AccountList from "../components/AccountList";
import '../styles/App.css'

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function UpdateAccount() {
    const [accounts, setAccounts] = useState([]);

    //загрузка счетов при загрузке страницы
    useEffect(() => {
      fetchAccounts()
    }, [])
  
  
    // получить список открытых счетов
    async function fetchAccounts() {
      const response = await PostService.getAll();
      setAccounts(response)
      console.log(accounts)
      console.log(accounts)
    }
  
    return (
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={accounts}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Accounts" />}
      />

    //   <div className="app">
    //     {accounts.length
    //       ? <AccountList list={accounts} />
    //       : <span style={{ textAlign: 'center' }}>Нет активных счетов</span>
    //     }
    //   </div>
    );
}

export default UpdateAccount;