import React from 'react'
import './Error.css'
import {Row, Col} from 'antd'
import Logo from '../../Components/Logo'
import Eror from '../../img/error.png'
import Btn from '../../Components/Btn'
import Help from "../../img/help.png";


const Error = () => {
  return (
    <div className="create_container">
        <div className="error_box">
            <Row justify='center'>
                <Col>
                    <Logo/>
                </Col>
            </Row>

            <Row justify='center'>
                <Col>
                    <img id='error_img' src={Eror} alt="Error" />
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <p id='para_1'>Submission Failed</p>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <p id='para_2'>An un-expected error has occured</p>
                </Col>
            </Row>

            <Row justify='center'>
                <Col>
                    <Btn title="Try Again"/>
                </Col>
            </Row>

            <Row>
            <Col>
              <img id="helpimg" src={Help} alt="" />
            </Col>
          </Row>
        </div>
    </div>
  )
}

export default Error