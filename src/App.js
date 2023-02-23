import React, { useEffect, useState } from "react";
import PostService from "./API/PostService";
import AccountList from "./components/AccountList";
import NavBar from "./components/NavBar";
import './styles/App.css'


function App() {

  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    fetchAccounts()
  }, [])

  async function fetchAccounts() {
    const response = await PostService.getAll();
    setAccounts(response)
  }

  return (
    <div className="App">
      <NavBar />
      <AccountList list={accounts} />
    </div>
  );
}

export default App;
