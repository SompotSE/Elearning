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
import imgcourse from '../../img/incourse2.jpg';
import TeacherCourse2 from '../../img/Teacher/TeacherCourse2.png';
// import { NavLink } from 'react-router-dom';
import banner from "../../img/Banner/Course4.jpg";

import unit1 from '../../img/unit1.jpg';
import unit3 from '../../img/unit3.jpg';
import unit4 from '../../img/unit4.jpg';
import unit5 from '../../img/unit5.jpg';

import pdf from "../../pdf/Course2.pdf"
// import test from '../../video/test.mp4';

import { config } from '../../config/config';

const { Panel } = Collapse;
const cookies = new Cookies();

const Topic1 = 'https://www.digitalncd.com/API/video/Course2/Course2Topic1.mp4';
const Topic2 = 'https://www.digitalncd.com/API/video/Course2/Course2Topic2.mp4';
const Topic3 = 'https://www.digitalncd.com/API/video/Course2/Course2Topic3.mp4';
const Topic4 = 'https://www.digitalncd.com/API/video/Course2/Course2Topic4.mp4';
const Topic5 = 'https://www.digitalncd.com/API/video/Course2/Course2Topic5.mp4';
const Topic6 = 'https://www.digitalncd.com/API/video/Course2/Course2Topic6.mp4';
const Topic7 = 'https://www.digitalncd.com/API/video/Course2/Course2Topic7.mp4';
const Topic8 = 'https://www.digitalncd.com/API/video/Course2/Course2Topic8.mp4';
const Topic9 = 'https://www.digitalncd.com/API/video/Course2/Course2Topic9.mp4';
const Topic10 = 'https://www.digitalncd.com/API/video/Course2/Course2Topic10.mp4';

const ip = config.ipServer;
const CourseCode = "COURSE1004";

const TopicCount = 10;

const TopicCode1 = "TOP200001";
const TopicCode2 = "TOP200002";
const TopicCode3 = "TOP200003";
const TopicCode4 = "TOP200004";
const TopicCode5 = "TOP200005";
const TopicCode6 = "TOP200006";
const TopicCode7 = "TOP200007";
const TopicCode8 = "TOP200008";
const TopicCode9 = "TOP200009";
const TopicCode10 = "TOP2000010";

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

