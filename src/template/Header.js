import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Button, Modal, Form, Input } from 'antd';
import { withRouter } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import '../css/Header.css';
import { QuestionCircleOutlined } from '@ant-design/icons';

export default withRouter(class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            isModalVisible: false,
            isModalForgetPass: false,
        }

        this.showModal = this.showModal.bind(this);
        this.showForgetPass = this.showForgetPass.bind(this);
    }

    showModal() {
        this.setState({ isModalVisible: true });
    };

    showForgetPass(){
        this.setState({isModalForgetPass: true, isModalVisible: false});
    }

    render() {

        return (
            <Container fluid id="conflu">
                <Row id="row-header">
                    <Col xs={18} md={18} xl={18}>สัญลักษณ์</Col>
                    <Col xs={6} md={6} xl={6}>
                        <Row style={{ justifyContent: "space-between" }}>
                            <Col xs={24} md={24} xl={24} id="btn-header">
                                <Button type="primary" id="btn-sty" onClick={() => this.showModal()}>เข้าสู่ระบบ</Button>
                                <NavLink to="/Register"><Button type="primary" id="btn-sty1">สมัครสมาชิก</Button></NavLink>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Modal
                    title={null}
                    footer={null}
                    visible={this.state.isModalVisible}
                    width={450}
                >
                    <Form>
                        <Row>
                            <Col xs={4} md={4} xl={4}></Col>
                            <Col xs={16} md={16} xl={16}>
                                <Col xs={24} md={24} xl={24} id="LoginHeader1">เข้าสู่ระบบ</Col>
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
                                            <span id="ft-pass" onClick={() => this.showForgetPass()} style={{ cursor: "pointer" }}>ลืมรหัสผ่าน?</span>
                                    </Col>
                                    <Col xs={24} md={24} xl={24} id="row-login1">
                                        คุณยังไม่มีบัญชี <span id="link-regis"> ลงทะเบียนเข้าใช้ </span> 
                                    </Col>
                            </Col>
                            <Col xs={4} md={4} xl={4}></Col>
                        </Row>
                    </Form>
                </Modal>

                <Modal
                    title={null}
                    footer={null}
                    visible={this.state.isModalForgetPass}
                    width={560}>
                        <Form>
                            <Row>
                                <Col xs={3} md={3} xl={3}></Col>
                                <Col xs={18} md={18} xl={18}>
                                    <Col xs={24} md={24} xl={24} id="ftHeader1">คุณลืมรหัสผ่านใช่หรือไม่</Col>
                                    <Col xs={24} md={24} xl={24} id="LoginDescrip">ระบบจะส่งลิงค์สำหรับเปลี่ยนรหัสผ่านให้คุณผ่านทางอีเมลล์</Col>
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
                                <Col xs={3} md={3} xl={3}></Col>
                            </Row>
                            <Col xs={24} md={24} xl={24} id="ft-footer"><QuestionCircleOutlined style={{fontSize: "10px", color: "#C4C4C4", display: "flex", alignItems: "center", marginRight: "0.5%"}}/>หากคุณลืมอีเมลที่ใช้ในการลงทะเบียนกรุณาติดต่อที่ 082-222-2232 หรือทางอีเมลที่ Dairc.kmutnb@gmail.com</Col>
                        </Form>
                </Modal>
            </Container>
        )
    }
})