import React from 'react'
import {Row, Col} from 'antd'
import Alert from '../../img/alert.png';
import Help from '../../img/help.png';
import Logo from '../../Components/Logo'
import './Verification.css'

const Verification = () => {
  return (
    <>
    <div className="create_container">
    <div className="create_box">
      <Row justify="center">
        <Col>
            <Logo/>
        </Col>
      </Row>
      
      <Row justify="center">
        <Col>
          <img id='alertimg' src={Alert} alt="" />
        </Col>
      </Row>

      <Row justify="center" id="para_1">
        <Col xs={20} md={8}>
          <p>Your information has been delivered to us!</p>
        </Col>
      </Row>
      

      <Row justify="center" >
        <Col xs={20} md={12}>
          <p id="para_2">We’ve set a verification email for you to complete your account setup.</p>
        </Col>
      </Row>

      <Row>
        <Col >
          <img id='helpimg' src={Help} alt="" />
        </Col>
      </Row>
      
    </div>
  </div>
    </>
  )
}

export default Verification