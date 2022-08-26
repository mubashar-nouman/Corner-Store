import React from "react";
import { Breadcrumb, Row, Col, Button, Divider, Tag } from "antd";
import "./Processing.css";
import User from "../../img/profile.png";

const Processing = () => {
  return (
    <>
      {/* // Breadcrumbs */}
      <Row style={{ display: "flex", justifyContent: "flex-start" }}>
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
      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <Col>
          <h1 id="order_h1">ORDER#1543</h1>
        </Col>
        <Col>
          <Button
            type="primary"
            style={{ marginRight: "1rem" }}
            id="blueButton"
          >
            Modify Order
          </Button>
          <Button danger id="cancelButton">
            Cancel Order
          </Button>
        </Col>
      </Row>

      <hr />
      <Row style={{ display: "flex", justifyContent: "flex-start" }}>
        <Col>
          <p>
            Nov 12, 2022 at 09:09 am | <span>1</span> item's | <b>Total:</b>{" "}
            <span>1400/-</span>
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
            <div className="first_left_card">
              <Row>
                <Col>
                  <p id="cutomer_detail">Customer Details</p>
                </Col>
              </Row>
              <Row>
                <Col xs={2} style={{alignSelf: 'flex-start'}}>
                  <img
                    style={{ width: "2.5rem" }}
                    id="profile_img"
                    src={User}
                    alt=""
                  />
                </Col>
                <Col xs={16}>
                  <h1>Zaynub</h1>
                  <p>Lahore, PK</p>
                </Col>
              </Row>
              <Row>
                <Col offset={2}>
                  <div className="" style={{borderRight: '1px solid rba(255,255,255,0.1)', paddingRight: '10px'}}>
                    <p>Contact Information</p>
                    <p>email@gmail.com</p>
                    <p>+(028)-284 324 5843</p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>

        <Col md={{ span: 9, offset: 1 }}>
          <div className="right_col_container">
            <Row></Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Processing;
