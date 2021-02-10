import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Progress  } from 'antd';
import '../../css/AdminTopScore.css';

export default class AdminTopScore extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Container id="bg-AdminTopScore" fluid>
                <Row id="row-header-topscore">ข้อมูลคะแนนสอบสูงสุด</Row>

                <Row id="row-table-AdminTopScore">
                    <Col md={5} xl={5} id="header-table-AdminTopScore">ชื่อหลักสูตร</Col>
                    <Col md={5} xl={4} id="header-table-AdminTopScore">ผลคะแนน (ร้อยละ)</Col>
                    <Col md={6} xl={7} id="header-table-AdminTopScore">ชื่อ - นามสกุล</Col>
                    <Col md={7} xl={7} id="header-table-AdminTopScore">ชื่อบริษัท</Col>
                </Row>

                <Row id="row-table-AdminTopScore1">
                    <Col md={5} xl={5} id="TopScore">หลักสูตรที่1</Col>
                    <Col md={5} xl={4} id="TopScore"><Progress type="circle" percent={75} width={50} strokeWidth={13}/></Col>
                    <Col md={6} xl={7} id="TopScore1">ชื่อ - นามสกุล</Col>
                    <Col md={7} xl={7} id="TopScore1">ชื่อบริษัท</Col>
                </Row>

                <Row id="row-table-AdminTopScore1">
                    <Col md={5} xl={5} id="TopScore">หลักสูตรที่2</Col>
                    <Col md={5} xl={4} id="TopScore"><Progress type="circle" percent={75} width={50} strokeWidth={13}/></Col>
                    <Col md={6} xl={7} id="TopScore1">ชื่อ - นามสกุล</Col>
                    <Col md={7} xl={7} id="TopScore1">ชื่อบริษัท</Col>
                </Row>

                <Row id="row-table-AdminTopScore1">
                    <Col md={5} xl={5} id="TopScore">หลักสูตรที่3</Col>
                    <Col md={5} xl={4} id="TopScore"><Progress type="circle" percent={75} width={50} strokeWidth={13}/></Col>
                    <Col md={6} xl={7} id="TopScore1">ชื่อ - นามสกุล</Col>
                    <Col md={7} xl={7} id="TopScore1">ชื่อบริษัท</Col>
                </Row>

                <Row id="row-table-AdminTopScore1">
                    <Col md={5} xl={5} id="TopScore">หลักสูตรที่4</Col>
                    <Col md={5} xl={4} id="TopScore"><Progress type="circle" percent={75} width={50} strokeWidth={13}/></Col>
                    <Col md={6} xl={7} id="TopScore1">ชื่อ - นามสกุล</Col>
                    <Col md={7} xl={7} id="TopScore1">ชื่อบริษัท</Col>
                </Row>

                <Row id="row-table-AdminTopScore1">
                    <Col md={5} xl={5} id="TopScore">หลักสูตรที่5</Col>
                    <Col md={5} xl={4} id="TopScore"><Progress type="circle" percent={75} width={50} strokeWidth={13}/></Col>
                    <Col md={6} xl={7} id="TopScore1">ชื่อ - นามสกุล</Col>
                    <Col md={7} xl={7} id="TopScore1">ชื่อบริษัท</Col>
                </Row>
            </Container>
        )
    }
}