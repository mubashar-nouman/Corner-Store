import React, { useState } from "react";
import { DeleteOutlined, InboxOutlined } from "@ant-design/icons";

import "./AddProduct.css";
import TextField from "../../../Components/TextField";
import TextsArea from "../../../Components/TextsArea";
import {
  Row,
  Col,
  Checkbox,
  Select,
  Form,
  Radio,
  InputNumber,
  Table,
  Space,
  message,
  Upload,
} from "antd";
import Error1 from "../../../img/error 1.png";
import NumberField from "../../../Components/NumberField";

const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",

  onChange(info) {
    const { status } = info.file;

    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }

    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },

  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const columns = [
  {
    title: "IMAGE",
    dataIndex: "image",
    width: 150,
  },
  {
    title: "FILE NAME",
    dataIndex: "fname",
    width: 150,
  },
  {
    title: "THUMBNAIL",
    dataIndex: "thumbnail",
    width: 150,
  },
];

const data = [];

data.push({
  key: 1,
  image: <img src={Error1} alt="" />,
  fname: (
    <>
      <h1 style={{ fontSize: "1.4rem", color: "rgba(58, 53, 65, 0.87)" }}>
        Book an appointment step 2.12436534634.png
      </h1>{" "}
      <p id="add_p">175.99 KB</p>
    </>
  ),
  thumbnail: <DeleteOutlined />,
});
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
//////////////////////////////////////////////////
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const { Option, OptGroup } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const AddProduct = (props) => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <div className="add_prod_container">
        <div className="add_prod_box">
          <Row>
            <Col>
              <h1 id="add_h1">Add New Product</h1>
            </Col>
          </Row>

          <Row>
            <Col>
              <p id="add_p">
                To start selling any product, you just need a name, price and
                image.
              </p>
            </Col>
          </Row>

          <Row>
            <Col xs={{ span: 24, offset: 0 }} md={{ span: 5, offset: 1 }}>
              <h1 id="general_h1">General Information</h1>
            </Col>
          </Row>

          <Row>
            <Col xs={{ span: 24, offset: 0 }} md={{ span: 10, offset: 1 }}>
              <TextField title="Product Name" place="Enter product name" />
            </Col>
            <Col xs={{ span: 24, offset: 0 }} md={12}>
              <TextField
                title="Handle"
                place="e.g/t-shirts"
                underText="Handles are unique identifiers that are appropriate for URL slugs."
              />
            </Col>
          </Row>

          <Row>
            <Col xs={{ span: 24, offset: 0 }} md={{ span: 10, offset: 1 }}>
              <TextsArea
                title="Product Description"
                place="Enter product description"
                underText="Give your product a short and clear description. 120-160 characters is the recommended length for search engines."
              />
            </Col>
            {/* ///////////////////////////////////////////// */}
            <Col xs={{ span: 24, offset: 0 }} md={{ span: 10, offset: 0 }}>
              <div className="inp_group">
                <Form.Item label="Collection">
                  <Select
                    defaultValue="lucy"
                    style={{
                      width: "85%",
                    }}
                    onChange={handleChange}
                  >
                    <OptGroup label="Manager">
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                    </OptGroup>
                    <OptGroup label="Engineer">
                      <Option value="Yiminghe">yiminghe</Option>
                    </OptGroup>
                  </Select>
                </Form.Item>
                <Form.Item label="Types">
                  <Select
                    defaultValue="lucy"
                    style={{
                      minWidth: "85%",
                    }}
                    onChange={handleChange}
                  >
                    <OptGroup label="Manager">
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                    </OptGroup>
                    <OptGroup label="Engineer">
                      <Option value="Yiminghe">yiminghe</Option>
                    </OptGroup>
                  </Select>
                </Form.Item>
                <Form>
                  <TextField title="Tags" underText="Hello World!" />
                </Form>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={{ span: 24, offset: 0 }} md={{ span: 22, offset: 1 }}>
              <Checkbox id="check_p" onChange={onChange}>
                When checked discounts will be applied to this product
              </Checkbox>
            </Col>
            <Col xs={{ span: 24, offset: 0 }} md={{ span: 22, offset: 1 }}>
              <Radio.Group
                onChange={onChange}
                value={value}
                style={{ marginTop: "2rem" }}
              >
                <Radio value={1}>Simple Product</Radio>
                <Radio value={2}>Product With Varient</Radio>
              </Radio.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={{ span: 24, offset: 0 }} md={{ span: 22, offset: 1 }}>
              <h1 id="general_h1" style={{ marginTop: "3rem" }}>
                Pricing
              </h1>
            </Col>
            <Col xs={{ span: 24, offset: 0 }} md={{ span: 22, offset: 1 }}>
              <p id="check_p">
                Give your product a price against the currency you set in{" "}
                <i>
                  <a href="#">Settings</a>
                </i>
              </p>
            </Col>
          </Row>

          <Row>
            <Col xs={{ span: 24, offset: 0 }} md={{ span: 14, offset: 9 }}>
              <Space direction="vertical">
                <InputNumber
                  addonBefore="PKR"
                  addonAfter="+ -"
                  defaultValue={100}
                />
              </Space>
            </Col>
          </Row>

          <Row>
            <Col xs={{ span: 24, offset: 0 }} md={{ span: 22, offset: 1 }}>
              <h1 id="general_h1" style={{ marginTop: "3rem" }}>
                Images
              </h1>
            </Col>
            <Col xs={{ span: 24, offset: 0 }} md={{ span: 22, offset: 1 }}>
              <p id="check_p">Add upto 10 images to your product</p>
            </Col>
          </Row>

          <Row>
            <Col>
              <Table
                columns={columns}
                dataSource={data}
                scroll={{
                  y: 240,
                }}
              />
            </Col>
          </Row>

          <Row>
            <Col xs={24}>
              <Dragger {...props} style={{marginTop: "3rem", marginBottom: "3rem"}}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                Drop your images here, or <a href="">click to browse</a>
                </p>                
              </Dragger>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
                <NumberField title="Number"/>
            </Col>
          </Row>
        </div>
      </div>
      <Row>
        <Col>
                <h1 id="general_h1">Stock and Inventory</h1>
                <p>Add inventory information of your product.</p>
        </Col>
      </Row>
    </>
  );
};

export default AddProduct;
