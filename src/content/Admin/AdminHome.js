import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Input, Progress  } from 'antd';
import '../../css/AdminHome.css';

const { Search } = Input;
const onSearch = value => console.log(value);

export default class AdminHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Container id="bg-AdminHome" fluid>
                <Row id="row-header-AdminHome">
                    <Col md={12} xl={12} id="Header-AdminHome">ข้อมูลการใช้งานสมาชิก</Col>
                    <Col md={12} xl={12} id="Search-AdminHome">
                        <Search placeholder="ค้นหาชื่อผู้ใช้งาน" onSearch={onSearch} style={{ width: 250 }} />
                    </Col>
                </Row>
                <Col md={24} xl={24} id="row-table-AdminHome">
                    <Row>
                        <Col md={2} xl={2} id="header-table-AdminHome">ลำดับ</Col>
                        <Col md={3} xl={3} id="header-table-AdminHome">ชื่อ - นามสกุล</Col>
                        <Col md={4} xl={4} id="header-table-AdminHome">ชื่อบริษัท</Col>
                        <Col span={10}>
                            <Col md={24} xl={24} id="header-table-AdminHome1">ความคืบหน้าการใช้งาน</Col>
                            <Row style={{display: "flex", justifyContent: "space-between"}}>
                                <Col md={5} xl={5} id="header-table-AdminHome1">หลักสูตรที่1</Col>
                                <Col md={4} xl={4} id="header-table-AdminHome1">หลักสูตรที่5</Col>
                                <Col md={5} xl={5} id="header-table-AdminHome1">หลักสูตรที่3</Col>
                                <Col md={4} xl={4} id="header-table-AdminHome1">หลักสูตรที่4</Col>
                                <Col md={5} xl={5} id="header-table-AdminHome1">หลักสูตรที่5</Col>
                            </Row>
                        </Col>
                        <Col md={4} xl={4} id="header-table-AdminHome">รายละเอียดเพิ่มเติม</Col>
                    </Row>
                    <Row>
                        <Col md={2} xl={2} id="user-table-AdminHome">ลำดับ</Col>
                        <Col md={3} xl={3} id="user-table-AdminHome">ชื่อ - นามสกุล</Col>
                        <Col md={4} xl={4} id="user-table-AdminHome">ชื่อบริษัท</Col>
                        <Col span={10}>
                            <Col md={24} xl={24} id="user-table-AdminHome"></Col>
                            <Row style={{display: "flex", justifyContent: "space-between"}}>
                                <Col md={5} xl={5} id="progress-AdminHome"><Progress type="circle" percent={75} width={50} strokeWidth={13}/></Col>
                                <Col md={4} xl={4} id="progress-AdminHome"><Progress type="circle" percent={75} width={50} strokeWidth={13}/></Col>
                                <Col md={5} xl={5} id="progress-AdminHome"><Progress type="circle" percent={75} width={50} strokeWidth={13}/></Col>
                                <Col md={4} xl={4} id="progress-AdminHome"><Progress type="circle" percent={75} width={50} strokeWidth={13}/></Col>
                                <Col md={5} xl={5} id="progress-AdminHome"><Progress type="circle" percent={75} width={50} strokeWidth={13}/></Col>
                            </Row>
                        </Col>
                        <Col md={4} xl={4} id="user-table-AdminHome">รายละเอียดเพิ่มเติม</Col>
                    </Row>
                </Col>
            </Container>
        );
    }
}