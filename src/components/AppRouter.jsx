import React from "react";
import { Route, Routes } from "react-router-dom";
import UpdateAccount from "../pages/UpdateAccount";
import AllAccounts from "../pages/AllAccounts";
import Close from "../pages/Close";
import NavBar from "./NavBar";
import InternalTranser from "../pages/InternalTranser";
import CreateAccount from "../pages/CreateAccount";


function AppRouter() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<NavBar />}>
                    <Route index element={<AllAccounts />} />
                    <Route path="/update" element={<UpdateAccount />}></Route>
                    <Route path="/create" element={<CreateAccount />}></Route>
                    <Route path="/internal-transer" element={<InternalTranser />}></Route>
                    <Route path="/close" element={<Close />}></Route>
                    {/* <Route path="*" element={<NoMatch />} /> */}
                </Route>
            </Routes>
        </div>
    )
};

export default AppRouter;