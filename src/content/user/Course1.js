import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
import { Row, Col, Breadcrumb, Progress, Collapse, Button } from 'antd';
import { HomeOutlined, SnippetsOutlined, RightCircleTwoTone, BorderOutlined } from '@ant-design/icons';
import { withRouter } from "react-router-dom";
import { AiFillCheckSquare } from "react-icons/ai";
import axios from 'axios';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
import ReactPlayer from 'react-player';
import '../../css/Course.css';
import imgcourse from '../../img/userhome.png';
import userprofile from '../../img/userprofile.png';
import { NavLink } from 'react-router-dom';
// import v1 from '../../img/V1.png';
// import v2 from '../../img/V2.png';
// import v3 from '../../img/V3.png';

import course2 from '../../img/course2.png';
import course3 from '../../img/course3.png';
import course4 from '../../img/course4.png';
import course5 from '../../img/course5.png';

import incourse1 from '../../img/incourse1.svg';
import incourse2 from '../../img/incourse2.svg';

import testV1 from '../../video/test.mp4';

import { config } from '../../config/config';

const { Panel } = Collapse;
const cookies = new Cookies();

const ip = config.ipServer;
const CourseCode = "COURSE1001";

const TopicCode1 = "TOP100001";
const TopicCode2 = "TOP100002";
const TopicCode3 = "TOP100003";
// const TopicCode4 = "TOP100004";
// const TopicCode5 = "TOP100005";
// const TopicCode6 = "TOP100006";

// const ExamCodePre = "EXAM10001";
const ExamCodePost = "EXAM10002";

var timeTopic1 = 0;
var timeTopic2 = 0;
var timeTopic3 = 0;

