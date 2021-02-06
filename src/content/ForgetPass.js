import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
import { Row, Col, Input, Form, Button, Modal } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import '../css/ForgetPass.css';
import letter from "../img/letter.png"

export default class ForgrtPass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalChangePassSuccess: false,
        }
    }

    showChangePassSuccess(){
        this.setState({ isModalChangePassSuccess: true });
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
                                        <Button id="btn-fotgetPass" onClick={() => this.showChangePassSuccess()}>ตรวจสอบ</Button>
                                    </Col>
                                </Col>
                                <Col xs={2} md={2} xl={2}></Col>
                            </Row>
                            <Col xs={24} md={24} xl={24} id="ft-footer"><QuestionCircleOutlined style={{fontSize: "14px", display: "flex", alignItems: "center", marginRight: "2%"}}/>หากคุณลืมอีเมลที่ใช้ในการลงทะเบียนกรุณาติดต่อที่ 082-222-2232 หรือทางอีเมลที่ Dairc.kmutnb@gmail.com</Col>
                        </Form>

                        <Modal
                            title={null}
                            footer={null}
                            visible={this.state.isModalChangePassSuccess}
                            width={280}>
                                <Row id="Modal-Chanepass1">
                                    <Col xs={3} md={3} xl={3}></Col>
                                    <Col xs={18} md={18} xl={18}>
                                        <Row id="RowModal1">
                                            <Image style={{width: "60%"}} src={letter} fluid/>
                                        </Row>
                                        <Row id="ModalcfMail">ตรวจสอบอีเมลล์ของคุณ</Row>
                                    </Col>
                                    <Col xs={3} md={3} xl={3}></Col>
                                   
                                </Row>
                                <Row>
                                <Col xs={24} md={24} xl={24} id="ModalcfMail1">เราได้ส่งคำแนะนำในการกู้คืนรหัสผ่านไปยังอีเมลล์ของคุณ</Col>
                                    <Col xs={24} md={24} xl={24} id="RowCP">
                                            <Button id="btn-ModalCf1">เสร็จสิ้น</Button>
                                    </Col>
                                    <Col xs={20} md={20} xl={20}id="ft-footer">
                                        <QuestionCircleOutlined style={{fontSize: "10px", display: "flex", alignItems: "center", marginRight: "2%"}}/>
                                        หากไม่ได้รับอีเมลล์? โปรดตรวจสอบอีเมลล์ของคุณหรือลองใช้ที่อยู่อีเมลล์อื่น</Col>
                                </Row>
                        </Modal>
            </Container>
        )
    }
}