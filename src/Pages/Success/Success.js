import React from 'react'
import {Row, Col, Button} from 'antd'
import './Success.css'
import Help from '../../img/help.png';
import Logo from '../../Components/Logo';
import Succ from '../../img/success.png'
import Btn from '../../Components/Btn';



const Success = () => {
  return (
    <div className="success_container">
        <div className="create_box">
        <Row justify="center">
            <Col>
                <Logo/>
            </Col>
        </Row>

        <Row justify="center">
            <Col>
                <img id='succ_img' src={Succ} alt="Succeeded" />
            </Col>
        </Row>

        <Row>
            <Col span={24}>
                <h1 id="congrats">Congratulations!</h1>
            </Col>
        </Row>

        <Row>
            <Col span={24}>
                <p id='succ_p'>JAVUS CONVENIENCE STORE has been created.</p>
            </Col>
        </Row>

        <Row justify='center'>
            <Col>
                <Btn title = 'Manage Store'/>
            </Col>
        </Row>

        <Row justify='center'>
            <Col>
                    <p>You can view your store here :  <a href="">View Store</a></p>
                    
            </Col>
        </Row>









        <Row>
            <Col >
                <img id='helpimg' src={Help} alt="" />
            </Col>
        </Row>
        </div>
    </div>
  )
}

export default Success