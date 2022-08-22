import { Button, Row, Col, Checkbox, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import Btn from "../../Components/Btn";
import PassField from "../../Components/PassField";
import TextField from "../../Components/TextField";
const formItemLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  },
};
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
const formTailLayout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 7,
    offset: 0,
  },
};

const Login = () => {
  const [form] = Form.useForm();
  const [checkNick, setCheckNick] = useState(false);
  useEffect(() => {
    form.validateFields(["nickname"]);
  }, [checkNick, form]);

  const onCheckboxChange = (e) => {
    setCheckNick(e.target.checked);
  };

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log("Success:", values);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  return (
    <Form form={form} name="dynamic_rule" {...layout}>
      <TextField title="Store Email :" place="Enter store email" />

      <PassField title="Password :" place="Enter store password" />

      <Form.Item {...formTailLayout}>
        <Row>
          <Col xs={{ span: 24, offset: 0 }} sm={{ span: 20, offset: 14 }} md={{ span: 18, offset: 11 }} >
            <Checkbox checked={checkNick} onChange={onCheckboxChange}>
              Remember me
            </Checkbox>{" "}
            <br />
            <a className="login-form-forgot" href="">
              Forget your password?{" "}
            </a>
          </Col>
        </Row>
      </Form.Item>
      <Row>
        <Col xs={{ span: 24, offset: 0 }} sm={{ span: 16, offset: 4 }} md={{ span: 11, offset: 0 }}>
          <Btn title="Check"/>
        </Col>
      </Row>
    </Form>
  );
};

export default Login;
