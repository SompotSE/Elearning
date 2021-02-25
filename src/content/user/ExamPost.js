import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Pagination, Radio, Button, Progress } from 'antd';
// import { HomeOutlined, SnippetsOutlined, RightCircleTwoTone, BorderOutlined } from '@ant-design/icons';
// import { AiFillCheckSquare } from "react-icons/ai";
import { withRouter } from "react-router-dom";
import BoxExam from './BoxExam';
import axios from 'axios';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
import '../../css/ExamPost.css';
// import renderHTML from 'react-render-html';

import { config } from '../../config/config';

const cookies = new Cookies();

const ip = config.ipServer;
const CourseCode = "COURSE1001";
const Num = 10;

const ExamCodePost = "EXAM10002";

export default withRouter(class ExamPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            email: "",
            header: [],
            exam: [],
            form: [],
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
                window.location.replace('/Login', false);
            });
        } else {
            if (exam_post.data.length >= 3) {
                swal("Warning!", "จำนวนครั้งในการทำข้อสอบครบแล้ว", "warning").then((value) => {
                    this.props.history.push("/Course1");
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
                window.location.replace('/Login', false);
            });
        } else {
            console.log(exam.data, " exam.data");
            this.setState({
                exam: exam.data
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
                window.location.replace('/Login', false);
            });
        } else {
            this.setState({
                form: assessment_course.data?.assessment
            });
        }

        this.setState({
            startDate: new Date()
        })
    }

    list_exam() {
        return this.state.exam.map((exam, key) => {
            console.log(key, " key");
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
            swal("Warning!", "กรุณาทำข้อสอบให้ครบ", "warning").then((value) => {
            });
        } else {
            var endDate = new Date();
            console.log(this.state.startDate, " this.state.startDate")
            console.log(endDate, " endDate")
            var diff = (endDate.getTime() - this.state.startDate.getTime()) / 1000;
            // diff /= 60;
            var time = Math.abs(Math.round(diff));

            var url_exam_ans = ip + "/Examination/Send/Answer/ExamPost/" + CourseCode + "/" + time;
            const exam_ans = await (await axios.post(url_exam_ans, this.state.exam, { headers: this.state.header })).data;
            if (!exam_ans?.status) {
                swal("Error!", "เกิดข้อผิดพลาดในการเข้าสู่ระบบ \n กรุณาเข้าสู่ระบบใหม่", "error").then((value) => {
                    this.setState({
                        token: cookies.remove('token_user', { path: '/' }),
                        user: cookies.remove('email', { path: '/' })
                    });
                    window.location.replace('/Login', false);
                });
            } else {
                console.log(exam_ans.data.percenScore, " percenScore");
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

    render() {
        return (
            <Container fluid id="bg-ExamPost">
                {
                    (!this.state.ansResultStatus) ?
                        <div id="body-exam-post">
                            <Row id="head-exam-post">แบบทดสอบหลังเรียน</Row>
                            <Row id="box-exam">
                                <Col xs={24} md={24} xl={24} id="exam-header"> {this.state.exam[this.state.current_page - 1]?.examinationlistText} </Col>
                                <Col xs={24} md={24} xl={24} id="exam-choice">
                                    <Radio.Group onChange={this.onChangeAns} value={this.state.exam[this.state.current_page - 1]?.answer}>
                                        {
                                            this.state.exam[this.state.current_page - 1]?.answerlist.map((anslist, i) => {
                                                return <Col xs={24} md={24} xl={24}><Radio value={anslist.answerlistCode} id="exam-choice">{anslist.answerlistText}</Radio></Col>
                                            })
                                        }
                                    </Radio.Group>
                                </Col>
                            </Row>
                            <Row id="pagination">
                                <Col xs={24} md={24} xl={24} id="col-pagination">
                                    <Pagination
                                        current={this.state.current_page}
                                        pageSize={1}
                                        responsive={true}
                                        total={Num}
                                        onChange={this.onChangePage}
                                    />
                                </Col>
                                <Col xs={24} md={24} xl={24} id="col-pagination">
                                    <Button disabled={this.state.current_page === Num ? false : true} onClick={this.onSendExam}>ส่งแบบทดสอบ</Button>
                                </Col>
                            </Row>
                        </div>
                        :
                        <div id="body-exam-post">
                            <Row id="border-score">
                                <Col xs={24} md={24} xl={24} id="header-Examport">ผลการทดสอบหลังเรียน</Col>
                                <Col xs={24} md={24} xl={24} id="header-Examport">หลักสูตรที่ 1</Col>
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
                            
                                <Col  xs={24} md={24} xl={24} id="rowbtn-Exampost">
                                    {
                                        (this.state.form.length >= 1) ?
                                            <Button onClick={() => { this.onClicktoAdminHome() }} id="btnpass-Exampost">กลับหน้าหลัก</Button>
                                            :
                                            <Button onClick={() => { this.onClicktoForm() }} id="btnpass-Exampost">ทำแบบประเมิน</Button>
                                    }
                                </Col>
                            </Row>
                                

                        </div>
                }
            </Container>
        );
    }
})