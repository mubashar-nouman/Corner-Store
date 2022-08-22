import React, { useState, useEffect } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import qs from "qs";
import { Row, Col, Button, TreeSelect, Table, Pagination } from "antd";
import './Orders.css'
import { UploadOutlined } from "@ant-design/icons";
import TextField from "../../Components/TextField";

const { Search } = Input;
const onSearch = (value) => console.log(value);

const columns = [
  {
    title: "ORDERS#",
    dataIndex: "order",
    sorter: true,
    render: (name) => `Title${1}`,
    width: "20%",
  },
  {
    title: "ORDER TYPE",
    dataIndex: "order_type",
    render: () => (
      <>
        <p>Online</p>
      </>
    ),
  },
  {
    title: "DATE ADDED",
    dataIndex: "date_added",
    render: () => (
      <>
        <p>09-12-2022, 03:04PM</p>
      </>
    ),
  },
  {
    title: "PAYMENT STATUS",
    dataIndex: "pay_status",
    render: () => (
      <>
        <ul>
            <li>Paid</li>
        </ul>
      </>
    ),
  },
  {
    title: "ORDER AMOUNT",
    dataIndex: "amount",
    dataIndex: "",
    key: "x",
    render: () => (
      <>
        <p>1400/- PKR</p>
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

const Orders = () => {
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
        <Col xs={24} md={{ span: 3, offset: 5 }} flex={{ justifyContent: "flex-end" }}>
          <Button icon={<UploadOutlined />}>Export</Button>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs={24} md={12}>
          <h1 id="products_h1">All Orders</h1>
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
      {/* <Row>
        <Col>
        <Pagination defaultCurrent={6} total={500} />
        </Col>
      </Row> */}
    </>
  );
};

export default Orders;
