import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Input, Form, Button } from 'antd';
import '../css/Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <Container fluid id="LoginMobile">
                    <Form>
                        <Row id="login-mobile">
                            <Col xs={2} md={2} xl={2}></Col>
                            <Col xs={20} md={20} xl={20}>
                                <Col xs={24} md={24} xl={24} id="LoginHeader">เข้าสู่ระบบ</Col>
                                <Col xs={24} md={24} xl={24} id="LoginDescrip">เมื่อคุณเข้าสู่ระบบคุณได้ทำตาม<span id="LoginDescrip-si">ข้อตกลงผู้ใช้</span></Col>
                                <Row  id="login-header">อีเมลล์</Row>
                                        <Col xs={24} md={24} xl={24}>
                                            <Form.Item
                                                name="email"
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
                                                <Input placeholder="อีเมลล์" id="form-logininput"/>
                                            </Form.Item>
                                            </Col>
                                    <Row  id="login-header">รหัสผ่าน</Row>
                                        <Col xs={24} md={24} xl={24}>
                                            <Form.Item
                                                name="password"
                                                rules={[
                                                {
                                                    required: true,
                                                    message: 'กรุณากรอกรหัสผ่าน!',
                                                },
                                                ]}>
                                                <Input type="password" placeholder="รหัสผ่าน" id="form-logininput"/>
                                            </Form.Item>   
                                        </Col>
                                    <Col xs={24} md={24} xl={24} id="row-login">
                                        <Button id="btn-login">SIGN IN</Button>
                                    </Col>   
                                    <Col xs={24} md={24} xl={24} id="row-login">
                                            <span id="ft-pass">ลืมรหัสผ่าน?</span>
                                    </Col>
                                    <Col xs={24} md={24} xl={24} id="row-login1">
                                        คุณยังไม่มีบัญชี  <span id="link-regis">  ลงทะเบียนเข้าใช้ </span> 
                                    </Col>
                            </Col>
                            <Col xs={2} md={2} xl={2}></Col>
                        </Row>
                    </Form>
            </Container>
        )
    }
}