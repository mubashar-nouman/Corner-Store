import React, { useState, useEffect } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Input, Modal, Tag, Dropdown, Menu, Space } from "antd";
import qs from "qs";
import { Row, Col, Button, TreeSelect, Table, Pagination } from "antd";
import TextField from "../../../Components/TextField";
import "./Collection_comp.css";

const { Search } = Input;
const onSearch = (value) => console.log(value);

const columns = [
  {
    title: "TITLE#",
    dataIndex: "order",
    sorter: true,
    render: (name) => `Title${1}`,
    width: "20%",
  },
  {
    title: "HANDLE",
    dataIndex: "handle",
    render: () => (
      <>
        <p>/title1.com</p>
      </>
    ),
  },
  {
    title: "CREATED AT",
    dataIndex: "created_at",
    render: () => (
      <>
        <p>09-12-2022, 03:04PM</p>
      </>
    ),
  },
  {
    title: "UPDATED AT",
    dataIndex: "updated_at",
    render: () => (
      <>
        <p>09-12-2022, 03:04PM</p>
      </>
    ),
  },
  {
    title: "PRODUCTS",
    dataIndex: "products",
    dataIndex: "",
    key: "x",
    render: () => (
      <>
        <p>T-Shirt, Bags, Mugs..</p>
      </>
    ),
  },
];
const menu = (
  <Menu
    items={[
      {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: "0",
      },
      {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: "1",
      },
      {
        type: "divider",
      },
      {
        label: "3rd menu item",
        key: "3",
      },
    ]}
  />
);
const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

const log = (e) => {
  console.log(e);
};

const preventDefault = (e) => {
  e.preventDefault();
  console.log("Clicked! But prevent default.");
};
// ######################################### FUNCTION START #########################################

const Collection_comp = (props) => {
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
  const [value, setValue] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const fetchData = (params = {}) => {
    setLoading(true);
    fetch(
      `https://randomuser.me/api?${qs.stringify(getRandomuserParams(params))}`
    )
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results);
        setLoading(false);
        setPagination({
          ...params.pagination,
          total: 200, // 200 is mock data, you should read it from server
          // total: data.totalCount,
        });
      });
  };

  useEffect(() => {
    fetchData({
      pagination,
    });
  }, []);

  const handleTableChange = (newPagination, filters, sorter) => {
    fetchData({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination: newPagination,
      ...filters,
    });
  };
  const [treeData, setTreeData] = useState([
    {
      id: 1,
      pId: 0,
      value: "1",
      title: "Status",
    },
    {
      id: 2,
      pId: 0,
      value: "2",
      title: "Collection",
    },
    {
      id: 3,
      pId: 0,
      value: "3",
      title: "Tags",
      isLeaf: true,
    },
  ]);

  const genTreeNode = (parentId, isLeaf = false) => {
    const random = Math.random().toString(36).substring(2, 6);
    return {
      id: random,
      pId: parentId,
      value: random,
      title: isLeaf ? "Tree Node" : "Expand to load",
      isLeaf,
    };
  };

  const onLoadData = ({ id }) =>
    new Promise((resolve) => {
      setTimeout(() => {
        setTreeData(
          treeData.concat([
            genTreeNode(id, false),
            genTreeNode(id, true),
            genTreeNode(id, true),
          ])
        );
        resolve(undefined);
      }, 300);
    });

  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
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
            value={value}
            dropdownStyle={{
              maxHeight: 400,
              overflow: "auto",
            }}
            placeholder="All"
            onChange={onChange}
            loadData={onLoadData}
            treeData={treeData}
          />
        </Col>
        <Col
          xs={24}
          md={{ span: 3, offset: 4 }}
        >
          <Button onClick={showModal} type="primary">
            Add New Collection
          </Button>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs={24} md={12}>
          <h1 id="products_h1">All Orders</h1>
        </Col>
        <Col xs={24} md={12} style={{ marginTop: "3rem" }}>
          <TextField place="Search..." />
        </Col>
      </Row>

      {/* ---------------------------------- Data Tables   -------------------------------- */}
      <Row>
        <Col span={24}>
          <Table
            columns={columns}
            rowKey={(record) => record.login.uuid}
            dataSource={data}
            scroll={{
              x: 1000,
            }}
            pagination={pagination}
            loading={loading}
            onChange={handleTableChange}
          />
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
            <Dropdown overlay={menu} trigger={["click"]}>
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

export default Collection_comp;
