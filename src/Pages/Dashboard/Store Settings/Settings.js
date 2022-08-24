import { Button, message, Steps } from 'antd';
import React, { useState } from 'react';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import './Settings.css'
import ThirdStep from './ThirdStep';


const { Step } = Steps;
const steps = [
  {
    title: 'Store Details',
    content: <FirstStep/>,
  },
  {
    title: 'Payment Methos',
    content: <SecondStep/>,
  },
  {
    title: 'Confirmation',
    content: <ThirdStep/>,
  },
];



// ################################################################
const Settings = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <div className="settings_container">
        <Steps current={current} style={{marginBottom:'3rem'}}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Setting has been updated successfully')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{
                margin: '0 8px',
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Settings;