import React, { Component } from "react";
import { Container, Image } from 'react-bootstrap';
import { Row, Col } from 'antd';
import '../css/Footer.css';
import iFooter from '../img/footer.png';
export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Container fluid>
                <Row id="row-footer">
                    <Col xs={13} md={6} xl={6} id="col-footer1">
                        <Col xs={24} md={24} xl={24}><Image  style={{width: "70%", height: "70%", marginBottom: "5%"}} src={iFooter} /></Col>
                        <Col xs={24} md={24} xl={24} id="header-footer">
                            <Row>
                                <Col xs={12} md={11} xl={9} id="descript1-footer">Term of Service</Col>
                                <Col xs={12} md={10} xl={12} id="descript2-footer">Privacy Policy</Col>
                            </Row> 
                        </Col>
                        <Col id="descript-footer1">สถาบันพัฒนาบุคลากรแห่งอนาคต สำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ (สวทช.)</Col>
                        <Col xs={24} md={24} xl={24} id="descript-footer1">© 2020 NSTDA. All Rights Reserved.</Col>
                        <Col xs={24} md={24} xl={24} id="descript-footer1">เปลี่ยนคุณเป็นคนใหม่ที่ทุกๆ องค์กรต้องการตัวเข้ามาเรียนรู้กับ Career 4 Future e-Learning</Col>
                    </Col>
                    <Col xs={11} md={6} xl={6} id="col-footer2">
                        <Col xs={24} md={24} xl={24} id="header-footer">สอบถามข้อมูลเพิ่มเติม</Col>
                        <Col xs={24} md={24} xl={24} id="descript-footer2">วิธีการสมัครสมาชิก</Col>
                        <Col xs={24} md={24} xl={24} id="descript-footer2">ขั้นตอนการชำระเงิน</Col>
                        <Col xs={24} md={24} xl={24} id="descript-footer2">แจ้งชำระเงิน</Col>
                        <Col xs={24} md={24} xl={24} id="descript-footer2">วิธีการเข้าชมคอร์สเรียน</Col>
                    </Col>
                    <Col xs={13} md={6} xl={6} id="col-footer3">
                        <Col xs={24} md={24} xl={24} id="header-footer">FOLLOW US</Col>
                        <Col xs={24} md={24} xl={24} id="descript-footer2">Facebook</Col>
                        <Col xs={24} md={24} xl={24} id="descript-footer2">Instragram</Col>
                        <Col xs={24} md={24} xl={24} id="descript-footer2">Twitter</Col>
                    </Col>
                    <Col xs={11} md={6} xl={6} id="col-footer4">
                        <Col xs={24} md={24} xl={24} id="header-footer">ติดต่อสอบถาม</Col>
                        <Col xs={24} md={24} xl={24} id="descript-footer2">0 2644 8150</Col>
                        <Col xs={24} md={24} xl={24} id="descript-footer2">0 2644 8110</Col>
                        <Col xs={24} md={24} xl={24} id="descript-footer2">elearn@nstda.or.th</Col>
                    </Col>   
                </Row>
            </Container>
        )
    }
}

