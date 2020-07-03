import React from 'react';
import Video from '../Video/video.js';
import { Container, Col, Row } from 'react-bootstrap'
import './videoSection.css'

function VideoSection() {
  return (
      <Container fluid>
        <Row>
            <Col></Col>
            <Col className="justify-content-md-center" xs={5}>
                <div className='red-title'>
                    <h3>Quer aprender a vender todo dia?</h3>
                </div>
            </Col>
            <Col></Col>
        </Row>
        <Row className='spaced-row'>
            <Col></Col>
            <Col className="justify-content-md-center" xs={10}>
                <div className="big-title">
                    Todo dia, Toda semana, Todo mês
                </div>
            </Col>
            <Col></Col>
        </Row>
        <Row className='spaced-row'>
            <Col></Col>
            <Col className="justify-content-md-center" xs={9}>
                <div className="second-title">
                    <h2>
                        Você precisa conhecer nossa metodologia exclusiva de vendas
                    </h2>
                </div>
            </Col>
            <Col></Col>
        </Row>
        <Row className='video-player vender-background'>
            <Col>
            </Col>
            <Col className="justify-content-md-center" xs={8}>
                <Video />
            </Col>
            <Col>
            </Col>
        </Row>
      </Container>
  );
}

export default VideoSection;
