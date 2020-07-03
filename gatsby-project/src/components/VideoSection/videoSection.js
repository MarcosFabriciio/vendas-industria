import React from 'react';
import Video from '../Video/video.js';
import { Container, Col, Row } from 'react-bootstrap'
import './videoSection.css'

function VideoSection() {
  return (
      <Container fluid>
        <Row>
            <Col className="justify-content-md-center" md={{ span: 5, offset: 4 }}>
                <div className='red-title'>
                    <h3>Quer aprender a vender todo dia?</h3>
                </div>
            </Col>
        </Row>
        <Row>
            <Col className="justify-content-md-center" md={{ span: 10, offset: 1 }}>
                <div className="big-title">
                    Todo dia, Toda semana, Todo mês
                </div>
            </Col>
        </Row>
        <Row>
            <Col className="justify-content-md-center" md={{ span: 10, offset: 1 }}>
                <div className="second-title">
                    <h2>
                        Você precisa conhecer nossa metodologia exclusiva de vendas
                    </h2>
                </div>
            </Col>
        </Row>
        <Row>
            <Col className="justify-content-md-center" md={{ span: 6, offset: 2 }}>
                <Video />
            </Col>
        </Row>
      </Container>
  );
}

export default VideoSection;
