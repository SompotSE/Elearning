import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
import { Row, Col, Progress, Button } from 'antd';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
import '../../css/HomeUser.css';
import ReactPlayer from 'react-player';
import testV1 from '../../video/test.mp4';
import { AiFillPlayCircle } from "react-icons/ai";
import unit1 from '../../img/unit1.webp';
import unit2 from '../../img/unit2.webp';
import Header2 from '../../template/Header2';
import cover1 from '../../img/Cover1.png';

// import course1 from '../../img/Course1.webp';
// import course2 from '../../img/Course2.webp';
// import course3 from '../../img/Course3.webp';
// import course4 from '../../img/Course4.webp';
// import course5 from '../../img/Course5.webp';

// import incourse2 from '../../img/incourse2.svg';

import { config } from '../../config/config';

const cookies = new Cookies();

const ip = config.ipServer;

const CourseCode1 = "COURSE1001";
const CourseCode2 = "COURSE1002";
const CourseCode3 = "COURSE1003";
const CourseCode4 = "COURSE1004";
const CourseCode5 = "COURSE1005";

export default withRouter(class HomeUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            email: "",
            header: [],
            allTopic: [],
            course1: [],
            course2: [],
            course3: [],
            course4: [],
            course5: [],
            sumtopall: 0,
            sumtopuser: 0
        };

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
        var url_all_topic = ip + "/UserTopic/find/all/user";
        const alltopic = await (await axios.get(url_all_topic, { headers: this.state.header })).data;
    
        if (!alltopic?.status) {
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
                allTopic: alltopic.data,
                course1: alltopic.data?.filter((item) => item.courseCode === CourseCode1),
                course2: alltopic.data?.filter((item) => item.courseCode === CourseCode2),
                course3: alltopic.data?.filter((item) => item.courseCode === CourseCode3),
                course4: alltopic.data?.filter((item) => item.courseCode === CourseCode4),
                course5: alltopic.data?.filter((item) => item.courseCode === CourseCode5),
                sumtopall: alltopic.data?.reduce((prev, cur) => prev + parseInt(cur.countall), 0),
                sumtopuser: alltopic.data?.reduce((prev, cur) => prev + parseInt(cur.countuser), 0),
            });
        }
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
                window.location.replace('/Login', false);
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
            <Container fluid id="bg-HomeUser">
                <Row>
                    <Header2 />
                </Row>
                <Row id="row-userheader">
                    <Col xs={24} md={12} xl={12}>
                        <Row id="video-center">
                            <ReactPlayer
                                url={testV1}
                                className='react-player'
                                width='100%'
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
                        </Row>
                        <Row id="img-btn">
                            <AiFillPlayCircle id="img-play" style={{width: "10%"}}/>
                            <div>เริ่มเรียนหลักสูตรของคุณต่อ</div>
                        </Row>
                    </Col>
                    <Col xs={0} md={1} xl={1} id="line">
                    </Col>
                    <Col xs={24} md={10} xl={10}>
                        <Row id="head-headcouse">ความคืบหน้าการเรียนรู้</Row>
                        <Row id="headcouse"><Progress percent={parseInt((100 * this.state.sumtopuser) / this.state.sumtopall)} strokeWidth={20} strokeColor={(parseInt((100 * this.state.sumtopuser) / this.state.sumtopall) >= 80) ? "#006633" : "#CC0000"}/></Row>
                        <Row>
                            <Col xs={6} md={6} xl={6} id="headcouse">หลักสูตรที่ 1</Col>
                            <Col xs={18} md={18} xl={18}><Progress percent={parseInt((100 * this.state.course1[0]?.countuser) / this.state.course1[0]?.countall)} strokeColor={(parseInt((100 * this.state.course1[0]?.countuser) / this.state.course1[0]?.countall) >= 80) ? "#006633" : "#CC0000"}/></Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={6} xl={6} id="headcouse">หลักสูตรที่ 2</Col>
                            <Col xs={18} md={18} xl={18}><Progress percent={parseInt((100 * this.state.course2[0]?.countuser) / this.state.course2[0]?.countall)} strokeColor={(parseInt((100 * this.state.course2[0]?.countuser) / this.state.course2[0]?.countall) >= 80) ? "#006633" : "#CC0000"}/></Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={6} xl={6} id="headcouse">หลักสูตรที่ 3</Col>
                            <Col xs={18} md={18} xl={18}><Progress percent={parseInt((100 * this.state.course3[0]?.countuser) / this.state.course3[0]?.countall)} strokeColor={(parseInt((100 * this.state.course3[0]?.countuser) / this.state.course3[0]?.countall) >= 80) ? "#006633" : "#CC0000"}/></Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={6} xl={6} id="headcouse">หลักสูตรที่ 4</Col>
                            <Col xs={18} md={18} xl={18}><Progress percent={parseInt((100 * this.state.course4[0]?.countuser) / this.state.course4[0]?.countall)} strokeColor={(parseInt((100 * this.state.course4[0]?.countuser) / this.state.course4[0]?.countall) >= 80) ? "#006633" : "#CC0000"}/></Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={6} xl={6} id="headcouse">หลักสูตรที่ 5</Col>
                            <Col xs={18} md={18} xl={18}><Progress percent={parseInt((100 * this.state.course5[0]?.countuser) / this.state.course5[0]?.countall)} strokeColor={(parseInt((100 * this.state.course5[0]?.countuser) / this.state.course5[0]?.countall) >= 80) ? "#006633" : "#CC0000"}/></Col>
                        </Row>
                    </Col>
                </Row>

                <Row id="row-coverhomeUser">
                        <Col xs={10} md={4} xl={4} >
                            <Row id="row-img-coursedetail">
                                <Image style={{width: "100%", cursor: "pointer"}} src={unit1} placeholder={false} fluid onClick={() => { this.onClicktoCourse(CourseCode1) }}></Image>   
                            </Row>
                            <Row id="row-btn-coursedetail">
                                <Button id="btn-coursedetail" onClick={() => { this.onClicktoCourse(CourseCode1) }}>รายละเอียดหลักสูตร</Button>
                            </Row>
                        </Col>
                        <Col xs={10} md={4} xl={4}>
                            <Row  id="row-img-coursedetail">
                                <Image style={{width: "100%", cursor: "pointer"}} src={unit2} placeholder={false} fluid onClick={() => { this.onClicktoCourse(CourseCode2) }}></Image>   
                            </Row>
                            <Row id="row-btn-coursedetail">
                                <Button id="btn-coursedetail" onClick={() => { this.onClicktoCourse(CourseCode2) }}>รายละเอียดหลักสูตร</Button>
                            </Row>
                        </Col>
                        <Col xs={10} md={4} xl={4}>
                            <Row  id="row-img-coursedetail">
                                <Image style={{width: "100%", cursor: "pointer"}} src={cover1} placeholder={false} onClick={() => { this.onClicktoCourse(CourseCode3) }}></Image>   
                            </Row>
                            <Row id="row-btn-coursedetail">
                                <Button id="btn-coursedetail" onClick={() => { this.onClicktoCourse(CourseCode3) }}>รายละเอียดหลักสูตร</Button>
                            </Row>
                        </Col>
                        <Col xs={10} md={4} xl={4}>
                            <Row  id="row-img-coursedetail">
                                <Image style={{width: "100%", cursor: "pointer"}} src={cover1} placeholder={false} onClick={() => { this.onClicktoCourse(CourseCode4) }}></Image>   
                            </Row>
                            <Row id="row-btn-coursedetail">
                                <Button id="btn-coursedetail" onClick={() => { this.onClicktoCourse(CourseCode4) }}>รายละเอียดหลักสูตร</Button>
                            </Row>
                        </Col>
                        <Col xs={10} md={4} xl={4}>
                            <Row  id="row-img-coursedetail">
                                <Image style={{width: "100%", cursor: "pointer"}} src={cover1} placeholder={false} onClick={() => { this.onClicktoCourse(CourseCode5) }}></Image>   
                            </Row>
                            <Row id="row-btn-coursedetail">
                                <Button id="btn-coursedetail" onClick={() => { this.onClicktoCourse(CourseCode5) }}>รายละเอียดหลักสูตร</Button>
                            </Row>
                        </Col>
                </Row>
                
            </Container>
        );
    }
})