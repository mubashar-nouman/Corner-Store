import React from 'react'
import "./TextField.css";
import { InputNumber, Form, Row , Col } from "antd";


const onChange = (value) => {
    console.log('changed', value);
  };


const NumberField = (props) => {
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
          <InputNumber min={1} defaultValue={0} onChange={onChange} />
          <p id='underTxt'>{props.underText}</p>
        </Form.Item>
        </Col>
    </Row>
  )
}

export default NumberField