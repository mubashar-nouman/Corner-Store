import {
  DashboardOutlined,
  PlusSquareOutlined,
  FormOutlined,
  TeamOutlined,
  PercentageOutlined,
  DollarCircleOutlined,
  SettingOutlined,
  SearchOutlined,
  QuestionCircleOutlined,
  BellOutlined,
} from "@ant-design/icons";
import Logo from "../Components/Logo";
import { Button, Layout, Menu, Modal } from "antd";
import React, { Children, useState } from "react";
import "./Dashboard.css";
import User from "../img/profile.png";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Dashboard", "1", <DashboardOutlined />),
  getItem("Products", "2", <PlusSquareOutlined />),
  getItem("Orders", "3", <FormOutlined />),
  getItem("Customers", "4", <TeamOutlined />),
  getItem("Discount", "5", <PercentageOutlined />),
  getItem("Subscription Plan", "6", <DollarCircleOutlined />),
  getItem("Store Settings", "7", <SettingOutlined />),
];

const Dashboard = (props) => {
  // ***HOOKS
  const navigate =useNavigate()
  const [collapsed, setCollapsed] = useState(true);
  const handleRoutes=(e)=>{
    console.log("eeeeeeeeeeeeeeeeee",e.key);
    switch(e.key) {
      case "1":
        navigate("/")
        break;
      case "2":
        navigate("/products")
        break;
      case "3":
        navigate("/orders")
        break;
      case "4":
        navigate("/customers")
        break;
      case "5":
        navigate("/discounts")
        break;
      case "6":
        navigate("/subscription")
        break;
      case "7":
        navigate("/settings")
        break;
      default:
    }
  }
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="dashLogo">
          <Logo />
        </div>{" "}
        <hr />
        <Menu
          onClick={(e) =>handleRoutes(e)}
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          defaultValue={items}
          
          // value={}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          <div className="profile_group">
            <SearchOutlined />
            <QuestionCircleOutlined />
            <BellOutlined />
            <img
              style={{ width: "2.5rem" }}
              id="profile_img"
              src={User}
              alt=""
            />
            <p id="profile_name">Mubi</p>

            {/* #######################################   HEADER COMPONENTS IS REMAINING ############################ */}
          </div>
        </Header>


        
        <Content
          style={{
            margin: "0 0px",
          }}
        >
          <div
            className="site-layout-background main_bg"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
           <Outlet/>
           {/* <Products/> */}
           {/* <Orders/> */}
           {/* <Customers /> */}
           {/* <Processing/> */}
          </div>
        </Content>
        <Footer
          id="dashFooter"
          style={{
            textAlign: "center",
          }}
        >
          Copyright ©2020 Produced by Ant Finance Experience Technology
          Department
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
