import { Radio, Breadcrumb, Row, Col, Tag } from "antd";
import React, { useState } from "react";
import "./AddDiscount.css";
import TextField from "../../Components/TextField";
import TextsArea from "../../Components/TextsArea";

const AddDiscount = () => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const log = (e) => {
    console.log(e);
  };

  const preventDefault = (e) => {
    e.preventDefault();
    console.log("Clicked! But prevent default.");
  };
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>Discount</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Add Discount</a>
        </Breadcrumb.Item>
      </Breadcrumb>

      <div className="addDiscount">
        <h1>CREATE DISCOUNT</h1>
        <h2>Discount Type:</h2>
        <p>Select the type of discount you’re giving to your customers.</p>
        <Row>
          <Col
            xs={{ span: 20, offset: 4 }}
            style={{ justifyContent: "center" }}
          >
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>
                Percentage <br />
                (Discount applied in %age)
              </Radio>
              <Radio value={2} style={{ marginLeft: "9rem" }}>
                Fixed Amount <br />
                (Discount applied in whole numbers)
              </Radio>
              <Radio value={3} style={{ marginLeft: "9rem" }}>
                Free Shipping <br />
                (Exclude shipping price)
              </Radio>
            </Radio.Group>
          </Col>
        </Row>
        <hr />
        <h2>Discount Details:</h2>
        <Row>
          <Col xs={24} md={{ span: 11, offset: 1 }}>
            <TextField
              title="Discount Code: "
              place="Enter code for this discount"
            />
          </Col>
          <Col xs={24} md={{ span: 11, offset: 0 }}>
            <TextField
              title="Percentage: "
              place="Add percentage for discount"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={24} md={{ span: 8, offset: 4 }}>
            <p>The code your customers will enter during checkout.</p>
          </Col>
        </Row>
        <Row>
          <Col xs={24} md={{ span: 19, offset: 2 }}>
            <TextsArea title="Discount" />
          </Col>
        </Row>
        <hr />

        <h2>Discount Time Span:</h2>
        <p>Select the time range for which this discount is valid.</p>
        <Row>
          <Col xs={24} md={{ span: 11, offset: 1 }}>
            <TextField
              title="Discount Start Time"
              place="Enter start time for this discount"
            />
          </Col>
          <Col xs={24} md={{ span: 11, offset: 0 }}>
            <TextField
              title="Discount End Time"
              place="Enter end time for this discount"
            />
          </Col>
          <Col xs={24} md={{ span: 11, offset: 1 }}>
            <TextField
              title="Number of Redemptions"
              place="Limit your number of redemptions"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={24} md={{ span: 8, offset: 4 }}>
            <p>Limit applies across all customers, not per customer.</p>
          </Col>
        </Row>

        <hr />

        <h2>Discount Time Span:</h2>
        <p>Select the time range for which this discount is valid.</p>
        <Row>
          <Col
            xs={{ span: 20, offset: 4 }}
            style={{ justifyContent: "center" }}
          >
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>Product Based Discount</Radio>
              <Radio value={2} style={{ marginLeft: "9rem" }}>
                Product Collection Based Discount
              </Radio>
              <Radio value={3} style={{ marginLeft: "9rem" }}>
                Customer Groups Based Discount
              </Radio>
            </Radio.Group>
          </Col>
        </Row>

        <h2>Product Based Discount:</h2>
        <Row>
          <Col xs={24} md={{ span: 11, offset: 1 }}>
            <TextField
              title="Products For Discount"
              place="Type to search the product..."
            />
          </Col>
        </Row>
        <Row>
          <Col xs={24} md={{ span: 8, offset: 4 }}>
            <p>Limit applies across all customers, not per customer.</p>
          </Col>
        </Row>
        <h2>Selected Products:</h2>
        <Row>
            <Col xs={{ span: 20, offset: 3 }}>
                <Tag>Prod. 1</Tag>
                <Tag closable onClose={log}>
                  Prod. 2
                </Tag>
                <Tag closable onClose={log}>
                  Prod. 3
                </Tag>
                <Tag closable onClose={log}>
                Prod. 4
                </Tag>
                
            </Col>
        </Row>
        <h2>Product Collection Based Discount:</h2>
        <Row>
          <Col xs={24} md={{ span: 11, offset: 1 }}>
            <TextField
              title="Collection For Discount"
              place="Type to search the collection..."
            />
          </Col>
        </Row>
        <Row>
          <Col xs={24} md={{ span: 8, offset: 4 }}>
            <p>Valid for specific collections</p>
          </Col>
        </Row>
        <h2>Selected Collections:</h2>
        <Row>
            <Col xs={{ span: 20, offset: 3 }}>
                <Tag>Collec. 1</Tag>
                <Tag closable onClose={log}>
                Collec. 2
                </Tag>
                <Tag closable onClose={log}>
                Collec. 3
                </Tag>
                <Tag closable onClose={log}>
                Collec. 4
                </Tag>
            </Col>
        </Row>
      </div>
    </>
  );
};

export default AddDiscount;
