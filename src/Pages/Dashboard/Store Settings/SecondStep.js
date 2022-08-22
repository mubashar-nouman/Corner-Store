import "./SecondStep.css";
import { Row, Col, Form, form } from "antd";
import { Input, Radio, Space } from "antd";
import React, { useState } from "react";
import TextField from "../../../Components/TextField"

const SecondStep = (props) => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 16,
    },
  };
  return (
    <>
      <div className="first_container">
        <div className="first_box">
          <Row>
            <Col xs={24}>
              <h1 id="first_h1">Payment Methods</h1>
            </Col>
            <Col xs={24} id="first_p">
              <p>Select any payment methode from following list.</p>
            </Col>
          </Row>
          <Row >
            <Col offset={1} xs={24} md={5}>



              <h1 style={{marginBottom: '2rem'}}>Payment Methods</h1>
              <Radio.Group onChange={onChange} value={value} style={{marginBottom: '5rem'}}>
                <Space direction="vertical">
                  <Radio value={1}>Stripe</Radio>
                  <Radio value={2}>Paypal</Radio>
                  <Radio value={3}>Shopify</Radio>
                  <Radio value={4}>Payoneer</Radio>
                </Space>
              </Radio.Group>



            </Col>
            <Col xs={24} md={18} style={{textalign: 'center'}} id="payment">
              <h1 >Account Details</h1>
                <p>Add following information to add you stripe account</p>

              <Form name="dynamic_rule" {...layout}>
                <TextField title="Particular Key :" place="Enter particular key" />
                <TextField title="Secret Key :" place="Enter secret key" />
            </Form>


            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default SecondStep;
