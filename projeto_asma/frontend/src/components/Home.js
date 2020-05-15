import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import AtendenteList from "./AtendenteList";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    atendentes: []
  };

  componentDidMount() {
    this.resetState();
  }

  getAtendentes = () => {
    axios.get(API_URL).then(res => this.setState({ atendentes: res.data }));
  };

  resetState = () => {
    this.getAtendentes();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <AtendenteList
              atendentes={this.state.atendentes}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;