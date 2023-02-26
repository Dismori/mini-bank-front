import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import './styles/App.css'


function App() {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  )

}

export default App;