const allTimeTopic1 = 0;
const allTimeTopic2 = 0;
const allTimeTopic3 = 0;
const allTimeTopic4 = 0;
const allTimeTopic5 = 0;
const allTimeTopic6 = 0;
const allTimeTopic7 = 0;
const allTimeTopic8 = 0;
const allTimeTopic9 = 0;
const allTimeTopic10 = 0;

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
        this.onEndedVedio = this.onEndedVedio.bind(this);
        this.playingVedio = this.playingVedio.bind(this);
        this.updateTimeTopic = this.updateTimeTopic.bind(this);
        this.showCertificate = this.showCertificate.bind(this);
        this.showCertificateOK = this.showCertificateOK.bind(this);
        this.onClicktoCourse = this.onClicktoCourse.bind(this);
        this.updateStatusTopic = this.updateStatusTopic.bind(this);
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
        save.download = "ISO14971.pdf";
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
            playingTopic10: playTopic10
        })
    }

    async onCreateTopic(topicCode) {
        this.playingVedio(topicCode);
        if (this.state.topicAll?.filter((item) => item.topicCode === topicCode)[0]?.recStatus !== "A") {
            const createTopic = {
                topicCode: topicCode,
                courseCode: CourseCode,
                recStatus: "A",
                videoStatus: "N",
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
            
            if(TopicCode1 === Topic) {
                if(update_time?.data[0]?.time >= allTimeTopic1) {
                    this.updateStatusTopic(Topic)
                }
            } else if(TopicCode2 === Topic) {
                if(update_time?.data[0]?.time >= allTimeTopic2) {
                    this.updateStatusTopic(Topic)
                }
            } else if(TopicCode3 === Topic) {
                if(update_time?.data[0]?.time >= allTimeTopic3) {
                    this.updateStatusTopic(Topic)
                }
            } else if(TopicCode4 === Topic) {
                if(update_time?.data[0]?.time >= allTimeTopic4) {
                    this.updateStatusTopic(Topic)
                }
            } else if(TopicCode5 === Topic) {
                if(update_time?.data[0]?.time >= allTimeTopic5) {
                    this.updateStatusTopic(Topic)
                }
            } else if(TopicCode6 === Topic) {
                if(update_time?.data[0]?.time >= allTimeTopic6) {
                    this.updateStatusTopic(Topic)
                }
            } else if(TopicCode7 === Topic) {
                if(update_time?.data[0]?.time >= allTimeTopic7) {
                    this.updateStatusTopic(Topic)
                }
            } else if(TopicCode8 === Topic) {
                if(update_time?.data[0]?.time >= allTimeTopic8) {
                    this.updateStatusTopic(Topic)
                }
            } else if(TopicCode9 === Topic) {
                if(update_time?.data[0]?.time >= allTimeTopic9) {
                    this.updateStatusTopic(Topic)
                }
            } else if(TopicCode10 === Topic) {
                if(update_time?.data[0]?.time >= allTimeTopic10) {
                    this.updateStatusTopic(Topic)
                }
            }
            return update_time?.status;
        }
    }

    async updateStatusTopic(Topic) {
        if (this.state.topicAll?.filter((item) => item.topicCode === Topic)[0]?.videoStatus !== "A") {
            var url_update_topic = ip + "/UserTopic/update/statustopic/" + CourseCode + "/" + Topic;
            const update_topic = await (await axios.put(url_update_topic, {} , { headers: this.state.header })).data;
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

    onExamPost() {
        if (this.state.topicAll?.filter((item) => item.videoStatus === "A").length >= TopicCount) {
            if (this.state.examPost.length !== 3) {
                this.props.history.push("/ExamPostCourse2");
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
                        <Row id="font-detail">ISO 14971:2019 การบริหารความเสี่ยงเครื่องมือแพทย์ (Risk Management for Medical Device)</Row> */}
                        <Row id="font-header">วัตถุประสงค์</Row>
                        <Row id="font-detail2">1. เพื่อให้ได้รับความรู้และความเข้าใจในมาตรฐาน ISO 14971</Row>
                        <Row id="font-detail2">2. เพื่อให้มีทักษะในการจัดทำระบบมาตรฐาน ISO 14971</Row>
                        <Row id="font-detail2">3. เพื่อให้มีทัศนคติที่ดีในการจัดทำระบบซึ่งจะเป็นประโยชน์กับทุกคน</Row>
                    </Col>
                </Row>

                <Row id="row-headercourse">
                    <Col xs={24} md={12} xl={12}>
                        <Row>
                            <Col xs={7} md={7} xl={7}><Image src={TeacherCourse2} id="teacher-img" fluid></Image></Col>
                            <Col xs={17} md={17} xl={17}>
                                <Row id="font-header">ผู้สอน</Row>
                                <Row id="font-detail">นายแพทย์องอาจ วิจินธนสาร</Row>
                                <Row id="font-header">หน่วยงานหลัก</Row>
                                <Row id="font-detail">ผู้อำนวยการโรงพยาบาลอมก๋อย</Row>
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
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 1. ภาพรวม ISO 14971:2019 </Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode1)[0]?.videoStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
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
                                        <Row id="unit-detail">มาตรฐานฉบับนี้มีจุดมุ่งหมายเพื่อเป็นกรอบสำหรับผู้ผลิตในการบริหารความเสี่ยงที่เกี่ยวข้องกับเครื่องมือแพทย์ ซึ่งเกิดจากการประยุกต์ใช้ประสบการณ์ การทำความเข้าใจ และการตัดสินใจที่เป็นระบบ สำหรับกลุ่มผู้ผลิตระบบหรือเครื่องมือแพทย์โดยเฉพาะ ตั้งแต่ การออกแบบ การทดสอบต้นแบบ การผลิต การตรวจสอบ การจัดเก็บ และกระบวนการอื่น ๆ โดยใช้หลักการบริหารความเสี่ยงที่ได้จัดทำขึ้น ส่วนผู้ผลิตอื่นๆ ที่เกี่ยวข้อง เช่น อุตสาหกรรมเพื่อสุขภาพ สามารถใช้เป็นแนวทางในการพัฒนาและรักษาระบบกระบวนการบริหารความเสี่ยงได้เช่นกัน</Row>
                                    </Col>
                                </Row>

                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 2. การตีความข้อกำหนด ข้อที่ 1-3
                                    </Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode2)[0]?.videoStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
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
                                        <Row id="unit-detail">มาตรฐานฉบับนี้ระบุกระบวนการที่ผู้ผลิตเครื่องมือแพทย์สามารถชี้บ่งอันตรายที่เกี่ยวข้องกับเครื่องมือแพทย์ ประมาณการและประเมินผลความเสี่ยงเกี่ยวกับอันตรายเหล่านั้น การควบคุมความเสี่ยง และการเฝ้าระวังประสิทธิผลของการควบคุมดังกล่าว ทั้งนี้ การประเมินความเสี่ยงและการจัดทำระบบการจัดการคุณภาพในการผลิตเครื่องมือแพทย์ ถือเป็นข้อบังคับ/กฎหมายสำหรับการผลิตเครื่องมือแพทย์ โดยสามารถประยุกต์ใช้แนวทางการดำเนินงานตามมาตรฐานสากล เช่น ISO 13485, ISO 14971 ในการดำเนินการ ข้อกำหนดทั่วไปสำหรับการบริหารความเสี่ยง กล่าวถึง กระบวนการบริหารความเสี่ยง ความรับผิดชอบของฝ่ายบริหาร คุณสมบัติของบุคลากร แผนการบริหารความเสี่ยง และแฟ้มข้อมูลการบริหารความเสี่ยง</Row>
                                    </Col>
                                </Row>

                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 3. การตีความข้อกำหนดที่ 4</Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode3)[0]?.videoStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
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
                                        <Row id="unit-detail">การวิเคราะห์ความเสี่ยง (Risk analysis) ระบุถึง กระบวนการวิเคราะห์ความเสี่ยง วัตถุประสงค์การใช้งานและการระบุคุณลักษณะที่เกี่ยวข้องกับด้านความปลอดภัยของเครื่องมือแพทย์ ระบุความเป็นอันตราย และการคาดการณ์ถึงความเสี่ยงในแต่ละสถานการณ์ที่อันตราย</Row>
                                    </Col>
                                </Row>

                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 4. การตีความข้อกำหนดที่ 5 - 6</Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode4)[0]?.videoStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
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
                                        <Row id="unit-detail">การประเมินความเสี่ยง (Risk evaluation) ในแต่ละสถานการณ์อันตราย (Hazardous Situation) ผู้ผลิตต้องตัดสินใจ ใช้เกณฑ์ตามที่กำหนดไว้ในแผนการบริหารความเสี่ยงหากจำเป็นต้องลดความเสี่ยงที่เกิดขึ้น แต่หากการความเสี่ยงเป็นสิ่งที่ไม่จำเป็น ก็ไม่จำเป็นต้องควบคุมความเสี่ยงต่อไป ทั้งนี้ผลลัพธ์ที่ได้ของการประเมินผลความเสี่ยงจะถูกบันทึกไว้ในแฟ้มข้อมูลการบริหารความเสี่ยง การควบคุมความเสี่ยง (Risk control) กล่าวถึงการลดความเสี่ยงที่จำเป็น จะต้องมีการกำหนดมาตรการในการควบคุมความเสี่ยง โดยมาตรการที่ใช้จะต้องมีความเหมาะสมสำหรับการลดความเสี่ยงลงให้อยู่ในระดับที่ยอมรับได้ ดำเนินการตามมาตรการควบคุมความเสี่ยง การประเมินผลความเสี่ยงที่เหลือ (Residual Risk) โดยการใช้เกณฑ์การประเมินตามที่ได้กำหนดไว้ในแผนการบริหารความเสี่ยง ส่วนความเสี่ยงที่เกิดจากมาตรการควบคุมความเสี่ยง จะต้องถูกนำมาทำการทบทวน ทั้งนี้ ความเสี่ยงใหม่หรือความเสี่ยงที่เพิ่มขึ้น จะต้องได้รับการจัดการตามขั้นตอนต่าง ๆ ของกระบวนการบริหารความเสี่ยง โดยผลของการทบทวนจะต้องถูกบันทึกไว้ในแฟ้มข้อมูลการบริหารความเสี่ยง</Row>
                                    </Col>
                                </Row>

                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 5. การตีความข้อกำหนดที่ 7-9</Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode5)[0]?.videoStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
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
                                        <Row id="unit-detail">ผู้ผลิตจะต้องประเมินความเสี่ยงที่เหลืออยู่โดยรวมว่าสามารถจัดการได้ตามแผนการจัดการความเสี่ยง และพิจารณาถึงประโยชน์ที่ได้รับจากจากการนำไปใช้งานเครื่องมือแพทย์ถ้ามีมากกว่าความเสี่ยงที่เหลืออยู่โดยรวมก็สามารถยอมรับความเสี่ยงที่เหลืออยู่โดยรวมได้ การรายงานการบริหารความเสี่ยง (Risk management report) ผู้ผลิตจะต้องมีการทบทวนกระบวนการของการบริหารความเสี่ยง โดยนำผลของการทบทวนจัดทำเป็นรายงานการบริหารความเสี่ยงและรวบรวมในแฟ้มข้อมูลการบริหารความเสี่ยง ผู้ผลิตจะต้องจัดทำระบบเพื่อรวบรวมและทบทวนข้อมูลเกี่ยวกับเครื่องมือแพทย์และอุปกรณ์ที่คล้ายกันในขั้นตอนการผลิตและหลังการผลิต</Row>
                                    </Col>
                                </Row>

                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 6. มาตรฐานเครื่องมือแพทย์  (หลักเกณฑ์ที่ 1-2) </Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode6)[0]?.videoStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
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
                                        <Row id="unit-detail">เครื่องมือแพทย์ทั้งหมดที่ไม่ได้รุกล้ำเข้าไปในร่างกาย ซึ่งสัมผัสกับผิวหนังที่มีบาดแผล เครื่องมือแพทย์ทั้งหมดที่ไม่ได้รุกล้ำเข้าไปในร่างกาย ซึ่งใช้สำหรับเป็นทางผ่าน หรือเก็บของเหลวของร่างกาย หรือเนื้อเยื่อของร่างกายของเหลวอื่น หรือ แก๊ส</Row>
                                    </Col>
                                </Row>

                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 7. มาตรฐานเครื่องมือแพทย์  (หลักเกณฑ์ที่ 3-5) </Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode7)[0]?.videoStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
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
                                        <Row id="unit-detail">เครื่องมือแพทย์ดังกล่าวรุกล้ำเข้าไปในร่างกายทางอ้อม เพราะมุ่งหมายสำหรับใช้ปรับปรุงองค์ประกอบทางชีวภาพ หรือทางเคมีของสาร ซึ่งในที่สุดจะนำสารดังกล่าวเข้าสู่ร่างกาย (รายละเอียดอยู่ในหมายเหตุหลักเกณฑ์ที่ ๔)โดยทั่วไป เครื่องมือแพทย์ดังกล่าวจะใช้ร่วมกับเครื่องมือแพทย์ที่มีกำลังที่อยู่ในขอบข่ายตามหลักเกณฑ์ที่ ๙ หรือ ๑๑) เครื่องมือแพทย์ตามหลักเกณฑ์นี้ ไม่ได้สัมผัสผู้ป่วยหรือสัมผัสผิวหนังปกติไม่มีบาดแผลเครื่องมือแพทย์ทั้งหมดที่รุกล้ำเข้าไปในร่างกายผ่านช่องเปิดของร่างกาย (โดยไม่รวมการรุกล้ำเข้าไปในร่างกายด้วยวิธีทางศัลยกรรม) ไม่ได้เพื่อเชื่อมต่อเข้ากับเครื่องมือแพทย์ที่มีกำลัง หรือมุ่งหมายเพื่อเชื่อมต่อกับเครื่องมือแพทย์ประเภทที่ ๑ เท่านั้น</Row>
                                    </Col>
                                </Row>

                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 8. มาตรฐานเครื่องมือแพทย์  (หลักเกณฑ์ที่ 6-10)</Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode8)[0]?.videoStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
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
                                        <Row id="unit-detail">เครื่องมือแพทย์ที่รุกล้ำเข้าไปในร่างกายด้วยวิธีทางศัลยกรรมทั้งหมดที่มุ่งหมายสำหรับใช้งานชั่วครู่เครื่องมือแพทย์รุกล้ำเข้าไปในร่างกายด้วยวิธีทางศัลยกรรมทั้งหมดที่มุ่งหมายสำหรับใช้งานระยะสั้น เครื่องมือแพทย์ที่ฝังในร่างกายทั้งหมด และรุกล้ำเข้าไปในร่างกายด้วยวิธีทางศัลยกรรมที่มุ่งหมายสำหรับใช้งานระยะยาว เครื่องมือแพทย์ที่มีกำลังที่ใช้ในการรักษาทั้งหมดที่มุ่งหมายเพื่อบริหารหรือแลกเปลี่ยนพลังงาน เครื่องมือแพทย์ที่มีกำลังทั้งหมดที่ มุ่งหมายเพื่อควบคุมหรือติดตามสมรรถนะของเครื่องมือแพทย์ที่มีกำลังที่ใช้ในการรักษาประเภทที่ ๓ หรือมุ่งหมายเพื่อทำให้เกิดผลโดยตรงต่อสมรรถนะของเครื่องมือแพทย์นั้น</Row>
                                    </Col>
                                </Row>

                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 9. มาตรฐานเครื่องมือแพทย์  (หลักเกณฑ์ที่ 10-16)</Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode9)[0]?.videoStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
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
                                        <Row id="unit-detail">เครื่องมือแพทย์ที่มีกำลังที่มุ่งหมายสำหรับการวินิจฉัย เครื่องมือแพทย์ตามหลักเกณฑ์นี้ส่วนใหญ่เป็นระบบนำส่งยาหรือเครื่องมือสำหรับดมยาสลบ เครื่องมือแพทย์ที่มีกำลังที่ไม่เข้าข่ายหลักเกณฑ์ดังกล่าวข้างต้นเครื่องมือแพทย์ที่มียา (ตามกฎหมายว่าด้วยยา) เป็นส่วนประกอบรวมเข้าไปเป็นส่วนหนึ่งของเครื่องมือแพทย์ เพื่อช่วยเสริมการทำงานของเครื่องมือแพทย์ต่อร่างกาย เครื่องมือแพทย์ทั้งหมดที่ผลิตหรือ มีส่วนของเนื้อเยื่อหรืออนุพันธ์ของสัตว์ที่ไม่มีชีวิตประกอบอยู่ เครื่องมือแพทย์ทั้งหมดที่มุ่งหมายเฉพาะเพื่อใช้สำหรับทำให้เครื่องมือแพทย์ปราศจากเชื้อ หรือฆ่าเชื้อเมื่อสิ้นสุดขั้นตอน เครื่องมือแพทย์ทั้งหมดที่ใช้สำหรับการคุมกำเนิด หรือป้องกันโรคติดเชื้อจากการมีเพศสัมพันธ์ </Row>
                                    </Col>
                                </Row>

                                <Row id="row-iconcheck">
                                    <Col xs={20} md={22} xl={22} id="sub-header"> 10. บทสรุป มาตรฐาน ISO 14971:2019</Col>
                                    <Col xs={2} md={2} xl={2} id="icon-chack">
                                        {
                                            (this.state.topicAll?.filter((item) => item.topicCode === TopicCode10)[0]?.videoStatus === "A") ? <AiFillCheckSquare style={{ fontSize: '250%', color: '#00794C' }} /> : <BorderOutlined style={{ fontSize: '250%', color: '#DDDDDD' }} />
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={24} md={12} xl={12} id="video-course1">
                                        <ReactPlayer
                                            url={Topic10}
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
                                            playing={this.state.playingTopic10}
                                            onProgress={this.onProgressVedioTopic10}
                                            onEnded={() => { this.onEndedVedio(TopicCode10) }}
                                            onPlay={() => { this.onCreateTopic(TopicCode10) }}
                                            fluid />
                                    </Col>
                                    <Col xs={24} md={10} xl={10}>
                                        <Row id="unit-header">รายละเอียด</Row>
                                        <Row id="unit-detail">การนำมาตรฐานระบบการบริหารจัดการ ISO 14971 มีส่วนช่วยสร้างประโยชน์ดังต่อไปนี้ องค์กรทราบถึงความเสี่ยงและระดับผลกระทบที่จะเกิดขึ้นของเครื่องมือแพทย์ เพื่อนำไปใช้ในการจัดการความเสี่ยงและแก้ไขปรับปรุงผลิตภัณฑ์ให้มีความปลอดภัย เป็นเครื่องมือที่นำมาประยุกต์ใช้เพื่อให้ดำเนินการได้สอดคล้องตามกฎหมายหรือข้อบังคับ เช่น CE Marking (MDD93/42/EEC) กฎหมายเครื่องมือแพทย์ของอาเซียน หรือ AMDD (ASEAN Medical Device Directive)</Row>
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
                                        <Image src={unit3} id="img-course" style={{ width: "100%", cursor: "no-drop", filter: "grayscale(1.0)" }} fluid></Image>
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
                                        <Image src={unit4} id="img-course" style={{ width: "100%", cursor: "no-drop", filter: "grayscale(1.0)" }} fluid></Image>
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
                                        <Image src={unit5} id="img-course" style={{ width: "100%", cursor: "pointer" }} onClick={() => { this.onClicktoCourse(CourseCode5) }} fluid></Image>
                                    </Col>
                                </Row>
                                <Row id="row-btn-coursedetail">
                                    <Button id="btn-coursedetail" onClick={() => { this.onClicktoCourse(CourseCode5) }}>รายละเอียดหลักสูตร</Button>
                                    {/* <Button disabled>รายละเอียดหลักสูตร</Button> */}
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