import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
import { Row, Col } from 'antd';
import axios from 'axios';
import '../css/Home.css';
import ReactPlayer from 'react-player';
import Home1 from '../img/Home1.jpg';
import Home2 from '../img/Home2.jpg';
import HomeBanner from '../img/Home-01.jpg';
import { config } from '../config/config';
import '../template/Footer2'
import Footer2 from '../template/Footer2';

// import Header2 from '../template/Header2';
const VideoHome = 'https://www.digitalncd.com/API/video/Home/Home.mp4';

const ip = config.ipServer;
export default class Home extends Component {

    async componentDidMount() {
        var url_update = ip + "/User/count";
        const exam_post = await (await axios.put(url_update)).data;
        console.log(exam_post);
    }

    render() {
        return (
            <Container fluid id="bg-home">
                <Row>
                    <Col xs={24} md={24} xl={24}>
                        <Image src={HomeBanner} fluid></Image>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} md={24} xl={12} id="home-video">
                        <ReactPlayer
                            url={VideoHome}
                            className='react-player'
                            width='90%'
                            height='max-content'
                            controls={true}
                            playsinline={true}
                            playIcon={true}
                            pip={false}
                            // playing={this.state.playingTopic3}
                            // onProgress={this.onProgressVedioTopic3}
                            // onEnded={() => { this.onEndedVedio(TopicCode3) }}
                            // onPlay={() => { this.onCreateTopic(TopicCode3) }}
                            fluid />
                    </Col>
                    <Col xs={24} md={24} xl={12} style={{ display: "flex", alignItems: "conter" }}>
                        <Row id="rowheadHome">
                            <Row id="headHome2"><div>ความเป็นมา</div></Row>
                            <Row id="descrip-Home">ปัจจุบันระบบสาธารณสุขไทยต้องรองรับจำนวนผู้ป่วยที่เพิ่มขึ้นอย่างต่อเนื่องทุกปี โดยเฉพาะผู้ป่วยในกลุ่มโรคไม่ติดต่อเรื้อรัง หรือ NCDs เช่น โรคมะเร็ง โรคเบาหวาน โรคหลอดเลือดสมองและหัวใจ โรคความดันโลหิตสูง, โรคถุงลมโป่งพอง เป็นต้น ซึ่งเกิดจากการใช้ชีวิตประจำวันที่ไม่เหมาะสม เช่น การสูบบุหรี่ การดื่มเครื่องดื่มแอลกอฮอล์ การไม่ออกกำลังกาย การมีความเครียดสูง</Row>
                            <Row id="descrip-Home">
                                <Col xs={24} md={24} xl={24}>สำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ (สวทช.) โดย <span id="headHome3">อุทยานวิทยาศาสตร์ประเทศไทยซึ่งเป็น “นิคมวิจัยสำหรับเอกชนแห่งแรกและใหญ่สุดในประเทศไทย” </span> จึงได้จัดทำโครงการพัฒนานวัตกรรมการแพทย์ดิจิทัลเพื่อต่อสู้กลุ่มโรคไม่ติดต่อเรื้อรัง ( NCDs ) สู่ระบบสาธารณสุขไทยเพื่อความยั่งยืนทางด้านสุขภาพ ซึ่งได้รับเงินทุนสนับสนุนจากกองทุนพัฒนาดิจิทัลเพื่อเศรษฐกิจและสังคม สำนักงานคณะกรรมการดิจิทัลเพื่อเศรษฐกิจและสังคมแห่งชาติ (สดช.)</Col>
                                </Row>
                            <Row id="descrip-Home">โครงการนี้จัดทำขึ้นเพื่อส่งเสริมผู้ประกอบในการพัฒนาเทคโนโลยี นวัตกรรมและอุปกรณ์ทางการแพทย์ดิจิทัลให้มีมาตรฐานสากล โดยพัฒนาระบบการเรียนรู้และหลักสูตรทางด้านมาตรฐานเครื่องมือแพทย์ดิจิทัล การจัดการข้อมูลทางด้านการแพทย์ สำหรับการรักษา ช่วยเหลือ ป้องกันโรค NCDs ในประเทศไทย</Row>
                        </Row>
                    </Col>
                </Row>

                <Row id="row-coverhome">
                    <Col xs={24} md={12} xl={12}>
                        <Row id="row-img-date">
                            {/* <Col xs={24} md={24} xl={24} id="row-img-date2"> */}
                                <Image src={Home2} id="img-row2" style={{ width: "70%", marginLeft: "15%" }} fluid></Image>
                            {/* </Col> */}
                        </Row>
                    </Col>
                    <Col xs={24} md={12} xl={12}>
                        <Row id="row-img-date">
                            {/* <Col xs={24} md={24} xl={24} id="row-img-date2"> */}
                                <Image src={Home1} id="img-row2" style={{ width: "70%", marginLeft: "15%" }} fluid></Image>
                            {/* </Col> */}
                        </Row>
                    </Col>
                    <Col xs={24} md={24} xl={24} id="descrip-Home1">วันที่ 14 ธันวาคม 2563 <span id="headHome">นายสนัด วงศ์ทวีทอง</span> รองผู้อำนวยการอุทยานวิทยาศาสตร์ประเทศไทย สํานักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ หัวหน้าโครงการฯ พิธีลงนามสัญญารับทุนกองทุนพัฒนาดิจิทัลเพื่อเศรษฐกิจและสังคม ประจำปีงบประมาณ พ.ศ. 2563 ครั้งที่ 2 ณ โรงแรมมิราเคิล แกรนด์ คอนเวนชั่น ถนนแจ้งวัฒนะ หลักสี่ กรุงเทพฯ</Col>
                </Row>
                <Row>
                    <Footer2 />
                </Row>
            </Container>
        );
    }
}
