import React from 'react'
import './Btn.css';
import {Form, Button, Row, Col } from "antd";



const Btn = (props) => {
  return (
    <Form.Item>
                <Button type="primary" htmlType="submit" onClick={()=>props.onCLick()}>
                  {props.title}
                </Button>

      </Form.Item>
  )
}

export default Btn