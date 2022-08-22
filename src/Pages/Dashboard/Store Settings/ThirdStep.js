import React from 'react'
import './ThirdStep.css'
import Succ from '../../../img/success.png'
import {Row, Col} from 'antd'
import Btn from '../../../Components/Btn'
import { useState } from 'react'

const ThirdStep = () => {

  const [shownScreen,setShownScreen]=useState(false)
  console.log("shownScreen",shownScreen);
  return (
    <>
    <div className="third_container">
        <div className="third_box">
          {!shownScreen? <Row>
            <Col xs={24}>
              <h1 id="first_h1">You are all set to go!</h1>
            </Col>
            <Col xs={24} id="first_p">
              <p>Your store infromation has been saved successfully.</p>
            </Col>
            <Col xs={24}>
                <img src={Succ} alt="Succeeded" />
            </Col>
            <Col xs={24}>
                <h1>We have all the data we need!</h1>
            </Col>
            <Col xs={24} id="first_p">
              <p>You can start adding products to your store now.</p>
            </Col>
            </Row>:<>ddsfsd</>}
       
            <Row justify='center'>
                <Col>
                    <Btn title="Add Product" onCLick={()=>setShownScreen(true)}/>
                </Col>
            </Row>
          
        </div>
    </div>
    </>
  )
}

export default ThirdStep