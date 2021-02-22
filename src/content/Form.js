import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Form, Input, Radio as RadioAntd } from 'antd';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

import '../css/Form.css';

const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
};

const { TextArea } = Input;
export default class AdminHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            source: 0,
            source1: [],
            source2: 0,
            source3: 0,
            source4: 0,
            source5: 0,
            source6: 0,
            source7: 0,
            source8: 0,
            source9: 0,
            source10: 0,
            source11: 0,
            source12: 0,
            source13: 0,
            source14: 0,
            source15: 0,
            source16: 0,
            source17: 0,
            source18: 0,
            source19: 0,
            sourcepor: 0,
        }

        this.onChange = this.onChange.bind(this);
        this.onChange1 = this.onChange1.bind(this);
        this.onChange2 = this.onChange2.bind(this);
        this.onChange3 = this.onChange3.bind(this);
        this.onChange4 = this.onChange4.bind(this);
        this.onChange5 = this.onChange5.bind(this);
        this.onChange6 = this.onChange6.bind(this);
        this.onChange7 = this.onChange7.bind(this);
        this.onChange8 = this.onChange8.bind(this);
        this.onChange9 = this.onChange9.bind(this);
        this.onChange10 = this.onChange10.bind(this);
        this.onChange11 = this.onChange11.bind(this);
        this.onChange12 = this.onChange12.bind(this);
        this.onChange13 = this.onChange13.bind(this);
        this.onChange14 = this.onChange14.bind(this);
        this.onChange15 = this.onChange15.bind(this);
        this.onChange16 = this.onChange16.bind(this);
        this.onChange17 = this.onChange17.bind(this);
        this.onChange18 = this.onChange18.bind(this);
        this.onChange19 = this.onChange19.bind(this);

        this.onChangepor = this.onChangepor.bind(this);
    }

    onChange(e){
        this.setState({
            source: e.target.value,
        });
    };

    onChange1(e) {
        this.setState({
            source1: e.target.value,
        });
    };

    onChange2(e) {
        this.setState({
            source2: e.target.value,
        });
    }

    onChange3(e) {
        this.setState({
            source3: e.target.value,
        });
    }

    onChange4(e) {
        this.setState({
            source4: e.target.value,
        });
    }

    onChange5(e) {
        this.setState({
            source5: e.target.value,
        });
    }

    onChange6(e) {
        this.setState({
            source6: e.target.value,
        });
    }

    onChange7(e) {
        this.setState({
            source7: e.target.value,
        });
    }

    onChange8(e) {
        this.setState({
            source8: e.target.value,
        });
    }

    onChange9(e) {
        this.setState({
            source9: e.target.value,
        });
    }

    onChange10(e) {
        this.setState({
            source10: e.target.value,
        });
    }

    onChange11(e) {
        this.setState({
            source11: e.target.value,
        });
    }

    onChange12(e) {
        this.setState({
            source12: e.target.value,
        });
    }

    onChange13(e) {
        this.setState({
            source13: e.target.value,
        });
    }

    onChangepor(e) {
        this.setState({
            sourcepor: e.target.value,
        });
    }

    onChange14(e) {
        this.setState({
            source14: e.target.value,
        });
    }

    onChange15(e) {
        this.setState({
            source15: e.target.value,
        });
    }

    onChange16(e) {
        this.setState({
            source16: e.target.value,
        });
    }

    onChange17(e) {
        this.setState({
            source17: e.target.value,
        });
    }

    onChange18(e) {
        this.setState({
            source18: e.target.value,
        });
    }

    onChange19(e) {
        this.setState({
            source19: e.target.value,
        });
    }

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
                    <Row id="row-form">
                        <Col xs={24} md={24} xl={24} id="header-form">ท่านทราบข่าวสัมมนาจากแหล่งใด Source of Information</Col>
                        <Col xs={24} md={24} xl={24}>
                            <RadioAntd.Group onChange={this.onChange} value={this.state.source} style={{fontSize: "10px"}}>
                                <Row>
                                    <Col xs={12} md={3} xl={4} id="radio-source">
                                        <RadioAntd style={radioStyle} value={1}>
                                            <div id="antd-group">Email</div>
                                        </RadioAntd>
                                    </Col>
                                    <Col xs={12} md={4} xl={4} id="radio-source">
                                        <RadioAntd style={radioStyle} value={2}>
                                            <div id="antd-group">Brochure</div>
                                        </RadioAntd>
                                    </Col>
                                    <Col xs={12} md={4} xl={4} id="radio-source">
                                        <RadioAntd style={radioStyle} value={3}>
                                            <div id="antd-group">Website</div>
                                        </RadioAntd>
                                    </Col>
                                    <Col xs={12} md={5} xl={5} id="radio-source">
                                        <RadioAntd style={radioStyle} value={4}>
                                            <div id="antd-group">Colleagues</div>
                                        </RadioAntd>
                                    </Col>
                                    <Col xs={12} md={4} xl={4} id="radio-source">
                                        <RadioAntd style={radioStyle} value={5}>
                                            <span id="antd-group">Other (Please specify)</span> {this.state.source === 5 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                                        </RadioAntd>
                                    </Col>
                                </Row>    
                            </RadioAntd.Group>    
                        </Col>
                    </Row>

                    <Row id="row-form">
                        <Col xs={24} md={12} xl={12} id="kate">เกณฑ์การประเมิน Criteria</Col>
                        <Col xs={0} md={12} xl={12}>
                            <Row>
                                <Col span={6}>
                                    <Col xs={0} md={24} xl={24} id="choice-score">มากที่สุด</Col> 
                                    <Col xs={0} md={24} xl={24} id="choice-score">Very Good</Col> 
                                </Col>  
                                <Col span={6}>
                                    <Col xs={0} md={24} xl={24} id="choice-score">มาก</Col> 
                                    <Col xs={0} md={24} xl={24} id="choice-score">Good</Col> 
                                </Col>
                                <Col span={6}>
                                    <Col xs={0} md={24} xl={24} id="choice-score">ปานกลาง</Col> 
                                    <Col xs={0} md={24} xl={24} id="choice-score">Average</Col>
                                </Col> 
                                <Col span={6}>
                                    <Col xs={0} md={24} xl={24} id="choice-score">ต้องปรับปรุง</Col> 
                                    <Col xs={0} md={24} xl={24} id="choice-score">Be Improved</Col>
                                </Col>                      
                            </Row>
                        </Col>
                    </Row>
                    <Row id="row-form">
                        <Col xs={24} md={12} xl={12}>
                            <Row>
                                <Col xs={24} md={24} xl={10}>ท่านมีความรู้ความเข้าใจเพิ่มมากขึ้นเพียงใด</Col>
                                <Col xs={24} md={24} xl={12}>Level of understanding</Col>
                            </Row>
                        </Col>
                        <Col xs={24} md={0} xl={0}>
                        
                            <Row>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(4)</Col>
                                </Col>  
                                <Col span={6}> 
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(3)</Col>
                                </Col>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(2)</Col> 
                                </Col> 
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(1)</Col> 
                                </Col>                      
                            </Row>
                            
                        </Col> 
                        <Col xs={24} md={12} xl={12}>
                            <RadioGroup aria-label="gender" name="gender1" value={this.state.source1} onChange={this.onChange1}>
                                <Row>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="4" control={<Radio />}  />
                                    </Col>  
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="3" control={<Radio />}  />
                                    </Col>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="2" control={<Radio />} />
                                    </Col> 
                                    <Col xs={6} md={6} xl={6} id="row-radio"s>
                                        <FormControlLabel value="1" control={<Radio />} />
                                    </Col>                      
                                </Row>
                            </RadioGroup>
                        </Col>  
                    </Row>
                    
                    <Row id="row-form">
                        <Col xs={24} md={12} xl={12}>
                            <Row>
                                <Col xs={24} md={24} xl={13}>ท่านสามารถนำความรู้ที่ได้รับไปใช้ประโยชน์ได้เพียงใด</Col>
                                <Col xs={24} md={24} xl={11}>Practical and Applicable to your work</Col>
                            </Row>
                        </Col>
                        <Col xs={24} md={0} xl={0}>
                            <Row>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(4)</Col>
                                </Col>  
                                <Col span={6}> 
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(3)</Col>
                                </Col>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(2)</Col> 
                                </Col> 
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(1)</Col> 
                                </Col>                      
                            </Row>
                        </Col>
                        <Col xs={24} md={12} xl={12}>
                            <RadioGroup aria-label="gender" name="gender1" value={this.state.source2} onChange={this.onChange2}>
                                <Row>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="4" control={<Radio />}  />
                                    </Col>  
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="3" control={<Radio />}  />
                                    </Col>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="2" control={<Radio />} />
                                    </Col> 
                                    <Col xs={6} md={6} xl={6} id="row-radio"s>
                                        <FormControlLabel value="1" control={<Radio />} />
                                    </Col>                      
                                </Row>
                            </RadioGroup>
                        </Col>
                    </Row>
 
                    <Row id="row-header-choice">เนื้อหา / หัวข้องานสัมมนา Contents</Row>
                    <Row id="row-form">
                        <Col xs={24} md={12} xl={12}>
                            <Row>
                                <Col xs={24} md={24} xl={11}>1. เนื้อหามีประโยชน์ต่อการปฏิบัติงานของท่าน /</Col>
                                <Col xs={24} md={24} xl={11}> Applicable of knowledge to your current job</Col>
                            </Row>
                        </Col>
                        <Col xs={24} md={0} xl={0}>
                            <Row>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(4)</Col>
                                </Col>  
                                <Col span={6}> 
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(3)</Col>
                                </Col>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(2)</Col> 
                                </Col> 
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(1)</Col> 
                                </Col>                      
                            </Row>
                        </Col>
                        <Col xs={24} md={12} xl={12}>
                            <RadioGroup aria-label="gender" name="gender1" value={this.state.source3} onChange={this.onChange3}>
                                <Row>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="4" control={<Radio />}  />
                                    </Col>  
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="3" control={<Radio />}  />
                                    </Col>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="2" control={<Radio />} />
                                    </Col> 
                                    <Col xs={6} md={6} xl={6} id="row-radio"s>
                                        <FormControlLabel value="1" control={<Radio />} />
                                    </Col>                      
                                </Row>
                            </RadioGroup>
                        </Col>
                    </Row>
                    
                    <Row id="row-form">
                        <Col xs={24} md={12} xl={12}>
                            <Row>
                                <Col xs={24} md={24} xl={24}>2. เนื้อหามีความเหมาะสมและสอดคล้องกับวัตถุประสงค์ /</Col>
                                <Col xs={24} md={24} xl={24}>Relevance of the content to the seminar objectives</Col>
                            </Row>
                        </Col>
                        <Col xs={24} md={0} xl={0}>
                            <Row>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(4)</Col>
                                </Col>  
                                <Col span={6}> 
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(3)</Col>
                                </Col>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(2)</Col> 
                                </Col> 
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(1)</Col> 
                                </Col>                      
                            </Row>
                        </Col>
                        <Col xs={24} md={12} xl={12}>
                            <RadioGroup aria-label="gender" name="gender1" value={this.state.source4} onChange={this.onChange4}>
                                <Row>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="4" control={<Radio />}  />
                                    </Col>  
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="3" control={<Radio />}  />
                                    </Col>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="2" control={<Radio />} />
                                    </Col> 
                                    <Col xs={6} md={6} xl={6} id="row-radio"s>
                                        <FormControlLabel value="1" control={<Radio />} />
                                    </Col>                      
                                </Row>
                            </RadioGroup>
                        </Col>
                    </Row>
                    <Row id="row-form">
                        <Col xs={24} md={12} xl={12}>
                            <Row>
                                <Col xs={24} md={24} xl={9}>3. ความเหมาะสมของหัวข้อโดยรวม /</Col>
                                <Col xs={24} md={24} xl={10}>Overall of the topic</Col>
                            </Row>
                        </Col>
                        <Col xs={24} md={0} xl={0}>
                            <Row>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(4)</Col>
                                </Col>  
                                <Col span={6}> 
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(3)</Col>
                                </Col>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(2)</Col> 
                                </Col> 
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(1)</Col> 
                                </Col>                      
                            </Row>
                        </Col>
                        <Col xs={24} md={12} xl={12}>
                            <RadioGroup aria-label="gender" name="gender1" value={this.state.source5} onChange={this.onChange5}>
                                <Row>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="4" control={<Radio />}  />
                                    </Col>  
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="3" control={<Radio />}  />
                                    </Col>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="2" control={<Radio />} />
                                    </Col> 
                                    <Col xs={6} md={6} xl={6} id="row-radio"s>
                                        <FormControlLabel value="1" control={<Radio />} />
                                    </Col>                      
                                </Row>
                            </RadioGroup>
                        </Col>
                    </Row>
                    <Row id="row-form">
                        <Col xs={24} md={12} xl={12}>
                            <Row>
                                <Col xs={24} md={24} xl={7}>4. ความเหมาะสมของสถานที่/</Col>
                                <Col xs={24} md={24} xl={10}>Suitable of the venue</Col>
                            </Row>
                        </Col>
                        <Col xs={24} md={0} xl={0}>
                            <Row>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(4)</Col>
                                </Col>  
                                <Col span={6}> 
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(3)</Col>
                                </Col>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(2)</Col> 
                                </Col> 
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(1)</Col> 
                                </Col>                      
                            </Row>
                        </Col>
                        <Col xs={24} md={12} xl={12}>
                            <RadioGroup aria-label="gender" name="gender1" value={this.state.source6} onChange={this.onChange6}>
                                <Row>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="4" control={<Radio />}  />
                                    </Col>  
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="3" control={<Radio />}  />
                                    </Col>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="2" control={<Radio />} />
                                    </Col> 
                                    <Col xs={6} md={6} xl={6} id="row-radio"s>
                                        <FormControlLabel value="1" control={<Radio />} />
                                    </Col>                      
                                </Row>
                            </RadioGroup>
                        </Col>
                    </Row>
                    <Row id="row-form">
                        <Col xs={24} md={12} xl={12}>
                            <Row>
                                <Col xs={24} md={24} xl={8}>5. ความเหมาะสมของระยะเวลา /</Col>
                                <Col xs={24} md={24} xl={10}>Suitable of the course length</Col>
                            </Row>
                        </Col>
                        <Col xs={24} md={0} xl={0}>
                            <Row>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(4)</Col>
                                </Col>  
                                <Col span={6}> 
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(3)</Col>
                                </Col>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(2)</Col> 
                                </Col> 
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(1)</Col> 
                                </Col>                      
                            </Row>
                        </Col>
                        <Col xs={24} md={12} xl={12}>
                            <RadioGroup aria-label="gender" name="gender1" value={this.state.source7} onChange={this.onChange7}>
                                <Row>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="4" control={<Radio />}  />
                                    </Col>  
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="3" control={<Radio />}  />
                                    </Col>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="2" control={<Radio />} />
                                    </Col> 
                                    <Col xs={6} md={6} xl={6} id="row-radio"s>
                                        <FormControlLabel value="1" control={<Radio />} />
                                    </Col>                      
                                </Row>
                            </RadioGroup>
                        </Col>
                    </Row>
                    <Row id="row-form">
                        <Col xs={24} md={12} xl={12}>
                            <Row>
                                <Col xs={24} md={24} xl={10}>6. ความพึงพอใจโดยรวมต่องานสัมมนา /</Col>
                                <Col xs={24} md={24} xl={10}>Overall satisfaction of the seminar</Col>
                            </Row>
                        </Col>
                        <Col xs={24} md={0} xl={0}>
                            <Row>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(4)</Col>
                                </Col>  
                                <Col span={6}> 
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(3)</Col>
                                </Col>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(2)</Col> 
                                </Col> 
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(1)</Col> 
                                </Col>                      
                            </Row>
                        </Col>
                        <Col xs={24} md={12} xl={12}>
                            <RadioGroup aria-label="gender" name="gender1" value={this.state.source8} onChange={this.onChange8}>
                                <Row>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="4" control={<Radio />}  />
                                    </Col>  
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="3" control={<Radio />}  />
                                    </Col>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="2" control={<Radio />} />
                                    </Col> 
                                    <Col xs={6} md={6} xl={6} id="row-radio"s>
                                        <FormControlLabel value="1" control={<Radio />} />
                                    </Col>                      
                                </Row>
                            </RadioGroup>
                        </Col>
                    </Row>

                    <Row id="row-header-choice1">ความคิดเห็น / ข้อเสนอแนะเพิ่มเติมต่องานสัมมนา Additional comments about the seminar</Row>
                    <Row id="textxarea-input"><TextArea rows={2} id="row-placeholder" placeholder="โปรดกรอกข้อเสนอแนะเพิ่มเติม"/></Row>

                    <Row id="row-form">
                        <Col xs={24} md={12} xl={12} id="kate">เกณฑ์การประเมิน Criteria</Col>
                        <Col xs={0} md={12} xl={12}>
                            <Row>
                                <Col span={6}>
                                    <Col xs={0} md={24} xl={24} id="choice-score">มากที่สุด</Col> 
                                    <Col xs={0} md={24} xl={24} id="choice-score">Very Good</Col>
                                </Col>  
                                <Col span={6}>
                                    <Col xs={0} md={24} xl={24} id="choice-score">มาก</Col> 
                                    <Col xs={0} md={24} xl={24} id="choice-score">Good</Col> 
                                </Col>
                                <Col span={6}>
                                    <Col xs={0} md={24} xl={24} id="choice-score">ปานกลาง</Col> 
                                    <Col xs={0} md={24} xl={24} id="choice-score">Average</Col>
                                </Col> 
                                <Col span={6}>
                                    <Col xs={0} md={24} xl={24} id="choice-score">ต้องปรับปรุง</Col> 
                                    <Col xs={0} md={24} xl={24} id="choice-score">Be Improved</Col>
                                </Col>                      
                            </Row>
                        </Col>
                    </Row>

                    <Row id="row-header-choice">ผู้บรรยาย / วิทยากร Instructor / Speaker</Row>
                    <Row id="row-form">
                        <Col xs={24} md={12} xl={12}>
                            <Row>
                                <Col xs={24} md={24} xl={10}>1. ความรู้ ประสบการณ์ในเรื่องที่บรรยาย /</Col>
                                <Col xs={24} md={24} xl={10}>Knowledge of the topic</Col>
                            </Row>
                        </Col>
                        <Col xs={24} md={0} xl={0}>
                            <Row>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(4)</Col>
                                </Col>  
                                <Col span={6}> 
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(3)</Col>
                                </Col>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(2)</Col> 
                                </Col> 
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(1)</Col> 
                                </Col>                      
                            </Row>
                        </Col>
                        <Col xs={24} md={12} xl={12}>
                            <RadioGroup aria-label="gender" name="gender1" value={this.state.source9} onChange={this.onChange9}>
                                <Row>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="4" control={<Radio />}  />
                                    </Col>  
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="3" control={<Radio />}  />
                                    </Col>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="2" control={<Radio />} />
                                    </Col> 
                                    <Col xs={6} md={6} xl={6} id="row-radio"s>
                                        <FormControlLabel value="1" control={<Radio />} />
                                    </Col>                      
                                </Row>
                            </RadioGroup>
                        </Col>
                    </Row>
                    <Row id="row-form">
                        <Col xs={24} md={12} xl={12}>
                            <Row>
                                <Col xs={24} md={24} xl={24}>2. เทคนิคในการนำเสนอและการถ่ายทอดโดยรวม /</Col>
                                <Col xs={24} md={24} xl={24}>Overall presentation techniques and teaching methodology</Col>
                            </Row>
                        </Col>
                        <Col xs={24} md={0} xl={0}>
                            <Row>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(4)</Col>
                                </Col>  
                                <Col span={6}> 
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(3)</Col>
                                </Col>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(2)</Col> 
                                </Col> 
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(1)</Col> 
                                </Col>                      
                            </Row>
                        </Col>
                        <Col xs={24} md={12} xl={12}>
                            <RadioGroup aria-label="gender" name="gender1" value={this.state.source10} onChange={this.onChange10}>
                                <Row>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="4" control={<Radio />}  />
                                    </Col>  
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="3" control={<Radio />}  />
                                    </Col>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="2" control={<Radio />} />
                                    </Col> 
                                    <Col xs={6} md={6} xl={6} id="row-radio"s>
                                        <FormControlLabel value="1" control={<Radio />} />
                                    </Col>                      
                                </Row>
                            </RadioGroup>
                        </Col>
                    </Row>
                    <Row id="row-form">
                        <Col xs={24} md={12} xl={12}>
                            <Row>
                                <Col xs={24} md={24} xl={24}>3. สร้างความสนใจและกระตุ้นให้เกิดการเรียนรู้ /</Col>
                                <Col xs={24} md={24} xl={24}>Generate your attention and motivation to learn</Col>
                            </Row>
                        </Col>
                        <Col xs={24} md={0} xl={0}>
                            <Row>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(4)</Col>
                                </Col>  
                                <Col span={6}> 
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(3)</Col>
                                </Col>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(2)</Col> 
                                </Col> 
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(1)</Col> 
                                </Col>                      
                            </Row>
                        </Col>
                        <Col xs={24} md={12} xl={12}>
                            <RadioGroup aria-label="gender" name="gender1" value={this.state.source11} onChange={this.onChange11}>
                                <Row>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="4" control={<Radio />}  />
                                    </Col>  
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="3" control={<Radio />}  />
                                    </Col>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="2" control={<Radio />} />
                                    </Col> 
                                    <Col xs={6} md={6} xl={6} id="row-radio"s>
                                        <FormControlLabel value="1" control={<Radio />} />
                                    </Col>                      
                                </Row>
                            </RadioGroup>
                        </Col>
                    </Row>
                    <Row id="row-form">
                        <Col xs={24} md={12} xl={12}>
                            <Row>
                                <Col xs={24} md={24} xl={8}>4. บริหารเวลาได้อย่างเหมาะสม /</Col>
                                <Col xs={24} md={24} xl={10}>Manage time effectively</Col>
                            </Row>
                        </Col>
                        <Col xs={24} md={0} xl={0}>
                            <Row>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(4)</Col>
                                </Col>  
                                <Col span={6}> 
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(3)</Col>
                                </Col>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(2)</Col> 
                                </Col> 
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(1)</Col> 
                                </Col>                      
                            </Row>
                        </Col>
                        <Col xs={24} md={12} xl={12}>
                            <RadioGroup aria-label="gender" name="gender1" value={this.state.source12} onChange={this.onChange12}>
                                <Row>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="4" control={<Radio />}  />
                                    </Col>  
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="3" control={<Radio />}  />
                                    </Col>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="2" control={<Radio />} />
                                    </Col> 
                                    <Col xs={6} md={6} xl={6} id="row-radio"s>
                                        <FormControlLabel value="1" control={<Radio />} />
                                    </Col>                      
                                </Row>
                            </RadioGroup>
                        </Col>
                    </Row>
                    <Row id="row-form">
                        <Col xs={24} md={12} xl={12}>
                            <Row>
                                <Col xs={24} md={24} xl={24}>5. ความเหมาะสมของผู้บรรยาย / วิทยากรโดยรวม</Col>
                                <Col xs={24} md={24} xl={24}>Overall of the instructor / speaker</Col>
                            </Row>
                        </Col>
                        <Col xs={24} md={0} xl={0}>
                            <Row>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(4)</Col>
                                </Col>  
                                <Col span={6}> 
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(3)</Col>
                                </Col>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(2)</Col> 
                                </Col> 
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(1)</Col> 
                                </Col>                      
                            </Row>
                        </Col>
                        <Col xs={24} md={12} xl={12}>
                            <RadioGroup aria-label="gender" name="gender1" value={this.state.source13} onChange={this.onChange13}>
                                <Row>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="4" control={<Radio />}  />
                                    </Col>  
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="3" control={<Radio />}  />
                                    </Col>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="2" control={<Radio />} />
                                    </Col> 
                                    <Col xs={6} md={6} xl={6} id="row-radio"s>
                                        <FormControlLabel value="1" control={<Radio />} />
                                    </Col>                      
                                </Row>
                            </RadioGroup>
                        </Col>
                    </Row>

                    <Row id="row-header-choice1">ความคิดเห็น / ข้อเสนอแนะเพิ่มเติมสำหรับวิทยากร Additional comments about the instructor / speaker</Row>
                    <Row id="textxarea-input"><TextArea rows={2} id="row-placeholder" placeholder="โปรดกรอกข้อเสนอแนะเพิ่มเติม"/></Row>

                    
                    <Row id="row-header-choice">บริการอื่นๆ / Services</Row>
                    <Row>
                        <Col xs={24} md={24} xl={24} id="row-header-choice1">
                            <Row>
                                1. การให้บริการตามข้อตกลงการให้บริการ (Service Level Agreement – SLA) ของหน่วยงาน <div id="color-font">(ใส่นิยาม SLA ของหน่วยงานถ้ามี) </div> ท่านพึงพอใจกับ SLA ที่หน่วยงานได้กำหนดไว้เพื่อให้บริการ ณ ปัจจุบัน
                            </Row>
                            <Col xs={24} md={24} xl={24}>
                                <RadioAntd.Group onChange={this.onChangepor} value={this.state.sourcepor}>
                                    <Row>
                                        <Col xs={24} md={24} xl={24} id="radio-source">
                                            <RadioAntd style={radioStyle} value={1}>
                                                <span id="antd-group">พอใจ เนื่องจาก</span> {this.state.sourcepor === 1 ? <Input id="Service-input" placeholder="โปรดกรอกข้อมูล" style={{ width: 100, marginLeft: 10 }}/> : null}
                                            </RadioAntd>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={24} md={24} xl={24}>
                                            <RadioAntd style={radioStyle} value={2}>
                                                <span id="antd-group">ไม่พอใจ เนื่องจาก</span> {this.state.sourcepor === 2 ? <Input id="Service-input" placeholder="โปรดกรอกข้อมูล" style={{ width: 100, marginLeft: 10 }}/> : null}
                                            </RadioAntd>
                                        </Col>
                                    </Row>
                                </RadioAntd.Group>
                            </Col>
                        </Col>

                        <Col xs={24} md={24} xl={24} id="row-header-choice1">
                            <Row>
                                <Col xs={24} md={24} xl={24}>
                                2. ท่านจะแนะนำการบริการของ สวทช. ให้กับเพื่อนหรือคนที่รู้จักหรือไม่ / ท่านจะกลับมาใช้บริการหรือผลิตภัณฑ์ สวทช.ซ้ำหรือไม่ ?
                                </Col>
                                <Col xs={24} md={24} xl={24}>
                                (Net Promoter Score) : Would you recommend NSTDA products or another services to the others?
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24} md={24} xl={24} style={{marginBottom: "3%"}}>
                            <RadioGroup aria-label="gender" name="gender1" value={this.state.source14} onChange={this.onChange14}>
                                <Row id="row-header-form1">
                                    <Col xs={24} md={12} xl={12}>กลับมาใช้บริการอย่างแน่นอน / แนะนำอย่างแน่นอน Definitely Recommend</Col> 
                                    <Col xs={24} md={12} xl={12} id="Promoter-radio">
                                        <Col xs={24} md={24} xl={6}><FormControlLabel value="10" control={<Radio />} />10</Col>
                                        <Col xs={24} md={24} xl={6}><FormControlLabel value="9" control={<Radio />} />9</Col>  
                                    </Col>
                                </Row>
                                <Row id="row-header-form2">
                                    <Col xs={24} md={12} xl={12} style={{borderTop: "none"}}>อาจจะใช้บริการซ้ำหรือไม่ใช้บริการ / อาจจะแนะนำหรือไม่แนะนำ : Would recommend</Col> 
                                    <Col xs={24} md={12} xl={12} id="Promoter-radio">
                                        <Col xs={24} md={24} xl={24}><FormControlLabel value="8" control={<Radio />} />8</Col>
                                        <Col xs={24} md={24} xl={24}><FormControlLabel value="7" control={<Radio />} />7</Col>  
                                    </Col>
                                </Row>
                                <Row id="row-header-form2">
                                    <Col xs={24} md={12} xl={12}>อาจจะใช้บริการซ้ำ หรือไม่ใช้บริการ / อาจจะแนะนำหรือไม่แนะนำ Would not recommend</Col> 
                                    <Col xs={24} md={12} xl={12} id="Promoter-radio">
                                        <Col xs={24} md={24} xl={24}><FormControlLabel value="6" control={<Radio />} />6</Col>
                                        <Col xs={24} md={24} xl={24}><FormControlLabel value="5" control={<Radio />} />5</Col>
                                        <Col xs={24} md={24} xl={24}><FormControlLabel value="4" control={<Radio />} />4</Col>
                                        <Col xs={24} md={24} xl={24}><FormControlLabel value="3" control={<Radio />} />3</Col>
                                        <Col xs={24} md={24} xl={24}><FormControlLabel value="2" control={<Radio />} />2</Col>
                                        <Col xs={24} md={24} xl={24}><FormControlLabel value="1" control={<Radio />} />1</Col>  
                                    </Col>
                                </Row>
                            </RadioGroup> 
                        </Col> 
                    </Row> 

                    <Row id="row-form">
                        <Col xs={24} md={12} xl={12} id="kate">เกณฑ์การประเมิน Criteria</Col>
                        <Col xs={0} md={12} xl={12}>
                            <Row>
                                <Col span={6}>
                                    <Col xs={0} md={24} xl={24} id="choice-score">มากที่สุด</Col> 
                                    <Col xs={0} md={24} xl={24} id="choice-score">Very Good</Col>
                                </Col>  
                                <Col span={6}>
                                    <Col xs={0} md={24} xl={24} id="choice-score">มาก</Col> 
                                    <Col xs={0} md={24} xl={24} id="choice-score">Good</Col> 
                                </Col>
                                <Col span={6}>
                                    <Col xs={0} md={24} xl={24} id="choice-score">ปานกลาง</Col> 
                                    <Col xs={0} md={24} xl={24} id="choice-score">Average</Col>
                                </Col> 
                                <Col span={6}>
                                    <Col xs={0} md={24} xl={24} id="choice-score">ต้องปรับปรุง</Col> 
                                    <Col xs={0} md={24} xl={24} id="choice-score">Be Improved</Col>
                                </Col>                      
                            </Row>
                        </Col>
                    </Row>
                    <Row id="row-form">
                        <Col xs={24} md={12} xl={12}>
                            <Row>
                                <Col xs={24} md={24} xl={18}>3. เจ้าหน้าที่ให้บริการอย่างเอาใจใส่ รวดเร็ว และให้บริการด้วยความเต็มใจ / </Col>
                                <Col xs={24} md={24} xl={6}>Service minded</Col>
                            </Row>
                        </Col>
                        <Col xs={24} md={0} xl={0}>
                            <Row>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(4)</Col>
                                </Col>  
                                <Col span={6}> 
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(3)</Col>
                                </Col>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(2)</Col> 
                                </Col> 
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(1)</Col> 
                                </Col>                      
                            </Row>
                        </Col>
                        <Col xs={24} md={12} xl={12}>
                            <RadioGroup aria-label="gender" name="gender1" value={this.state.source15} onChange={this.onChange15}>
                                <Row>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="4" control={<Radio />}  />
                                    </Col>  
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="3" control={<Radio />}  />
                                    </Col>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="2" control={<Radio />} />
                                    </Col> 
                                    <Col xs={6} md={6} xl={6} id="row-radio"s>
                                        <FormControlLabel value="1" control={<Radio />} />
                                    </Col>                      
                                </Row>
                            </RadioGroup>
                        </Col>
                    </Row>
                    <Row id="row-form">
                        <Col xs={24} md={12} xl={12}>
                            <Row>
                                <Col xs={24} md={24} xl={14}>4. คุณภาพของงานที่ส่งมอบถูกต้อง ครบถ้วน และทันเวลา /</Col>
                                <Col xs={24} md={24} xl={6}> Quality of the work </Col>
                            </Row>
                        </Col>
                        <Col xs={24} md={0} xl={0}>
                            <Row>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(4)</Col>
                                </Col>  
                                <Col span={6}> 
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(3)</Col>
                                </Col>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(2)</Col> 
                                </Col> 
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(1)</Col> 
                                </Col>                      
                            </Row>
                        </Col>
                        <Col xs={24} md={12} xl={12}>
                            <RadioGroup aria-label="gender" name="gender1" value={this.state.source16} onChange={this.onChange16}>
                                <Row>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="4" control={<Radio />}  />
                                    </Col>  
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="3" control={<Radio />}  />
                                    </Col>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="2" control={<Radio />} />
                                    </Col> 
                                    <Col xs={6} md={6} xl={6} id="row-radio"s>
                                        <FormControlLabel value="1" control={<Radio />} />
                                    </Col>                      
                                </Row>
                            </RadioGroup>
                        </Col>
                    </Row>
                    <Row id="row-form">
                        <Col xs={24} md={12} xl={12}>
                            <Row>
                                <Col xs={24} md={24} xl={14}>5. เจ้าหน้าที่ที่ให้บริการมีความรู้ และทักษะในการให้บริการ /</Col>
                                <Col xs={24} md={24} xl={8}> Competence to the services</Col>
                            </Row>
                        </Col>
                        <Col xs={24} md={0} xl={0}>
                            <Row>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(4)</Col>
                                </Col>  
                                <Col span={6}> 
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(3)</Col>
                                </Col>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(2)</Col> 
                                </Col> 
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(1)</Col> 
                                </Col>                      
                            </Row>
                        </Col>
                        <Col xs={24} md={12} xl={12}>
                            <RadioGroup aria-label="gender" name="gender1" value={this.state.source17} onChange={this.onChange17}>
                                <Row>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="4" control={<Radio />}  />
                                    </Col>  
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="3" control={<Radio />}  />
                                    </Col>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="2" control={<Radio />} />
                                    </Col> 
                                    <Col xs={6} md={6} xl={6} id="row-radio"s>
                                        <FormControlLabel value="1" control={<Radio />} />
                                    </Col>                      
                                </Row>
                            </RadioGroup>
                        </Col>
                    </Row>
                    <Row id="row-form">
                        <Col xs={24} md={12} xl={12}>
                            <Row>
                                <Col xs={24} md={24} xl={13}>6. ขั้นตอนมีความชัดเจนและสะดวกในการใช้บริการ /</Col>
                                <Col xs={24} md={24} xl={8}>Clear process and work system</Col>
                            </Row>
                        </Col>
                        <Col xs={24} md={0} xl={0}>
                            <Row>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(4)</Col>
                                </Col>  
                                <Col span={6}> 
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(3)</Col>
                                </Col>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(2)</Col> 
                                </Col> 
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(1)</Col> 
                                </Col>                      
                            </Row>
                        </Col>
                        <Col xs={24} md={12} xl={12}>
                            <RadioGroup aria-label="gender" name="gender1" value={this.state.source18} onChange={this.onChange18}>
                                <Row>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="4" control={<Radio />}  />
                                    </Col>  
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="3" control={<Radio />}  />
                                    </Col>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="2" control={<Radio />} />
                                    </Col> 
                                    <Col xs={6} md={6} xl={6} id="row-radio"s>
                                        <FormControlLabel value="1" control={<Radio />} />
                                    </Col>                      
                                </Row>
                            </RadioGroup>
                        </Col>
                    </Row>
                    <Row id="row-form">
                        <Col xs={24} md={12} xl={12}>
                            <Row>
                                <Col xs={24} md={24} xl={7}>7. ความพึงพอใจโดยรวม /</Col>
                                <Col xs={24} md={24} xl={8}> Overall satisfaction</Col>
                            </Row>
                        </Col>
                        <Col xs={24} md={0} xl={0}>
                            <Row>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(4)</Col>
                                </Col>  
                                <Col span={6}> 
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(3)</Col>
                                </Col>
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(2)</Col> 
                                </Col> 
                                <Col span={6}>
                                    <Col xs={24} md={0} xl={0} id="choice-score1">(1)</Col> 
                                </Col>                      
                            </Row>
                        </Col>
                        <Col xs={24} md={12} xl={12}>
                            <RadioGroup aria-label="gender" name="gender1" value={this.state.source19} onChange={this.onChange19}>
                                <Row>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="4" control={<Radio />}  />
                                    </Col>  
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="3" control={<Radio />}  />
                                    </Col>
                                    <Col xs={6} md={6} xl={6} id="row-radio">
                                        <FormControlLabel value="2" control={<Radio />} />
                                    </Col> 
                                    <Col xs={6} md={6} xl={6} id="row-radio"s>
                                        <FormControlLabel value="1" control={<Radio />} />
                                    </Col>                      
                                </Row>
                            </RadioGroup>
                        </Col>
                    </Row>

                    <Row id="row-header-choice1">ข้อเสนอแนะอื่นๆ Other comments / suggestions</Row>
                    <Row id="textxarea-input"><TextArea rows={2} id="row-placeholder" placeholder="โปรดกรอกข้อเสนอแนะเพิ่มเติม" /></Row>

                    <Row xs={24} md={24} xl={24} id="row-thank">ขอขอบคุณสำหรับความร่วมมือในการกรอกแบบประเมิน</Row>
                    <Row xs={24} md={24} xl={24} id="row-thank" style={{ paddingBottom: "3%" }}>Thank you for your cooperation to complete the evaluation form.</Row>
                </Form>
            </Container>
        )
    }

}