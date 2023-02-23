import React,{useState} from "react";
import AccountList from "./components/AccountList";
import NavBar from "./components/NavBar";
import './styles/App.css'


function App() {

  const [accounts, setAccounts] = useState([
    { accountNumber: 22334455, balance: 3456 },
    { accountNumber: 22334456, balance: 3456 },
    { accountNumber: 22334457, balance: 3456 },
    { accountNumber: 22334458, balance: 3456 }
  ]);

  return (
    <div className="App">
      <NavBar />
      <AccountList list={accounts} />
    </div>
  );
}

export default App;
