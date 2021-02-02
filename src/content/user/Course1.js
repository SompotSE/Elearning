import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
import { Row, Col, Breadcrumb, Progress, Collapse } from 'antd';
import { HomeOutlined, SnippetsOutlined, RightCircleTwoTone, BorderOutlined } from '@ant-design/icons';
import { AiFillCheckSquare } from "react-icons/ai";
import '../../css/Course.css';
import imgcourse from '../../img/userhome.png';
import userprofile from '../../img/userprofile.png';
// import v1 from '../../img/V1.png';
// import v2 from '../../img/V2.png';
// import v3 from '../../img/V3.png';

const { Panel } = Collapse;

export default class Course1 extends Component {
    render() {
        return (
            <Container fluid>
                <Row id="row-header">
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <HomeOutlined /><span>Home</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <SnippetsOutlined /><span>หลักสูตรที่ 1</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <Row id="row-header">
                    <Col xs={24} md={14} xl={14}>
                        <Image src={imgcourse} fluid></Image>
                    </Col>
                    <Col xs={24} md={10} xl={10}>
                        <Row id="font-header">รายละเอียด</Row>
                        <Row id="font-detail">กล่าวถึงวัตถุประสงค์ของมาตรฐาน ชี้แจงแนวคิดของมาตรฐาน พื้นฐานแนวคิดตามมาตรฐานระบบคุณภาพ</Row>
                    </Col>
                </Row>
                <Row id="row-header">
                    <Col xs={24} md={14} xl={14}>
                        <Row>
                            <Col xs={7} md={7} xl={7}><Image src={userprofile} fluid></Image></Col>
                            <Col xs={17} md={17} xl={17}>
                                <Row id="font-header">รายละเอียด</Row>
                                <Row id="font-detail">กล่าวถึงวัตถุประสงค์ของมาตรฐาน ชี้แจงแนวคิดของมาตรฐาน พื้นฐานแนวคิดตามมาตรฐานระบบคุณภาพ</Row>
                            </Col>
                        </Row>

                    </Col>
                    <Col xs={24} md={10} xl={10}>
                        <Row>
                            <Col xs={19} md={19} xl={19}>
                                <Row id="font-header">รายละเอียด</Row>
                                <Row id="font-detail">กล่าวถึงวัตถุประสงค์ของมาตรฐาน ชี้แจงแนวคิดของมาตรฐาน พื้นฐานแนวคิดตามมาตรฐานระบบคุณภาพ</Row>
                            </Col>
                            <Col xs={5} md={5} xl={5}>
                                <Progress type="circle" percent={75} style={{ width: "10%" }} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row id="row-header">
                    <Col xs={24} md={24} xl={24} id="font-header">เนื้อหาของหลักสูตร</Col>
                    <Col xs={24} md={24} xl={24} id="font-header">
                        <Collapse
                            expandIcon={({ isActive }) => <RightCircleTwoTone rotate={isActive ? 90 : 0} style={{ fontSize: '150%' }} />}
                            defaultActiveKey={['1', '2', '3']}
                            ghost
                        >
                            <Panel header="เอกสารประกอบการเรียน" key="1">
                                <Row>
                                    <Col xs={23} md={23} xl={23} id="sub-header" style={{ cursor: "pointer" }}> - ดาวน์โหลดเอกสาร </Col>
                                    <Col xs={1} md={1} xl={1} id="icon-chack">
                                        {
                                            (true) ? <AiFillCheckSquare style={{ fontSize: '400%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '400%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                            </Panel>
                            <Panel header="บทเรียน" key="2">
                                <Row>
                                    <Col xs={23} md={23} xl={23} id="sub-header"> 1. ขอบเขต เป็นบททั่วไป และการประยุกต์ใช้ ISO 13485: 2016 </Col>
                                    <Col xs={1} md={1} xl={1} id="icon-chack">
                                        {
                                            (1 === 2) ? <AiFillCheckSquare style={{ fontSize: '400%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '400%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={12} xl={12}> </Col>
                                    <Col xs={1} md={1} xl={1} id="icon-chack"></Col>
                                </Row>
                            </Panel>
                            <Panel header="แบบทดสอบท้ายบทเรียน" key="3">
                                <Row>
                                    <Col xs={23} md={23} xl={23} id="sub-header" style={{ cursor: "pointer" }}> - ทำแบบทดสอบ </Col>
                                    <Col xs={1} md={1} xl={1} id="icon-chack">
                                        {
                                            (1 === 2) ? <AiFillCheckSquare style={{ fontSize: '400%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '400%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                            </Panel>
                        </Collapse>
                    </Col>
                </Row>
            </Container>
        );
    }
}