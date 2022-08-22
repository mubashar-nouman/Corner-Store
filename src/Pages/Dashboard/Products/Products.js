import {  Tabs } from 'antd';
import React from 'react';
import Collection_comp from './Collection_comp';
import Product_comp from './Product_comp';


const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

const Products = () => (
  <Tabs defaultActiveKey="1" onChange={onChange}>
    <TabPane tab="Products" key="1">
      <Product_comp/>
    </TabPane>
    <TabPane tab="Collections" key="2">
      <Collection_comp/>
      {/* <Modale/> */}
    </TabPane>
  </Tabs>
);

export default Products;