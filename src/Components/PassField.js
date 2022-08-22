import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Form, Row, Col} from 'antd';
import React from 'react';

const PassField = (props) => (
  <Row>
      <Col xs={24} md={20}>
            
            <Form.Item
          name={props.title}
          label={props.title}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.Password
              placeholder="input password"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
        </Form.Item>
      </Col>
  </Row>
);

export default PassField;