import React from "react";
import { Breadcrumb, Row, Col, Button, Steps, Tag, Table } from "antd";
import "./Processing.css";
import User from "../../img/profile.png";
const { Step } = Steps;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Quantity',
    dataIndex: 'chinese',
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: 'Price Per Unit',
    dataIndex: 'math',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: 'Total Price',
    dataIndex: 'english',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: '2',
    name: 'Jim Green',
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: '3',
    name: 'Joe Black',
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: '4',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
  },
];







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
      <Row style={{ display: "flex", justifyContent: "flex-start", marginLeft:"10px" }}>
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
        <Col md={14} style={{alignSelf:'flex-start'}}>
          <div className="left_col_container">
            <div className="first_left_card">
              <Row>
                <Col>
                  <p id="cutomer_detail">Customer Details</p>
                </Col>
              </Row>
              <Row>
                <Col xs={2} style={{ alignSelf: "flex-start" }}>
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
                <Col lg={{ span: 7, offset: 2 }}>
                  <div
                    className=""
                    style={{
                      borderRight: "1px solid #0000004d",
                      paddingRight: "5px",
                    }}
                  >
                    <p>Contact Information</p>
                    <p>email@gmail.com</p>
                    <p>+(028)-284 324 5843</p>
                  </div>
                </Col>
                <Col lg={7} style={{ paddingLeft: "10px" }}>
                  <div
                    className=""
                    style={{
                      borderRight: "1px solid #0000004d",
                      paddingRight: "10px",
                    }}
                  >
                    <p>Contact Information</p>
                    <p>email@gmail.com</p>
                    <p>+(028)-284 324 5843</p>
                  </div>
                </Col>
                <Col lg={7} style={{ paddingLeft: "10px" }}>
                  <div
                    className=""
                    style={{
                      borderRight: "1px solid #0000004d",
                      paddingRight: "10px",
                    }}
                  >
                    <p>Contact Information</p>
                    <p>email@gmail.com</p>
                    <p>+(028)-284 324 5843</p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
            <div className="left_second">
              <Row>
                <Col>
                <p id="order_details">Order Details</p>
                </Col>
              </Row>
              <Row>
                <Col md={24}>
                <Table columns={columns} dataSource={data} />
                </Col>
              </Row>






            </div>
        </Col>

        <Col md={{ span: 9, offset: 1 }} style={{ alignSelf: 'flex-start'}}>
          <div className="right_col_container">
            <Row>
              <Col>
                <Row>
                  <Col>
                    <p id="cutomer_detail">Order Timeline</p>
                    <hr />
                    <Steps direction="vertical" size="small" current={3}>
                      <Step
                        title="Order Completed"
                        description="Nov 18, 2022 at 09:00 am"
                      />
                      <Step
                        title="admin@medusa-test.com"
                        description="Nov 12, 2022 at 09:09 am"
                      />
                      <Step
                        title="Order Dispatched"
                        description="Nov 14, 2022 at 09:00 am"
                      />
                      <Step
                        title="Order Placed"
                        description="Nov 12, 2022 at 09:09 am"
                      />
                    </Steps>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Processing;
