import React from 'react'
import {Tabs} from 'antd'
import Customers from '../Customers/Customers'
import Groups from './Groups';


const { TabPane } = Tabs;
const onChange = (key) => {
  console.log(key);
};

const CustomersMain = () => {
  return (
    <>
    <div>
      <div className="customers_groups">
        <Tabs defaultActiveKey="1" onChange={onChange}>
          <TabPane tab="Customers" key="1">
            <Customers />
          </TabPane>
          <TabPane tab="Groups" key="2">
            <Groups />
          </TabPane>
        </Tabs>
      </div>
    </div>
    </>
  )
}

export default CustomersMain