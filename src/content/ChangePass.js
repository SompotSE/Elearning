import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Input, Form, Button, Modal, Spin } from 'antd';
import '../css/ChangePass.css';
import { FaCheckCircle } from "react-icons/fa";
import axios from 'axios';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
import { config } from '../config/config';


const cookies = new Cookies();

const ip = config.ipServer;

export default class ChangePass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            email: "",
            header: [],
            statusSendChangePass: false,
            isModalCPSuccess: false,
        }

        this.showCPSuccess = this.showCPSuccess.bind(this);
        this.onChangePass = this.onChangePass.bind(this);
        this.onLoginAgain = this.onLoginAgain.bind(this);
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

    showCPSuccess() {
        this.setState({ isModalCPSuccess: true });
    }

    async onChangePass(values) {
        console.log(values, " values")
        this.setState({
            statusSendChangePass: true
        });

        if (values.newPassword === values.newPasswordCon) {
            const data = {
                password: values.oldPassword,
                passwordNew: values.newPassword
            };

            var url_change_pass = ip + "/User/ChangePassword";
            const change_pass = await (await axios.post(url_change_pass, data, { headers: this.state.header })).data;

            if (!change_pass?.status) {
                if (change_pass?.message === "Password Wrong") {
                    swal("Warning!", "Password ผิดพลาด", "warning").then((value) => {
                        this.setState({
                            statusSendChangePass: false
                        });
                    });
                } else if ((change_pass?.message === "Authorization Expire") || (change_pass?.message === "Authorization Fall") || (change_pass?.message === "Authorization Wrong")) {
                    swal("Error!", "เกิดข้อผิดพลาดในการเข้าสู่ระบบ \n กรุณาเข้าสู่ระบบใหม่", "error").then((value) => {
                        this.setState({
                            token: cookies.remove('token_user', { path: '/' }),
                            user: cookies.remove('user', { path: '/' }),
                            email: cookies.remove('email', { path: '/' })
                        });
                        window.location.replace('/', false);
                    });
                } else {
                    swal("Error!", "เกิดข้อผิดพลาด \nกรุณาลองใหม่", "error").then((value) => {
                        this.setState({
                            statusSendChangePass: false
                        });
                    });
                }
            } else {
                this.showCPSuccess();
            }
        }
        else {
            swal("Warning!", "Password ใหม่ไม่ตรงกัน", "warning").then((value) => {
                this.setState({
                    statusSendChangePass: false
                });
            });
        }
    }

    onLoginAgain() {
        this.setState({
            token: cookies.remove('token_user', { path: '/' }),
            user: cookies.remove('user', { path: '/' }),
            email: cookies.remove('email', { path: '/' })
        });
        window.location.replace('/', false);
    }

    render() {

        return (
            <Container fluid id="LoginMobile">
                <Form onFinish={this.onChangePass}>
                    <Row id="row-CP">
                        <Col xs={4} md={4} xl={4}></Col>
                        <Col xs={16} md={16} xl={16}>
                            <Col xs={24} md={24} xl={24} id="CPHeader">สร้างรหัสผ่านใหม่</Col>
                            <Row id="CPDescript">รหัสผ่านเดิม</Row>
                            <Col xs={24} md={24} xl={24}>
                                <Form.Item
                                    name="oldPassword"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'กรุณากรอกรหัสเดิม!',
                                        },
                                    ]}>
                                    <Input.Password placeholder="รหัสผ่านเดิม" id="CPInput" />
                                </Form.Item>
                            </Col>
                            <Row id="CPDescript">รหัสผ่านใหม่</Row>
                            <Col xs={24} md={24} xl={24}>
                                <Form.Item
                                    name="newPassword"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'กรุณากรอกรหัสผ่านใหม่!',
                                        },
                                    ]}>
                                    <Input.Password placeholder="รหัสผ่านใหม่" id="CPInput" />
                                </Form.Item>
                            </Col>
                            <Row id="CPDescript1">ยืนยันรหัสผ่านใหม่</Row>
                            <Col xs={24} md={24} xl={24}>
                                <Form.Item
                                    name="newPasswordCon"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'กรุณากรอกยืนยันรหัสผ่านใหม่!',
                                        },
                                    ]}>
                                    <Input.Password placeholder="ยืนยันรหัสผ่านใหม่" id="CPInput" />
                                </Form.Item>
                            </Col>
                            <Row id="spin-center">
                                {
                                    (!this.state.statusSendChangePass) ? <Button htmlType="submit" id="btn-CP">เปลี่ยนรหัสผ่าน</Button> : <Spin />
                                }
                            </Row>
                        </Col>
                        <Col xs={4} md={4} xl={4}></Col>
                    </Row>
                </Form>


                <Modal
                    title={null}
                    footer={null}
                    visible={this.state.isModalCPSuccess}
                    width={250}>
                    <Row>
                        <Col xs={2} md={2} xl={2}></Col>
                        <Col xs={24} md={24} xl={24}>
                            <Row id="Row-Modal">
                                <FaCheckCircle style={{ fontSize: "70px", color: "#8DC53E" }} />
                            </Row>
                            <Row id="Row-CP">เปลี่ยนรหัสผ่านสำเร็จ</Row>
                            <Row id="Row-CP1">กรุณาเข้าสู่ระบบอีกครั้ง</Row>
                            <Row id="Row-CP">
                                <Button id="btn-ModalCP1" onClick={() => this.onLoginAgain()}>เข้าสู่ระบบ</Button>
                            </Row>
                        </Col>
                        <Col xs={2} md={2} xl={2}></Col>
                    </Row>
                </Modal>


            </Container>
        )
    }
}