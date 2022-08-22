import React from 'react'
import './Logo.css';
import {Row, Col } from 'antd'
import mainLogo from '../img/logo.png';

const Logo = () => {
  return (
    <Row>
        <Col span={24} ><img id='image_1' src={mainLogo} alt="Logo" /></Col>
    </Row>

  )
}

export default Logo