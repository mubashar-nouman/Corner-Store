import React from "react";
import { Row, Col, Form } from "antd";
import Logo from "../../Components/Logo";
import "./EmailSetup.css";
import TextField from "../../Components/TextField";
import PassField from "../../Components/PassField";
import Btn from "../../Components/Btn";
import Help from "../../img/help.png";

const layout = {
  labelCol: {
    span: 9,
  },
  wrapperCol: {
    span: 24,
  },
};

const EmailSetup = () => {
  return (
    <>
      <div className="create_container">
        <div className="create_box">
          <Row justify="center">
            <Col>
              <Logo />
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <p id="para_2">
                Your email has been verified successfully! <br />
                Enter any login password for your store now.
              </p>
            </Col>
          </Row>
          <Form {...layout}>
            <Row justify="center">
              <Col span={16}>
                <TextField title="Email" place="Enter your email address" />
              </Col>
            </Row>

            <Row justify="center">
              <Col span={16}>
                <PassField title="Password" />
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 12, offset: 10 }} md={{ span: 14, offset: 9 }}>
                <Btn title="Login" />
              </Col>
            </Row>
          </Form>
          <Row>
            <Col>
              <img id="helpimg" src={Help} alt="" />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default EmailSetup;
