import "antd/dist/antd.min.css";
import React from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import Success from "./Pages/Success/Success";
import Dashboard from "./Pages/Dashboard";
import Settings from "./Pages/Dashboard/Store Settings/Settings";
import Products from "./Pages/Dashboard/Products/Products";
import Orders from "./Pages/Orders/Orders";
import AddDiscount from "./Pages/Discount/AddDiscount";
import Processing from "./Pages/Orders/Processing";
import CustomersMain from "./Pages/Customers/CustomersMain";

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
          <Route path="customers" element={<CustomersMain />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="discounts" element={<AddDiscount />} />
          <Route path="subscription" element={<Processing />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
