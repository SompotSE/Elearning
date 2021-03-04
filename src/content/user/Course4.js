import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
import { Row, Col, Progress, Collapse, Button, Modal } from 'antd'; //Breadcrumb
import { RightCircleTwoTone, BorderOutlined } from '@ant-design/icons'; //HomeOutlined, SnippetsOutlined,
import { withRouter } from "react-router-dom";
import { AiFillCheckSquare } from "react-icons/ai";
import axios from 'axios';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
import ReactPlayer from 'react-player';
import '../../css/Course.css';
import imgcourse from '../../img/incourse4.jpg';
import TeacherCourse4 from '../../img/Teacher/TeacherCourse4.webp';
// import { NavLink } from 'react-router-dom';
import banner from "../../img/Banner/Course4.jpg";

import unit1 from '../../img/unit1.jpg';
import unit2 from '../../img/unit2.jpg';
import unit3 from '../../img/unit3.jpg';
import unit5 from '../../img/unit4.jpg';

import pdf from "../../pdf/Course4.pdf"
// import test from '../../video/test.mp4';

import { config } from '../../config/config';

const { Panel } = Collapse;
const cookies = new Cookies();

const Topic1 = 'https://www.digitalncd.com/API/video/Course4/Course4Topic1.mp4';
const Topic2 = 'https://www.digitalncd.com/API/video/Course4/Course4Topic2.mp4';
const Topic3 = 'https://www.digitalncd.com/API/video/Course4/Course4Topic3.mp4';
const Topic4 = 'https://www.digitalncd.com/API/video/Course4/Course4Topic4.mp4';
const Topic5 = 'https://www.digitalncd.com/API/video/Course4/Course4Topic5.mp4';
const Topic6 = 'https://www.digitalncd.com/API/video/Course4/Course4Topic6.mp4';
const Topic7 = 'https://www.digitalncd.com/API/video/Course4/Course4Topic7.mp4';
const Topic8 = 'https://www.digitalncd.com/API/video/Course4/Course4Topic8.mp4';
const Topic9 = 'https://www.digitalncd.com/API/video/Course4/Course4Topic9.mp4';

const ip = config.ipServer;
const CourseCode = "COURSE1004";

const TopicCount = 9;

const TopicCode1 = "TOP400001";
const TopicCode2 = "TOP400002";
const TopicCode3 = "TOP400003";
const TopicCode4 = "TOP400004";
const TopicCode5 = "TOP400005";
const TopicCode6 = "TOP400006";
const TopicCode7 = "TOP400007";
const TopicCode8 = "TOP400008";
const TopicCode9 = "TOP400009";

const ExamCodePost = "EXAM10002";

var timeTopic1 = 0;
var timeTopic2 = 0;
var timeTopic3 = 0;
var timeTopic4 = 0;
var timeTopic5 = 0;
var timeTopic6 = 0;
var timeTopic7 = 0;
var timeTopic8 = 0;
var timeTopic9 = 0;

const CourseCode1 = "COURSE1001";
const CourseCode2 = "COURSE1002";
const CourseCode3 = "COURSE1003";
const CourseCode4 = "COURSE1004";
const CourseCode5 = "COURSE1005";

