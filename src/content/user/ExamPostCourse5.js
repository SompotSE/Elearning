import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Pagination, Button, Progress } from 'antd';
import { withRouter } from "react-router-dom";
import BoxExam from './BoxExam';
import axios from 'axios';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
import '../../css/ExamPost.css';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import renderHTML from 'react-render-html';

// import img3_5 from '../../img/CourseExam/Course4/COURSE1004_3_5.png'
// import img10 from '../../img/CourseExam/Course4/COURSE1004_10.png'
// import img11 from '../../img/CourseExam/Course4/COURSE1004_11.png'
// import img12 from '../../img/CourseExam/Course4/COURSE1004_12.png'

import { config } from '../../config/config';

const cookies = new Cookies();

const ip = config.ipServer;
const CourseCode = "COURSE1005";
const Num = 20;

const ExamCodePost = "EXAM10002";

export default withRouter(class ExamPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            email: "",
            header: [],
            exam: [],
            statusexam: false,
            form: [],
            nameCourse: "",
            current_page: 1,
            countAns: 0,
            startDate: null,
            endDate: null,
            ansScore: 0,
            ansPercen: 0,
            ansNum: 0,
            ansResultStatus: false
        };

        this.onChangePage = this.onChangePage.bind(this);
        this.onChangeAns = this.onChangeAns.bind(this);
        this.onSendExam = this.onSendExam.bind(this);
        this.onClicktoForm = this.onClicktoForm.bind(this);
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
                    user: cookies.remove('email', { path: '/' })
                });
                window.location.replace('/', false);
            });
        } else {
            if (exam_post.data.length >= 3) {
                swal("Warning!", "จำนวนครั้งในการทำข้อสอบครบแล้ว", "warning").then((value) => {
                    this.props.history.push("/Course4");
                });
            }
        }

        var url_exam = ip + "/Examination/ExamPost/" + CourseCode + "/" + Num;
        const exam = await (await axios.get(url_exam, { headers: this.state.header })).data;
        if (!exam?.status) {
            swal("Error!", "เกิดข้อผิดพลาดในการเข้าสู่ระบบ \n กรุณาเข้าสู่ระบบใหม่", "error").then((value) => {
                this.setState({
                    token: cookies.remove('token_user', { path: '/' }),
                    user: cookies.remove('email', { path: '/' })
                });
                window.location.replace('/', false);
            });
        } else {
            this.setState({
                exam: exam.data,
                statusexam: true
            })
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
                form: assessment_course.data?.assessment,
                nameCourse: assessment_course.data?.course[0]?.courseName
            });
        }

        this.setState({
            startDate: new Date()
        })
    }

    list_exam() {
        return this.state.exam.map((exam, key) => {
            return <BoxExam exam={exam} />
        });
    }

    onChangePage(page) {
        this.setState({
            current_page: page
        });
    }

    onChangeAns(e) {
        const exam = this.state.exam[this.state.current_page - 1];
        exam.answer = e.target.value;
        this.setState({
            countAns: this.state.countAns + 1
        })
    }

    async onSendExam() {
        const answer = await this.state.exam?.filter((item) => item.answer === "");
        
        if (answer.length > 0) {
            let index = await this.state.exam?.findIndex((item) => item.answer === "");
            swal("Warning!", "กรุณาทำข้อสอบให้ครบ", "warning").then((value) => {
                this.setState({
                    current_page: (index + 1)
                });
            });
        } else {
            var endDate = new Date();
            var diff = (endDate.getTime() - this.state.startDate.getTime()) / 1000;
            var time = Math.abs(Math.round(diff));

            var url_exam_ans = ip + "/Examination/Send/Answer/ExamPost/" + CourseCode + "/" + time;
            const exam_ans = await (await axios.post(url_exam_ans, this.state.exam, { headers: this.state.header })).data;
            if (!exam_ans?.status) {
                swal("Error!", "เกิดข้อผิดพลาดในการเข้าสู่ระบบ \n กรุณาเข้าสู่ระบบใหม่", "error").then((value) => {
                    this.setState({
                        token: cookies.remove('token_user', { path: '/' }),
                        user: cookies.remove('email', { path: '/' })
                    });
                    window.location.replace('/', false);
                });
            } else {
                this.setState({
                    ansScore: exam_ans.data.score,
                    ansPercen: exam_ans.data.percenScore,
                    ansNum: exam_ans.data.num,
                    ansResultStatus: true
                })
            }
        }
    }

    onClicktoForm() {
        this.props.history.push("/Form/" + CourseCode);
    }
    onClicktoAdminHome() {
        this.props.history.push("/HomeUser");
    }

    showImg() {
        // if ((this.state.exam[this.state.current_page - 1]?.examinationlistCode === "EX4001003") ||
        //     (this.state.exam[this.state.current_page - 1]?.examinationlistCode === "EX4001004") ||
        //     (this.state.exam[this.state.current_page - 1]?.examinationlistCode === "EX4001005")) {
        //     return <>
        //         <Col xs={24} md={24} xl={24} id="img-exam"><Image src={img3_5} fluid></Image></Col>
        //         <Col xs={24} md={24} xl={24} id="text-img">รูปที่ 1</Col>
        //     </>
        // } else if (this.state.exam[this.state.current_page - 1]?.examinationlistCode === "EX4001010") {
        //     return <>
        //         <Col xs={24} md={24} xl={24} id="img-exam"><Image src={img10} fluid></Image></Col>
        //     </>
        // } else if (this.state.exam[this.state.current_page - 1]?.examinationlistCode === "EX4001011") {
        //     return <>
        //         <Col xs={24} md={24} xl={24} id="img-exam"><Image src={img11} fluid></Image></Col>
        //     </>
        // } else if (this.state.exam[this.state.current_page - 1]?.examinationlistCode === "EX4001012") {
        //     return <>
        //         <Col xs={24} md={24} xl={24} id="img-exam"><Image src={img12} fluid></Image></Col>
        //     </>
        // }
    }

    render() {
        return (
            <Container fluid id="bg-ExamPost">
                {
                    (this.state.statusexam) ?
                        (!this.state.ansResultStatus) ?
                            <div id="body-exam-post">
                                <Row id="head-exam-post">แบบทดสอบหลังเรียน</Row>
                                <Row id="pagination">
                                    <Col xs={24} md={16} xl={16} id="col-pagination">
                                        <Pagination
                                            current={this.state.current_page}
                                            pageSize={1}
                                            responsive={true}
                                            total={Num}
                                            onChange={this.onChangePage}
                                            // size="large"
                                        />
                                    </Col>
                                    <Col xs={24} md={6} xl={6} id="col-pagination">
                                        <Button disabled={this.state.current_page === Num ? false : true} onClick={this.onSendExam}>ส่งแบบทดสอบ</Button>
                                    </Col>
                                </Row>
                                <Row id="box-exam">
                                    <Col xs={24} md={24} xl={24} id="exam-header">
                                        <div>{renderHTML(this.state.exam[this.state.current_page - 1]?.examinationlistText)} </div>

                                    </Col>
                                    {this.showImg()}
                                    <Col xs={24} md={24} xl={24} id="exam-choice">
                                        <RadioGroup aria-label="gender" name="ans" value={this.state.exam[this.state.current_page - 1]?.answer} onChange={this.onChangeAns}>
                                            {
                                                this.state.exam[this.state.current_page - 1]?.answerlist.map((anslist, i) => {
                                                    return <Col xs={24} md={24} xl={24}><FormControlLabel value={anslist.answerlistCode} id="exam-choice" control={<Radio />} /><span>{anslist.answerlistText}</span></Col>
                                                })
                                            }
                                        </RadioGroup>
                                    </Col>
                                </Row>
                                
                            </div>
                            :
                            <div id="body-exam-post">
                                <Row id="border-score">
                                    <Col xs={24} md={24} xl={24} id="header-Examport">ผลการทดสอบหลังเรียน</Col>
                                    <Col xs={24} md={24} xl={24} id="header-Examport1">{this.state.nameCourse}</Col>
                                    <Col xs={24} md={24} xl={24}>
                                        <Row>
                                            <Col xs={24} md={12} xl={12} id="score-Exampost">{this.state.ansScore + " / " + this.state.ansNum}</Col>
                                            <Col xs={24} md={12} xl={12}>
                                                <Col xs={24} md={24} xl={24} id="progess-Examepost">
                                                    <Progress type="circle" percent={this.state.ansPercen} strokeColor={(this.state.ansPercen >= 80) ? "#006633" : "#CC0000"} strokeWidth={13} width={130} />

                                                </Col>
                                                <Col xs={24} md={24} xl={24} id="pass-Exampost">
                                                    {(this.state.ansPercen >= 80) ? "ผ่านการทดสอบ" : "ไม่ผ่านการทดสอบ"}
                                                </Col>
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col xs={24} md={24} xl={24} id="rowbtn-Exampost">
                                        {
                                            (this.state.form.length >= 1) ?
                                                <Button onClick={() => { this.onClicktoAdminHome() }} id="btnpass-Exampost">กลับหน้าหลัก</Button>
                                                :
                                                <Button onClick={() => { this.onClicktoForm() }} id="btnpass-Exampost">ทำแบบประเมิน</Button>
                                        }
                                    </Col>
                                </Row>
                            </div>
                        :
                        <></>
                }
            </Container>
        );
    }
})