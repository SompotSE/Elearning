import React, { Component } from "react";
import { Container, Image } from 'react-bootstrap';
import { Row, Col } from 'antd';
import '../css/Footer.css';
import iFooter from '../img/footer.webp';
import { FaFacebookF } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosMailOpen } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiMessageRoundedEdit } from "react-icons/bi";
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
                    <Col xs={13} md={6} xl={5} id="col-footer1">
                        <Col xs={24} md={24} xl={24}><Image  style={{width: "70%", height: "70%", marginBottom: "7%"}} src={iFooter} /></Col>
                        {/* <Col xs={24} md={24} xl={24} id="header-footer">
                            <Row>
                                <Col xs={12} md={11} xl={9} id="descript1-footer">Term of Service</Col>
                                <Col xs={12} md={10} xl={12} id="descript2-footer">Privacy Policy</Col>
                            </Row> 
                        </Col> */}
                        <Col id="descript-footer1">สถาบันพัฒนาบุคลากรแห่งอนาคต สำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ (สวทช.)</Col>
                        <Col xs={24} md={24} xl={24} id="descript-footer1">© 2020 NSTDA. All Rights Reserved.</Col>
                        {/* <Col xs={24} md={24} xl={24} id="descript-footer1">เปลี่ยนคุณเป็นคนใหม่ที่ทุกๆ องค์กรต้องการตัวเข้ามาเรียนรู้กับ Career 4 Future e-Learning</Col> */}
                    </Col>
                    <Col xs={11} md={6} xl={6} id="col-footer2">
                        <Col xs={24} md={24} xl={24} id="header-footer">สิทธิประโยชน์ที่ท่านจะได้รับ</Col>
                        <Col xs={24} md={24} xl={24} id="descript-footer2"><BsFillPeopleFill style={{fontSize: "18px", color: "#FF7C00", marginRight: "3%"}}/>เข้าร่วมอบรม E-learning for Health Technology 5 หลักสูตร</Col>
                        <Col xs={24} md={24} xl={24} id="descript-footer2"><BsFillPeopleFill style={{fontSize: "18px", color: "#FF7C00", marginRight: "3%"}}/>Gap Analysis เตรียมความพร้อมสู่การออกเชิงพาณิชย์</Col>
                        {/* <Col xs={24} md={24} xl={24} id="descript-footer2"><BsFillPeopleFill style={{fontSize: "18px", color: "#FF7C00", marginRight: "3%"}}/>ผู้ผ่านการคัดเลือกรอบสุดท้าย ได้เข้าร่วมกิจกรรม Digital Health-Tech Coaching & Acceleration Program พร้อมรับเงินทุนสนับสนุน 280,000 บาท และขยายผลจริงในโรงพยาบาล</Col> */}
                        {/* <Col xs={24} md={24} xl={24} id="descript-footer2">วิธีการเข้าชมคอร์สเรียน</Col> */}
                    </Col>
                    <Col xs={13} md={6} xl={7} id="col-footer3">
                        <Col xs={24} md={24} xl={24} id="header-footer1">ติดตามและข้อมูลเพิ่มเติม</Col>
                        <Col xs={24} md={24} xl={24} id="descript-footer3"><FaFacebookF style={{fontSize: "18px", color: "#FF7C00", marginRight: "3%"}}/><span onClick={() => { window.open("https://web.facebook.com/THAILANDSCIENCEPARK", "_blank"); }} style={{cursor: "pointer"}}>อุทยานวิทยาศาสตร์ประเทศไทย</span></Col>
                        <Col xs={24} md={24} xl={24} id="descript-footer2"><span onClick={() => { window.open("https://web.facebook.com/THAILANDSCIENCEPARK", "_blank"); }} style={{cursor: "pointer"}}>Thailand Science Park -TSP</span></Col>
                        <Col xs={24} md={24} xl={24} id="descript-footer2"><BiMessageRoundedEdit style={{fontSize: "18px", color: "#FF7C00", marginRight: "3%"}}/><span onClick={() => { window.open("https://bit.ly/38AlM86", "_blank"); }} style={{cursor: "pointer"}}>https://bit.ly/38AlM86</span></Col>
                        {/* <Col xs={24} md={24} xl={24} id="descript-footer2"><FaTwitter style={{fontSize: "18px", color: "#FF7C00", marginRight: "3%"}}/>Twitter</Col> */}
                    </Col>
                    <Col xs={11} md={6} xl={6} id="col-footer4">
                        <Col xs={24} md={24} xl={24} id="header-footer">ติดต่อสอบถาม</Col>
                        <Col xs={24} md={24} xl={24} id="descript-footer2"><FiPhoneCall style={{fontSize: "18px", color: "#FF7C00", marginRight: "3%"}}/>086 373 4271  ( คุณกานต์ธิดาพร )</Col>
                        <Col xs={24} md={24} xl={24} id="descript-footer2"><FiPhoneCall style={{fontSize: "18px", color: "#FF7C00", marginRight: "3%"}}/>089 456 2440  ( คุณวัชรี )</Col>
                        <Col xs={24} md={24} xl={24} id="descript-footer2"><IoIosMailOpen style={{fontSize: "18px", color: "#FF7C00", marginRight: "3%"}}/>ikd@nstda.or.th</Col>
                    </Col>   
                </Row>
            </Container>
        )
    }
}

