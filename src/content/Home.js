import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Image, Button } from 'antd';
import axios from 'axios';
import '../css/Home.css';
import unit1 from '../img/unit1.jpg';
import unit2 from '../img/unit2.jpg';
import unit3 from '../img/unit3.jpg';
import unit4 from '../img/unit4.jpg';
import unit5 from '../img/unit5.jpg';
import ReactPlayer from 'react-player';
import testV1 from '../video/test.mp4';
import { config } from '../config/config';
// import incourse4 from '../img/incourse4.jpg';

import Header2 from '../template/Header2';

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
                    <Header2 />
                </Row>
                <Row id="row-headder-project">
                    <Col xs={24} md={24} xl={24} id="header-project">
                        โครงการพัฒนานวัตกรรมการแพทย์ดิจิทัลเพื่อต่อสู้กลุ่มโรคไม่ติดต่อเรื้อรัง (NCD)
                    </Col>
                    <Col xs={24} md={24} xl={24} id="header-project">
                        สู่ระบบสาธารณสุขไทย เพื่อความยั่งยืนทางด้านสุขภาพ
                    </Col>
                    <Col xs={24} md={24} xl={24} id="header-project">
                        สำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ (สวทช)
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} md={24} xl={24} id="descrip-project">
                        ได้รับทุนสนับสนุนจากกองทุนพัฒนาดิจิทัลเพื่อเศรษฐกิจและสังคม
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} md={12} xl={12} id="home-video">
                        <ReactPlayer
                            url={testV1}
                            className='react-player'
                            width='70%'
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
                    <Col xs={24} md={12} xl={12}>
                        <Row id="rowheadHome">
                            <Row id="headHome">รายละเอียดภาพรวมหลักสูตรทั้งหมด</Row>
                        </Row>
                    </Col>
                </Row>
                {/* <Row id="row-coverhome">
                    <Col xs={24} md={12} xl={12}>
                        <Col xs={24} md={24} xl={24}>
                            <Image src={incourse4} id="img-row2" style={{width: "70%"}} fluid></Image>
                        </Col>
                        <Col xs={24} md={24} xl={24} id="textHeader-row2">
                            รูปภาพกิจกรรม
                        </Col>
                    </Col>
                    <Col xs={24} md={12} xl={12}>
                        <Col xs={24} md={24} xl={24}>
                            <Image src={incourse4} id="img-row2" style={{width: "70%"}} fluid></Image>
                        </Col>
                        <Col xs={24} md={24} xl={24} id="textHeader-row2">
                            รูปภาพกิจกรรม
                        </Col>
                    </Col>
                </Row> */}
                <Row id="row-coverhome">
                        <Col xs={10} md={4} xl={4}>
                            <Row id="row-img-coursedetail">
                                <Image style={{width: "100%", cursor: "no-drop", filter: "grayscale(1.0)"}} src={unit1} placeholder={false} preview={false} fluid></Image>   
                            </Row>
                            <Row id="row-btn-coursedetail"> 
                                <Button disabled>รายละเอียดหลักสูตร</Button>
                            </Row>
                        </Col>
                        <Col xs={10} md={4} xl={4}>
                            <Row  id="row-img-coursedetail">
                                <Image style={{width: "100%", cursor: "no-drop", filter: "grayscale(1.0)"}} src={unit2} placeholder={false} preview={false} fluid></Image>   
                            </Row>
                            <Row id="row-btn-coursedetail">
                                <Button disabled>รายละเอียดหลักสูตร</Button>
                            </Row>
                        </Col>
                        <Col xs={10} md={4} xl={4}>
                            <Row  id="row-img-coursedetail">
                                <Image style={{width: "100%", cursor: "no-drop", filter: "grayscale(1.0)"}} src={unit3} placeholder={false} preview={false} fluid></Image>   
                            </Row>
                            <Row id="row-btn-coursedetail">
                                <Button disabled>รายละเอียดหลักสูตร</Button>
                            </Row>
                        </Col>
                        <Col xs={10} md={4} xl={4}>
                            <Row  id="row-img-coursedetail">
                                <Image style={{width: "100%"}} src={unit4} placeholder={false} fluid></Image>   
                            </Row>
                            <Row id="row-btn-coursedetail">
                                <Button id="btn-coursedetail">รายละเอียดหลักสูตร</Button>
                            </Row>
                        </Col>
                        <Col xs={10} md={4} xl={4}>
                            <Row  id="row-img-coursedetail">
                                <Image style={{width: "100%", cursor: "no-drop", filter: "grayscale(1.0)"}} src={unit5} placeholder={false} preview={false} fluid></Image>   
                            </Row>
                            <Row id="row-btn-coursedetail">
                                <Button disabled>รายละเอียดหลักสูตร</Button>
                            </Row>
                        </Col>
                </Row>
            </Container>
        );
    }
}