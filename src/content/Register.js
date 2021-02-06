import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
import { Row, Col, Input, Checkbox, Form, Button, Spin, Modal } from 'antd';
import banner from '../img/register.png';
// import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
import '../css/Register.css';
import { config } from '../config/config';

const cookies = new Cookies();

const ip = config.ipServer;

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            email: "",
            header: [],
            statusSend: false,
            isModalVisible: false,
            statusSendLogin: false
        }

        this.onRegister = this.onRegister.bind(this);
        this.handleCancelLogin = this.handleCancelLogin.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.onClickLogin = this.onClickLogin.bind(this);
    }

    componentWillMount() {
        this.setState({
            token: cookies.get('token_user', { path: '/' }),
            email: cookies.get('email', { path: '/' }),
            header: {
                token: cookies.get('token_user', { path: '/' }),
                key: cookies.get('email', { path: '/' })
            }
        });
    }

    handleCancelLogin() {
        this.setState({ isModalVisible: false });
    }

    async onRegister(values) {
        this.setState({
            statusSend: true
        });
        if (values.password === values.passwordCon) {
            const data = {
                name: values.name,
                phone: values.phone,
                nameCompany: values.company,
                email: values.email,
                password: values.password,
                sendNewsEmail: (values.sendEmail) ? "A" : "N"
            };

            console.log(data, " datadatadata")

            var url_register = ip + "/User/Register";
            const register = await (await axios.post(url_register, data)).data;
            if (register?.status) {
                swal("Success!", "สมัครสมาชิดสำเร็จ กรุณายืนยัน email เพื่อลงเชื่อเข้าใช้", "success").then((value) => {
                    window.location.replace('/Home', false);
                });
            } else {
                if (register?.message === "Email Already") {
                    swal("Warning!", "Email นี้มีผู้ใช้งานแล้ว", "warning").then((value) => {
                        this.setState({
                            statusSend: false
                        });
                    });
                } else {
                    swal("Error!", "เกิดข้อผิดพลาด \nกรุณาลองใหม่", "error").then((value) => {
                        this.setState({
                            statusSend: false
                        });
                    });
                }
            }
        } else {
            swal("Warning!", "Password ไม่ตรงกัน", "warning").then((value) => {
                this.setState({
                    statusSend: false
                });
            });
        }
    }

    onClickLogin() {
        if (window.innerWidth >= 684) {
            this.setState({ isModalVisible: true });
        } else {
            window.location.replace('/Login', false);
        }
    }

    async onLogin(values) {
        this.setState({
            statusSendLogin: true
        });
        const data = {
            email: values.email,
            password: values.password
        };

        var url_login = ip + "/User/Login";
        const login = await (await axios.post(url_login, data)).data;
        if (login?.status) {
            const user_data = {
                userCode: login.data?.userCode,
                name: login.data?.name,
                phone: login.data?.phone
            }
            cookies.set('user', JSON.stringify(user_data), { path: '/' });
            cookies.set('token_user', login.data?.token, { path: '/' });
            cookies.set('email', login.data?.email, { path: '/' });
            this.setState({
                storedJwt: login.data?.token
            });
            window.location.replace('/HomeUser', false);
        } else {
            if (login?.message === "You Not Confirm Email") {
                swal("Warning!", "กรุณายืนยัน Email ก่อนเข้าสู่ระบบ", "warning").then((value) => {
                    this.setState({
                        statusSendLogin: false
                    });
                });
            } else {
                swal("Error!", "Username หรือ Password ผิดพลาด", "error").then((value) => {
                    this.setState({
                        statusSendLogin: false
                    });
                });
            }
        }
    }

    render() {
        return (
            <Container fluid id="Register">
                <Form onFinish={this.onRegister}>
                    <Row>
                        <Col xs={0} md={0} xl={12}><Image src={banner} reponsive></Image></Col>
                        <Col xs={24} md={24} xl={12} id="form-Regis">
                            <Row id="form-register">
                                <Col xs={24} md={24} xl={24} id="form-header">กรอกข้อมูลเพื่อสมัครสมาชิก</Col>
                                <Col xs={2} md={5} xl={5}></Col>
                                <Col xs={20} md={14} xl={14}>
                                    <Row id="form-header1">ชื่อ - นามสกุล</Row>
                                    <Col xs={24} md={24} xl={24}>
                                        <Form.Item
                                            name="name"
                                            rules={[{ required: true, message: 'กรุณากรอกชื่อ - นามสกุล!' }]}>
                                            <Input placeholder="ชื่อ - นามสกุล" style={{ width: '100%' }} id="form-input" />
                                        </Form.Item>
                                    </Col>
                                    <Row id="form-header1">เบอร์โทรศัพท์</Row>
                                    <Col xs={24} md={24} xl={24}>
                                        <Form.Item
                                            name="phone"
                                            rules={[{ required: true, message: 'กรุณากรอกเบอร์โทรศัพท์!' }]}>
                                            <Input placeholder="เบอร์โทรศัพท์" style={{ width: '100%' }} id="form-input" />
                                        </Form.Item>
                                    </Col>
                                    <Row id="form-header1">ชื่อสถานประกอบการ</Row>
                                    <Col xs={24} md={24} xl={24}>
                                        <Form.Item
                                            name="company"
                                            rules={[{ required: true, message: 'กรุณากรอกสถานประกอบการ!' }]}>
                                            <Input placeholder="ชื่อสถานประกอบการ เช่น ชื่อบริษัท" id="form-input" />
                                        </Form.Item>
                                    </Col>
                                    <Row id="form-header1">อีเมลล์</Row>
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
                                            <Input placeholder="อีเมลล์" id="form-input" />
                                        </Form.Item>
                                    </Col>
                                    <Row id="form-header1">รหัสผ่าน</Row>
                                    <Col xs={24} md={24} xl={24}>
                                        <Form.Item
                                            name="password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'กรุณากรอกรหัสผ่าน!',
                                                },
                                            ]}>
                                            <Input type="password" placeholder="รหัสผ่าน" id="form-input" />
                                        </Form.Item>
                                    </Col>
                                    <Row id="form-header1">ยืนยันรหัสผ่าน</Row>
                                    <Col xs={24} md={24} xl={24}>
                                        <Form.Item
                                            name="passwordCon"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'กรุณากรอกรหัสผ่าน!',
                                                },
                                            ]}>
                                            <Input type="password" placeholder="ยืนยันรหัสผ่าน" id="form-input" />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} md={24} xl={24} id="row-regis">
                                        <Form.Item name="sendEmail" valuePropName="checked">
                                            <Checkbox>
                                                <span id="check-regis">ลงทะเบียนเพื่อรับข้อมูลทางอีเมล</span>
                                            </Checkbox>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} md={24} xl={24} id="row-regis1">
                                        {
                                            (!this.state.statusSend) ? <Button htmlType="submit" id="btn-login">ลงทะเบียน</Button> : <Spin />
                                        }
                                    </Col>
                                    <Col xs={24} md={24} xl={24} id="row-regis1">คุณมีบัญชีอยู่แล้ว <span id="color-regis" onClick={this.onClickLogin}>ลงชื่อเข้าใช้</span> </Col>
                                </Col>
                                <Col xs={2} md={5} xl={5}></Col>
                            </Row>
                        </Col>
                    </Row>
                </Form>

                <Modal
                    title={null}
                    footer={null}
                    visible={this.state.isModalVisible}
                    onCancel={this.handleCancelLogin}
                    width={450}
                >
                    <Form onFinish={this.onLogin}>
                        <Row>
                            <Col xs={4} md={4} xl={4}></Col>
                            <Col xs={16} md={16} xl={16}>
                                <Col xs={24} md={24} xl={24} id="LoginHeader1">เข้าสู่ระบบ</Col>
                                <Col xs={24} md={24} xl={24} id="LoginDescrip">เมื่อคุณเข้าสู่ระบบคุณได้ทำตาม<span id="LoginDescrip-si">ข้อตกลงผู้ใช้</span></Col>
                                <Row id="login-header">อีเมลล์</Row>
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
                                        <Input placeholder="อีเมลล์" id="form-logininput" />
                                    </Form.Item>
                                </Col>
                                <Row id="login-header">รหัสผ่าน</Row>
                                <Col xs={24} md={24} xl={24}>
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'กรุณากรอกรหัสผ่าน!',
                                            },
                                        ]}>
                                        <Input type="password" placeholder="รหัสผ่าน" id="form-logininput" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={24} xl={24} id="row-login">
                                    {
                                        (!this.state.statusSendLoginc) ? <Button htmlType="submit" id="btn-login">SIGN IN</Button> : <Spin />
                                    }
                                </Col>
                                <Col xs={24} md={24} xl={24} id="row-login">
                                    <span id="ft-pass" onClick={() => this.showForgetPass()} style={{ cursor: "pointer" }}>ลืมรหัสผ่าน?</span>
                                </Col>
                                {/* <Col xs={24} md={24} xl={24} id="row-login1">คุณยังไม่มีบัญชี <span id="link-regis" style={{ cursor: "pointer" }} onClick={() => { this.onClickRegister() }}> ลงทะเบียนเข้าใช้ </span></Col> */}
                            </Col>
                            <Col xs={4} md={4} xl={4}></Col>
                        </Row>
                    </Form>
                </Modal>
            </Container>
        );
    }
}