import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Image, Button } from 'antd';
import '../css/Home.css';
import cover1 from '../img/Cover1.png';
import ReactPlayer from 'react-player';
import testV1 from '../video/test.mp4';
export default class Home extends Component {
    render() {
        return (
            <Container fluid id="bg-home">
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
                            <Row>
                                <Image style={{width: "100%"}} src={cover1} placeholder={false} fluid></Image>   
                            </Row>
                            <Row id="row-btn-coursedetail">
                                <Button id="btn-coursedetail">รายละเอียดหลักสูตร</Button>
                            </Row>
                        </Col>
                        <Col xs={10} md={4} xl={4}>
                            <Row>
                                <Image style={{width: "100%"}} src={cover1} placeholder={false} fluid></Image>   
                            </Row>
                            <Row id="row-btn-coursedetail">
                                <Button id="btn-coursedetail">รายละเอียดหลักสูตร</Button>
                            </Row>
                        </Col>
                        <Col xs={10} md={4} xl={4}>
                            <Row>
                                <Image style={{width: "100%"}} src={cover1} placeholder={false} fluid></Image>   
                            </Row>
                            <Row id="row-btn-coursedetail">
                                <Button id="btn-coursedetail">รายละเอียดหลักสูตร</Button>
                            </Row>
                        </Col>
                        <Col xs={10} md={4} xl={4}>
                            <Row>
                                <Image style={{width: "100%"}} src={cover1} placeholder={false} fluid></Image>   
                            </Row>
                            <Row id="row-btn-coursedetail">
                                <Button id="btn-coursedetail">รายละเอียดหลักสูตร</Button>
                            </Row>
                        </Col>
                        <Col xs={10} md={4} xl={4}>
                            <Row>
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