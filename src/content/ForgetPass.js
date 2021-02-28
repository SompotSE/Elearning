import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
import { Row, Col, Input, Form, Button, Modal, Spin } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import '../css/ForgetPass.css';
import letter from "../img/letter.png"
import axios from 'axios';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
import { config } from '../config/config';

const cookies = new Cookies();

const ip = config.ipServer;

export default class ForgrtPass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            email: "",
            header: [],
            isModalConfirmMail: false,
            statusSendForgetPass: false
        }

        this.confirmMailClose = this.confirmMailClose.bind(this);
        this.onForgetPass = this.onForgetPass.bind(this);
        this.showConfirmMail = this.showConfirmMail.bind(this);
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

    showConfirmMail() {
        this.setState({ isModalConfirmMail: true });
    }

    confirmMailClose() {
        this.setState({ isModalConfirmMail: false });
        window.location.replace('/Home', false);
    }

    async onForgetPass(values) {
        this.setState({
            statusSendForgetPass: true
        });

        const data = {
            email: values.email
        };

        var url_forget_pass = ip + "/ForgetPassword/ForgetPassword";
        const forget_pass = await (await axios.post(url_forget_pass, data)).data;

        if (!forget_pass?.status) {
            if (forget_pass?.message === "Email Not Already") {
                swal("Warning!", "ไม่พบ Email ในระบบ \n กรุณาลองใหม่อีกครับ", "warning").then((value) => {
                    this.setState({
                        statusSendForgetPass: false
                    });
                });
            } else if ((forget_pass?.message === "Authorization Expire") || (forget_pass?.message === "Authorization Fall") || (forget_pass?.message === "Authorization Wrong")) {
                swal("Error!", "เกิดข้อผิดพลาดในการเข้าสู่ระบบ \n กรุณาเข้าสู่ระบบใหม่", "error").then((value) => {
                    this.setState({
                        token: cookies.remove('token_user', { path: '/' }),
                        user: cookies.remove('user', { path: '/' }),
                        email: cookies.remove('email', { path: '/' })
                    });
                    window.location.replace('/', false);
                });
            } else {
                swal("Error!", "เกิดข้อผิดพลาด \n กรุณาลองใหม่", "error").then((value) => {
                    this.setState({
                        statusSendForgetPass: false
                    });
                });
            }
        } else {
            this.showConfirmMail();
        }
    }

    render() {

        return (
            <Container fluid id="ForgetMobile">
                <Form onFinish={this.onForgetPass}>
                    <Row>
                        <Col xs={2} md={2} xl={2}></Col>
                        <Col xs={20} md={20} xl={20}>
                            <Col xs={24} md={24} xl={24} id="forgetMobile">คุณลืมรหัสผ่านใช่หรือไม่</Col>
                            <Col xs={24} md={24} xl={24} id="forgetDescrip">ระบบจะส่งลิงค์สำหรับเปลี่ยนรหัสผ่านให้คุณผ่านทางอีเมลล์</Col>
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
                                    <Input placeholder="กรอกอีเมลล์" id="form-logininput" />
                                </Form.Item>
                            </Col>
                            <Col id="row-btnForgetPass">
                                {/* <Button id="btn-fotgetPass" onClick={() => this.showChangePassSuccess()}>ตรวจสอบ</Button> */}
                                {
                                    (!this.state.statusSendForgetPass) ? <Button htmlType="submit" id="btn-fotgetPass">ตรวจสอบ</Button> : <Spin />
                                }
                            </Col>
                        </Col>
                        <Col xs={2} md={2} xl={2}></Col>
                    </Row>
                    <Col xs={24} md={24} xl={24} id="ft-footer"><QuestionCircleOutlined style={{ fontSize: "14px", display: "flex", alignItems: "center", marginRight: "2%" }} />หากคุณลืมอีเมลที่ใช้ในการลงทะเบียนกรุณาติดต่อที่ 082-222-2232 หรือทางอีเมลที่ Dairc.kmutnb@gmail.com</Col>
                </Form>

                <Modal
                    title={null}
                    footer={null}
                    visible={this.state.isModalConfirmMail}
                    width={450}>
                    <Row id="Modal-Chanepass">
                        <Col xs={4} md={4} xl={4}></Col>
                        <Col xs={16} md={16} xl={16}>
                            <Row id="Row-Modal">
                                <Image src={letter} fluid />
                            </Row>
                            <Row id="Modal-cfMail">ตรวจสอบอีเมลล์ของคุณ</Row>
                            <Row id="Modal-cfMail1">เราได้ส่งคำแนะนำในการกู้คืนรหัสผ่านไปยังอีเมลล์ของคุณ</Row>
                            <Row id="Row-CP">
                                <Button id="btn-ModalCf1" onClick={this.confirmMailClose}>เสร็จสิ้น</Button>
                            </Row>
                        </Col>
                        <Col xs={4} md={4} xl={4}></Col>
                        <Col xs={24} md={24} xl={24} id="ft-footer"><QuestionCircleOutlined style={{ fontSize: "10px", display: "flex", alignItems: "center", marginRight: "0.5%" }} />หากไม่ได้รับอีเมลล์? โปรดตรวจสอบอีเมลล์ของคุณหรือลองใช้ที่อยู่อีเมลล์อื่น</Col>
                    </Row>
                </Modal>
            </Container>
        )
    }
}