import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Progress, Spin, Empty, Result } from 'antd';
import '../../css/AdminTopScore.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
import { config } from '../../config/config';

const cookies = new Cookies();

const ip = config.ipServer;

const CourseCode1 = "COURSE1001";
const CourseCode2 = "COURSE1002";
const CourseCode3 = "COURSE1003";
const CourseCode4 = "COURSE1004";
const CourseCode5 = "COURSE1005";

export default class AdminTopScore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            email: "",
            header: [],
            topscore: [],
            topscore1: [],
            topscore2: [],
            topscore3: [],
            topscore4: [],
            topscore5: [],
            statuslode: false
        }
    }

    componentWillMount() {
        this.setState({
            token: cookies.get('token_user', { path: '/' }),
            email: cookies.get('email', { path: '/' }),
            header: {
                token: cookies.get('token_user', { path: '/' }),
                key: cookies.get('email', { path: '/' })
            }
        });
    }

    async componentDidMount() {
        var url_exam_topscore = ip + "/Examination/ExamPost/TopScore";
        const exam_topscore = await (await axios.get(url_exam_topscore, { headers: this.state.header })).data;
        if (!exam_topscore?.status) {
            swal("Error!", "เกิดข้อผิดพลาดในการเข้าสู่ระบบ \n กรุณาเข้าสู่ระบบใหม่", "error").then((value) => {
                this.setState({
                    token: cookies.remove('token_user', { path: '/' }),
                    user: cookies.remove('user', { path: '/' }),
                    email: cookies.remove('email', { path: '/' })
                });
                window.location.replace('/', false);
            });
        } else {
            this.setState({
                topscore: exam_topscore.data,
                topscore1: exam_topscore.data?.filter((item) => item.courseCode === CourseCode1),
                topscore2: exam_topscore.data?.filter((item) => item.courseCode === CourseCode2),
                topscore3: exam_topscore.data?.filter((item) => item.courseCode === CourseCode3),
                topscore4: exam_topscore.data?.filter((item) => item.courseCode === CourseCode4),
                topscore5: exam_topscore.data?.filter((item) => item.courseCode === CourseCode5),
                statuslode: true
            });
        }
    }

    render() {
        return (
            <Container id="bg-AdminTopScore" fluid>

                {
                    (window.innerWidth >= 768) ?
                        <>
                            <Row id="row-header-topscore">ข้อมูลคะแนนสอบสูงสุด</Row>
                            {
                                (this.state.statuslode) ?
                                    <>
                                        {
                                            this.state.topscore.length > 0 ?
                                                <>
                                                    <Row id="row-table-AdminTopScore">
                                                        <Col md={5} xl={5} id="header-table-AdminTopScore">ชื่อหลักสูตร</Col>
                                                        <Col md={5} xl={4} id="header-table-AdminTopScore">ผลคะแนน (ร้อยละ)</Col>
                                                        <Col md={6} xl={7} id="header-table-AdminTopScore">ชื่อ - นามสกุล</Col>
                                                        <Col md={7} xl={7} id="header-table-AdminTopScore">ชื่อบริษัท</Col>
                                                    </Row>

                                                    <Row id="row-table-AdminTopScore1">
                                                        <Col md={5} xl={5} id="TopScore">หลักสูตรที่1</Col>
                                                        <Col md={5} xl={4} id="TopScore"><Progress type="circle" percent={this.state.topscore1[0]?.percenScore} width={50} strokeWidth={13} strokeColor={(parseInt(this.state.topscore1[0]?.percenScore)) >= 80 ? "#006633" : "#CC0000"} /></Col>
                                                        <Col md={6} xl={7} id="TopScore1">{this.state.topscore1[0]?.name}</Col>
                                                        <Col md={7} xl={7} id="TopScore1">{this.state.topscore1[0]?.nameCompany}</Col>
                                                    </Row>

                                                    <Row id="row-table-AdminTopScore1">
                                                        <Col md={5} xl={5} id="TopScore">หลักสูตรที่2</Col>
                                                        <Col md={5} xl={4} id="TopScore"><Progress type="circle" percent={this.state.topscore2[0]?.percenScore} width={50} strokeWidth={13} strokeColor={(parseInt(this.state.topscore2[0]?.percenScore)) >= 80 ? "#006633" : "#CC0000"} /></Col>
                                                        <Col md={6} xl={7} id="TopScore1">{this.state.topscore2[0]?.name}</Col>
                                                        <Col md={7} xl={7} id="TopScore1">{this.state.topscore2[0]?.nameCompany}</Col>
                                                    </Row>

                                                    <Row id="row-table-AdminTopScore1">
                                                        <Col md={5} xl={5} id="TopScore">หลักสูตรที่3</Col>
                                                        <Col md={5} xl={4} id="TopScore"><Progress type="circle" percent={this.state.topscore3[0]?.percenScore} width={50} strokeWidth={13} strokeColor={(parseInt(this.state.topscore3[0]?.percenScore)) >= 80 ? "#006633" : "#CC0000"} /></Col>
                                                        <Col md={6} xl={7} id="TopScore1">{this.state.topscore3[0]?.name}</Col>
                                                        <Col md={7} xl={7} id="TopScore1">{this.state.topscore3[0]?.nameCompany}</Col>
                                                    </Row>

                                                    <Row id="row-table-AdminTopScore1">
                                                        <Col md={5} xl={5} id="TopScore">หลักสูตรที่4</Col>
                                                        <Col md={5} xl={4} id="TopScore"><Progress type="circle" percent={this.state.topscore4[0]?.percenScore} width={50} strokeWidth={13} strokeColor={(parseInt(this.state.topscore4[0]?.percenScore)) >= 80 ? "#006633" : "#CC0000"} /></Col>
                                                        <Col md={6} xl={7} id="TopScore1">{this.state.topscore4[0]?.name}</Col>
                                                        <Col md={7} xl={7} id="TopScore1">{this.state.topscore4[0]?.nameCompany}</Col>
                                                    </Row>

                                                    <Row id="row-table-AdminTopScore1">
                                                        <Col md={5} xl={5} id="TopScore">หลักสูตรที่5</Col>
                                                        <Col md={5} xl={4} id="TopScore"><Progress type="circle" percent={this.state.topscore5[0]?.percenScore} width={50} strokeWidth={13} strokeColor={(parseInt(this.state.topscore5[0]?.percenScore)) >= 80 ? "#006633" : "#CC0000"} /></Col>
                                                        <Col md={6} xl={7} id="TopScore1">{this.state.topscore5[0]?.name}</Col>
                                                        <Col md={7} xl={7} id="TopScore1">{this.state.topscore5[0]?.nameCompany}</Col>
                                                    </Row>
                                                </>
                                                :
                                                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                                        }
                                    </>
                                    :
                                    <Row id="row-spin-slide">
                                        <Spin size="large" />
                                    </Row>
                            }
                        </>
                        :
                        <Result
                            status="error"
                            title="เว็บไซต์ไม่รองรับการแสดงผลในขนาดหน้าจอของคุณ"
                            subTitle="กรุณาใช้งานในอุปกรณ์ที่มีหน้าจอขนาดใหญ่ขึ้น"
                        >
                        </Result>
                }
            </Container>
        )
    }
}