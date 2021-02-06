import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Image } from 'antd';
import '../css/Home.css';
import cover1 from '../img/Cover1.png';

export default class Home extends Component {
    render() {
        return (
            <Container fluid id="bg-home">
                <Row>
                    <Col xs={12} md={12} xl={12}>Video</Col>
                    <Col xs={12} md={12} xl={12}>
                        <Row id="rowheadHome">
                            <Row id="headHome">รายละเอียดภาพรวมหลักสูตรทั้งหมด</Row>
                        </Row>
                    </Col>
                </Row>
                <Row id="row-coverhome">
                        <Col xs={10} md={4} xl={4}><Image style={{width: "85%"}} src={cover1} placeholder={false} fluid></Image></Col>
                        <Col xs={10} md={4} xl={4}><Image style={{width: "85%"}} src={cover1} fluid></Image></Col>
                        <Col xs={10} md={4} xl={4}><Image style={{width: "85%"}} src={cover1} fluid></Image></Col>
                        <Col xs={10} md={4} xl={4}><Image style={{width: "85%"}} src={cover1} fluid></Image></Col>
                        <Col xs={10} md={4} xl={4}><Image style={{width: "85%"}} src={cover1} fluid></Image></Col>
                </Row>
            </Container>
        );
    }
}