import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Button, Modal, Progress, Empty, Spin, Result } from 'antd';
import '../../css/AdminDetail.css';
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
            usercourse: [],
            topictime: [],
            statuslode: false
        }

        this.info = this.info.bind(this);
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
        var url_usercourse = ip + "/UserCourse/Course/Detail/" + this.props.match.params.userId;
        const usercourse = await (await axios.get(url_usercourse, { headers: this.state.header })).data;
        if (!usercourse?.status) {
            swal("Error!", "เกิดข้อผิดพลาดในการเข้าสู่ระบบ \n กรุณาเข้าสู่ระบบใหม่", "error").then((value) => {
                this.setState({
                    token: cookies.remove('token_user', { path: '/' }),
                    user: cookies.remove('user', { path: '/' }),
                    email: cookies.remove('email', { path: '/' })
                });
                window.location.replace('/Login', false);
            });
        } else {
            this.setState({
                usercourse: usercourse.data,
                statuslode: true
            });
        }
    }

    async info(courseCode) {
        console.log(courseCode, " courseCode");
        var url_topic_time = ip + "/UserTopic/find/admin/detail/" + courseCode + "/" + this.props.match.params.userId;
        const topic_time = await (await axios.get(url_topic_time, { headers: this.state.header })).data;
        if (!topic_time?.status) {
            swal("Error!", "เกิดข้อผิดพลาดในการเข้าสู่ระบบ \n กรุณาเข้าสู่ระบบใหม่", "error").then((value) => {
                this.setState({
                    token: cookies.remove('token_user', { path: '/' }),
                    user: cookies.remove('user', { path: '/' }),
                    email: cookies.remove('email', { path: '/' })
                });
                window.location.replace('/Login', false);
            });
        } else {
            this.setState({
                topictime: topic_time.data
            });

            Modal.info({
                width: 700,
                title:
                    (courseCode === CourseCode1 ? "หลักสูตรที่ 1 " :
                        courseCode === CourseCode2 ? "หลักสูตรที่ 2 " :
                            courseCode === CourseCode3 ? "หลักสูตรที่ 3 " :
                                courseCode === CourseCode4 ? "หลักสูตรที่ 4 " :
                                    courseCode === CourseCode5 ? "หลักสูตรที่ 5 " : "")
                ,
                content: (
                    <>
                        <Row id="row-info">
                            <Col md={11} xl={11} id="header-table-AdminDetail">หัวข้อ</Col>
                            <Col md={11} xl={11} id="header-table-AdminDetail">เวลา</Col>
                        </Row>
                        {
                            this.state.topictime?.map((topic, i) => {
                                return <Row id="row-info">
                                    <Col md={11} xl={11} id="header1-table-AdminDetail">{topic.topicName}</Col>
                                    <Col md={11} xl={11} id="detail-table-AdminDetail">{this.seconds_to_days_hours_mins_secs_str(topic.time)}</Col>
                                </Row>
                            })
                        }

                        {/* <Row id="row-info">
                            <Col md={11} xl={11} id="header1-table-AdminDetail">หัวข้อที่ 2</Col>
                            <Col md={11} xl={11} id="detail-table-AdminDetail">เวลา</Col>
                        </Row>
                        <Row id="row-info">
                            <Col md={11} xl={11} id="header1-table-AdminDetail">หัวข้อที่ 3</Col>
                            <Col md={11} xl={11} id="detail-table-AdminDetail">เวลา</Col>
                        </Row> */}
                    </>
                ),
                onOk() { },
            });
        }


    }

    seconds_to_days_hours_mins_secs_str(seconds) {
        var days = Math.floor(seconds / (24 * 60 * 60));
        seconds -= days * (24 * 60 * 60);
        var hours = Math.floor(seconds / (60 * 60));
        seconds -= hours * (60 * 60);
        var minutes = Math.floor(seconds / (60));
        seconds -= minutes * (60);
        return ((0 < days) ? (days + " วัน ") : "") +
            ((0 < hours) ? (hours + " ชั่วโมง ") : "") +
            ((0 < minutes) ? (minutes + " นาที ") : "") +
            ((0 < seconds) ? (seconds + " วินาที") : "");
    }


    render() {
        return (
            <Container id="bg-AdminDetail" fluid>
                {
                    (window.innerWidth >= 768) ?
                        (this.state.statuslode) ?
                            <>
                                <Row id="Header-AdminDetail">{this.state.usercourse[0]?.name + " " + this.state.usercourse[0]?.nameCompany + " (สมาชิก)"}</Row>
                                {
                                    this.state.usercourse[0]?.userCourse.length > 0 ?
                                        this.state.usercourse[0]?.userCourse.map((admin, i) => {
                                            return <Row id="row-table-AdminDetail">
                                                <Col md={24} xl={24} id="header-table-AdminDetail">
                                                    {
                                                        (admin.courseCode === CourseCode1 ? "หลักสูตรที่ 1 " :
                                                            admin.courseCode === CourseCode2 ? "หลักสูตรที่ 2 " :
                                                                admin.courseCode === CourseCode3 ? "หลักสูตรที่ 3 " :
                                                                    admin.courseCode === CourseCode4 ? "หลักสูตรที่ 4 " :
                                                                        admin.courseCode === CourseCode5 ? "หลักสูตรที่ 5 " : "") + "หลักสูตร " + admin.courseName
                                                    }
                                                </Col>
                                                <Col md={5} xl={5} id="header-table-AdminDetail">รายการ</Col>
                                                <Col md={13} xl={13} id="header-table-AdminDetail">เวลา</Col>
                                                <Col md={5} xl={5} id="header-table-AdminDetail">รายละเอียด</Col>

                                                <Col md={5} xl={5} id="header-table-AdminDetail">เวลาในการใช้งานหลักสูตร</Col>
                                                <Col md={13} xl={13} id="detail-table-AdminDetail">{this.seconds_to_days_hours_mins_secs_str(admin?.topic?.reduce((prev, cur) => prev + parseInt(cur.time), 0))}</Col>
                                                <Col md={5} xl={5} id="Button-table-AdminDetail"><Button id="button-AdminDetail" onClick={() => this.info(admin.courseCode)}>รายละเอียดเพิ่มเติม</Button></Col>


                                                <Col md={5} xl={5} id="header-table-AdminDetail">ผลการสอบ</Col>
                                                <Col md={9} xl={9} id="header-table-AdminDetail">เปอร์เซ็นต์คะแนน</Col>
                                                <Col md={9} xl={9} id="header-table-AdminDetail">เวลา</Col>

                                                {
                                                    admin.exam.map((exam, i) => {
                                                        return <>
                                                            <Col md={5} xl={5} id="header1-table-AdminDetail">{"ครั้งที่ " + exam.seq}</Col>
                                                            <Col md={9} xl={9} id="detail-table-AdminDetail"><Progress type="circle" percent={parseInt(exam.percenScore)} width={50} strokeWidth={13} strokeColor={(parseInt(exam.percenScore)) >= 80 ? "#006633" : "#CC0000"} /></Col>
                                                            <Col md={9} xl={9} id="detail-table-AdminDetail">{this.seconds_to_days_hours_mins_secs_str(exam.time)}</Col>
                                                        </>
                                                    })
                                                }
                                            </Row>
                                        })
                                        :
                                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                                }
                            </>
                            :
                            <Row id="row-spin-slide">
                                <Spin size="large" />
                            </Row>

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