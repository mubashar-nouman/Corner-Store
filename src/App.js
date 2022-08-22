import "antd/dist/antd.min.css";
import React from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import CreateStore from "./Pages/Create Store/CreateStore";
import Verification from "./Pages/Verification Message/Verification";
import EmailSetup from "./Pages/Email Setup/EmailSetup";
import Success from "./Pages/Success/Success";
import Error from "./Pages/Error/Error";
import Dashboard from "./Pages/Dashboard";
import Settings from "./Pages/Dashboard/Store Settings/Settings";
import Customers from "./Pages/Customers/Customers";
import Products from "./Pages/Dashboard/Products/Products";

function App() {
  return (
    <>
      {/* <CreateStore/> */}
      {/* <Verification/> */}
      {/* <EmailSetup/> */}
      {/* <Success/> */}
      {/* <Error/> */}
      {/* <Dashboard /> */}
      <Routes>
        <Route path="/" element={<Dashboard />} >
          <Route index element={<Settings />} />
          <Route path="customers" element={<Customers />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
