import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
import { Row, Col, Button, Modal, Form, Input, Spin, Dropdown, Menu } from 'antd';
import { withRouter } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
import '../css/Header.css';
import { QuestionCircleOutlined, UserOutlined } from '@ant-design/icons';
import { config } from '../config/config';
import { FaCheckCircle } from "react-icons/fa";
import letter from "../img/letter.png";
import BIC from "../img/1.png";
import NECTEC from "../img/7.png";
import nstda from "../img/8.png";
import onde from "../img/9.png";
import PTEC from "../img/10.png";
import mhesi from "../img/5.png";
import SP from "../img/11.png";
import TMC from "../img/12.png";
import TSP from "../img/13.png";
import DE from "../img/3.png";

const cookies = new Cookies();

const ip = config.ipServer;

axios.interceptors.request.use(
    config => {
        const { origin } = new URL(config.url);
        const allowedOrigins = [ip];
        const token = localStorage.getItem('token');
        if (allowedOrigins.includes(origin)) {
            config.headers.authorization = `${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// const active = {fontSize: "14px", color: "#000000", alignItems: "center", borderBottom: "3px solid #000000", textDecoration: "auto", paddingBottom: "2%" };
export default withRouter(class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            user: [],
            email: "",
            header: [],
            statusSend: false,
            statusSendChangePass: false,
            statusSendForgetPass: false,

            isModalVisible: false,
            isModalForgetPass: false,
            isModalchangePass: false,
            isModalCPSuccess: false,
            isModalConfirmMail: false,
        }

        this.showModal = this.showModal.bind(this);
        this.showForgetPass = this.showForgetPass.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.onClickRegister = this.onClickRegister.bind(this);
        this.handleCancelLogin = this.handleCancelLogin.bind(this);
        this.handleCancelForgetPass = this.handleCancelForgetPass.bind(this);
        this.showConfirmMail = this.showConfirmMail.bind(this);
        this.showchangePass = this.showchangePass.bind(this);
        this.handleCancelChangePass = this.handleCancelChangePass.bind(this);
        // this.handleCancelCPSuccessPass = this.handleCancelCPSuccessPass.bind(this);
        this.onChangePass = this.onChangePass.bind(this);
        this.onLoginAgain = this.onLoginAgain.bind(this);
        this.onForgetPass = this.onForgetPass.bind(this);
        this.confirmMailClose = this.confirmMailClose.bind(this);
    }

    componentWillMount() {
        this.setState({
            token: cookies.get('token_user', { path: '/' }),
            user: cookies.get('user', { path: '/' }),
            email: cookies.get('email', { path: '/' }),
            header: {
                token: cookies.get('token_user', { path: '/' }),
                key: cookies.get('email', { path: '/' })
            }
        });

    }

    showModal() {
        this.setState({ isModalVisible: true, isModalCPSuccess: false });
    };

    showForgetPass() {
        this.setState({ isModalForgetPass: true, isModalVisible: false });
    }

    showConfirmMail() {
        this.setState({ isModalConfirmMail: true, isModalForgetPass: false, isModalVisible: false });
    }

    showchangePass() {
        this.setState({ isModalchangePass: true });
    }

    showCPSuccess() {
        this.setState({ isModalCPSuccess: true, isModalchangePass: false });
    }

    handleCancelLogin() {
        this.setState({ isModalVisible: false });
    }

    handleCancelForgetPass() {
        this.setState({ isModalForgetPass: false });
    }

    handleCancelChangePass() {
        this.setState({ isModalchangePass: false });
    }

    confirmMailClose() {
        this.setState({ isModalConfirmMail: false });
        window.location.replace('/Home', false);
    }

    // handleCancelCPSuccessPass() {
    //     this.setState({ isModalCPSuccess: false });
    // }

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
            if (login.data?.userRoleId === 1) {
                window.location.replace('/Admin/Home', false);
            } else {
                window.location.replace('/HomeUser', false);
            }
        } else {
            if (login?.message === "You Not Confirm Email") {
                swal("Warning!", "กรุณายืนยัน Email ก่อนเข้าสู่ระบบ", "warning").then((value) => {
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

    async onChangePass(values) {
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
                        window.location.replace('/Login', false);
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

    async onForgetPass(values) {
        console.log(values, " values");

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
                    window.location.replace('/Login', false);
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

    onClickRegister() {
        if (window.innerWidth >= 684) {
            this.setState({ isModalVisible: false });
            window.location.replace('/Register', false);
        }
    }

    onLoginAgain() {
        this.setState({
            token: cookies.remove('token_user', { path: '/' }),
            user: cookies.remove('user', { path: '/' }),
            email: cookies.remove('email', { path: '/' })
        });
        window.location.replace('/Home', false);
    }

    LoginButton() {
        this.props.history.push("/Login");
    }

    RegisterButton() {
        this.props.history.push("/Register");
    }

    render() {

        return (
            <Container fluid id="conflu">
                <Row id="row-header1">
                    {
                        (window.innerWidth >= 768) ?
                            <>
                                <Col xs={17} md={19} xl={19}>
                                    <Row style={{ display: "flex", justifyContent: "space-between", paddingRight: "3%" }}>
                                        <Image src={onde} fluid id="img-logo"></Image>
                                        <Image src={DE} fluid id="img-logo"></Image>
                                        <Image src={mhesi} fluid id="img-logo"></Image>
                                        <Image src={nstda} fluid id="img-logo"></Image>
                                        <Image src={TMC} fluid id="img-logo"></Image>
                                        <Image src={TSP} fluid id="img-logo"></Image>
                                        <Image src={SP} fluid id="img-logo"></Image>
                                        <Image src={BIC} id="img-logo" fluid></Image>
                                        <Image src={NECTEC} fluid id="img-logo"></Image>
                                        <Image src={PTEC} fluid id="img-logo"></Image>
                                    </Row>
                                </Col>
                                <Col xs={8} md={5} xl={5}>
                                    <Row style={{ justifyContent: "space-between", alignItems: "center" }}>
                                        <Col xs={24} md={24} xl={24} id="btn-header">
                                            {
                                                (this.state.token === "" || this.state.token === null || this.state.token === undefined) ?
                                                    <>
                                                        {window.innerWidth >= 684 ?
                                                            <Button type="primary" id="btn-sty" onClick={() => this.showModal()}>เข้าสู่ระบบ</Button>
                                                            :
                                                            <NavLink to="/Login"><Button type="primary" id="btn-sty">เข้าสู่ระบบ</Button></NavLink>
                                                        }
                                                        {window.innerWidth >= 1200 ?
                                                            <Button type="primary" id="btn-sty1" onClick={() => this.onClickRegister()}>สมัครสมาชิก</Button>
                                                            :
                                                            <NavLink to="/Register"><Button type="primary" id="btn-sty1">สมัครสมาชิก</Button></NavLink>
                                                        }
                                                    </>
                                                    :
                                                    <>
                                                        <UserOutlined /> <span style={{ paddingRight: "5%" }}> {this.state.user?.name}</span> | <span style={{ paddingRight: "5%" }}></span>
                                                        <Dropdown overlay={
                                                            <Menu>
                                                                {
                                                                    (this.state.user?.userRoleId === 1) ?
                                                                        <>
                                                                            <Menu.Item key="0">
                                                                                <NavLink to="/Admin/Home"><Button type="primary" id="btn-sty" >หน้าหลัก</Button></NavLink>
                                                                            </Menu.Item>
                                                                            <Menu.Divider />
                                                                            <Menu.Item key="1">
                                                                                <NavLink to="/Admin/TopScore"><Button type="primary" id="btn-sty">คะแนนสูงสุด</Button></NavLink >
                                                                            </Menu.Item>
                                                                            <Menu.Divider />
                                                                            <Menu.Item key="2">
                                                                                <NavLink to="/Admin/Statistic"><Button type="primary" id="btn-sty">สถิติ</Button></NavLink >
                                                                            </Menu.Item>
                                                                            <Menu.Divider />
                                                                            <Menu.Item key="3">
                                                                                {window.innerWidth >= 684 ?
                                                                                    <Button type="primary" id="btn-sty" onClick={() => this.showchangePass()}>เปลี่ยนรหัสผ่าน</Button>
                                                                                    :
                                                                                    <NavLink to="/ChangePass"><Button type="primary" id="btn-sty" >เปลี่ยนรหัสผ่าน</Button></NavLink>
                                                                                }
                                                                            </Menu.Item>
                                                                            <Menu.Divider />
                                                                            <Menu.Item key="4">
                                                                                <NavLink to="/Logout"><Button type="primary" id="btn-sty">ออกจากระบบ</Button></NavLink >
                                                                            </Menu.Item>
                                                                        </>
                                                                        :
                                                                        <>
                                                                            <Menu.Item key="0">
                                                                                {window.innerWidth >= 684 ?
                                                                                    <Button type="primary" id="btn-sty" onClick={() => this.showchangePass()}>เปลี่ยนรหัสผ่าน</Button>
                                                                                    :
                                                                                    <NavLink to="/ChangePass"><Button type="primary" id="btn-sty" >เปลี่ยนรหัสผ่าน</Button></NavLink>
                                                                                }
                                                                            </Menu.Item>
                                                                            <Menu.Divider />
                                                                            <Menu.Item key="1">
                                                                                <NavLink to="/Logout"><Button type="primary" id="btn-sty">ออกจากระบบ</Button></NavLink >
                                                                            </Menu.Item>
                                                                        </>
                                                                }
                                                            </Menu>
                                                        } placement="topRight" arrow>
                                                            <Button >menu</Button>
                                                        </Dropdown>

                                                    </>
                                            }
                                        </Col>
                                    </Row>
                                </Col>
                            </>
                            :
                            <>
                                <Row>
                                    <Col xs={24} style={{ padding: "1.5%" }}>
                                        <Row id="logo-layout">
                                            <Image src={onde} fluid id="img-logo"></Image>
                                            <Image src={DE} fluid id="img-logo"></Image>
                                            <Image src={mhesi} fluid id="img-logo"></Image>
                                            <Image src={nstda} fluid id="img-logo"></Image>
                                            <Image src={TMC} fluid id="img-logo"></Image>
                                            <Image src={TSP} fluid id="img-logo"></Image>
                                        </Row>
                                    </Col>
                                    <Col xs={24} style={{ padding: "1.5%" }}>
                                        <Row id="logo-layout">
                                            <Image src={SP} fluid id="img-logo"></Image>
                                            <Image src={BIC} id="img-logo" fluid></Image>
                                            <Image src={NECTEC} fluid id="img-logo"></Image>
                                            <Image src={PTEC} fluid id="img-logo"></Image>
                                        </Row>
                                    </Col>
                                </Row>
                                <Col xs={24}>
                                    {
                                        (this.state.token === "" || this.state.token === null || this.state.token === undefined) ?
                                            <Row style={{ padding: "1.5%", justifyContent: "flex-end", backgroundColor: "#FAFAFA", alignItems: "center" }}>
                                                <Button type="primary" id="btn-sty" onClick={() => this.LoginButton()}>เข้าสู่ระบบ</Button>
                                                <Button type="primary" id="btn-sty" onClick={() => this.RegisterButton()}>สมัครสมาชิก</Button>
                                            </Row>
                                            :
                                            <Row style={{ justifyContent: "flex-end", backgroundColor: "#FAFAFA", alignContent: "center", alignItems: "center" }}>
                                                <UserOutlined id="logo-user" /> <span style={{ paddingRight: "5%" }}> Sompot</span> | <span style={{ paddingRight: "5%" }}></span>
                                                {
                                                    (this.state.user?.userRoleId === 1) ? <NavLink to="/Logout"><Button type="primary" id="btn-dropdown">ออกจากระบบ</Button></NavLink > :

                                                        <Dropdown id="btn-dropdown" overlay={
                                                            <Menu>
                                                                {
                                                                    (this.state.user?.userRoleId === 1) ?
                                                                        <>
                                                                            {/* <Menu.Item key="0">
                                                                        <NavLink to="/Admin/Home"><Button type="primary" id="btn-dropdown" >หน้าหลัก</Button></NavLink>
                                                                    </Menu.Item>
                                                                    <Menu.Divider />
                                                                    <Menu.Item key="1">
                                                                        <NavLink to="/Admin/TopScore"><Button type="primary" id="btn-dropdown">คะแนนสูงสุด</Button></NavLink >
                                                                    </Menu.Item>
                                                                    <Menu.Divider />
                                                                    <Menu.Item key="2">
                                                                        <NavLink to="/Admin/Statistic"><Button type="primary" id="btn-dropdown">สถิติ</Button></NavLink >
                                                                    </Menu.Item>
                                                                    <Menu.Divider />
                                                                    <Menu.Item key="3">
                                                                        {window.innerWidth >= 684 ?
                                                                            <Button type="primary" id="btn-dropdown" onClick={() => this.showchangePass()}>เปลี่ยนรหัสผ่าน</Button>
                                                                            :
                                                                            <NavLink to="/ChangePass"><Button type="primary" id="btn-dropdown" >เปลี่ยนรหัสผ่าน</Button></NavLink>
                                                                        }
                                                                    </Menu.Item>
                                                                    <Menu.Divider />
                                                                    <Menu.Item key="4">
                                                                        <NavLink to="/Logout"><Button type="primary" id="btn-dropdown">ออกจากระบบ</Button></NavLink >
                                                                    </Menu.Item> */}
                                                                        </>
                                                                        :
                                                                        <>
                                                                            <Menu.Item key="0">
                                                                                {window.innerWidth >= 684 ?
                                                                                    <Button type="primary" id="btn-dropdown" onClick={() => this.showchangePass()}>เปลี่ยนรหัสผ่าน</Button>
                                                                                    :
                                                                                    <NavLink to="/ChangePass"><Button type="primary" id="btn-dropdown" >เปลี่ยนรหัสผ่าน</Button></NavLink>
                                                                                }
                                                                            </Menu.Item>
                                                                            <Menu.Divider />
                                                                            <Menu.Item key="1">
                                                                                <NavLink to="/Logout"><Button type="primary" id="btn-dropdown">ออกจากระบบ</Button></NavLink >
                                                                            </Menu.Item>
                                                                        </>
                                                                }
                                                            </Menu>
                                                        } placement="topRight" arrow>
                                                            <Button>menu</Button>
                                                        </Dropdown>
                                                }
                                            </Row>
                                    }
                                </Col>
                            </>
                    }

                </Row>
                <Modal
                    title={null}
                    footer={null}
                    visible={this.state.isModalVisible}
                    onCancel={this.handleCancelLogin}
                    width={700}
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
                                        (!this.state.statusSend) ? <Button htmlType="submit" id="btn-login">SIGN IN</Button> : <Spin />
                                    }
                                </Col>
                                <Col xs={24} md={24} xl={24} id="row-login">
                                    <span id="ft-pass" onClick={() => this.showForgetPass()} style={{ cursor: "pointer" }}>ลืมรหัสผ่าน?</span>
                                </Col>
                                <Col xs={24} md={24} xl={24} id="row-login1">คุณยังไม่มีบัญชี <span id="link-regis" style={{ cursor: "pointer" }} onClick={() => { this.onClickRegister() }}> ลงทะเบียนเข้าใช้ </span></Col>
                            </Col>
                            <Col xs={4} md={4} xl={4}></Col>
                        </Row>
                    </Form>
                </Modal>

                <Modal
                    title={null}
                    footer={null}
                    visible={this.state.isModalForgetPass}
                    onCancel={this.handleCancelForgetPass}
                    width={700}>
                    <Form onFinish={this.onForgetPass}>
                        <Row>
                            <Col xs={3} md={3} xl={3}></Col>
                            <Col xs={18} md={18} xl={18}>
                                <Col xs={24} md={24} xl={24} id="ftHeader1">คุณลืมรหัสผ่านใช่หรือไม่</Col>
                                <Col xs={24} md={24} xl={24} id="LoginDescrip">ระบบจะส่งลิงค์สำหรับเปลี่ยนรหัสผ่านให้คุณผ่านทางอีเมลล์</Col>
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
                                    {
                                        (!this.state.statusSendForgetPass) ? <Button htmlType="submit" id="btn-fotgetPass">ตรวจสอบ</Button> : <Spin />
                                    }
                                </Col>
                            </Col>
                            <Col xs={3} md={3} xl={3}></Col>
                        </Row>
                        <Col xs={24} md={24} xl={24} id="ft-footer"><QuestionCircleOutlined style={{ fontSize: "10px", display: "flex", alignItems: "center", marginRight: "0.5%" }} />หากคุณลืมอีเมลที่ใช้ในการลงทะเบียนกรุณาติดต่อที่ 082-222-2232 หรือทางอีเมลที่ Dairc.kmutnb@gmail.com</Col>
                    </Form>
                </Modal>

                <Modal
                    title={null}
                    footer={null}
                    visible={this.state.isModalchangePass}
                    onCancel={this.handleCancelChangePass}
                    width={700}>
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
                                <FaCheckCircle style={{ fontSize: "70px", color: "#8DC53E" }} />
                            </Row>
                            <Row id="Modal-CP">เปลี่ยนรหัสผ่านสำเร็จ</Row>
                            <Row id="Modal-CP1">กรุณาเข้าสู่ระบบอีกครั้ง</Row>
                            <Row id="Row-CP">
                                <Button id="btn-ModalCP1" onClick={() => this.onLoginAgain()}>เข้าสู่ระบบ</Button>
                            </Row>
                        </Col>
                        <Col xs={4} md={4} xl={4}></Col>
                    </Row>
                </Modal>

                <Modal
                    title={null}
                    footer={null}
                    visible={this.state.isModalConfirmMail}
                    width={700}>
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
                        <Col xs={24} md={24} xl={24} id="ft-footer"><QuestionCircleOutlined style={{ fontSize: "14px", display: "flex", alignItems: "center", marginRight: "0.5%" }} />หากไม่ได้รับอีเมลล์? โปรดตรวจสอบอีเมลล์ของคุณหรือลองใช้ที่อยู่อีเมลล์อื่น</Col>
                    </Row>
                </Modal>
            </Container>
        )
    }
})