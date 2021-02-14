import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'antd';
import '../../css/Adminstatistic.css';
import { BsClipboardData } from "react-icons/bs";
import { UserOutlined } from '@ant-design/icons';
import { VscBook } from "react-icons/vsc";

export default class AdminTopScore extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Container id="bg-AdminStatistic" fluid>
                <Row id="row-statistic">
                    <Col md={7} xl={5} id="col-statictic">
                        <Row>
                            <Col md={10} xl={10} id="statistic-number">2408</Col>
                            <Col md={10} xl={10} id="icon-statistic"><BsClipboardData id="statistic-icon"/></Col>
                        </Row>
                        <Col md={24} xl={24} id="statistic-detail">จำนวนผู้ลงทะเบียน</Col>
                    </Col>
                    <Col md={7} xl={5} id="col-statictic">
                        <Row>
                            <Col md={10} xl={10} id="statistic-number">2408</Col>
                            <Col md={10} xl={10} id="icon-statistic"><UserOutlined id="statistic-icon" /></Col>
                        </Row>
                        <Col md={24} xl={24} id="statistic-detail">จำนวนผู้ใช้งานหลักสูตรทั้งหมด</Col>
                    </Col>
                    <Col md={7} xl={5} id="col-statictic">
                        <Row>
                            <Col md={10} xl={10} id="statistic-number">2408</Col>
                            <Col md={10} xl={10} id="icon-statistic"><VscBook id="statistic-icon"/></Col>
                        </Row>
                        <Col md={24} xl={24} id="statistic-detail">จำนวนผู้ใช้งานหลักสูตร 1</Col>
                    </Col>
                    <Col md={7} xl={5} id="col-statictic">
                        <Row>
                            <Col md={10} xl={10} id="statistic-number">2408</Col>
                            <Col md={10} xl={10} id="icon-statistic"><VscBook id="statistic-icon"/></Col>
                        </Row>
                        <Col md={24} xl={24} id="statistic-detail">จำนวนผู้ใช้งานหลักสูตร 2</Col>
                    </Col>
                    <Col md={7} xl={5} id="col-statictic">
                        <Row>
                            <Col md={10} xl={10} id="statistic-number">2408</Col>
                            <Col md={10} xl={10} id="icon-statistic"><VscBook id="statistic-icon"/></Col>
                        </Row>
                        <Col md={24} xl={24} id="statistic-detail">จำนวนผู้ใช้งานหลักสูตร 3</Col>
                    </Col>
                    <Col md={7} xl={5} id="col-statictic">
                        <Row>
                            <Col md={10} xl={10} id="statistic-number">2408</Col>
                            <Col md={10} xl={10} id="icon-statistic"><VscBook id="statistic-icon"/></Col>
                        </Row>
                        <Col md={24} xl={24} id="statistic-detail">จำนวนผู้ใช้งานหลักสูตร 4</Col>
                    </Col>
                    <Col md={7} xl={5} id="col-statictic">
                        <Row>
                            <Col md={10} xl={10} id="statistic-number">2408</Col>
                            <Col md={10} xl={10} id="icon-statistic"><VscBook id="statistic-icon"/></Col>
                        </Row>
                        <Col md={24} xl={24} id="statistic-detail">จำนวนผู้ใช้งานหลักสูตร 5</Col>
                    </Col>
                </Row>
            </Container>
        )
    }

}