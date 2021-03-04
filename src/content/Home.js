import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Image } from 'antd';
import axios from 'axios';
import '../css/Home.css';
import ReactPlayer from 'react-player';
import testV1 from '../video/test.mp4';
import Home1 from '../img/Home1.jpg';
import Home2 from '../img/Home2.jpg';
import HomeBanner from '../img/Home-01.jpg';
import { config } from '../config/config';
import '../template/Footer2'
import Footer2 from '../template/Footer2';

// import Header2 from '../template/Header2';

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
                            url={testV1}
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
                    <Col xs={24} md={24} xl={12} style={{display: "flex", alignItems: "conter"}}>
                        <Row id="rowheadHome">
                            <Row id="headHome">ความเป็นมา</Row>
                            <Row id="descrip-Home">ปัจจุบันระบบสาธารณสุขไทยต้องรองรับจำนวนผู้ป่วยที่เพิ่มขึ้นอย่างต่อเนื่องทุกปี โดยเฉพาะผู้ป่วยในกลุ่มโรคไม่ติดต่อเรื้อรัง หรือ NCDs เช่น โรคมะเร็ง โรคเบาหวาน โรคหลอดเลือดสมองและหัวใจ โรคความดันโลหิตสูง, โรคถุงลมโป่งพอง เป็นต้น ซึ่งเกิดจากการใช้ชีวิตประจำวันที่ไม่เหมาะสม เช่น การสูบบุหรี่ การดื่มเครื่องดื่มแอลกอฮอล์ การไม่ออกกำลังกาย การมีความเครียดสูง</Row>
                            <Row id="descrip-Home">สำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ (สวทช.) โดยอุทยานวิทยาศาสตร์ประเทศไทย “นิคมวิจัยสำหรับเอกชนแห่งแรกและใหญ่สุดในประเทศไทย” จึงได้จัดทำโครงการพัฒนานวัตกรรมการแพทย์ดิจิทัลเพื่อต่อสู้กลุ่มโรคไม่ติดต่อเรื้อรัง (NCD ) สู่ระบบสาธารณสุขไทยเพื่อความยั่งยืนทางด้านสุขภาพ ซึ่งได้รับเงินทุนสนับสนุนจากกองทุนพัฒนาดิจิทัลเพื่อเศรษฐกิจและสังคม สำนักงานคณะกรรมการดิจิทัลเพื่อเศรษฐกิจและสังคมแห่งชาติ (สดช.)</Row>
                            <Row id="descrip-Home">โครงการนี้จัดทำขึ้นเพื่อส่งเสริมผู้ประกอบในการพัฒนาเทคโนโลยี นวัตกรรมและอุปกรณ์ทางการแพทย์ดิจิทัลให้มีมาตรฐานสากล โดยพัฒนาระบบการเรียนรู้และหลักสูตรทางด้านมาตรฐานเครื่องมือแพทย์ดิจิทัล การจัดการข้อมูลทางด้านการแพทย์ สำหรับการรักษา ช่วยเหลือ ป้องกันโรค NCDs ในประเทศไทย</Row>
                        </Row>
                    </Col>
                </Row>
                
                <Row id="row-coverhome">
                    <Col xs={24} md={12} xl={12}>
                        <Col xs={24} md={24} xl={24}>
                            <Image src={Home2} id="img-row2" style={{width: "70%", height: "fit-content"}} fluid></Image>
                        </Col>
                    </Col>
                    <Col xs={24} md={12} xl={12}>
                        <Col xs={24} md={24} xl={24}>
                            <Image src={Home1} id="img-row2" style={{width: "70%", height: "fit-content"}} fluid></Image>
                        </Col>
                    </Col>
                    <Col  xs={24} md={24} xl={24} id="descrip-Home1"><span id="headHome">วันที่ 14 ธันวาคม 2563 </span> นางสาว อัจฉรินทร์ พัฒนพันธ์ชัย ปลัดกระทรวงดิจิทัลเพื่อเศรษฐกิจและสังคม 
และ นางวรรณพร เทพหัสดิน ณ อยุธยา เลขาธิการคณะกรรมการดิจิทัลเพื่อเศรษฐกิจและสังคมแห่งชาติ เข้าร่วมพิธีลงนามสัญญารับทุน
กองทุนพัฒนาดิจิทัลเพื่อเศรษฐกิจและสังคม ประจำปีงบประมาณ พ.ศ. 2563 ครั้งที่ 2 ซึ่งจัดโดยสำนักงานคณะกรรมการดิจิทัลเพื่อเศรษฐกิจ
และสังคมแห่งชาติ (สดช.) ณ ห้องวีนัส ชั้น 3 โรงแรมมิราเคิล แกรนด์ คอนเวนชั่น ถนนแจ้งวัฒนะ หลักสี่ กรุงเทพฯ</Col>
                </Row>
                <Row>
                    <Footer2/>
                </Row>
            </Container>
        );
    }
}