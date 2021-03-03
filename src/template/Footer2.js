import React, { Component } from "react";
import { Container, Image } from 'react-bootstrap';
import { Row, Col } from 'antd';
import BIC from "../img/1.jpeg";
import DE from "../img/3.jpeg";
import mhesi from "../img/5.jpeg";
// import NECTEC from "../img/7.jpeg";
import nstda from "../img/8.jpeg";
import onde from "../img/9.jpeg";
// import PTEC from "../img/10.jpeg";
import SP from "../img/11.jpeg";
import TMC from "../img/12.jpeg";
import TSP from "../img/13.jpeg";

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Container fluid>
                <Row id="row-footer1">
                    <Col xs={24} md={12} xl={12} id="col-footer-logo">
                        <Image src={onde} fluid id="img-logo"></Image>
                        <Image src={DE} fluid id="img-logo"></Image>
                        <Image src={nstda} fluid id="img-logo"></Image>
                        <Image src={TSP} fluid id="img-logo"></Image>
                    </Col>
                    <Col xs={24} md={12} xl={12} id="col-footer-logo">
                        <Image src={SP} fluid id="img-logo"></Image>
                        <Image src={BIC} id="img-logo" fluid></Image>
                        <Image src={mhesi} fluid id="img-logo"></Image>
                        <Image src={TMC} fluid id="img-logo"></Image>
                    </Col>
                </Row>
            </Container>
        )
    }
}