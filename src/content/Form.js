import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Form, Radio, Input } from 'antd';
import '../css/Form.css';

const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };

      
//   const { value } = this.state;


export default class AdminHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            source: 0,
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            source: e.target.value,
        });
      };

    render() {
        return (
            <Container id="bg-form" fluid>
                <Row id="row-header-form">
                    <Col xs={20} md={12} xl={12}>
                        <Col xs={24} md={24} xl={24} id="col-header-form">Siminar Evaluation</Col>
                        <Col xs={24} md={24} xl={24} id="col-header-form">แบบประเมินผลงานสัมนา</Col>
                    </Col>
                    <Col xs={4} md={12} xl={12} id="logo-header-form">โลโก้</Col>
                </Row>

                <Form>
                    <Row id="row-form"> 
                        <Col xs={24} md={24} xl={24} id="col-header-form">
                            <Col xs={24} md={24} xl={24} id="header-form">ชื่อหัวข้อ (Siminar Topic) :</Col>
                            <Row>
                                <Col xs={24} md={10} xl={10} id="header-form">วันที่ (Date) / เวลา (Time) :</Col>
                                <Col xs={24} md={12} xl={12} id="header-form">สถานที่ (Venue) :</Col>
                            </Row>
                            <Col xs={24} md={24} xl={24} id="header-form">กรุณาแสดงความคิดเห็นของท่านโดยการทำเครื่องหมาย “√“ ลงในช่องว่าง พร้อมให้ข้อเสนอแนะเพื่อนำไปใช้ประโยชน์ในการพัฒนางานสัมมนา</Col>
                            <Col xs={24} md={24} xl={24} id="header-form">Please use “√” to indicate the level of your satisfaction and provide comments / recommendations to improve the future seminar</Col>
                        </Col>
                    </Row>
                    <Row  id="row-form">
                        <Col xs={24} md={24} xl={24}>ท่านทราบข่าวสัมมนาจากแหล่งใด Source of Information</Col>
                        <Col xs={24} md={24} xl={24}>
                            <Radio.Group onChange={this.onChange} value={this.state.source}>
                                <Row>
                                    <Col xs={12} md={3} xl={4} id="radio-source">
                                        <Radio style={radioStyle} value={1}>
                                            Email
                                        </Radio>
                                    </Col>
                                    <Col xs={12} md={4} xl={4} id="radio-source">
                                        <Radio style={radioStyle} value={1}>
                                            Brochure
                                        </Radio>
                                    </Col>
                                    <Col xs={12} md={4} xl={4} id="radio-source">
                                        <Radio style={radioStyle} value={2}>
                                            Website
                                        </Radio>
                                    </Col>
                                    <Col xs={12} md={5} xl={4} id="radio-source">
                                        <Radio style={radioStyle} value={3}>
                                            Colleagues
                                        </Radio>
                                    </Col>
                                    <Col xs={12} md={4} xl={4} id="radio-source">
                                        <Radio style={radioStyle} value={4}>
                                            Other (Please specify) {this.state.source === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                                        </Radio>
                                    </Col>
                                </Row>    
                            </Radio.Group>    
                        </Col>
                    </Row>
                    <Row id="row-form">
                        <Col xs={24} md={12} xl={12}>เกณฑ์การประเมิน Criteria</Col>
                        <Col xs={0} md={12} xl={12}>
                            <Row>
                                <Col span={6}>
                                    <Col md={24} xl={24} id="choice-score">มากที่สุด</Col> 
                                    <Col md={24} xl={24} id="choice-score">Very Good</Col> 
                                </Col>  
                                <Col span={6}>
                                    <Col md={24} xl={24} id="choice-score">มาก</Col> 
                                    <Col md={24} xl={24} id="choice-score">Good</Col> 
                                </Col>
                                <Col span={6}>
                                    <Col md={24} xl={24} id="choice-score">ปานกลาง</Col> 
                                    <Col md={24} xl={24} id="choice-score">Average</Col> 
                                </Col> 
                                <Col span={6}>
                                    <Col md={24} xl={24} id="choice-score">ต้องปรับปรุง</Col> 
                                    <Col md={24} xl={24} id="choice-score">Be Improved</Col> 
                                </Col>                      
                            </Row>
                        </Col>
                    </Row>
                </Form>
            </Container>
        )
    }

}