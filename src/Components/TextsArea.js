import React from 'react'
import './TextField.css'
import {Form , Input, Row, Col} from 'antd'

const { TextArea } = Input;

const TextsArea = (props) => {
  return (
    <Row>
        <Col xs={24} md={24} min-row={10}>
        <Form.Item id="textArea" label={props.title}>
          <TextArea className="box" rows={7} placeholder="Store Description Should be within 30 words" /><p id="underTxt">{props.underText}</p>
        </Form.Item>
        </Col>
    </Row>
  )
}

export default TextsArea