import React, { useState, useEffect } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import qs from "qs";
import { Row, Col, Button, TreeSelect, Table, Pagination } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./Product_comp.css";
import Btn from "../../../Components/Btn";
import TextField from "../../../Components/TextField";

const { Search } = Input;
const onSearch = (value) => console.log(value);

const columns = [
  {
    title: "NAME",
    dataIndex: "name",
    sorter: true,
    render: (name) => `${name.first} ${name.last}`,
    width: "20%",
  },
  {
    title: "COLLECTION",
    dataIndex: "collection",
    render: () => (
      <>
        <p>-</p>
      </>
    ),
  },
  {
    title: "UNIT PRICE",
    dataIndex: "price",
    render: () => (
      <>
        <p>144 pkr/-</p>
      </>
    ),
  },
  {
    title: "INVENTORY",
    dataIndex: "inventory",
    render: () => (
      <>
        <p>144 in stock for 5 variant (s)</p>
      </>
    ),
  },
  {
    title: "ACTION",
    dataIndex: "action",
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => (
      <>
        <a style={{ fontSize: "2rem" }}>
          <EditOutlined Style={{ color: "rgba(58, 53, 65, 0.54);" }} />
        </a>
        <a style={{ marginLeft: "2rem", fontSize: "2rem" }}>
          <DeleteOutlined />
        </a>
      </>
    ),
  },
];

const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});
// ######################################### FUNCTION START #########################################

const Product_comp = () => {
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
      <Row style={{marginBottom: '2rem'}}>
        <Col xs={24} md={16}>
          <TreeSelect
            treeDataSimpleMode
            style={{
              width: "15%",
            }}
            value={value}
            dropdownStyle={{
              maxHeight: 400,
              overflow: "auto",
            }}
            placeholder="Filter"
            onChange={onChange}
            loadData={onLoadData}
            treeData={treeData}
          />
        </Col>
        <Col xs={24} md={{ span: 3 }} flex={{ justifyContent: "flex-end" }}>
          <Button icon={<UploadOutlined />}>Export</Button>
        </Col>
        <Col xs={24} md={1}>
          <Button type="primary">ADD NEW PRODUCT</Button>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs={24} md={12}>
          <h1 id="products_h1">Products Inventory</h1>
        </Col>
        <Col xs={24} md={12} style={{marginTop: "3rem",}}>
          <TextField place="Search..."/>
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
    </>
  );
};

export default Product_comp;