export default withRouter(class Course4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            email: "",
            header: [],
            course: [],
            topicAll: [],
            form: [],

            playingTopic1: false,
            playingTopic2: false,
            playingTopic3: false,
            playingTopic4: false,
            playingTopic5: false,
            playingTopic6: false,
            playingTopic7: false,
            playingTopic8: false,
            playingTopic9: false,

            examPost: [],
            percentExamPost: 0,

            isModaldetailCertificate: false,
            isModalCertificate: false,

            course1: [],
            course2: [],
            course3: [],
            course4: [],
            course5: [],
        };

        this.onDownlode = this.onDownlode.bind(this);
        this.onCreateTopic = this.onCreateTopic.bind(this);
        this.onExamPost = this.onExamPost.bind(this);
        this.onForm = this.onForm.bind(this);
        this.onProgressVedioTopic1 = this.onProgressVedioTopic1.bind(this);
        this.onProgressVedioTopic2 = this.onProgressVedioTopic2.bind(this);
        this.onProgressVedioTopic3 = this.onProgressVedioTopic3.bind(this);
        this.onProgressVedioTopic4 = this.onProgressVedioTopic4.bind(this);
        this.onProgressVedioTopic5 = this.onProgressVedioTopic5.bind(this);
        this.onProgressVedioTopic6 = this.onProgressVedioTopic6.bind(this);
        this.onProgressVedioTopic7 = this.onProgressVedioTopic7.bind(this);
        this.onProgressVedioTopic8 = this.onProgressVedioTopic8.bind(this);
        this.onProgressVedioTopic9 = this.onProgressVedioTopic9.bind(this);
        this.onEndedVedio = this.onEndedVedio.bind(this);
        this.playingVedio = this.playingVedio.bind(this);
        this.updateTimeTopic = this.updateTimeTopic.bind(this);
        this.showCertificate = this.showCertificate.bind(this);
        this.showCertificateOK = this.showCertificateOK.bind(this);
        this.onClicktoCourse = this.onClicktoCourse.bind(this);
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
        var url_exam_post = ip + "/UserExamination/find/" + CourseCode + "/" + ExamCodePost;
        const exam_post = await (await axios.get(url_exam_post, { headers: this.state.header })).data;
        if (!exam_post?.status) {
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
                window.location.replace('/', false);
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
                window.location.replace('/', false);
            });
        } else {
            console.log(topic.data, " topic.data")
            this.setState({
                topicAll: topic.data
            });
        }

        var url_assessment_course = ip + "/UserAssessment/find/" + CourseCode;
        const assessment_course = await (await axios.get(url_assessment_course, { headers: this.state.header })).data;
        if (!assessment_course?.status) {
            swal("Error!", "เกิดข้อผิดพลาดในการเข้าสู่ระบบ \n กรุณาเข้าสู่ระบบใหม่", "error").then((value) => {
                this.setState({
                    token: cookies.remove('token_user', { path: '/' }),
                    user: cookies.remove('email', { path: '/' })
                });
                window.location.replace('/', false);
            });
        } else {
            this.setState({
                form: assessment_course.data?.assessment
            });
        }
    }

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
                    window.location.replace('/', false);
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
                        window.location.replace('/', false);
                    });
                } else {
                    this.setState({
                        course: course.data[0],
                    });
                }
            }
        }

        const save = document.createElement('a');
        save.href = pdf;
        save.target = '_blank';
        save.rel = "noopener noreferrer";
        save.download = "IEC62304.pdf";
        save.click();
    }

    playingVedio(topicCode) {
        var playTopic1 = false;
        var playTopic2 = false;
        var playTopic3 = false;
        var playTopic4 = false;
        var playTopic5 = false;
        var playTopic6 = false;
        var playTopic7 = false;
        var playTopic8 = false;
        var playTopic9 = false;

        if (topicCode === TopicCode1) { playTopic1 = true }
        else if (topicCode === TopicCode2) { playTopic2 = true }
        else if (topicCode === TopicCode3) { playTopic3 = true }
        else if (topicCode === TopicCode4) { playTopic4 = true }
        else if (topicCode === TopicCode5) { playTopic5 = true }
        else if (topicCode === TopicCode6) { playTopic6 = true }
        else if (topicCode === TopicCode7) { playTopic7 = true }
        else if (topicCode === TopicCode8) { playTopic8 = true }
        else if (topicCode === TopicCode9) { playTopic9 = true }

        this.setState({
            playingTopic1: playTopic1,
            playingTopic2: playTopic2,
            playingTopic3: playTopic3,
            playingTopic4: playTopic4,
            playingTopic5: playTopic5,
            playingTopic6: playTopic6,
            playingTopic7: playTopic7,
            playingTopic8: playTopic8,
            playingTopic9: playTopic9
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
                    window.location.replace('/', false);
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
                        window.location.replace('/', false);
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

    onProgressVedioTopic4(state) {
        // state is time in vedio play
        if (this.state.playingTopic4) { timeTopic4 += 1; }
        if (timeTopic4 === 10) {
            this.updateTimeTopic(TopicCode4, timeTopic4);
            timeTopic4 = 0;
        }
    }

    onProgressVedioTopic5(state) {
        // state is time in vedio play
        if (this.state.playingTopic5) { timeTopic5 += 1; }
        if (timeTopic5 === 10) {
            this.updateTimeTopic(TopicCode5, timeTopic5);
            timeTopic5 = 0;
        }
    }

    onProgressVedioTopic6(state) {
        // state is time in vedio play
        if (this.state.playingTopic6) { timeTopic6 += 1; }
        if (timeTopic6 === 10) {
            this.updateTimeTopic(TopicCode6, timeTopic6);
            timeTopic6 = 0;
        }
    }

    onProgressVedioTopic7(state) {
        // state is time in vedio play
        if (this.state.playingTopic7) { timeTopic7 += 1; }
        if (timeTopic7 === 10) {
            this.updateTimeTopic(TopicCode7, timeTopic7);
            timeTopic7 = 0;
        }
    }

    onProgressVedioTopic8(state) {
        // state is time in vedio play
        if (this.state.playingTopic8) { timeTopic8 += 1; }
        if (timeTopic8 === 10) {
            this.updateTimeTopic(TopicCode8, timeTopic8);
            timeTopic8 = 0;
        }
    }

    onProgressVedioTopic9(state) {
        // state is time in vedio play
        if (this.state.playingTopic9) { timeTopic9 += 1; }
        if (timeTopic9 === 10) {
            this.updateTimeTopic(TopicCode9, timeTopic9);
            timeTopic9 = 0;
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
        else if (Topic === TopicCode4) {
            time = timeTopic4;
            timeTopic4 = 0;
            this.setState({ playingTopic4: false })
        }
        else if (Topic === TopicCode5) {
            time = timeTopic5;
            timeTopic5 = 0;
            this.setState({ playingTopic5: false })
        }
        else if (Topic === TopicCode6) {
            time = timeTopic6;
            timeTopic6 = 0;
            this.setState({ playingTopic6: false })
        }
        else if (Topic === TopicCode7) {
            time = timeTopic7;
            timeTopic7 = 0;
            this.setState({ playingTopic7: false })
        }
        else if (Topic === TopicCode8) {
            time = timeTopic8;
            timeTopic8 = 0;
            this.setState({ playingTopic8: false })
        }
        else if (Topic === TopicCode9) {
            time = timeTopic9;
            timeTopic9 = 0;
            this.setState({ playingTopic9: false })
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
                window.location.replace('/', false);
            });
        } else {
            return update_time?.status;
        }
    }

    onExamPost() {
        if (this.state.topicAll.length >= TopicCount) {
            if (this.state.examPost.length !== 3) {
                this.props.history.push("/ExamPostCourse4");
            } else {
                swal("Warning!", "คุณทดสอบครบจำนวน 3 ครั้งแล้ว", "warning").then((value) => {
                });
            }
        } else {
            swal("Warning!", "กรุณาเรียนให้ครบทุกบทเรียน", "warning").then((value) => {
            });
        }
    }

    onForm() {
        if (this.state.form.length === 0) {
            this.props.history.push("/Form/" + CourseCode);
        } else {
            swal("Warning!", "คุณทำแบบประเมินหลักสูตรนี้แล้ว", "warning").then((value) => {
            });
        }
    }

    showCertificate() {
        this.setState({ isModalCertificate: true });
    }
    showCertificateOK() {
        this.setState({ isModalCertificate: false });
    }

    async onClicktoCourse(course) {
        const createTopic = {
            courseCode: course,
            downlodeDoc: "N",
            time: 0,
            recStatus: "A"
        };

        var url_create_course = ip + "/UserCourse/create";
        const create_course = await (await axios.post(url_create_course, createTopic, { headers: this.state.header })).data;

        if (!create_course?.status) {
            swal("Error!", "เกิดข้อผิดพลาดในการเข้าสู่ระบบ \n กรุณาเข้าสู่ระบบใหม่", "error").then((value) => {
                this.setState({
                    token: cookies.remove('token_user', { path: '/' }),
                    user: cookies.remove('user', { path: '/' }),
                    email: cookies.remove('email', { path: '/' })
                });
                window.location.replace('/', false);
            });
        } else {
            if (course === CourseCode1) {
                this.props.history.push("/Course1");
            } else if (course === CourseCode2) {
                this.props.history.push("/Course2");
            } else if (course === CourseCode3) {
                this.props.history.push("/Course3");
            } else if (course === CourseCode4) {
                this.props.history.push("/Course4");
            } else if (course === CourseCode5) {
                this.props.history.push("/Course5");
            }

        }
    }

    render() {
        return (
            <Container fluid id="bg-course">
                <Row>
                    <Col xs={24} md={24} xl={24}>
                        <Image src={banner} fluid></Image>
                    </Col>
                </Row>
                {/* <Row id="row-headercourse">
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <NavLink to="/HomeUser"><HomeOutlined /><span>Home</span></NavLink>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <SnippetsOutlined /><span>หลักสูตร IEC 62304 มาตรฐาน Life Cycle ของการพัฒนาซอฟต์แวร์สำหรับอุปกรณ์การแพทย์และ ซอฟต์แวร์ด้านการแพทย์</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Row> */}
                <Row id="row-headercourse">
                    <Col xs={24} md={12} xl={12}>
                        <Image src={imgcourse} fluid></Image>
                    </Col>
                    <Col xs={24} md={12} xl={12}>
                        {/* <Row id="font-header">รายละเอียด</Row>
                        <Row id="font-detail">หลักสูตร IEC 62304 มาตรฐาน Life Cycle ของการพัฒนาซอฟต์แวร์สำหรับอุปกรณ์การแพทย์และซอฟต์แวร์ด้านการแพทย์</Row> */}
                        <Row id="font-header">วัตถุประสงค์</Row>
                        <Row id="font-detail2">1. เพื่อให้เข้าใจมาตรฐานที่เกี่ยวข้องกับซอฟต์แวร์เครื่องมือแพทย์ (ข้อกำหนดของมาตรฐาน การเชื่อมโยงระหว่างมาตรฐาน) รวมทั้งเพื่อให้เข้าใจคำนิยามต่างๆ และภาพรวมกระบวนการพัฒนาซอฟต์แวร์เครื่องมือแพทย์แบบ V-Model</Row>
                        <Row id="font-detail2">2. เพื่อให้เข้าใจและประยุกต์การพัฒนาซอฟต์แวร์เครื่องมือแพทย์ตามหลักการวิศวกรรมซอฟต์แวร์ (Software Engineering) ซึ่งมีหลายองค์ประกอบที่ทำให้ ซอฟต์แวร์มีคุณภาพ ส่งมอบทันเวลาและลดค่าใช้จ่าย ให้สอดคล้องตาม มาตรฐาน IEC62304: 2006 +AMD1:2015</Row>
                        <Row id="font-detail2">3. เพื่อให้เห็นภาพและเข้าใจการประยุกต์การพัฒนาซอฟต์แวร์เครื่องมือแพทย์ตามหลักการวิศวกรรมซอฟต์แวร์ให้สอดคล้องตาม มาตรฐาน IEC62304: 2006 +AMD1:2015 โดยการยกตัวอย่างกรณีศึกษา</Row>
                        <Row id="font-detail2">4. เพื่อให้ทราบการประยุกต์ให้หน่วยงาน SME ที่พัฒนาซอฟต์แวร์ตามมาตรฐาน ISO/IEC 29110 ยกระดับให้เป็นมาตรฐาน ISO/IEC 62304 สำหรับการพัฒนาซอฟต์แวร์เครื่องมือแพทย์</Row>
                    </Col>
                </Row>

                <Row id="row-headercourse">
                    <Col xs={24} md={12} xl={12}>
                        <Row>
                            <Col xs={7} md={7} xl={7}><Image src={TeacherCourse4} id="teacher-img" fluid></Image></Col>
                            <Col xs={17} md={17} xl={17}>
                                <Row id="font-header">ผู้สอน</Row>
                                <Row id="font-detail">ดร. พนิตา  เมนะเนตร</Row>
                                <Row id="font-header">หน่วยงานหลัก</Row>
                                <Row id="font-detail">ศูนย์ทดสอบผลิตภัณฑ์ไฟฟ้าและอิเล็กทรอนิกส์ (PTEC) สำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ (สวทช.) กระทรวงอุดมศึกษาวิทยาศาสตร์ วิจัยและนวัตรกรรม</Row>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={24} md={12} xl={12}>
                        <Row>
                            <Col xs={24} md={24} xl={24} id="font-header1">ความสำเร็จในการทำแบบทดสอบ</Col>
                            <Col xs={24} md={12} xl={12}>
                                {
                                    (this.state.percentExamPost >= 80) ?
                                        <>
                                            <Row id="btn-certificate"><Button onClick={() => this.showCertificate()}>ข้อมูลการรับใบ Certificate</Button></Row>
                                        </>
                                        :
                                        <>
                                            <Row id="btn-certificate"><Button disabled={true}>ข้อมูลการรับใบ Certificate</Button></Row>
                                        </>
                                }
                            </Col>
                            <Col xs={24} md={12} xl={12} id="progress-course">
                                <Progress type="circle" percent={this.state.percentExamPost} strokeColor={(this.state.percentExamPost >= 80) ? "#006633" : "#CC0000"} strokeWidth={13} width={130} />
                            </Col>
                            {/* {
                                (this.state.percentExamPost >= 80) ?
                                    <>
                                        <Col xs={0} md={0} xl={12}></Col>
                                        <Col xs={24} md={24} xl={12} id="progress-course1">
                                            <Row id="font-detail1">คุณผ่านการทดสอบ</Row>
                                        </Col>
                                    </>
                                    :
                                    <>
                                        <Col xs={0} md={0} xl={12}></Col>
                                        <Col xs={24} md={24} xl={12} id="progress-course1">
                                            <Row id="font-detail1">คุณไม่ผ่านการทดสอบ</Row>
                                        </Col>
                                        <Col xs={0} md={0} xl={12}></Col>
                                        <Col xs={24} md={24} xl={12} id="progress-course1">
                                            <Row id="font-detail1">คุณสามารถทดสอบได้อีก {3 - this.state.examPost.length} ครั้ง</Row>
                                        </Col>
                                    </>
                            } */}
                            {
                                (this.state.examPost.length < 3) ?
                                    <>
                                        <Col xs={0} md={0} xl={12}></Col>
                                        <Col xs={24} md={24} xl={12} id="progress-course1">
                                            <Row id="font-detail1">คุณสามารถทดสอบได้อีก {3 - this.state.examPost.length} ครั้ง</Row>
                                        </Col>
                                    </>
                                    :
                                    <>
                                        <Col xs={0} md={0} xl={12}></Col>
                                        <Col xs={24} md={24} xl={12} id="progress-course1">
                                            <Row id="font-detail1">คุณทดสอบครบจำนวน 3 ครั้งแล้ว</Row>
                                        </Col>
                                    </>
                            }
                        </Row>
                    </Col>
                </Row>

                <Row id="row-headercourse">
                    <Col xs={24} md={24} xl={24} id="course-header">เนื้อหาของหลักสูตร</Col>
                    <Col xs={24} md={24} xl={24} id="all-collapse">
                        <Collapse
                            expandIcon={({ isActive }) => <RightCircleTwoTone rotate={isActive ? 90 : 0} style={{ fontSize: '150%', display: 'flex', alignItems: "center" }} twoToneColor="#32A0CE" />}
                            defaultActiveKey={['1', '2', '3', '4']}
                            ghost
                        >
                            <Panel header="เอกสารประกอบการเรียน" key="1">
                                <Row id="row-iconcheck">

                                    <Col xs={20} md={22} xl={22} id="sub-header" style={{ cursor: "pointer" }} onClick={this.onDownlode}> - ดาวน์โหลดเอกสาร </Col>

                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.course?.downlodeDoc === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                            </Panel>


                            <Panel header="บทเรียน" key="2">
                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 1. ภาพรวมมาตรฐานของซอฟต์แวร์เครื่องมือแพทย์ IEC60601 Cl.14 and IEC62304 </Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode1)[0]?.recStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={24} md={12} xl={12} id="video-course1">
                                        {/* <Image src={v1} fluid style={{ cursor: "pointer" }} onClick={() => { this.onCreateTopic(TopicCode1) }}></Image> */}
                                        <ReactPlayer
                                            url={Topic1}
                                            className='react-player'
                                            width='100%'
                                            height='100%'
                                            controls={true}
                                            playsinline={true}
                                            playIcon={true}
                                            pip={false}
                                            config={{
                                                file: {
                                                    attributes: {
                                                        controlsList: 'nodownload'
                                                    }
                                                }
                                            }}
                                            playing={this.state.playingTopic1}
                                            onProgress={this.onProgressVedioTopic1}
                                            onEnded={() => { this.onEndedVedio(TopicCode1) }}
                                            onPlay={() => { this.onCreateTopic(TopicCode1) }}
                                            fluid />
                                    </Col>
                                    <Col xs={24} md={10} xl={10}>
                                        <Row id="unit-header">รายละเอียด</Row>
                                        <Row id="unit-detail">ในการพัฒนาซอฟต์แวร์เครื่องมือแพทย์จะมีมาตรฐานต่างๆ ที่เกี่ยวข้อง ในบทเรียนนี้มีวัตถุประสงค์ เพื่อให้เข้าใจมาตรฐานที่เกี่ยวข้องกับซอฟต์แวร์เครื่องมือแพทย์ (ข้อกำหนดของมาตรฐาน การเชื่อมโยงระหว่างมาตรฐาน) รวมทั้งเพื่อให้เข้าใจคำนิยามต่างๆ และภาพรวมกระบวนการพัฒนาซอฟต์แวร์เครื่องมือแพทย์แบบ V-Model  </Row>
                                    </Col>
                                </Row>

                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 2. Software Engineering Overview – Part 1
                                    Software development Process (กระบวนการพัฒนาซอฟต์แวร์)
                                    Software Project Management (การจัดการโครงการพัฒนาซอฟต์แวร์)
                                    </Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode2)[0]?.recStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={24} md={12} xl={12} id="video-course1">
                                        {/* <Image src={v2} fluid style={{ cursor: "pointer" }} onClick={() => { this.onCreateTopic(TopicCode2) }}></Image> */}
                                        <ReactPlayer
                                            url={Topic2}
                                            className='react-player'
                                            width='100%'
                                            height='100%'
                                            controls={true}
                                            playsinline={true}
                                            playIcon={true}
                                            pip={false}
                                            config={{
                                                file: {
                                                    attributes: {
                                                        controlsList: 'nodownload'
                                                    }
                                                }
                                            }}
                                            playing={this.state.playingTopic2}
                                            onProgress={this.onProgressVedioTopic2}
                                            onEnded={() => { this.onEndedVedio(TopicCode2) }}
                                            onPlay={() => { this.onCreateTopic(TopicCode2) }}
                                            fluid />
                                    </Col>
                                    <Col xs={24} md={10} xl={10}>
                                        <Row id="unit-header">รายละเอียด</Row>
                                        <Row id="unit-detail">ในการพัฒนาซอฟต์แวร์เครื่องมือแพทย์จะใช้หลักการวิศวกรรมซอฟต์แวร์ (Software Engineering) ซึ่งมีหลายองค์ประกอบที่ทำให้ ซอฟต์แวร์มีคุณภาพ ส่งมอบทันเวลาและลดค่าใช้จ่าย ซึ่งหลักการวิศวกรรมซอฟต์แวร์ เริ่มจาก Software development Process  ในบทเรียนนี้ มีวัตถุประสงค์ เพื่อเข้าใจและทราบการประยุกต์กระบวนc]tจัดการโครงการการพัฒนาซอฟต์แวร์เครื่องมือแพทย์ </Row>
                                    </Col>
                                </Row>

                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 3. Software Engineering Overview – Part 1 Software Requirement Management (การจัดการโครงการพัฒนาซอฟต์แวร์)</Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode3)[0]?.recStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={24} md={12} xl={12} id="video-course1">
                                        <ReactPlayer
                                            url={Topic3}
                                            className='react-player'
                                            width='100%'
                                            height='100%'
                                            controls={true}
                                            playsinline={true}
                                            playIcon={true}
                                            pip={false}
                                            config={{
                                                file: {
                                                    attributes: {
                                                        controlsList: 'nodownload'
                                                    }
                                                }
                                            }}
                                            playing={this.state.playingTopic3}
                                            onProgress={this.onProgressVedioTopic3}
                                            onEnded={() => { this.onEndedVedio(TopicCode3) }}
                                            onPlay={() => { this.onCreateTopic(TopicCode3) }}
                                            fluid />
                                    </Col>
                                    <Col xs={24} md={10} xl={10}>
                                        <Row id="unit-header">รายละเอียด</Row>
                                        <Row id="unit-detail">ในการพัฒนาซอฟต์แวร์เครื่องมือแพทย์จะใช้หลักการวิศวกรรมซอฟต์แวร์ (Software Engineering) ซึ่งมีหลายองค์ประกอบที่ทำให้ ซอฟต์แวร์มีคุณภาพ ส่งมอบทันเวลาและลดค่าใช้จ่าย ซึ่งหลักการวิศวกรรมซอฟต์แวร์ ส่วน Software requirement Management  ในบทเรียนนี้ มีวัตถุประสงค์เพื่อเข้าใจและทราบการประยุกต์กระบวนการจัดการความต้องการระบบ พร้อมยกตัวอย่าง Case study : A generic insulin infusion pump ของ Zhang Y, Jones PL, Jetley R. เพื่อแสดงให้เห็นการประยุกต์ใช้วิศวกรรมซอฟต์แวร์ในการพัฒนาซอฟต์แวร์เครื่องมือแพทย์ และแสดงตัวอย่างความสอดคล้องบางข้อกำหนดใน IEC62304</Row>
                                    </Col>
                                </Row>

                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 4. Software Engineering Overview – Part 1 Software Analysis and design (การวิเคราะห์และออกแบบซอฟต์แวร์)</Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode4)[0]?.recStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={24} md={12} xl={12} id="video-course1">
                                        <ReactPlayer
                                            url={Topic4}
                                            className='react-player'
                                            width='100%'
                                            height='100%'
                                            controls={true}
                                            playsinline={true}
                                            playIcon={true}
                                            pip={false}
                                            config={{
                                                file: {
                                                    attributes: {
                                                        controlsList: 'nodownload'
                                                    }
                                                }
                                            }}
                                            playing={this.state.playingTopic4}
                                            onProgress={this.onProgressVedioTopic4}
                                            onEnded={() => { this.onEndedVedio(TopicCode4) }}
                                            onPlay={() => { this.onCreateTopic(TopicCode4) }}
                                            fluid />
                                    </Col>
                                    <Col xs={24} md={10} xl={10}>
                                        <Row id="unit-header">รายละเอียด</Row>
                                        <Row id="unit-detail">ในการพัฒนาซอฟต์แวร์เครื่องมือแพทย์จะใช้หลักการวิศวกรรมซอฟต์แวร์ (Software Engineering) ซึ่งมีหลายองค์ประกอบที่ทำให้ ซอฟต์แวร์มีคุณภาพ ส่งมอบทันเวลาและลดค่าใช้จ่าย ซึ่งหลักการวิศวกรรมซอฟต์แวร์ ส่วน Software requirement Management  ในบทเรียนนี้ มีวัตถุประสงค์เพื่อเข้าใจและทราบการประยุกต์กระบวนการวิเคราะห์และออกแบบซอฟต์แวร์ และ ทราบลักษณะการออกแบบสถาปัตยกรรม รวมทั้ง จัดทำการประเมิน Safety Classification ได้ พร้อมยกตัวอย่าง Case study : A generic insulin infusion pump ของ Zhang Y, Jones PL, Jetley R. เพื่อแสดงให้เห็นการประยุกต์ใช้วิศวกรรมซอฟต์แวร์ในการพัฒนาซอฟต์แวร์เครื่องมือแพทย์ และแสดงตัวอย่างความสอดคล้องบางข้อกำหนดใน IEC62304</Row>
                                    </Col>
                                </Row>

                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 5. Software Engineering Overview – Part 2 Software Quality Management (การจัดการคุณภาพซอฟต์แวร์)</Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode5)[0]?.recStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={24} md={12} xl={12} id="video-course1">
                                        <ReactPlayer
                                            url={Topic5}
                                            className='react-player'
                                            width='100%'
                                            height='100%'
                                            controls={true}
                                            playsinline={true}
                                            playIcon={true}
                                            pip={false}
                                            config={{
                                                file: {
                                                    attributes: {
                                                        controlsList: 'nodownload'
                                                    }
                                                }
                                            }}
                                            playing={this.state.playingTopic5}
                                            onProgress={this.onProgressVedioTopic5}
                                            onEnded={() => { this.onEndedVedio(TopicCode5) }}
                                            onPlay={() => { this.onCreateTopic(TopicCode5) }}
                                            fluid />
                                    </Col>
                                    <Col xs={24} md={10} xl={10}>
                                        <Row id="unit-header">รายละเอียด</Row>
                                        <Row id="unit-detail">ในการพัฒนาซอฟต์แวร์เครื่องมือแพทย์จะใช้หลักการวิศวกรรมซอฟต์แวร์ (Software Engineering) ซึ่งมีหลายองค์ประกอบที่ทำให้ ซอฟต์แวร์มีคุณภาพ ส่งมอบทันเวลาและลดค่าใช้จ่าย ซึ่งหลักการวิศวกรรมซอฟต์แวร์ ส่วน Software Quality Management ในบทเรียนนี้ มีวัตถุประสงค์เพื่อเข้าใจและทราบการประยุกต์การจัดการคุณภาพซอฟต์แวร์ ได้แก่ verification and validation และ review and testing</Row>
                                    </Col>
                                </Row>

                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 6. Software Engineering Overview – Part 2 Software Configuration Management </Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode6)[0]?.recStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={24} md={12} xl={12} id="video-course1">
                                        <ReactPlayer
                                            url={Topic6}
                                            className='react-player'
                                            width='100%'
                                            height='100%'
                                            controls={true}
                                            playsinline={true}
                                            playIcon={true}
                                            pip={false}
                                            config={{
                                                file: {
                                                    attributes: {
                                                        controlsList: 'nodownload'
                                                    }
                                                }
                                            }}
                                            playing={this.state.playingTopic6}
                                            onProgress={this.onProgressVedioTopic6}
                                            onEnded={() => { this.onEndedVedio(TopicCode6) }}
                                            onPlay={() => { this.onCreateTopic(TopicCode6) }}
                                            fluid />
                                    </Col>
                                    <Col xs={24} md={10} xl={10}>
                                        <Row id="unit-header">รายละเอียด</Row>
                                        <Row id="unit-detail">ในการพัฒนาซอฟต์แวร์เครื่องมือแพทย์จะใช้หลักการวิศวกรรมซอฟต์แวร์ (Software Engineering) ซึ่งมีหลายองค์ประกอบที่ทำให้ ซอฟต์แวร์มีคุณภาพ ส่งมอบทันเวลาและลดค่าใช้จ่าย ซึ่งหลักการวิศวกรรมซอฟต์แวร์ ส่วน Software Configuration Management  ในบทเรียนนี้ มีวัตถุประสงค์เพื่อเข้าใจและทราบการประยุกต์กระบวนการ Configuration และ Change</Row>
                                    </Col>
                                </Row>

                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 7. Software Engineering Overview – Part 2 Software Risk Management </Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode7)[0]?.recStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={24} md={12} xl={12} id="video-course1">
                                        <ReactPlayer
                                            url={Topic7}
                                            className='react-player'
                                            width='100%'
                                            height='100%'
                                            controls={true}
                                            playsinline={true}
                                            playIcon={true}
                                            pip={false}
                                            config={{
                                                file: {
                                                    attributes: {
                                                        controlsList: 'nodownload'
                                                    }
                                                }
                                            }}
                                            playing={this.state.playingTopic7}
                                            onProgress={this.onProgressVedioTopic7}
                                            onEnded={() => { this.onEndedVedio(TopicCode7) }}
                                            onPlay={() => { this.onCreateTopic(TopicCode7) }}
                                            fluid />
                                    </Col>
                                    <Col xs={24} md={10} xl={10}>
                                        <Row id="unit-header">รายละเอียด</Row>
                                        <Row id="unit-detail">ในการพัฒนาซอฟต์แวร์เครื่องมือแพทย์จะใช้หลักการวิศวกรรมซอฟต์แวร์ (Software Engineering) ซึ่งมีหลายองค์ประกอบที่ทำให้ ซอฟต์แวร์มีคุณภาพ ส่งมอบทันเวลาและลดค่าใช้จ่าย ซึ่งหลักการวิศวกรรมซอฟต์แวร์ ส่วน Software Risk Management  ในบทเรียนนี้ มีวัตถุประสงค์เพื่อเข้าใจและทราบการประยุกต์กระบวนการประเมินความเสี่ยง ตาม ISO14971 สำหรับซอฟต์แวร์เครื่องมือแพทย์ พร้อมยกตัวอย่าง Case study : A generic insulin infusion pump ของ Zhang Y, Jones PL, Jetley R. เพื่อแสดงให้เห็นการประยุกต์ใช้วิศวกรรมซอฟต์แวร์ในการพัฒนาซอฟต์แวร์เครื่องมือแพทย์ และแสดงตัวอย่างความสอดคล้องบางข้อกำหนดใน IEC62304</Row>
                                    </Col>
                                </Row>

                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 8. Software Engineering Overview – Part 2 Software Maintenance & Re-Engineering Supporting Tools for Software Engineering</Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode8)[0]?.recStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={24} md={12} xl={12} id="video-course1">
                                        <ReactPlayer
                                            url={Topic8}
                                            className='react-player'
                                            width='100%'
                                            height='100%'
                                            controls={true}
                                            playsinline={true}
                                            playIcon={true}
                                            pip={false}
                                            config={{
                                                file: {
                                                    attributes: {
                                                        controlsList: 'nodownload'
                                                    }
                                                }
                                            }}
                                            playing={this.state.playingTopic8}
                                            onProgress={this.onProgressVedioTopic8}
                                            onEnded={() => { this.onEndedVedio(TopicCode8) }}
                                            onPlay={() => { this.onCreateTopic(TopicCode8) }}
                                            fluid />
                                    </Col>
                                    <Col xs={24} md={10} xl={10}>
                                        <Row id="unit-header">รายละเอียด</Row>
                                        <Row id="unit-detail">ในการพัฒนาซอฟต์แวร์เครื่องมือแพทย์จะใช้หลักการวิศวกรรมซอฟต์แวร์ (Software Engineering) ซึ่งมีหลายองค์ประกอบที่ทำให้ ซอฟต์แวร์มีคุณภาพ ส่งมอบทันเวลาและลดค่าใช้จ่าย ซึ่งหลักการวิศวกรรมซอฟต์แวร์ ส่วน Software Maintenance & Re-Engineering ในบทเรียนนี้ มีวัตถุประสงค์เพื่อเข้าใจและทราบการประยุกต์กระบวนการบำรุงรักษาซอฟต์แวร์และกระบวนการจัดการปัญหา และในส่วน Supporting Tools for Software Engineering ในบทเรียนนี้ มีวัตถุประสงค์เพื่อทราบเครื่องมือสนับสนุนการพัฒนาซอฟต์แวร์เครื่องมือแพทย์</Row>
                                    </Col>
                                </Row>

                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 9. Applying ISO/IEC 29110 to ISO/IEC 62304 for Medical device software SME</Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode9)[0]?.recStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={24} md={12} xl={12} id="video-course1">
                                        <ReactPlayer
                                            url={Topic9}
                                            className='react-player'
                                            width='100%'
                                            height='100%'
                                            controls={true}
                                            playsinline={true}
                                            playIcon={true}
                                            pip={false}
                                            config={{
                                                file: {
                                                    attributes: {
                                                        controlsList: 'nodownload'
                                                    }
                                                }
                                            }}
                                            playing={this.state.playingTopic9}
                                            onProgress={this.onProgressVedioTopic9}
                                            onEnded={() => { this.onEndedVedio(TopicCode9) }}
                                            onPlay={() => { this.onCreateTopic(TopicCode9) }}
                                            fluid />
                                    </Col>
                                    <Col xs={24} md={10} xl={10}>
                                        <Row id="unit-header">รายละเอียด</Row>
                                        <Row id="unit-detail">อธิบายการประยุกต์ให้หน่วยงาน SME ที่พัฒนาซอฟต์แวร์ตามมาตรฐาน  ISO/IEC 29110 ยกระดับให้เป็นมาตรฐาน ISO/IEC 62304 สำหรับการพัฒนาซอฟต์แวร์เครื่องมือแพทย์ </Row>
                                    </Col>
                                </Row>

                            </Panel>

                            <Panel header="แบบทดสอบท้ายบทเรียน" key="3">
                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header" style={{ cursor: "pointer" }} onClick={() => { this.onExamPost() }}> - ทำแบบทดสอบ </Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.examPost.length > 0) ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                            </Panel>
                            {
                                (this.state.examPost.length > 0) ?
                                    <Panel header="แบบประเมิน" key="4">
                                        <Row>
                                            <Col xs={22} md={22} xl={22} id="sub-header" style={{ cursor: "pointer" }} onClick={() => { this.onForm() }}> - ทำแบบประเมิน </Col>
                                            <Col xs={2} md={2} xl={2} id="icon-chack">
                                                {
                                                    (this.state.form.length > 0) ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
                                                }
                                            </Col>
                                        </Row>
                                    </Panel>
                                    :
                                    <>
                                    </>
                            }

                        </Collapse>
                    </Col>
                </Row>

                <Row id="row-headertocourse">
                    <Col xs={24} md={24} xl={24} id="course-header">หลักสูตรที่เกี่ยวข้อง</Col>
                    <Col xs={24} md={24} xl={24} id="font-header">
                        <Row>
                            <Col xs={1} md={2} xl={2}></Col>
                            <Col xs={10} md={4} xl={4} id="course-menu">
                                <Row id="course1-menu">
                                    <Col xs={24} md={24} xl={24}>
                                        <Image src={unit1} id="img-course" style={{ width: "100%", cursor: "no-drop", filter: "grayscale(1.0)" }} fluid></Image>
                                    </Col>
                                </Row>
                                <Row id="row-btn-coursedetail">
                                    {/* <Button id="btn-coursedetail" onClick={() => { this.onClicktoCourse(CourseCode1) }}>รายละเอียดหลักสูตร</Button> */}
                                    <Button disabled>รายละเอียดหลักสูตร</Button>
                                </Row>
                            </Col>
                            <Col xs={1} md={1} xl={1}></Col>
                            <Col xs={10} md={4} xl={4} id="course-menu">
                                <Row id="course1-menu">
                                    <Col xs={24} md={24} xl={24}>
                                        <Image src={unit2} id="img-course" style={{ width: "100%", cursor: "no-drop", filter: "grayscale(1.0)" }} fluid></Image>
                                    </Col>
                                </Row>
                                <Row id="row-btn-coursedetail">
                                    {/* <Button id="btn-coursedetail" onClick={() => { this.onClicktoCourse(CourseCode2) }}>รายละเอียดหลักสูตร</Button> */}
                                    <Button disabled>รายละเอียดหลักสูตร</Button>
                                </Row>
                            </Col>
                            <Col xs={1} md={0} xl={0}></Col>
                            <Col xs={1} md={0} xl={0}></Col>
                            <Col xs={1} md={1} xl={1}></Col>
                            <Col xs={10} md={4} xl={4} id="course-menu">
                                <Row id="course1-menu">
                                    <Col xs={24} md={24} xl={24}>
                                        <Image src={unit3} id="img-course" style={{ width: "100%", cursor: "no-drop", filter: "grayscale(1.0)" }} fluid></Image>
                                    </Col>
                                </Row>
                                <Row id="row-btn-coursedetail">
                                    {/* <Button id="btn-coursedetail" onClick={() => { this.onClicktoCourse(CourseCode3) }}>รายละเอียดหลักสูตร</Button> */}
                                    <Button disabled>รายละเอียดหลักสูตร</Button>
                                </Row>
                            </Col>
                            <Col xs={1} md={1} xl={1}></Col>
                            <Col xs={10} md={4} xl={4} id="course-menu">
                                <Row id="course1-menu">
                                    <Col xs={24} md={24} xl={24}>
                                        <Image src={unit5} id="img-course" style={{ width: "100%", cursor: "no-drop", filter: "grayscale(1.0)" }} fluid></Image>
                                    </Col>
                                </Row>
                                <Row id="row-btn-coursedetail">
                                    {/* <Button id="btn-coursedetail" onClick={() => { this.onClicktoCourse(CourseCode5) }}>รายละเอียดหลักสูตร</Button> */}
                                    <Button disabled>รายละเอียดหลักสูตร</Button>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Modal
                    title="ข้อมูลการรับใบ Certificate"
                    footer={[
                        <Button key="submit" type="primary" onClick={this.showCertificateOK}>
                            ตกลง
                        </Button>,
                    ]}
                    visible={this.state.isModalCertificate}
                    width={500}>
                    โปรดติดต่อรับใบ Certificate ที่ต้นสังกัดของท่าน
                </Modal>

            </Container>
        );
    }
})