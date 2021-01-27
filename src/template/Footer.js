import React, { Component } from "react";
import { Container } from 'react-bootstrap';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Container fluid>
                <div>Test Footer</div>
            </Container>
        )
    }
}

