import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap'
import './problemas.css'

function ProblemaSection() {
  return (
      <Container fluid>
        <Row className='spaced-row'>
            <Col></Col>
            <Col className="justify-content-md-center" xs={10}>
                <div className="big-title">
                    Você possuí esses problemas?
                </div>
            </Col>
            <Col></Col>
        </Row>
        <Row className='spaced-row'>
            <Col></Col>
            <Col className="justify-content-md-center" xs={9}>
                <div className="second-title">
                    <h2>
                        Nosso curso ensina a você sair deles
                    </h2>
                </div>
            </Col>
            <Col></Col>
        </Row>
        <Row className='spaced-row'>
            <Col></Col>
            <Col className="justify-content-md-center" xs={9}>
                <div className="lista-problemas">
                    <ul>
                        <li>
                            Você está tendo dificuldades em conseguir novos clientes potenciais?
                        </li>
                        <li>
                            Não sabe como acompanhar os trabalhos do seu departamento comercial?
                        </li>
                        <li>
                            Tem dificuldade em treinar os vendedores e os gerentes comerciais?
                        </li>
                        <li>
                            O departamento comercial da sua empresa não tem um processo bem definido de trabalho?
                        </li>
                        <li>
                            Tem dificuldade em abrir canais de vendas?
                        </li>
                        <li>
                            Tem dificuldade em ter alta performance de vendas nos seus canais?
                        </li>
                        <li>
                            Quer ter um gerente comercial de alto desempenho e não esta conseguindo?
                        </li>
                        <li>
                            Tem dificuldade em criar script de vendas?
                        </li>
                        <li>
                            Não sabe como se diferenciar da concorrência?
                        </li>
                        <li>
                            Tem dificuldades em demonstrar os ganhos com o uso de seu produto ou serviço?
                        </li>
                        <li>
                            Não sabe como definir metas de vendas coerentes?
                        </li>
                        <li>
                            Quer abrir canais no exterior, porém, não sabe como fazê-lo?
                        </li>
                        <li>
                            Não sabe como gerenciar esses canais para trazer resultados toda semana?
                        </li>
                    </ul>
                </div>
            </Col>
            <Col></Col>
        </Row>
        <Row>
            <Col></Col>
            <Col className="justify-content-md-center" xs={5}>
                <Button className="problemas-button">
                    Sim, quero marcar uma conversa agora!
                </Button>
            </Col>
            <Col></Col>
        </Row>
      </Container>
  );
}

export default ProblemaSection;
