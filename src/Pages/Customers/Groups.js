import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Table, Row, Col, TreeSelect, Button, Dropdown, Menu,Space,Tag,Modal, } from "antd";
import TextField from "../../Components/TextField";
import './Groups.css'

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "09-12-2022, 03:04PM",
  },
  {
    key: "2",
    name: "Arshadeep",
    age: 42,
    address: "09-12-2022, 03:04PM",
  },
  {
    key: "3",
    name: "John",
    age: 42,
    address: "09-12-2022, 03:04PM",
  },
  {
    key: "4",
    name: "John",
    age: 42,
    address: "09-12-2022, 03:04PM",
  },
  {
    key: "5",
    name: "John",
    age: 42,
    address: "09-12-2022, 03:04PM",
  },
  {
    key: "6",
    name: "John",
    age: 42,
    address: "09-12-2022, 03:04PM",
  },
];
const log = (e) => {
    console.log(e);
  };

const columns = [
  {
    title: "GROUP NAME",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "NUMBER OF CUSTOMERS",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "DATE CREATED",
    dataIndex: "address",
    key: "address",
  },
];
const Groups = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  return (
    <>
    <Row style={{ marginBottom: "2rem" }}>
        <Col xs={24} md={16}>
          <TreeSelect
            treeDataSimpleMode
            style={{
              width: "60px",
            }}
            // value={value}
            dropdownStyle={{
              maxHeight: 400,
              overflow: "auto",
            }}
            placeholder="All"
          />
        </Col>
        <Col
          xs={24}
          md={{ span: 3, offset: 4 }}
        >
          <Button onClick={showModal} type="primary">
            Add New Group
          </Button>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs={24} md={12}>
          <h1 id="products_h1" className="text">
            All Groups
          </h1>
        </Col>
        <Col xs={24} md={12} style={{ marginTop: "3rem" }}>
          <TextField place="Search..." />
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <div>
            <Table dataSource={dataSource} columns={columns} />
          </div>
        </Col>
      </Row>
      <Modal
        title="ADD COLLECTION"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <>
          <h1 id="mod_h1">Collection Details</h1>
          <TextField title="Collection Title" />
          <TextField title="Collection Product" />
          <h1 id="mod_h1">Collection Products</h1>
          <Tag closable onClose={log}>
            Tag 1
          </Tag>
          <Tag closable onClose={log}>
            Tag 2
          </Tag>
          <Tag closable onClose={log}>
            Tag 3
          </Tag>
          <Tag closable onClose={log}>
            Tag 4
          </Tag>
          <Tag closable onClose={log}>
            Tag 4
          </Tag>
          <Tag closable onClose={log}>
            Tag 4
          </Tag>
          <Tag closable onClose={log}>
            Tag 4
          </Tag>
          <Tag closable onClose={log}>
            Tag 4
          </Tag>
          <Tag closable onClose={log}>
            Tag 4
          </Tag>
          <Tag closable onClose={log}>
            Tag 4
          </Tag>
          <Tag closable onClose={log}>
            Tag 4
          </Tag>
          <Tag closable onClose={log}>
            Tag 4
          </Tag>
          <Tag closable onClose={log}>
            Tag 4
          </Tag>
          <Tag closable onClose={log}>
            Tag 4
          </Tag>
          <div style={{display: 'block', marginTop: "1rem", marginLeft: "26rem"}}>
            <Dropdown  trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  View all products
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </>
      </Modal>
    </>
  );
};

export default Groups;
