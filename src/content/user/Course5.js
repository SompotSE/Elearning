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
import imgcourse from '../../img/userhome.png';
import TeacherCourse5_1 from '../../img/Teacher/TeacherCourse5_1.webp';
import TeacherCourse5_2 from '../../img/Teacher/TeacherCourse5_2.webp';
import TeacherCourse5_3 from '../../img/Teacher/TeacherCourse5_3.webp';
// import { NavLink } from 'react-router-dom';
import banner from "../../img/Banner/Course5.webp";

import unit1 from '../../img/unit1.webp';
import unit2 from '../../img/unit2.webp';
import course4 from '../../img/course4.png';
import course5 from '../../img/course5.png';

import pdf from "../../pdf/Course5.pdf"

import testV1 from '../../video/test.mp4';

import { config } from '../../config/config';

const { Panel } = Collapse;
const cookies = new Cookies();

const ip = config.ipServer;
const CourseCode = "COURSE1005";

const TopicCount = 9;

const TopicCode1 = "TOP500001";
const TopicCode2 = "TOP500002";
const TopicCode3 = "TOP500003";
const TopicCode4 = "TOP500004";
const TopicCode5 = "TOP500005";
const TopicCode6 = "TOP500006";
const TopicCode7 = "TOP500007";
const TopicCode8 = "TOP500008";
const TopicCode9 = "TOP500009";
const TopicCode10 = "TOP500010";
const TopicCode11 = "TOP500011";
const TopicCode12 = "TOP500012";

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
var timeTopic10 = 0;
var timeTopic11 = 0;
var timeTopic12 = 0;

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
            playingTopic10: false,
            playingTopic11: false,
            playingTopic12: false,

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
        this.onProgressVedioTopic10 = this.onProgressVedioTopic10.bind(this);
        this.onProgressVedioTopic11 = this.onProgressVedioTopic11.bind(this);
        this.onProgressVedioTopic12 = this.onProgressVedioTopic12.bind(this);
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
        save.download = "IEC60601.pdf";
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
        var playTopic10 = false;
        var playTopic11 = false;
        var playTopic12 = false;

        if (topicCode === TopicCode1) { playTopic1 = true }
        else if (topicCode === TopicCode2) { playTopic2 = true }
        else if (topicCode === TopicCode3) { playTopic3 = true }
        else if (topicCode === TopicCode4) { playTopic4 = true }
        else if (topicCode === TopicCode5) { playTopic5 = true }
        else if (topicCode === TopicCode6) { playTopic6 = true }
        else if (topicCode === TopicCode7) { playTopic7 = true }
        else if (topicCode === TopicCode8) { playTopic8 = true }
        else if (topicCode === TopicCode9) { playTopic9 = true }
        else if (topicCode === TopicCode10) { playTopic10 = true }
        else if (topicCode === TopicCode11) { playTopic11 = true }
        else if (topicCode === TopicCode12) { playTopic12 = true }

        this.setState({
            playingTopic1: playTopic1,
            playingTopic2: playTopic2,
            playingTopic3: playTopic3,
            playingTopic4: playTopic4,
            playingTopic5: playTopic5,
            playingTopic6: playTopic6,
            playingTopic7: playTopic7,
            playingTopic8: playTopic8,
            playingTopic9: playTopic9,
            playingTopic10: playTopic10,
            playingTopic11: playTopic11,
            playingTopic12: playTopic12
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

    onProgressVedioTopic10(state) {
        // state is time in vedio play
        if (this.state.playingTopic10) { timeTopic10 += 1; }
        if (timeTopic10 === 10) {
            this.updateTimeTopic(TopicCode10, timeTopic10);
            timeTopic10 = 0;
        }
    }

    onProgressVedioTopic11(state) {
        // state is time in vedio play
        if (this.state.playingTopic11) { timeTopic11 += 1; }
        if (timeTopic11 === 10) {
            this.updateTimeTopic(TopicCode11, timeTopic11);
            timeTopic11 = 0;
        }
    }

    onProgressVedioTopic12(state) {
        // state is time in vedio play
        if (this.state.playingTopic12) { timeTopic12 += 1; }
        if (timeTopic12 === 10) {
            this.updateTimeTopic(TopicCode12, timeTopic12);
            timeTopic12 = 0;
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
        else if (Topic === TopicCode10) {
            time = timeTopic10;
            timeTopic10 = 0;
            this.setState({ playingTopic10: false })
        }
        else if (Topic === TopicCode11) {
            time = timeTopic11;
            timeTopic11 = 0;
            this.setState({ playingTopic11: false })
        }
        else if (Topic === TopicCode12) {
            time = timeTopic12;
            timeTopic12 = 0;
            this.setState({ playingTopic12: false })
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
                this.props.history.push("/ExamPost");
            } else {
                swal("Warning!", "จำนวนครั้งในการทำข้อสอบครบแล้ว", "warning").then((value) => {
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
            if(course === CourseCode1) {
                this.props.history.push("/Course1");
            } else if(course === CourseCode2) {
                this.props.history.push("/Course2");
            } else if(course === CourseCode3) {
                this.props.history.push("/Course3");
            } else if(course === CourseCode4) {
                this.props.history.push("/Course4");
            } else if(course === CourseCode5) {
                this.props.history.push("/Course5");
            }
            
        }
    }

    render() {
        return (
            <Container fluid id="bg-course">
                <Row>
                    <Image src={banner} fluid></Image>
                </Row>
                {/* <Row id="row-headercourse">
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <NavLink to="/HomeUser"><HomeOutlined /><span>Home</span></NavLink>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <SnippetsOutlined /><span>หลักสูตร IEC 60601  Series มาตรฐานความปลอดภัยและความมีประสิทธิภาพของเครื่องมือแพทย์	ที่เกี่ยวข้องกับอุปกรณ์ไฟฟ้าอิเล็กทรอนิกส์</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Row> */}
                <Row id="row-headercourse">
                    <Col xs={24} md={12} xl={12}>
                        <Image src={imgcourse} fluid></Image>
                    </Col>
                    <Col xs={24} md={12} xl={12}>
                        <Row id="font-header">รายละเอียด</Row>
                        <Row id="font-detail">หลักสูตร IEC 60601  Series มาตรฐานความปลอดภัยและความมีประสิทธิภาพของเครื่องมือแพทย์	ที่เกี่ยวข้องกับอุปกรณ์ไฟฟ้าอิเล็กทรอนิกส์</Row>
                        <Row id="font-header">วัตถุประสงค์</Row>
                        <Row id="font-detail2">1. เพื่อยกระดับฐานความรู้ของบุคลากรของภาคอุตสาหกรรม และผู้สนใจ ให้มีความรู้ ความเข้าใจถึงแนวโน้มการบังคับใช้มาตรฐานที่เกี่ยวข้องกับผลิตภัณฑ์เครื่องมือแพทย์ประเภทไฟฟ้าอิเล็กทรอนิกส์ และทราบถึงความสำคัญของมาตรฐาน การทดสอบ การทดสอบตามมาตรฐาน IEC60601 ในด้านต่างๆ อาทิ เช่น ด้านความปอดภัย ด้านความเข้ากันได้ทางแม่เหล็กไฟฟ้า EMC และด้านมาตรฐานเฉพาะของเครื่องมือแพทย์ฯ </Row>
                        <Row id="font-detail2">2. เพื่อนำความรู้ที่ได้ไปดำเนินการวางแผนการพัฒนา ปรับปรุงประสิทธิภาพผลิตภัณฑ์เครื่องมือแพทย์เพื่อลดความเสี่ยงจากการสูญเสียเวลา ค่าใช้จ่าย และเพิ่มโอกาสทางธุรกิจ แก่การผลิตเครื่องมือแพทย์</Row>
                        <Row id="font-detail2">3. เพื่อทราบกระบวนการในการขอเครื่องหมายรับรองทางการค้าผลิตภัณฑ์เครื่องมือแพทย์ ทั้งในตลาดสากล อาทิเช่น CE  เป็นต้น </Row>
                        <Row id="font-detail2">4. เพื่อให้บุคลากรของภาคอุตสาหกรรม เข้าใจถึงหลักการในการทดสอบแต่ละส่วน และนำความรู้ที่ได้ไปใช้ในการควบคุมคุณภาพของกระบวนการผลิตเครื่องมือแพทย์ในโรงงานอุตสาหกรรม</Row>
                        <Row id="font-detail2">5. เพื่อให้บุคลากรของภาคอุตสาหกรรม สามารถนำความรู้ที่ได้ไปประยุกต์ ใช้ในการวิจัยพัฒนาผลิตภัณฑ์ของหน่วยงาน ตั้งแต่กระบวนการวางแผนการออกแบบผลิตภัณฑ์ การแก้ไขปัญหาผลิตภัณฑ์การขอเครื่องหมายรับรองฯ</Row>
                    </Col>
                </Row>

                <Row id="row-headercourse">
                    <Col xs={24} md={12} xl={12}>
                        <Row>
                            <Col xs={24} md={24} xl={24} id="font-header1">ผู้สอน</Col>
                            <Col xs={24} md={24} xl={24}>
                                <Row id="teacher">
                                    <Col xs={24} md={8} xl={6} id="teacher1">
                                        <Row>
                                            <Col xs={24} md={24} xl={24} id="teacher1"><Image src={TeacherCourse5_1} width="60%" id="teacher-img" fluid></Image></Col>
                                            <Col xs={24} md={24} xl={24} id="teacher3">ดร.ไกรสร อัญชลีวรพันธุ์</Col>
                                        </Row>
                                    </Col>
                                    <Col xs={24} md={8} xl={6} id="teacher1">
                                        <Row>
                                            <Col xs={24} md={24} xl={24} id="teacher1"><Image src={TeacherCourse5_2} width="60%" id="teacher-img" fluid></Image></Col>
                                            <Col xs={24} md={24} xl={24} id="teacher3">อาจารย์เรืองฤทธิ์ หนิแหนะ</Col>
                                        </Row>
                                    </Col>
                                    <Col xs={24} md={8} xl={6} id="teacher1">
                                        <Row>
                                            <Col xs={24} md={24} xl={24} id="teacher1"><Image src={TeacherCourse5_3} width="60%" id="teacher-img" fluid></Image></Col>
                                            <Col xs={24} md={24} xl={24} id="teacher3">อาจารย์ เอนก มีมูซอ</Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Row id="font-header">หน่วยงานหลัก</Row>
                            <Row id="font-detail">ศูนย์ทดสอบผลิตภัณฑ์ไฟฟ้าและอิเล็กทรอนิกส์ (PTEC) สำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ (สวทช.) กระทรวงอุดมศึกษาวิทยาศาสตร์ วิจัยและนวัตรกรรม</Row>
                        </Row>
                    </Col>

                    <Col xs={24} md={12} xl={12}>
                        <Row>
                            <Col xs={24} md={24} xl={24} id="font-header1">ความสำเร็จในการทำแบบทดสอบ</Col>
                            <Col xs={24} md={24} xl={12} id="certi-note">
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
                            <Col xs={24} md={24} xl={12} id="progress-course2">
                                <Progress type="circle" percent={this.state.percentExamPost} strokeColor={(this.state.percentExamPost >= 80) ? "#006633" : "#CC0000"} strokeWidth={13} width={130} />
                            </Col>
                            {
                                (this.state.percentExamPost >= 80) ?
                                    <>
                                        <Col xs={0} md={0} xl={12}></Col>
                                        <Col xs={24} md={24} xl={12} id="progress-course3">
                                            <Row id="font-detail1">คุณผ่านการทำสอบ</Row>
                                        </Col>
                                    </>
                                    :
                                    <>
                                        <Col xs={0} md={0} xl={12}></Col>
                                        <Col xs={24} md={24} xl={12} id="progress-course3">
                                            <Row id="font-detail1">คุณไม่ผ่านการทำสอบ</Row>
                                        </Col>
                                        <Col xs={0} md={0} xl={12}></Col>
                                        <Col xs={24} md={24} xl={12} id="progress-course3">
                                            <Row id="font-detail1">เหลือจำนวนการทำแบบทดสอบ {3 - this.state.examPost.length} ครั้ง</Row>
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
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 1. มาตรฐานเครื่องมือแพทย์ประเภทไฟฟ้าและอิเล็กทรอนิกส์ IEC60601 </Col>
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
                                            url={testV1}
                                            className='react-player'
                                            width='100%'
                                            height='100%'
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
                                    <Col xs={24} md={10} xl={10}>
                                        <Row id="unit-header">รายละเอียด</Row>
                                        <Row id="unit-detail">แนะนำเกี่ยวกับโครงสร้างมาตรฐานเครื่องมือแพทย์ประเภทไฟฟ้าและอิเล็กทรอนิกส์ IEC60601 และมาตรฐานกลุ่ม collateral standards และ particular standards</Row>
                                    </Col>
                                </Row>

                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 2. มาตรฐานด้านความเข้ากันได้ทางแม่เหล็กไฟฟ้าสำหรับเครื่องมือแพทย์</Col>
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
                                            url={testV1}
                                            className='react-player'
                                            width='100%'
                                            height='100%'
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
                                    <Col xs={24} md={10} xl={10}>
                                        <Row id="unit-header">รายละเอียด</Row>
                                        <Row id="unit-detail">พื้นฐานการแพร่คลื่นแม่เหล็กไฟฟ้า แหล่งกำเนิดสัญญาณรบกวนแม่เหล็กไฟฟ้า มาตรฐานการทดสอบการแพร่คลื่นแม่เหล็กไฟฟ้าสำหรับเครื่องมือแพทย์ตามมาตรฐาน IEC60601-1-2 หัวข้อการทดสอบย่อยๆ เช่น การแพร่คลื่นแม่เหล็กไฟฟ้าทางสายตัวนำ ทางอากาศ และการทดสอบความอ่อนไหวต่อการถูกรบกวนแม่เหล็กไฟฟ้า มาตรฐานของเครื่องมือแพทย์เฉพาะ(particular standards)  อธิบายวิธีการทดสอบตามมาตรฐาน IEC60601-2-X โดยการใช้โครงสร้างมาตรฐานหลัก</Row>
                                    </Col>
                                </Row>

                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 3. การขอการรับรองเครื่องมือแพทย์ในสากล</Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode3)[0]?.recStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={24} md={12} xl={12} id="video-course1">
                                        <ReactPlayer
                                            url={testV1}
                                            className='react-player'
                                            width='100%'
                                            height='100%'
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
                                    <Col xs={24} md={10} xl={10}>
                                        <Row id="unit-header">รายละเอียด</Row>
                                        <Row id="unit-detail">ตัวอย่างของการขอการรับรองเครื่องมือแพทย์: เครื่องช่วยฟังเพื่อขอเครื่องหมาย CE </Row>
                                    </Col>
                                </Row>

                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 4. โครงสร้างของมาตรฐาน IEC 60601-1</Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode4)[0]?.recStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={24} md={12} xl={12} id="video-course1">
                                        <ReactPlayer
                                            url={testV1}
                                            className='react-player'
                                            width='100%'
                                            height='100%'
                                            controls={true}
                                            playsinline={true}
                                            playIcon={true}
                                            pip={false}
                                            playing={this.state.playingTopic4}
                                            onProgress={this.onProgressVedioTopic4}
                                            onEnded={() => { this.onEndedVedio(TopicCode4) }}
                                            onPlay={() => { this.onCreateTopic(TopicCode4) }}
                                            fluid />
                                    </Col>
                                    <Col xs={24} md={10} xl={10}>
                                        <Row id="unit-header">รายละเอียด</Row>
                                        <Row id="unit-detail">องค์กรที่กำหนดมาตรฐาน โครงสร้างและชนิดของมาตรฐานเครื่องมือแพทย์ทางไฟฟ้า การแบ่งชนิดของเครื่องมือแพทย์ทางไฟฟ้าs</Row>
                                    </Col>
                                </Row>

                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 5. การชี้บ่งบริภัณฑ์ไฟฟ้าทางการแพทย์  การทำเครื่องหมาย และเอกสาร</Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode5)[0]?.recStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={24} md={12} xl={12} id="video-course1">
                                        <ReactPlayer
                                            url={testV1}
                                            className='react-player'
                                            width='100%'
                                            height='100%'
                                            controls={true}
                                            playsinline={true}
                                            playIcon={true}
                                            pip={false}
                                            playing={this.state.playingTopic5}
                                            onProgress={this.onProgressVedioTopic5}
                                            onEnded={() => { this.onEndedVedio(TopicCode5) }}
                                            onPlay={() => { this.onCreateTopic(TopicCode5) }}
                                            fluid />
                                    </Col>
                                    <Col xs={24} md={10} xl={10}>
                                        <Row id="unit-header">รายละเอียด</Row>
                                        <Row id="unit-detail">ข้อกำหนดเกี่ยวกับการทำเครื่องหมายสัญลักษณ์บนเครื่องมือแพทย์ทางไฟฟ้า ข้อกำหนดเกี่ยวกับการจัดทำคู่มือการใช้งานเครื่องมือแพทย์ทางไฟฟ้า</Row>
                                    </Col>
                                </Row>

                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 6. การป้องกันอันตรายทางไฟฟ้า จากบริภัณฑ์ไฟฟ้าทางการแพทย์ </Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode6)[0]?.recStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={24} md={12} xl={12} id="video-course1">
                                        <ReactPlayer
                                            url={testV1}
                                            className='react-player'
                                            width='100%'
                                            height='100%'
                                            controls={true}
                                            playsinline={true}
                                            playIcon={true}
                                            pip={false}
                                            playing={this.state.playingTopic6}
                                            onProgress={this.onProgressVedioTopic6}
                                            onEnded={() => { this.onEndedVedio(TopicCode6) }}
                                            onPlay={() => { this.onCreateTopic(TopicCode6) }}
                                            fluid />
                                    </Col>
                                    <Col xs={24} md={10} xl={10}>
                                        <Row id="unit-header">รายละเอียด</Row>
                                        <Row id="unit-detail">ข้อกำหนดการแยกส่วนของเครื่องมือแพทย์ทางไฟฟ้า Separation of parts การทดสอบความคงทนของฉนวน Dielectric strength test การทดสอบระยะห่างผิวฉนวนและระยะห่างอากาศ Creepage distances and Air clearances การทดสอบกระแสไฟฟ้ารั่ว Leakage currents</Row>
                                    </Col>
                                </Row>

                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 7. การป้องกันอันตรายทางกลของบริภัณฑ์ไฟฟ้าทางการแพทย์ </Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode7)[0]?.recStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={24} md={12} xl={12} id="video-course1">
                                        <ReactPlayer
                                            url={testV1}
                                            className='react-player'
                                            width='100%'
                                            height='100%'
                                            controls={true}
                                            playsinline={true}
                                            playIcon={true}
                                            pip={false}
                                            playing={this.state.playingTopic7}
                                            onProgress={this.onProgressVedioTopic7}
                                            onEnded={() => { this.onEndedVedio(TopicCode7) }}
                                            onPlay={() => { this.onCreateTopic(TopicCode7) }}
                                            fluid />
                                    </Col>
                                    <Col xs={24} md={10} xl={10}>
                                        <Row id="unit-header">รายละเอียด</Row>
                                        <Row id="unit-detail">ข้อกำหนดด้านการป้องกันอันตรายทางกล ข้อกำหนดด้านอันตรายที่เกิดจากเสียงการทำงาน และการสั่น ของเครื่องมือแพทย์ทางไฟฟ้า</Row>
                                    </Col>
                                </Row>

                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 8. การป้องกันอันตรายที่เกิดจากการแผ่รังสีที่ไม่ต้องการและอุณหภูมิที่สูงเกินควร </Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode8)[0]?.recStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={24} md={12} xl={12} id="video-course1">
                                        <ReactPlayer
                                            url={testV1}
                                            className='react-player'
                                            width='100%'
                                            height='100%'
                                            controls={true}
                                            playsinline={true}
                                            playIcon={true}
                                            pip={false}
                                            playing={this.state.playingTopic8}
                                            onProgress={this.onProgressVedioTopic8}
                                            onEnded={() => { this.onEndedVedio(TopicCode8) }}
                                            onPlay={() => { this.onCreateTopic(TopicCode8) }}
                                            fluid />
                                    </Col>
                                    <Col xs={24} md={10} xl={10}>
                                        <Row id="unit-header">รายละเอียด</Row>
                                        <Row id="unit-detail">การป้องกันอันตรายที่เกิดจากการแผ่รังสี X-Radiation Alpha, beta, gamma, neutron and other particle radiation, Microwave radiation, Lasers, Infrared radiation, Ultraviolet radiation (UV) การป้องกันอุณหภูมิที่สูงเกินควรและอันตรายอื่นๆ ของบริภัณฑ์ไฟฟ้าทางการแพทย์</Row>
                                    </Col>
                                </Row>

                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 9. สภาพเสี่ยงอันตรายและภาวะผิดพร่อง และ การสร้างบริภัณฑ์ไฟฟ้าทางการแพทย์</Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode9)[0]?.recStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={24} md={12} xl={12} id="video-course1">
                                        <ReactPlayer
                                            url={testV1}
                                            className='react-player'
                                            width='100%'
                                            height='100%'
                                            controls={true}
                                            playsinline={true}
                                            playIcon={true}
                                            pip={false}
                                            playing={this.state.playingTopic9}
                                            onProgress={this.onProgressVedioTopic9}
                                            onEnded={() => { this.onEndedVedio(TopicCode9) }}
                                            onPlay={() => { this.onCreateTopic(TopicCode9) }}
                                            fluid />
                                    </Col>
                                    <Col xs={24} md={10} xl={10}>
                                        <Row id="unit-header">รายละเอียด</Row>
                                        <Row id="unit-detail">การจำลองภาวะผิดพร่อง fault conditions เพื่อประเมินความเสี่ยงอันตรายของเครื่องมือแพทย์ ข้อกำหนดเกี่ยวกับการออกแบบบริภัณฑ์ไฟฟ้าทางการแพทย์ การเลือกส่วนประกอบ Component และชุดประกอบทั่วไป</Row>
                                    </Col>
                                </Row>

                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 10. ประเภทของมาตรฐาน EMC</Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode10)[0]?.recStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={24} md={12} xl={12} id="video-course1">
                                        <ReactPlayer
                                            url={testV1}
                                            className='react-player'
                                            width='100%'
                                            height='100%'
                                            controls={true}
                                            playsinline={true}
                                            playIcon={true}
                                            pip={false}
                                            playing={this.state.playingTopic10}
                                            onProgress={this.onProgressVedioTopic10}
                                            onEnded={() => { this.onEndedVedio(TopicCode10) }}
                                            onPlay={() => { this.onCreateTopic(TopicCode10) }}
                                            fluid />
                                    </Col>
                                    <Col xs={24} md={10} xl={10}>
                                        <Row id="unit-header">รายละเอียด</Row>
                                        <Row id="unit-detail">อธิบายถึงการจัดกลุ่มและแบ่งมาตรฐานการทดสอบทาง EMC มี 4 กลุ่ม ได้แก่ Product Standard, Product Family Standard, Generic Standard และ Basic Standard เพื่อให้ผู้เรียนได้เข้าใจและเลือกใช้มาตรฐานได้ถูกต้อง</Row>
                                    </Col>
                                </Row>

                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 11. มาตรฐานการทดสอบ IEC/EN 60601-1-2 </Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode11)[0]?.recStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={24} md={12} xl={12} id="video-course1">
                                        <ReactPlayer
                                            url={testV1}
                                            className='react-player'
                                            width='100%'
                                            height='100%'
                                            controls={true}
                                            playsinline={true}
                                            playIcon={true}
                                            pip={false}
                                            playing={this.state.playingTopic11}
                                            onProgress={this.onProgressVedioTopic11}
                                            onEnded={() => { this.onEndedVedio(TopicCode11) }}
                                            onPlay={() => { this.onCreateTopic(TopicCode11) }}
                                            fluid />
                                    </Col>
                                    <Col xs={24} md={10} xl={10}>
                                        <Row id="unit-header">รายละเอียด</Row>
                                        <Row id="unit-detail">อธิบายถึงการจัดกลุ่มสภาวะแวดล้อมตามการใช้งานเครื่องมือแพทย์ ขีดจำกัดการทดสอบทาง Emission และตารางความแรงของสัญญาณในการทดสอบ Immunity ที่มาตรฐาน IEC/EN 60601-1-2 กำหนด</Row>
                                    </Col>
                                </Row>

                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 12. หัวข้อทดสอบในมาตรฐาน IEC/EN 60601-1-2 </Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode12)[0]?.recStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={24} md={12} xl={12} id="video-course1">
                                        <ReactPlayer
                                            url={testV1}
                                            className='react-player'
                                            width='100%'
                                            height='100%'
                                            controls={true}
                                            playsinline={true}
                                            playIcon={true}
                                            pip={false}
                                            playing={this.state.playingTopic12}
                                            onProgress={this.onProgressVedioTopic12}
                                            onEnded={() => { this.onEndedVedio(TopicCode12) }}
                                            onPlay={() => { this.onCreateTopic(TopicCode12) }}
                                            fluid />
                                    </Col>
                                    <Col xs={24} md={10} xl={10}>
                                        <Row id="unit-header">รายละเอียด</Row>
                                        <Row id="unit-detail">อธิบายรายละเอียดในแต่ละหัวข้อทดสอบ ค่าขีดจำกัด รูปสัญญาณที่อ้างอิงจากมาตรฐานทดสอบ เครื่องมือที่ใช้ในการทดสอบ การจัดวางเครื่องมือและอุปกรณ์ประกอบการทดสอบ การจัดวางเครื่องมือแพทย์ในห้องทดสอบ และการตัดสินผลการทดสอบ</Row>
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
                                    <Image src={unit1} id="img-course" style={{width: "100%", cursor: "pointer"}} onClick={() => { this.onClicktoCourse(CourseCode1) }} fluid></Image>
                                </Row>
                                <Row id="row-btn-coursedetail">
                                    <Button id="btn-coursedetail" onClick={() => { this.onClicktoCourse(CourseCode1) }}>รายละเอียดหลักสูตร</Button>
                                </Row>
                            </Col>
                            <Col xs={1} md={1} xl={1}></Col>
                            <Col xs={10} md={4} xl={4} id="course-menu">
                                <Row id="course1-menu">
                                    <Image src={unit2} id="img-course" style={{width: "100%", cursor: "pointer"}} onClick={() => { this.onClicktoCourse(CourseCode2) }} fluid></Image>
                                </Row>
                                <Row id="row-btn-coursedetail">
                                    <Button id="btn-coursedetail" onClick={() => { this.onClicktoCourse(CourseCode2) }}>รายละเอียดหลักสูตร</Button>
                                </Row>
                            </Col>
                            <Col xs={1} md={0} xl={0}></Col>
                            <Col xs={1} md={0} xl={0}></Col>
                            <Col xs={1} md={1} xl={1}></Col>
                            <Col xs={10} md={4} xl={4} id="course-menu">
                                <Row id="course1-menu">
                                    <Image src={course4} id="img-course" style={{width: "100%", cursor: "pointer"}} onClick={() => { this.onClicktoCourse(CourseCode3) }} fluid></Image>
                                </Row>
                                <Row id="row-btn-coursedetail">
                                    <Button id="btn-coursedetail" onClick={() => { this.onClicktoCourse(CourseCode3) }}>รายละเอียดหลักสูตร</Button>
                                </Row>
                            </Col>
                            <Col xs={1} md={1} xl={1}></Col>
                            <Col xs={10} md={4} xl={4} id="course-menu">
                                <Row id="course1-menu">
                                    <Image src={course5} id="img-course" style={{width: "100%", cursor: "pointer"}} onClick={() => { this.onClicktoCourse(CourseCode4) }} fluid></Image>
                                </Row>
                                <Row id="row-btn-coursedetail">
                                    <Button id="btn-coursedetail" onClick={() => { this.onClicktoCourse(CourseCode4) }}>รายละเอียดหลักสูตร</Button>
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