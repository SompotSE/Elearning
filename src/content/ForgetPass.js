import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Input, Form, Button } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import '../css/ForgetPass.css';

export default class ForgrtPass extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <Container fluid id="ForgetMobile">
                <Form>
                            <Row>
                                <Col xs={2} md={2} xl={2}></Col>
                                <Col xs={20} md={20} xl={20}>
                                    <Col xs={24} md={24} xl={24} id="forgetMobile">คุณลืมรหัสผ่านใช่หรือไม่</Col>
                                    <Col xs={24} md={24} xl={24} id="forgetDescrip">ระบบจะส่งลิงค์สำหรับเปลี่ยนรหัสผ่านให้คุณผ่านทางอีเมลล์</Col>
                                    <Row  id="login-header">อีเมลล์</Row>
                                        <Col xs={24} md={24} xl={24}>
                                            <Form.Item
                                                name="ft-email"
                                                rules={[
                                                {
                                                    type: 'email',
                                                    message: 'รูปแบบอีเมลล์ไม่ถูกต้อง',
                                                },
                                                {
                                                    required: true,
                                                    message: 'กรุณากรอกอีเมลล์',
                                                },
                                                ]}>
                                                <Input placeholder="กรอกอีเมลล์" id="form-logininput"/>
                                            </Form.Item>
                                        </Col>
                                    <Col id="row-btnForgetPass">
                                        <Button id="btn-fotgetPass">ตรวจสอบ</Button>
                                    </Col>
                                </Col>
                                <Col xs={2} md={2} xl={2}></Col>
                            </Row>
                            <Col xs={24} md={24} xl={24} id="ft-footer"><QuestionCircleOutlined style={{fontSize: "14px", color: "#C4C4C4", display: "flex", alignItems: "center", marginRight: "2%"}}/>หากคุณลืมอีเมลที่ใช้ในการลงทะเบียนกรุณาติดต่อที่ 082-222-2232 หรือทางอีเมลที่ Dairc.kmutnb@gmail.com</Col>
                        </Form>
            </Container>
        )
    }
}