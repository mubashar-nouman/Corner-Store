import { Tabs, Row, Col } from "antd";
import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import "./CreateStore.css";
import Logo from "../../Components/Logo";
import Help from '../../img/help.png';



const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

const CreateStore = () => (
  <>
  <div className="create_container">
    <div className="create_box">
      <Row justify="center">
        <Col>
            <Logo/>
        </Col>
      </Row>
      <Row justify="center" id="para">
        <Col>
          <p>Enter the following details to create your own store!</p>
        </Col>
      </Row>
      <Row justify="center" align="center">
        <Col id="tabs" xs={22} sm={22} md={12}>
          <Tabs defaultActiveKey="1" onChange={onChange}>
            <TabPane tab="Login" key="1">
              <Login />
            </TabPane>
            <TabPane tab="Sign Up" key="2">
              <SignUp />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
      <Row>
        <Col>
          <img id='helpimg' src={Help} alt="" />
        </Col>
      </Row>
    </div>
  </div>
  </>
);

export default CreateStore;
