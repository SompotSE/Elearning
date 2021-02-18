import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Row, Spin, Result, Button } from 'antd';
import letter from "../img/letter.png"
import '../css/ConfirmRegister.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
import { config } from '../config/config';

const cookies = new Cookies();

const ip = config.ipServer;

export default class ConfirmRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            email: "",
            header: [],
            lodestatus: false
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
        const confirmRegister = {
            confirmRegisterKey: this.props.match.params.ConfirmRegisterKey
        };

        var url_confirm_register = ip + "/User/ConfirmRegister";
        const confirm_register = await (await axios.put(url_confirm_register, confirmRegister)).data;

        if (confirm_register.status) {
            this.setState({
                lodestatus: true
            });
        } else {
            swal("Error!", "เกิดข้อผิดพลาด \n กรุณาลองใหม่", "error").then((value) => {
                window.location.replace('/', false);
            });
        }

    }

    render() {
        return (
            <Container fluid>
                {
                    (this.state.lodestatus) ?
                        <>
                            {/* <Row id="Row-Modal-Img">
                                <Image src={letter} fluid />
                            </Row>
                            <Row id="Modal-cfMail-CF">ยืนยัน Email สำเร็จ</Row>
                            <Row id="Modal-cfMail-CF1"><NavLink to="/"><Button type="primary" id="btn-sty">เว็บไซต์</Button></NavLink ></Row> */}
                            <Result
                                status="success"
                                title="ยืนยัน Email สำเร็จ"
                                // subTitle=""
                                extra={[
                                    <NavLink to="/"><Button type="primary" id="btn-sty">เว็บไซต์</Button></NavLink >
                                ]}
                            />
                        </>
                        :
                        <Row id="row-spin-slide-CF">
                            <Spin size="large" />
                        </Row>
                }
            </Container>
        )
    }
}