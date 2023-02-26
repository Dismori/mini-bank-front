import React from "react";
import { Route, Routes } from "react-router-dom";
import UpdateAccount from "../pages/UpdateAccount";
import AllAccounts from "../pages/AllAccounts";
import NavBar from "./NavBar";
import Transfer from "../pages/Transfer";
import CreateAccount from "../pages/CreateAccount";
import InternalTransfer from "../pages/InternalTransfer";
import ExternalTransfer from "../pages/ExternalTransfer";
import CloseAccount from "../pages/CloseAccount";


function AppRouter() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<NavBar />}>
                    <Route index element={<AllAccounts />} />
                    <Route path="/update" element={<UpdateAccount />}></Route>
                    <Route path="/create" element={<CreateAccount />}></Route>
                    <Route path="/transfer" element={<Transfer />}></Route>
                    <Route path="/close" element={<CloseAccount />}></Route>
                    <Route path="/int_transfer" element={<InternalTransfer />}></Route>
                    <Route path="/ext_transfer" element={<ExternalTransfer />}></Route>
                    {/* <Route path="*" element={<NoMatch />} /> */}
                </Route>
            </Routes>
        </div>
    )
};

export default AppRouter;