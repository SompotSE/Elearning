import React, { Component } from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import { Row, Col, Input, Checkbox, Form } from 'antd';
import banner from '../img/register.png';
// import { NavLink } from 'react-router-dom';
import '../css/Register.css';

export default class Register extends Component {
    render() {
        return (
            <Container fluid id="Register">
                <Form>
                {/* <div>Test Register</div> */}
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
                                            name="username"
                                            rules={[{ required: true, message: 'กรุณากรอกชื่อ - นามสกุล!' }]}>
                                            <Input placeholder="ชื่อ - นามสกุล" style={{ width: '100%' }} id="form-input"/>
                                            </Form.Item>
                                        </Col>
                                    <Row  id="form-header1">เบอร์โทรศัพท์</Row>
                                        <Col xs={24} md={24} xl={24}>
                                            <Form.Item
                                            name="phone"
                                            rules={[{ required: true, message: 'กรุณากรอกเบอร์โทรศัพท์!' }]}>
                                            <Input placeholder="เบอร์โทรศัพท์" style={{ width: '100%' }} id="form-input"/>
                                            </Form.Item>
                                        </Col>
                                    <Row  id="form-header1">ชื่อสถานประกอบการ</Row>
                                        <Col xs={24} md={24} xl={24}>
                                            <Form.Item
                                            name="company"
                                            rules={[{ required: true, message: 'กรุณากรอกสถานประกอบการ!' }]}>
                                            <Input placeholder="ชื่อสถานประกอบการ เช่น ชื่อบริษัท" id="form-input"/>
                                            </Form.Item>
                                        </Col>
                                    <Row  id="form-header1">อีเมลล์</Row>
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
                                                <Input placeholder="อีเมลล์" id="form-input"/>
                                            </Form.Item>
                                            </Col>
                                    <Row  id="form-header1">รหัสผ่าน</Row>
                                        <Col xs={24} md={24} xl={24}>
                                            <Form.Item
                                                name="password"
                                                rules={[
                                                {
                                                    required: true,
                                                    message: 'กรุณากรอกรหัสผ่าน!',
                                                },
                                                ]}>
                                                <Input type="password" placeholder="รหัสผ่าน" id="form-input"/>
                                            </Form.Item>   
                                        </Col>
                                    <Row  id="form-header1">ยืนยันรหัสผ่าน</Row>
                                        <Col xs={24} md={24} xl={24}>
                                            <Form.Item
                                                name="password"
                                                rules={[
                                                {
                                                    required: true,
                                                    message: 'กรุณากรอกรหัสผ่าน!',
                                                },
                                                ]}>
                                                <Input type="password" placeholder="ยืนยันรหัสผ่าน" id="form-input"/>
                                            </Form.Item>   
                                        </Col>
                                    <Col xs={24} md={24} xl={24} id="row-regis">
                                        <Checkbox>
                                            <span id="check-regis">ลงทะเบียนเพื่อรับข้อมูลทางอีเมล</span>
                                        </Checkbox>
                                    </Col>
                                        <Col xs={24} md={24} xl={24} id="row-regis1">
                                            <Button id="btn-regis">ลงทะเบียน</Button>
                                        </Col>
                                    <Col xs={24} md={24} xl={24} id="row-regis1">คุณมีบัญชีอยู่แล้ว <span id="color-regis">ลงชื่อเข้าใช้</span> </Col>
                                </Col>
                                <Col xs={2} md={5} xl={5}></Col>
                            </Row>
                        </Col>
                    </Row>
                </Form>
            </Container>
        );
    }
}