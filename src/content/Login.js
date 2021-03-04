import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Input, Form, Button, Spin } from 'antd';
import '../css/Login.css';
import axios from 'axios';
// import { NavLink } from 'react-router-dom';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
import { config } from '../config/config';

const cookies = new Cookies();

const ip = config.ipServer;

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            email: "",
            header: [],
            statusSend: false,
        }

        this.onLogin = this.onLogin.bind(this);
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

    async onLogin(values) {
        this.setState({
            statusSend: true
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
                phone: login.data?.phone,
                userRoleId: login.data?.userRoleId
            }
            cookies.set('user', JSON.stringify(user_data), { path: '/' });
            cookies.set('token_user', login.data?.token, { path: '/' });
            cookies.set('email', login.data?.email, { path: '/' });
            this.setState({
                storedJwt: login.data?.token
            });
            if(login.data?.userRoleId === 1) {
                window.location.replace('/Admin/Home', false);
            } else {
                window.location.replace('/HomeUser', false);
            }
        } else {
            if(login?.message === "You Not Confirm Email") {
                swal("","ระบบจะเปิดให้ใช้งานในวันที่ 5 มีนาคม 2546 \n ตั้งแต่เวลา 14.00 น. เป็นต้นไป", "warning").then((value) => {
                    this.setState({
                        statusSend: false
                    });
                });
            } else {
                swal("Error!", "Username หรือ Password ผิดพลาด", "error").then((value) => {
                    this.setState({
                        statusSend: false
                    });
                });
            }
        }
    }

    render() {

        return (
            <Container fluid id="LoginMobile">
                <Form onFinish={this.onLogin}>
                    <Row id="login-mobile">
                        <Col xs={2} md={2} xl={2}></Col>
                        <Col xs={20} md={20} xl={20}>
                            <Col xs={24} md={24} xl={24} id="LoginHeader">เข้าสู่ระบบ</Col>
                            <Col xs={24} md={24} xl={24} id="LoginDescrip">เมื่อคุณเข้าสู่ระบบคุณได้ทำตาม<span id="LoginDescrip-si">ข้อตกลงผู้ใช้</span></Col>
                            <Row id="login-headermobile">อีเมลล์</Row>
                            <Col xs={24} md={24} xl={24}>
                                <Form.Item
                                    name="email"
                                    rules={[
                                        // {
                                        //     type: 'email',
                                        //     message: 'รูปแบบอีเมลล์ไม่ถูกต้อง',
                                        // },
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
                                    (!this.state.statusSend) ? <Button htmlType="submit" id="btn-login">SIGN IN</Button> : <Spin />
                                }
                            </Col>
                            {/* <Col xs={24} md={24} xl={24} id="row-login">
                                <NavLink to="/ForgetPass"><span id="ft-pass">ลืมรหัสผ่าน?</span></NavLink>
                            </Col> */}
                            {/* <Col xs={24} md={24} xl={24} id="row-login1"> คุณยังไม่มีบัญชี <NavLink to="/Register"><span id="link-regis">  ลงทะเบียนเข้าใช้ </span></NavLink></Col> */}
                        </Col>
                        <Col xs={2} md={2} xl={2}></Col>
                    </Row>
                </Form>
            </Container>
        )
    }
}