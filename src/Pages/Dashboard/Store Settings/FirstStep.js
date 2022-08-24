import { Row, Col, Form } from "antd";
import TextField from "../../../Components/TextField";
import TextsArea from "../../../Components/TextsArea";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import React, { useState } from "react";
import './FirstStep.css'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

// ############################### Image Condition

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }

  return isJpgOrPng && isLt2M;
};

// ################################################################
const FirstStep = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <>
      <div className="first_container">
        <div className="first_box">
            <Row>
                <Col xs={24}><h1 id="first_h1">Store Details</h1></Col>
                <Col xs={24} id="first_p"><p>Fill in the following store dtails</p></Col>
            </Row>
          <Row justify="space-between">
            <Col md={17}>
              <Form {...layout}>
                <TextField title="Store Name : " place="Enter store name" />
                <TextField title="Store Contact# : " place="+92 300 0000000" />
                <TextField title="Store Email : " place="Enter store email" />
                <TextField title="Store Adress : " place="Enter your address" />
                <TextsArea
                  title="* Description :"
                  place="Store Description Should be within 30 words"
                />
                <Row justify="center" id="para">
                  <Col
                    xs={24}
                    sm={{ span: 16, offset: 8 }}
                    md={{ span: 14, offset: 7}}
                  >
                    <p>Store Description Should be within 90 words</p>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col xs={12} md={6} style={{alignSelf:'self-start', marginLeft: '10px'}}>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: "100%",
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
            Upload Store Image
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default FirstStep;
