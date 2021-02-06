import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
import { Row, Col, Button, Modal, Form, Input } from 'antd';
import { withRouter } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import '../css/Header.css';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { FaCheckCircle } from "react-icons/fa";
import letter from "../img/letter.png"
export default withRouter(class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            isModalVisible: false,
            isModalForgetPass: false,
            isModalchangePass: false,
            isModalCPSuccess: false,
            isModalConfirmMail: false,
        }

        this.showModal = this.showModal.bind(this);
        this.showForgetPass = this.showForgetPass.bind(this);
        this.showConfirmMail = this.showConfirmMail.bind(this);
        this.showchangePass = this.showchangePass.bind(this);
    }

    showModal() {
        this.setState({ isModalVisible: true });
    };

    showForgetPass(){
        this.setState({isModalForgetPass: true, isModalVisible: false});
    }

    showConfirmMail(){
        this.setState({isModalConfirmMail: true, isModalForgetPass: false, isModalVisible: false});
    }

    showchangePass(){
        this.setState({ isModalchangePass: true });
    }

    showCPSuccess(){
        this.setState({ isModalCPSuccess: true, isModalchangePass: false });
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
                                <Button type="primary" id="btn-sty" onClick={() => this.showchangePass()}>เปลี่ยนรหัสผ่าน</Button>
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
                                        <Button id="btn-fotgetPass" onClick={() => this.showConfirmMail()}>ตรวจสอบ</Button>
                                    </Col>
                                </Col>
                                <Col xs={3} md={3} xl={3}></Col>
                            </Row>
                            <Col xs={24} md={24} xl={24} id="ft-footer"><QuestionCircleOutlined style={{fontSize: "10px", display: "flex", alignItems: "center", marginRight: "0.5%"}}/>หากคุณลืมอีเมลที่ใช้ในการลงทะเบียนกรุณาติดต่อที่ 082-222-2232 หรือทางอีเมลที่ Dairc.kmutnb@gmail.com</Col>
                        </Form>
                </Modal>

                <Modal
                    title={null}
                    footer={null}
                    visible={this.state.isModalchangePass}
                    width={450}>
                        <Form>
                            <Row id="row-CP">
                                <Col xs={4} md={4} xl={4}></Col>
                                <Col xs={16} md={16} xl={16}>
                                    <Col xs={24} md={24} xl={24} id="CPHeader">สร้างรหัสผ่านใหม่</Col>
                                    <Row  id="CPDescript">รหัสผ่าน</Row>
                                        <Col xs={24} md={24} xl={24}>
                                            <Form.Item
                                                name="newPassword"
                                                rules={[
                                                {
                                                    required: true,
                                                    message: 'กรุณากรอกรหัสผ่าน!',
                                                },
                                                ]}>
                                                <Input.Password  placeholder="รหัสผ่าน" id="CPInput" />
                                            </Form.Item>   
                                        </Col>
                                        <Row  id="CPDescript1">รหัสผ่านใหม่</Row>
                                        <Col xs={24} md={24} xl={24}>
                                            <Form.Item
                                                name="newPassword1"
                                                rules={[
                                                {
                                                    required: true,
                                                    message: 'กรุณากรอกรหัสผ่าน!',
                                                },
                                                ]}>
                                                <Input.Password  placeholder="รหัสผ่าน" id="CPInput" />
                                            </Form.Item>   
                                        </Col>
                                        <Row>
                                            <Button id="btn-CP" onClick={() => this.showCPSuccess()}>เปลี่ยนรหัสผ่าน</Button>
                                        </Row>
                                </Col>
                                <Col xs={4} md={4} xl={4}></Col>
                            </Row>
                        </Form>
                </Modal>

                <Modal
                    title={null}
                    footer={null}
                    visible={this.state.isModalCPSuccess}
                    width={450}>
                        <Row id="Modal-Chanepass">
                            <Col xs={4} md={4} xl={4}></Col>
                            <Col xs={16} md={16} xl={16}>
                                <Row id="Row-Modal">
                                    <FaCheckCircle style={{fontSize: "70px", color: "#8DC53E"}}/>
                                </Row>
                                <Row id="Modal-CP">เปลี่ยนรหัสผ่านสำเร็จ</Row>
                                <Row id="Modal-CP1">กรุณาเข้าสู่ระบบอีกครั้ง</Row>
                                <Row id="Row-CP">
                                    <Button id="btn-ModalCP1">เข้าสู่ระบบ</Button>
                                </Row>
                            </Col>
                            <Col xs={4} md={4} xl={4}></Col>
                        </Row>
                    </Modal>

                    <Modal
                        title={null}
                        footer={null}
                        visible={this.state.isModalConfirmMail}
                        width={450}>
                        <Row id="Modal-Chanepass">
                            <Col xs={4} md={4} xl={4}></Col>
                            <Col xs={16} md={16} xl={16}>
                                <Row id="Row-Modal">
                                    <Image src={letter} fluid/>
                                </Row>
                                <Row id="Modal-cfMail">ตรวจสอบอีเมลล์ของคุณ</Row>
                                <Row id="Modal-cfMail1">เราได้ส่งคำแนะนำในการกู้คืนรหัสผ่านไปยังอีเมลล์ของคุณ</Row>
                                <Row id="Row-CP">
                                    <Button id="btn-ModalCf1">เสร็จสิ้น</Button>
                                </Row>
                            </Col>
                            <Col xs={4} md={4} xl={4}></Col>
                            <Col xs={24} md={24} xl={24}id="ft-footer"><QuestionCircleOutlined style={{fontSize: "10px", display: "flex", alignItems: "center", marginRight: "0.5%"}}/>หากไม่ได้รับอีเมลล์? โปรดตรวจสอบอีเมลล์ของคุณหรือลองใช้ที่อยู่อีเมลล์อื่น</Col>
                        </Row>
                    </Modal>
            </Container>
        )
    }
})