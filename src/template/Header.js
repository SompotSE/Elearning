import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { withRouter } from "react-router-dom";

export default withRouter(class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }

    render() {
        return (
            <Container fluid>
                <div>Test Header</div>
            </Container>
        )
    }
})