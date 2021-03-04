import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import { Row, Col, Image } from 'antd';
import '../css/Elearning.css';
import ReactPlayer from 'react-player';
import testV1 from '../video/test.mp4';
import HomeBanner from '../img/Home-01.jpg';

export default class Elearning extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs={24} md={24} xl={24}>
                        <Image src={HomeBanner} fluid></Image>
                    </Col>
                </Row>
                <Row>
                    <Col id="col-elearning">
                        <ReactPlayer
                            url={testV1}
                            className='react-player'
                            width='70%'
                            height='max-content'
                            controls={true}
                            playsinline={true}
                            playIcon={true}
                            pip={false}
                            fluid />
                    </Col>
                </Row>
                <Col xs={24} md={24} xl={24} style={{paddingBottom: "3%"}}>
                    <Row id="descrip-Elearning">
                    อุตสาหกรรมการแพทย์ ทั้งเครื่องมือแพทย์ เทคโนโลยีดิจิตัลทางการแพทย์มีความสำคัญต่อชีวิตและสุขภาพของประชนในประเทศ และได้รับความสำคัญจากรัฐบาลตลอดมาผ่านนโยบายสำคัญต่างๆ เช่น Medical Hub, BCG   รวมทั้งในโลกที่เปลี่ยนไปเราได้เห็นความสำคัญของเทคโนโลยีทางด้านดิจิตัลที่มีบทบาททางด้านการแพทย์และสาธารณสุขมากขึ้นโดยเฉพาะสำหรับกลุ่มโรค NCD  จะเห็นได้ว่า WHO เริ่มมีนโยบายและแนวทางในการนำนวัตกรรมดิจิตัลเทคโนโลยีต่างๆ มาประยุกต์ใช้เพื่อช่วยในการดูแล รักษา และป้องกันโรคในกลุ่ม NCD ซึ่งสำหรับผู้ผลิตนวัตกรรม และผู้ประกอบการที่มีเทคโนโลยีและนวัตกรรมเหล่านี้นั้นจะต้องคำนึงถึงการพัฒนาผลิตภัณฑ์และบริการเหล่านี้เพื่อให้สามารถนำมาใช้ในการแพทย์ได้อย่างปลอดภัย โดยจะต้องผ่านการพัฒนาให้ได้มาตรฐานที่ยอมรับกันในระดับสากล ซึ่งเป็นที่มาของ E-learning หลักสูตรนี้
                    </Row>
                    <Row id="descrip-Elearning">E-learning หลักสูตรนี้ จัดทำขึ้นเพื่อสร้างความรู้ความเข้าใจ แก่ผู้ประกอบการเครื่องมือแพทย์ และ Digital Health Tech เพื่อประกอบการพัฒนานวัตกรรมทางการแพทย์ ตลอด product life cycle ตั้งแต่กระบวนการการออกแบบและพัฒนาการผลิต การขึ้นทะเบียน การจัดจำหน่าย และการติดตามหลังการขาย </Row>
                    <Row id="descrip-Elearning">หลักสูตรชุดนี้ประกอบด้วย 5 หลักสูตร ประกอบด้วย</Row>
                    <Row>
                        <div id="descrip-Elearning1">1.	ISO13485 ระบบการบริหารจัดการคุณภาพเครื่องมือแพทย์</div>
                        <div id="descrip-Elearning1">2.	IEC62304 การทดสอบและทวนสอบการทำงานตลอดทั้ง life cycle ของซอฟต์แวร์ที่อยู่ในเครื่องมือแพทย์และซอฟต์แวร์ที่เป็นเครื่องมือแพทย์ตามมาตรฐานสากล </div>
                        <div id="descrip-Elearning1">3.	ISO14971 แนวทางบริหารจัดการเพื่อลดความเสี่ยงของเครื่องมือและอุปกรณ์ทางการแพทย์ </div>
                        <div id="descrip-Elearning1">4.	IEC60601 series ชุดมาตรฐานทางเทคนิคที่ต้องทดสอบและปฏิบัติตามเพื่อให้เกิดความปลอดภัยและได้สมรรถนะตามที่ต้องการของอุปกรณ์ไฟฟ้าทางการแพทย์ </div>
                        <div id="descrip-Elearning1">5.	พรบ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 Personal Data Protection Act (PDPA) เพื่อปกป้องข้อมูลทางการแพทย์</div>
                    </Row>
                    <Row id="descrip-Elearning">หลังจากสำเร็จหลักสูตร ผู้ผลิตและผู้ประกอบการจะสามารถนำความรู้จากหลักสูตร E-learning ชุดนี้ รวมทั้งเห็นความเชื่องโยงของระบบมาตรฐาน และ กฎหมายที่เกี่ยวข้องเพื่อนำไปพัฒนาและผลักดันผลิตภัณฑ์ของท่านให้เป็นที่ยอมรับ และเพิ่มศักยภาพขององค์กรของท่านต่อไป</Row>
                </Col>
            </Container>
        )
    }
}