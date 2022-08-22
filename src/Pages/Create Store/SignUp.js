import React from 'react'
import { Row, Col, Form } from 'antd';
import Btn from '../../Components/Btn';
import TextField from '../../Components/TextField';
import TextsArea from '../../Components/TextsArea';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};


const SignUp = () => {
  return (
    <>
    <Form {...layout} >
        <TextField title="Store Name : "place="Enter store name"/>
        <TextField title="Store Email : " place="Enter your email address"/>
        <TextsArea title="* Description :" place="Store Description Should be within 30 words"/>
        <Row justify="center" id="para">
        <Col xs={24} sm={{ span: 16, offset: 8 }} md={{ span: 11, offset: 0 }}>
          <p>Store Description Should be within 30 words</p>
        </Col>
      </Row>
          
      </Form>
        <Row>
          <Col sm={{ span: 16, offset: 8 }} md={{ span:16, offset: 7 }}>
            <Btn title="Create Store"/>
          </Col>
        </Row>
        </>
  )
}

export default SignUp