import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Input, Form, Button, Modal } from 'antd';
import '../css/ChangePass.css';
import { FaCheckCircle } from "react-icons/fa";
export default class ChangePass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
        }

        this.showModal = this.showModal.bind(this);
    }

    showModal(){
        this.setState({ isModalVisible: true });
    }

    render() {

        return (
            <Container fluid id="LoginMobile">
                    <Form>
                            <Row id="row-CP">
                                <Col xs={4} md={4} xl={4}></Col>
                                <Col xs={16} md={16} xl={16}>
                                    <Col xs={24} md={24} xl={24} id="CPHeaderMobile">สร้างรหัสผ่านใหม่</Col>
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
                                            <Button id="btn-CP" onClick={() => this.showModal()}>เปลี่ยนรหัสผ่าน</Button>
                                        </Row>
                                </Col>
                                <Col xs={4} md={4} xl={4}></Col>
                            </Row>
                        </Form>
                <Modal
                    title={null}
                    footer={null}
                    visible={this.state.isModalVisible}
                    width={250}>
                        <Row>
                            <Col xs={2} md={2} xl={2}></Col>
                            <Col xs={24} md={24} xl={24}>
                                <Row id="Row-Modal">
                                    <FaCheckCircle style={{fontSize: "70px", color: "#8DC53E"}}/>
                                </Row>
                                <Row id="Row-CP">เปลี่ยนรหัสผ่านสำเร็จ</Row>
                                <Row id="Row-CP1">กรุณาเข้าสู่ระบบอีกครั้ง</Row>
                                <Row id="Row-CP">
                                    <Button id="btn-CP1">เข้าสู่ระบบ</Button>
                                </Row>
                            </Col>
                            <Col xs={2} md={2} xl={2}></Col>
                        </Row>
                </Modal>


            </Container>
        )
    }
}