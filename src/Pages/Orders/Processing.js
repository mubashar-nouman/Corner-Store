import React from "react";
import { Breadcrumb, Row, Col, Button,Divider, Tag } from "antd";
import './Processing.css';

const Processing = () => {
  return (
    <>
    {/* // Breadcrumbs */}
    <Row style={{display: 'flex', justifyContent: 'flex-start'}}>
      <Col>
        <Breadcrumb>
          <Breadcrumb.Item>Orders</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Orders Details</a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Col>
    </Row>


    {/* // Order # and 2 Buttons */}
    <Row style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
        <Col>
        <h1 id="order_h1">ORDER#1543</h1>
        </Col>
        <Col>
        <Button type="primary" style={{marginRight:"1rem"}} id="blueButton">Modify Order</Button>
        <Button danger id="cancelButton">Cancel Order</Button>
        </Col>
    </Row>

    <hr />
    <Row style={{display: "flex", justifyContent: "flex-start"}}>
        <Col>
        <p>Nov 12, 2022 at 09:09 am | <span>1</span> item's | <b>Total:</b> <span>1400/-</span>
      <Tag color="#f50">In Process</Tag>
      <Tag color="#2db7f5">Local Shipping</Tag>
      <Tag color="#87d068">Cash on Delivery</Tag>
      </p>
        </Col>
    </Row>
    <hr />

    <Row>
      <Col md={14}>
        <div className="left_col_container">
          <Row>
            Hello
          </Row>
        </div>
      </Col>

      <Col md={{span:9, offset:1}}>
      <div className="right_col_container">
        <Row>
        right_col_container
        </Row>
      </div>
      </Col>
    </Row>
    </>
  );
};

export default Processing;