export default withRouter(class Course1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            email: "",
            header: [],
            course: [],
            topicAll: [],

            playingTopic1: false,
            playingTopic2: false,
            playingTopic3: false,

            examPost: [],
            percentExamPost: 0
        };

        this.onDownlode = this.onDownlode.bind(this);
        this.onCreateTopic = this.onCreateTopic.bind(this);
        this.onExamPost = this.onExamPost.bind(this);
        this.onProgressVedioTopic1 = this.onProgressVedioTopic1.bind(this);
        this.onProgressVedioTopic2 = this.onProgressVedioTopic2.bind(this);
        this.onProgressVedioTopic3 = this.onProgressVedioTopic3.bind(this);
        this.onEndedVedio = this.onEndedVedio.bind(this);
        this.playingVedio = this.playingVedio.bind(this);
        this.updateTimeTopic = this.updateTimeTopic.bind(this);
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
        // var url_exam_pre = ip + "/UserExamination/find/" + CourseCode + "/" + ExamCodePre;
        // const exam_pre = await (await axios.get(url_exam_pre, { headers: this.state.header })).data;
        // if (!exam_pre?.status) {
        //     swal("Error!", "เกิดข้อผิดพลาดในการเข้าสู่ระบบ \n กรุณาเข้าสู่ระบบใหม่", "error").then((value) => {
        //         this.setState({
        //             token: cookies.remove('token_user', { path: '/' }),
        //             user: cookies.remove('user', { path: '/' }),
        //             email: cookies.remove('email', { path: '/' })
        //         });
        //         window.location.replace('/Login', false);
        //     });
        // } else {
        //     if (exam_pre.data.length <= 0) {
        //         this.props.history.push("/ExamPre");
        //     }
        // }

        var url_exam_post = ip + "/UserExamination/find/" + CourseCode + "/" + ExamCodePost;
        const exam_post = await (await axios.get(url_exam_post, { headers: this.state.header })).data;
        if (!exam_post?.status) {
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
                examPost: exam_post.data,
                percentExamPost: Math.max.apply(Math, exam_post.data.map(function (item) { return item.percenScore; }))
            });
        }

        var url_course = ip + "/UserCourse/find/" + CourseCode;
        const course = await (await axios.get(url_course, { headers: this.state.header })).data;
        if (!course?.status) {
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
                course: course.data[0],
            });
        }

        var url_topic = ip + "/UserTopic/find/" + CourseCode;
        const topic = await (await axios.get(url_topic, { headers: this.state.header })).data;
        if (!topic?.status) {
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
                topicAll: topic.data
            });
        }

        // this.updateTimer = setInterval(() => this.timeCourse(), 10000);

    }

    // componentWillUnmount() {
    //     clearInterval(this.updateTimer);
    // }

    // async timeCourse() {
    //     const updateTime = {
    //         time: 10
    //     };

    //     var url_update_time = ip + "/UserCourse/update/time/" + CourseCode;
    //     const update_time = await (await axios.put(url_update_time, updateTime, { headers: this.state.header })).data;

    //     if (!update_time?.status) {
    //         swal("Error!", "เกิดข้อผิดพลาดในการเข้าสู่ระบบ \n กรุณาเข้าสู่ระบบใหม่", "error").then((value) => {
    //             this.setState({
    //                 token: cookies.remove('token_user', { path: '/' }),
    //                 user: cookies.remove('user', { path: '/' }),
    //                 email: cookies.remove('email', { path: '/' })
    //             });
    //             window.location.replace('/Login', false);
    //         });
    //     } else {

    //     }
    // }

    async onDownlode() {
        if (this.state.course?.downlodeDoc !== "A") {
            const downlodeDoc = {
                downlodeDoc: "A"
            };

            var url_update_topic = ip + "/UserCourse/update/" + CourseCode;
            const update_topic = await (await axios.put(url_update_topic, downlodeDoc, { headers: this.state.header })).data;

            if (!update_topic?.status) {
                swal("Error!", "เกิดข้อผิดพลาดในการเข้าสู่ระบบ \n กรุณาเข้าสู่ระบบใหม่", "error").then((value) => {
                    this.setState({
                        token: cookies.remove('token_user', { path: '/' }),
                        user: cookies.remove('user', { path: '/' }),
                        email: cookies.remove('email', { path: '/' })
                    });
                    window.location.replace('/Login', false);
                });
            } else {
                var url_course = ip + "/UserCourse/find/" + CourseCode;
                const course = await (await axios.get(url_course, { headers: this.state.header })).data;
                if (!course?.status) {
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
                        course: course.data[0],
                    });
                }
            }
        }
    }

    playingVedio(topicCode) {
        var playTopic1 = false;
        var playTopic2 = false;
        var playTopic3 = false;
        if (topicCode === TopicCode1) { playTopic1 = true }
        else if (topicCode === TopicCode2) { playTopic2 = true }
        else if (topicCode === TopicCode3) { playTopic3 = true }

        this.setState({
            playingTopic1: playTopic1,
            playingTopic2: playTopic2,
            playingTopic3: playTopic3
        })
    }

    async onCreateTopic(topicCode) {
        this.playingVedio(topicCode);
        if (this.state.topicAll?.filter((item) => item.topicCode === topicCode)[0]?.recStatus !== "A") {
            const createTopic = {
                topicCode: topicCode,
                courseCode: CourseCode,
                recStatus: "A",
                time: 0
            };

            var url_create_topic = ip + "/UserTopic/create";
            const create_topic = await (await axios.post(url_create_topic, createTopic, { headers: this.state.header })).data;

            if (!create_topic?.status) {
                swal("Error!", "เกิดข้อผิดพลาดในการเข้าสู่ระบบ \n กรุณาเข้าสู่ระบบใหม่", "error").then((value) => {
                    this.setState({
                        token: cookies.remove('token_user', { path: '/' }),
                        user: cookies.remove('user', { path: '/' }),
                        email: cookies.remove('email', { path: '/' })
                    });
                    window.location.replace('/Login', false);
                });
            } else {
                var url_topic = ip + "/UserTopic/find/" + CourseCode;
                const topic = await (await axios.get(url_topic, { headers: this.state.header })).data;
                if (!topic?.status) {
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
                        topicAll: topic.data
                    });
                }
            }
        }
    }

    onProgressVedioTopic1(state) {
        // state is time in vedio play
        if (this.state.playingTopic1) { timeTopic1 += 1; }
        if (timeTopic1 === 10) {
            this.updateTimeTopic(TopicCode1, timeTopic1);
            timeTopic1 = 0;
        }
    }

    onProgressVedioTopic2(state) {
        // state is time in vedio play
        if (this.state.playingTopic2) { timeTopic2 += 1; }
        if (timeTopic2 === 10) {
            this.updateTimeTopic(TopicCode2, timeTopic2);
            timeTopic2 = 0;
        }
    }

    onProgressVedioTopic3(state) {
        // state is time in vedio play
        if (this.state.playingTopic3) { timeTopic3 += 1; }
        if (timeTopic3 === 10) {
            this.updateTimeTopic(TopicCode3, timeTopic3);
            timeTopic3 = 0;
        }
    }

    onEndedVedio(Topic) {
        var time = 0;
        if (Topic === TopicCode1) {
            time = timeTopic1;
            timeTopic1 = 0;
            this.setState({ playingTopic1: false })
        }
        else if (Topic === TopicCode2) {
            time = timeTopic2;
            timeTopic2 = 0;
            this.setState({ playingTopic2: false })
        }
        else if (Topic === TopicCode3) {
            time = timeTopic3;
            timeTopic3 = 0;
            this.setState({ playingTopic3: false })
        }

        this.updateTimeTopic(Topic, time);
    }

    async updateTimeTopic(Topic, Time) {
        const updateTime = {
            time: Time
        };

        var url_update_time = ip + "/UserTopic/update/time/" + CourseCode + "/" + Topic;
        const update_time = await (await axios.put(url_update_time, updateTime, { headers: this.state.header })).data;
        if (!update_time?.status) {
            swal("Error!", "เกิดข้อผิดพลาดในการเข้าสู่ระบบ \n กรุณาเข้าสู่ระบบใหม่", "error").then((value) => {
                this.setState({
                    token: cookies.remove('token_user', { path: '/' }),
                    user: cookies.remove('user', { path: '/' }),
                    email: cookies.remove('email', { path: '/' })
                });
                window.location.replace('/Login', false);
            });
        } else {
            return update_time?.status;
        }
    }

    onExamPost() {
        if (this.state.examPost.length !== 3) {
            this.props.history.push("/ExamPost");
        } else {
            swal("Warning!", "จำนวนครั้งในการทำข้อสอบครบแล้ว", "warning").then((value) => {
            });
        }
    }

    render() {
        return (
            <Container fluid>
                <Row id="row-header">
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <NavLink to="/HomeUser"><HomeOutlined /><span>Home</span></NavLink>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <SnippetsOutlined /><span>หลักสูตรที่ 1</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <Row id="row-header">
                    <Col xs={24} md={14} xl={14}>
                        <Image src={imgcourse} fluid></Image>
                    </Col>
                    <Col xs={24} md={10} xl={10}>
                        <Row id="font-header">รายละเอียด</Row>
                        <Row id="font-detail">กล่าวถึงวัตถุประสงค์ของมาตรฐาน ชี้แจงแนวคิดของมาตรฐาน พื้นฐานแนวคิดตามมาตรฐานระบบคุณภาพ</Row>
                    </Col>
                </Row>
                <Row id="row-header">
                    <Col xs={24} md={14} xl={14}>
                        <Row>
                            <Col xs={7} md={7} xl={7}><Image src={userprofile} fluid></Image></Col>
                            <Col xs={17} md={17} xl={17}>
                                <Row id="font-header">ผู้สอน</Row>
                                <Row id="font-detail">กล่าวถึงวัตถุประสงค์ของมาตรฐาน ชี้แจงแนวคิดของมาตรฐาน พื้นฐานแนวคิดตามมาตรฐานระบบคุณภาพ</Row>
                            </Col>
                        </Row>

                    </Col>
                    <Col xs={24} md={10} xl={10}>
                        <Row>
                            <Col xs={19} md={19} xl={19}>
                                <Row id="font-header">ความสำเร็จในการทำแบบทดสอบ</Row>
                                <Row id="font-detail">กล่าวถึงวัตถุประสงค์ของมาตรฐาน ชี้แจงแนวคิดของมาตรฐาน พื้นฐานแนวคิดตามมาตรฐานระบบคุณภาพ</Row>
                                {
                                    (this.state.percentExamPost >= 80) ?
                                        <>
                                            <Button>ข้อมูลการรับใบ Certificate</Button>
                                            <Row id="font-detail">คุณผ่านการทำสอบ</Row>
                                        </>
                                        :
                                        <>
                                            <Button disabled={true}>ข้อมูลการรับใบ Certificate</Button>
                                            <Row id="font-detail">คุณไม่ผ่านการทำสอบ</Row>
                                            <Row id="font-detail">เหลือจำนวนการทำแบบทดสอบ {3 - this.state.examPost.length} ครั้ง</Row>
                                        </>
                                }
                            </Col>
                            <Col xs={5} md={5} xl={5}>
                                <Progress type="circle" percent={this.state.percentExamPost} strokeWidth={13} />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row id="row-header">
                    <Col xs={24} md={24} xl={24} id="font-header">เนื้อหาของหลักสูตร</Col>
                    <Col xs={24} md={24} xl={24} id="font-header">
                        <Collapse
                            expandIcon={({ isActive }) => <RightCircleTwoTone rotate={isActive ? 90 : 0} style={{ fontSize: '150%' }} />}
                            defaultActiveKey={['1', '2', '3', '4']}
                            ghost
                        >
                            <Panel header="เอกสารประกอบการเรียน" key="1">
                                <Row>
                                    <Col xs={23} md={23} xl={23} id="sub-header" style={{ cursor: "pointer" }} onClick={this.onDownlode}> - ดาวน์โหลดเอกสาร </Col>
                                    <Col xs={1} md={1} xl={1} id="icon-chack">
                                        {
                                            (this.state.course?.downlodeDoc === "A") ? <AiFillCheckSquare style={{ fontSize: '400%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '400%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                            </Panel>
                            <Panel header="บทเรียน" key="2">
                                <Row>
                                    <Col xs={23} md={23} xl={23} id="sub-header"> 1. ขอบเขต เป็นบททั่วไป และการประยุกต์ใช้ ISO 13485: 2016 </Col>
                                    <Col xs={1} md={1} xl={1} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode1)[0]?.recStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '400%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '400%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={24} md={12} xl={12} id="video-center">
                                        {/* <Image src={v1} fluid style={{ cursor: "pointer" }} onClick={() => { this.onCreateTopic(TopicCode1) }}></Image> */}
                                        <ReactPlayer
                                            url={testV1}
                                            className='react-player'
                                            width='70%'
                                            height='max-content'
                                            controls={true}
                                            playsinline={true}
                                            playIcon={true}
                                            pip={false}
                                            playing={this.state.playingTopic1}
                                            onProgress={this.onProgressVedioTopic1}
                                            onEnded={() => { this.onEndedVedio(TopicCode1) }}
                                            onPlay={() => { this.onCreateTopic(TopicCode1) }}
                                            fluid />
                                    </Col>
                                    <Col xs={24} md={8} xl={8}>
                                        <Row>รายละเอียด</Row>
                                        <Row>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. </Row>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={23} md={23} xl={23} id="sub-header"> 2. มาตรฐานอ้างอิง อธิบายถึงการอ้างอิงข้อกำหนดของมาตรฐาน ISO 9001:2015 </Col>
                                    <Col xs={1} md={1} xl={1} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode2)[0]?.recStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '400%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '400%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={24} md={12} xl={12} id="video-center">
                                        {/* <Image src={v2} fluid style={{ cursor: "pointer" }} onClick={() => { this.onCreateTopic(TopicCode2) }}></Image> */}
                                        <ReactPlayer
                                            url={testV1}
                                            className='react-player'
                                            width='70%'
                                            // height='max-content'
                                            controls={true}
                                            playsinline={true}
                                            playIcon={true}
                                            pip={false}
                                            playing={this.state.playingTopic2}
                                            onProgress={this.onProgressVedioTopic2}
                                            onEnded={() => { this.onEndedVedio(TopicCode2) }}
                                            onPlay={() => { this.onCreateTopic(TopicCode2) }}
                                            fluid />
                                    </Col>
                                    <Col xs={24} md={8} xl={8}>
                                        <Row>รายละเอียด</Row>
                                        <Row>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. </Row>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={23} md={23} xl={23} id="sub-header"> 3. คำศัพท์และคำนิยาม อธิบายคำศัพท์และนิยาม ทั้งในส่วนของข้อกำหนดระบบบริหารคุณภาพทั่วไป และสำหรับเครื่องมือแพทย์ ซี่งอ้างอิงตาม ISO 9001:2015 </Col>
                                    <Col xs={1} md={1} xl={1} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode3)[0]?.recStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '400%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '400%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={24} md={12} xl={12} id="video-center">
                                        <ReactPlayer
                                            url={testV1}
                                            className='react-player'
                                            width='70%'
                                            height='max-content'
                                            controls={true}
                                            playsinline={true}
                                            playIcon={true}
                                            pip={false}
                                            playing={this.state.playingTopic3}
                                            onProgress={this.onProgressVedioTopic3}
                                            onEnded={() => { this.onEndedVedio(TopicCode3) }}
                                            onPlay={() => { this.onCreateTopic(TopicCode3) }}
                                            fluid />
                                    </Col>
                                    <Col xs={24} md={8} xl={8}>
                                        <Row>รายละเอียด</Row>
                                        <Row>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. </Row>
                                    </Col>
                                </Row>
                            </Panel>
                            <Panel header="แบบทดสอบท้ายบทเรียน" key="3">
                                <Row>
                                    <Col xs={23} md={23} xl={23} id="sub-header" style={{ cursor: "pointer" }} onClick={() => { this.onExamPost() }}> - ทำแบบทดสอบ </Col>
                                    <Col xs={1} md={1} xl={1} id="icon-chack">
                                        {
                                            (this.state.examPost.length > 0) ? <AiFillCheckSquare style={{ fontSize: '400%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '400%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                            </Panel>
                            <Panel header="แบบประเมิน" key="4">
                                <Row>
                                    <Col xs={23} md={23} xl={23} id="sub-header" style={{ cursor: "pointer" }}
                                    //onClick={() => { this.onExamPost() }}
                                    > - ทำแบบประเมิน </Col>
                                    <Col xs={1} md={1} xl={1} id="icon-chack">
                                        {
                                            (1 === 2) ? <AiFillCheckSquare style={{ fontSize: '400%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '400%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                            </Panel>
                        </Collapse>
                    </Col>
                </Row>

                <Row id="row-header">
                    <Col xs={24} md={24} xl={24} id="font-header">หลักสูตรที่เกี่ยวข้อง</Col>
                    <Col xs={24} md={24} xl={24} id="font-header">
                        <Row>
                            <Col xs={12} md={6} xl={6} id="course-menu">
                                <Row id="course-menu">
                                    <Image src={course2} id="img-course" fluid></Image>
                                </Row>
                                <Row id="course-menu">
                                    <Image src={incourse2} fluid id="img-play"></Image>
                                    <Image src={incourse1} fluid id="img-button"></Image>
                                </Row>
                            </Col>
                            <Col xs={12} md={6} xl={6} id="course-menu">
                                <Row id="course-menu">
                                    <Image src={course3} id="img-course" fluid></Image>
                                </Row>
                                <Row id="course-menu">
                                    <Image src={incourse2} fluid id="img-play"></Image>
                                    <Image src={incourse1} fluid id="img-button"></Image>
                                </Row>
                            </Col>
                            <Col xs={12} md={6} xl={6} id="course-menu">
                                <Row id="course-menu">
                                    <Image src={course4} id="img-course" fluid></Image>
                                </Row>
                                <Row id="course-menu">
                                    <Image src={incourse2} fluid id="img-play"></Image>
                                    <Image src={incourse1} fluid id="img-button"></Image>
                                </Row>
                            </Col>
                            <Col xs={12} md={6} xl={6} id="course-menu">
                                <Row id="course-menu">
                                    <Image src={course5} id="img-course" fluid></Image>
                                </Row>
                                <Row id="course-menu">
                                    <Image src={incourse2} fluid id="img-play"></Image>
                                    <Image src={incourse1} fluid id="img-button"></Image>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
})