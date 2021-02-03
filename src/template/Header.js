import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Button, Modal } from 'antd';
import { withRouter } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import '../css/Header.css';

export default withRouter(class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            isModalVisible: false,
        }

        this.showModal = this.showModal.bind(this);
    }

    showModal() {
        this.setState({ isModalVisible: true });
    };

    render() {

        return (
            <Container fluid id="conflu">
                <Row id="row-header">
                    <Col xs={18} md={18} xl={18}>สัญลักษณ์</Col>
                    <Col xs={6} md={6} xl={6}>
                        <Row style={{ justifyContent: "space-between" }}>
                            <Col xs={24} md={24} xl={24} id="btn-header">
                                <Button type="primary" id="btn-sty" onClick={() => this.showModal()}>เข้าสู่ระบบ</Button>
                                <NavLink to="/Register"><Button type="primary" id="btn-sty1">สมัครสมาชิก</Button></NavLink>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Modal
                    title={null}
                    footer={null}
                    visible={this.state.isModalVisible}
                >
                    <p>เข้าสู่ระบบ</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </Container>
        )
    }
})