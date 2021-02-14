import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Button, Modal } from 'antd';
import '../../css/AdminDetail.css';

export default class AdminTopScore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isModalTimeUnit1: false,
        }

        this.info1 = this.info1.bind(this);
        this.info2 = this.info2.bind(this);
        this.info3 = this.info3.bind(this);
        this.info4 = this.info4.bind(this);
        this.info5 = this.info5.bind(this);
    }

    info1() {
        Modal.info({
          title: 'รายละเอียดบทที่ 1',
          content: (
            <>
                <Row id="row-info">
                    <Col md={11} xl={11} id="header-table-AdminDetail">หัวข้อ</Col>
                    <Col md={11} xl={11} id="header-table-AdminDetail">เวลา</Col>
                </Row>
                <Row id="row-info">
                    <Col md={11} xl={11} id="header1-table-AdminDetail">หัวข้อที่ 1</Col>
                    <Col md={11} xl={11} id="detail-table-AdminDetail">เวลา</Col>
                </Row>
                <Row id="row-info">
                    <Col md={11} xl={11} id="header1-table-AdminDetail">หัวข้อที่ 2</Col>
                    <Col md={11} xl={11} id="detail-table-AdminDetail">เวลา</Col>
                </Row>
                <Row id="row-info">
                    <Col md={11} xl={11} id="header1-table-AdminDetail">หัวข้อที่ 3</Col>
                    <Col md={11} xl={11} id="detail-table-AdminDetail">เวลา</Col>
                </Row>
            </>
          ),
          onOk() {},
        });
      }

      info2() {
        Modal.info({
          title: 'รายละเอียดบทที่ 2',
          content: (
            <>
                <Row id="row-info">
                    <Col md={11} xl={11} id="header-table-AdminDetail">หัวข้อ</Col>
                    <Col md={11} xl={11} id="header-table-AdminDetail">เวลา</Col>
                </Row>
                <Row id="row-info">
                    <Col md={11} xl={11} id="header1-table-AdminDetail">หัวข้อที่ 1</Col>
                    <Col md={11} xl={11} id="detail-table-AdminDetail">เวลา</Col>
                </Row>
                <Row id="row-info">
                    <Col md={11} xl={11} id="header1-table-AdminDetail">หัวข้อที่ 2</Col>
                    <Col md={11} xl={11} id="detail-table-AdminDetail">เวลา</Col>
                </Row>
                <Row id="row-info">
                    <Col md={11} xl={11} id="header1-table-AdminDetail">หัวข้อที่ 3</Col>
                    <Col md={11} xl={11} id="detail-table-AdminDetail">เวลา</Col>
                </Row>
            </>
          ),
          onOk() {},
        });
      }

      info3() {
        Modal.info({
          title: 'รายละเอียดบทที่ 3',
          content: (
            <>
                <Row id="row-info">
                    <Col md={11} xl={11} id="header-table-AdminDetail">หัวข้อ</Col>
                    <Col md={11} xl={11} id="header-table-AdminDetail">เวลา</Col>
                </Row>
                <Row id="row-info">
                    <Col md={11} xl={11} id="header1-table-AdminDetail">หัวข้อที่ 1</Col>
                    <Col md={11} xl={11} id="detail-table-AdminDetail">เวลา</Col>
                </Row>
                <Row id="row-info">
                    <Col md={11} xl={11} id="header1-table-AdminDetail">หัวข้อที่ 2</Col>
                    <Col md={11} xl={11} id="detail-table-AdminDetail">เวลา</Col>
                </Row>
                <Row id="row-info">
                    <Col md={11} xl={11} id="header1-table-AdminDetail">หัวข้อที่ 3</Col>
                    <Col md={11} xl={11} id="detail-table-AdminDetail">เวลา</Col>
                </Row>
            </>
          ),
          onOk() {},
        });
      }

      info4() {
        Modal.info({
          title: 'รายละเอียดบทที่ 4',
          content: (
            <>
                <Row id="row-info">
                    <Col md={11} xl={11} id="header-table-AdminDetail">หัวข้อ</Col>
                    <Col md={11} xl={11} id="header-table-AdminDetail">เวลา</Col>
                </Row>
                <Row id="row-info">
                    <Col md={11} xl={11} id="header1-table-AdminDetail">หัวข้อที่ 1</Col>
                    <Col md={11} xl={11} id="detail-table-AdminDetail">เวลา</Col>
                </Row>
                <Row id="row-info">
                    <Col md={11} xl={11} id="header1-table-AdminDetail">หัวข้อที่ 2</Col>
                    <Col md={11} xl={11} id="detail-table-AdminDetail">เวลา</Col>
                </Row>
                <Row id="row-info">
                    <Col md={11} xl={11} id="header1-table-AdminDetail">หัวข้อที่ 3</Col>
                    <Col md={11} xl={11} id="detail-table-AdminDetail">เวลา</Col>
                </Row>
            </>
          ),
          onOk() {},
        });
      }

      info5() {
        Modal.info({
          title: 'รายละเอียดบทที่ 5',
          content: (
            <>
                <Row id="row-info">
                    <Col md={11} xl={11} id="header-table-AdminDetail">หัวข้อ</Col>
                    <Col md={11} xl={11} id="header-table-AdminDetail">เวลา</Col>
                </Row>
                <Row id="row-info">
                    <Col md={11} xl={11} id="header1-table-AdminDetail">หัวข้อที่ 1</Col>
                    <Col md={11} xl={11} id="detail-table-AdminDetail">เวลา</Col>
                </Row>
                <Row id="row-info">
                    <Col md={11} xl={11} id="header1-table-AdminDetail">หัวข้อที่ 2</Col>
                    <Col md={11} xl={11} id="detail-table-AdminDetail">เวลา</Col>
                </Row>
                <Row id="row-info">
                    <Col md={11} xl={11} id="header1-table-AdminDetail">หัวข้อที่ 3</Col>
                    <Col md={11} xl={11} id="detail-table-AdminDetail">เวลา</Col>
                </Row>
            </>
          ),
          onOk() {},
        });
      }


    render() {
        return (
            <Container id="bg-AdminDetail" fluid>
                <Row id="Header-AdminDetail">ชื่อ - นามสกุล ชื่อบริษัท (สมาชิก)</Row>

                <Row id="row-table-AdminDetail">
                    <Col md={24} xl={24} id="header-table-AdminDetail">หลักสูตรที่ 1 หลักสูตร ISO 13485:2016 ระบบบริหาร งานคุณภาพสำหรับเครื่องมือแพทย์</Col>
                        <Col md={5} xl={5} id="header-table-AdminDetail">รายการ</Col>
                        <Col md={13} xl={13} id="header-table-AdminDetail">เวลา</Col>
                        <Col md={5} xl={5} id="header-table-AdminDetail">รายละเอียด</Col>  

                        <Col md={5} xl={5} id="header-table-AdminDetail">เวลาในการใช้งานหลักสูตร</Col>
                        <Col md={13} xl={13} id="detail-table-AdminDetail">เวลา</Col> 
                        <Col md={5} xl={5} id="Button-table-AdminDetail"><Button id="button-AdminDetail" onClick={() => this.info1()}>รายละเอียดเพิ่มเติม</Button></Col>

                        <Col md={5} xl={5} id="header-table-AdminDetail">ผลการสอบ</Col>
                        <Col md={9} xl={9} id="header-table-AdminDetail">เปอร์เซ็นต์คะแนน</Col>
                        <Col md={9} xl={9} id="header-table-AdminDetail">เวลา</Col>

                        <Col md={5} xl={5} id="header1-table-AdminDetail">ครั้งที่ 1</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เปอร์เซ็นต์คะแนน</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เวลา</Col>

                        <Col md={5} xl={5} id="header1-table-AdminDetail">ครั้งที่ 2</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เปอร์เซ็นต์คะแนน</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เวลา</Col>

                        <Col md={5} xl={5} id="header1-table-AdminDetail">ครั้งที่ 3</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เปอร์เซ็นต์คะแนน</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เวลา</Col>
                </Row>

                <Row id="row-table-AdminDetail">
                    <Col md={24} xl={24} id="header-table-AdminDetail">หลักสูตรที่ 2 หลักสูตร ISO14971:2019 การบริหารความเสี่ยงเครื่องมือแพทย์</Col>
                        <Col md={5} xl={5} id="header-table-AdminDetail">รายการ</Col>
                        <Col md={13} xl={13} id="header-table-AdminDetail">เวลา</Col>
                        <Col md={5} xl={5} id="header-table-AdminDetail">รายละเอียด</Col>  

                        <Col md={5} xl={5} id="header-table-AdminDetail">เวลาในการใช้งานหลักสูตร</Col>
                        <Col md={13} xl={13} id="detail-table-AdminDetail">เวลา</Col> 
                        <Col md={5} xl={5} id="Button-table-AdminDetail"><Button id="button-AdminDetail" onClick={() => this.info2()}>รายละเอียดเพิ่มเติม</Button></Col>

                        <Col md={5} xl={5} id="header-table-AdminDetail">ผลการสอบ</Col>
                        <Col md={9} xl={9} id="header-table-AdminDetail">เปอร์เซ็นต์คะแนน</Col>
                        <Col md={9} xl={9} id="header-table-AdminDetail">เวลา</Col>

                        <Col md={5} xl={5} id="header1-table-AdminDetail">ครั้งที่ 1</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เปอร์เซ็นต์คะแนน</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เวลา</Col>

                        <Col md={5} xl={5} id="header1-table-AdminDetail">ครั้งที่ 2</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เปอร์เซ็นต์คะแนน</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เวลา</Col>

                        <Col md={5} xl={5} id="header1-table-AdminDetail">ครั้งที่ 3</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เปอร์เซ็นต์คะแนน</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เวลา</Col>
                </Row>

                <Row id="row-table-AdminDetail">
                    <Col md={24} xl={24} id="header-table-AdminDetail">หลักสูตรที่ 3 หลักสูตร การคุ้มครองข้อมูลส่วนบุคคล</Col>
                        <Col md={5} xl={5} id="header-table-AdminDetail">รายการ</Col>
                        <Col md={13} xl={13} id="header-table-AdminDetail">เวลา</Col>
                        <Col md={5} xl={5} id="header-table-AdminDetail">รายละเอียด</Col>  

                        <Col md={5} xl={5} id="header-table-AdminDetail">เวลาในการใช้งานหลักสูตร</Col>
                        <Col md={13} xl={13} id="detail-table-AdminDetail">เวลา</Col> 
                        <Col md={5} xl={5} id="Button-table-AdminDetail"><Button id="button-AdminDetail" onClick={() => this.info3()}>รายละเอียดเพิ่มเติม</Button></Col>

                        <Col md={5} xl={5} id="header-table-AdminDetail">ผลการสอบ</Col>
                        <Col md={9} xl={9} id="header-table-AdminDetail">เปอร์เซ็นต์คะแนน</Col>
                        <Col md={9} xl={9} id="header-table-AdminDetail">เวลา</Col>

                        <Col md={5} xl={5} id="header1-table-AdminDetail">ครั้งที่ 1</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เปอร์เซ็นต์คะแนน</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เวลา</Col>

                        <Col md={5} xl={5} id="header1-table-AdminDetail">ครั้งที่ 2</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เปอร์เซ็นต์คะแนน</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เวลา</Col>

                        <Col md={5} xl={5} id="header1-table-AdminDetail">ครั้งที่ 3</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เปอร์เซ็นต์คะแนน</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เวลา</Col>
                </Row>
                <Row id="row-table-AdminDetail">
                    <Col md={24} xl={24} id="header-table-AdminDetail">หลักสูตรที่  4</Col>
                        <Col md={5} xl={5} id="header-table-AdminDetail">รายการ</Col>
                        <Col md={13} xl={13} id="header-table-AdminDetail">เวลา</Col>
                        <Col md={5} xl={5} id="header-table-AdminDetail">รายละเอียด</Col>  

                        <Col md={5} xl={5} id="header-table-AdminDetail">เวลาในการใช้งานหลักสูตร</Col>
                        <Col md={13} xl={13} id="detail-table-AdminDetail">เวลา</Col> 
                        <Col md={5} xl={5} id="Button-table-AdminDetail"><Button id="button-AdminDetail" onClick={() => this.info4()}>รายละเอียดเพิ่มเติม</Button></Col>

                        <Col md={5} xl={5} id="header-table-AdminDetail">ผลการสอบ</Col>
                        <Col md={9} xl={9} id="header-table-AdminDetail">เปอร์เซ็นต์คะแนน</Col>
                        <Col md={9} xl={9} id="header-table-AdminDetail">เวลา</Col>

                        <Col md={5} xl={5} id="header1-table-AdminDetail">ครั้งที่ 1</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เปอร์เซ็นต์คะแนน</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เวลา</Col>

                        <Col md={5} xl={5} id="header1-table-AdminDetail">ครั้งที่ 2</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เปอร์เซ็นต์คะแนน</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เวลา</Col>

                        <Col md={5} xl={5} id="header1-table-AdminDetail">ครั้งที่ 3</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เปอร์เซ็นต์คะแนน</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เวลา</Col>
                </Row>

                <Row id="row-table-AdminDetail">
                    <Col md={24} xl={24} id="header-table-AdminDetail">หลักสูตรที่ 5</Col>
                        <Col md={5} xl={5} id="header-table-AdminDetail">รายการ</Col>
                        <Col md={13} xl={13} id="header-table-AdminDetail">เวลา</Col>
                        <Col md={5} xl={5} id="header-table-AdminDetail">รายละเอียด</Col>  

                        <Col md={5} xl={5} id="header-table-AdminDetail">เวลาในการใช้งานหลักสูตร</Col>
                        <Col md={13} xl={13} id="detail-table-AdminDetail">เวลา</Col> 
                        <Col md={5} xl={5} id="Button-table-AdminDetail"><Button id="button-AdminDetail" onClick={() => this.info5()}>รายละเอียดเพิ่มเติม</Button></Col>

                        <Col md={5} xl={5} id="header-table-AdminDetail">ผลการสอบ</Col>
                        <Col md={9} xl={9} id="header-table-AdminDetail">เปอร์เซ็นต์คะแนน</Col>
                        <Col md={9} xl={9} id="header-table-AdminDetail">เวลา</Col>

                        <Col md={5} xl={5} id="header1-table-AdminDetail">ครั้งที่ 1</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เปอร์เซ็นต์คะแนน</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เวลา</Col>

                        <Col md={5} xl={5} id="header1-table-AdminDetail">ครั้งที่ 2</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เปอร์เซ็นต์คะแนน</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เวลา</Col>

                        <Col md={5} xl={5} id="header1-table-AdminDetail">ครั้งที่ 3</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เปอร์เซ็นต์คะแนน</Col>
                        <Col md={9} xl={9} id="detail-table-AdminDetail">เวลา</Col>
                </Row>
            </Container>
        )
    }
}