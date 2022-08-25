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
import Orders from "./Pages/Orders/Orders";
import Discount from "./Pages/Discount/Discount";

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
          <Route index element={<Success />} />
          <Route path="customers" element={<Customers />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="discounts" element={<Discount />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
