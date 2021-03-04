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

export default class Footer2 extends Component {
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
                        <Image src={onde} fluid id="img-logo" onClick={() => { window.open("https://www.onde.go.th", "_blank"); }} style={{width: "14%", display: "flex", paddingTop: "0.8%", cursor: "pointer", height: "auto" }}></Image>
                        <Image src={DE} fluid id="img-logo" onClick={() => { window.open("https://www.mdes.go.th/", "_blank"); }} style={{ cursor: "pointer"}}></Image>
                        <Image src={nstda} fluid id="img-logo" onClick={() => { window.open("https://www.nstda.or.th/", "_blank"); }} style={{ cursor: "pointer"}}></Image>
                        <Image src={TSP} fluid id="img-logo" onClick={() => { window.open("https://www.sciencepark.or.th/index.php/th/", "_blank"); }} style={{ cursor: "pointer"}}></Image>
                    </Col>
                    <Col xs={24} md={12} xl={12} id="col-footer-logo">
                        <Image src={mhesi} fluid id="img-logo" style={{width: "12%", display: "flex", paddingTop: "0.8%", cursor: "pointer", height: "auto" }} onClick={() => { window.open("https://www.mhesi.go.th/", "_blank"); }}></Image>
                        <Image src={TMC} fluid id="img-logo"></Image>
                        <Image src={SP} fluid style={{width: "30%", display: "flex", paddingTop: "0.8%", cursor: "pointer", height: "fit-content" }} onClick={() => { window.open("http://swpark.or.th/?fbclid=IwAR1iIWgflzwMW2k53QZK9MGkodxsPHMiV3G8wkhlQF6eeQ8ASTDQl01cHAs", "_blank"); }}></Image>
                        <Image src={BIC} id="img-logo" fluid onClick={() => { window.open("https://www.nectec.or.th/", "_blank"); }} style={{ cursor: "pointer"}}></Image>
                    </Col>
                </Row>
            </Container>
        )
    }
}
