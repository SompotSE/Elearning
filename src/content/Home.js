import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Image, Button } from 'antd';
import '../css/Home.css';
import cover1 from '../img/Cover1.png';
import unit1 from '../img/unit1.png';
import unit2 from '../img/unit2.png';
import ReactPlayer from 'react-player';
import testV1 from '../video/test.mp4';
import Header2 from '../template/Header2';
export default class Home extends Component {
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
                        สู่ระบบสาธารณสุขไทย เพื่อความยั่งยืนทางด้านสุขภาพ สำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ (สวทช)
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
                <Row id="row-coverhome">
                        <Col xs={10} md={4} xl={4}>
                            <Row  id="row-img-coursedetail">
                                <Image style={{width: "100%"}} src={unit1} placeholder={false} fluid></Image>   
                            </Row>
                            <Row id="row-btn-coursedetail">
                                <Button id="btn-coursedetail">รายละเอียดหลักสูตร</Button>
                            </Row>
                        </Col>
                        <Col xs={10} md={4} xl={4}>
                            <Row  id="row-img-coursedetail">
                                <Image style={{width: "100%"}} src={unit2} placeholder={false} fluid></Image>   
                            </Row>
                            <Row id="row-btn-coursedetail">
                                <Button id="btn-coursedetail">รายละเอียดหลักสูตร</Button>
                            </Row>
                        </Col>
                        <Col xs={10} md={4} xl={4}>
                            <Row  id="row-img-coursedetail">
                                <Image style={{width: "100%"}} src={cover1} placeholder={false} fluid></Image>   
                            </Row>
                            <Row id="row-btn-coursedetail">
                                <Button id="btn-coursedetail">รายละเอียดหลักสูตร</Button>
                            </Row>
                        </Col>
                        <Col xs={10} md={4} xl={4}>
                            <Row  id="row-img-coursedetail">
                                <Image style={{width: "100%"}} src={cover1} placeholder={false} fluid></Image>   
                            </Row>
                            <Row id="row-btn-coursedetail">
                                <Button id="btn-coursedetail">รายละเอียดหลักสูตร</Button>
                            </Row>
                        </Col>
                        <Col xs={10} md={4} xl={4}>
                            <Row  id="row-img-coursedetail">
                                <Image style={{width: "100%"}} src={cover1} placeholder={false} fluid></Image>   
                            </Row>
                            <Row id="row-btn-coursedetail">
                                <Button id="btn-coursedetail">รายละเอียดหลักสูตร</Button>
                            </Row>
                        </Col>
                </Row>
            </Container>
        );
    }
}