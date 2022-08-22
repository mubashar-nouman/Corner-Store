import React from 'react'
import "./TextField.css";
import { Input, Form, Row , Col } from "antd";

const TextField = (props) => {
  return (
    <Row>
        <Col xs={24} md={20} >
        <Form.Item
          name={props.title}
          label={props.title}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder={props.place} />
          <p id='underTxt'>{props.underText}</p>
        </Form.Item>
        </Col>
    </Row>
  )
}

export default TextField