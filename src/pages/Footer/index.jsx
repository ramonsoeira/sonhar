<<<<<<< HEAD
import React from "react";
import {
  RodapeContainer,
  FollowUs,
  RowStyled,
  RowStyledLinks,
  ColLinks,
  Icon,
  Divider,
  StyledLinks,
  Adress,
  RowAdress,
  LogoSonhar,
  Copyright,
  Social,
} from "./style";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { Row, Col, Container } from "react-bootstrap";
import SonharLogo from '../../images/2Logo-Sonhar.svg'

export default function Footer() {
  return (
    <RodapeContainer>
        <Container fluid>
          <RowStyled padding={19}>
            <FollowUs>Siga nossas redes</FollowUs>
            <Icon>
              <FaFacebookSquare icon-4x />
            </Icon>
            <Icon>
              <FiInstagram />
            </Icon>
          </RowStyled>
          <Row>
            <Col>
              <Divider />
            </Col>
          </Row>
          <RowStyledLinks padding={19}>
            <ColLinks xs={12} sm={2}>
              <StyledLinks to="/sobre">O Instituto</StyledLinks>
            </ColLinks>
            <ColLinks xs={12} sm={2}>
              <StyledLinks to="/atendimento">Atendimento</StyledLinks>
            </ColLinks>
            <ColLinks xs={12} sm={2}>
              <StyledLinks to="">Estatuto</StyledLinks>
            </ColLinks>
            <ColLinks xs={12} sm={2}>
              <StyledLinks to="/como-ajudar">Como ajudar?</StyledLinks>
            </ColLinks>
            <ColLinks xs={12} sm={2}>
              <StyledLinks to="/doar">Doe</StyledLinks>
            </ColLinks>
          </RowStyledLinks>
        
      
        <RowAdress padding={24.5}>
          <Adress>Endereço: Rua dos Rubis, 144 sala 315 Rocha Miranda – Rio de Janeiro – RJ – Cep: 21.510-013
          Telefone: 55 (21) 9 8773-1916/ 9 8621-5069 – CNPJ 35.807.142/0001-40</Adress>
        </RowAdress>
        <LogoSonhar src={SonharLogo} alt="" />
        <Copyright>
          Todos os direitos reservados
        </Copyright>
      </Container>
    </RodapeContainer>
  );
}
=======
import React from "react";
import {
  RodapeContainer,
  CentralContainer,
  FollowUs,
  RowStyled,
  ContainerStyled,
  ColLinks,
  Icon,
  Divider,
  StyledLinks,
  Adress,
  RowAdress,
  LogoSonhar,
  Copyright,
  CopyrightContainer,
  Social,
} from "./style";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { Row, Col, Container } from "react-bootstrap";
import SonharLogo from '../../images/2Logo-Sonhar.svg'

export default function Footer() {
  return (
    <RodapeContainer>
      <CentralContainer>
        <RowStyled>
          <FollowUs>Siga nossas redes</FollowUs>
          <Icon>
            <Social href="https://www.facebook.com/institutoepossivelsonhar/">
              <FaFacebookSquare
                icon-4x
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/institutoepossivelsonhar/"
                  )
                }
              />
            </Social>
          </Icon>
          <Icon>
            <Social href="https://www.instagram.com/institutoepossivelsonhar/">
              <FiInstagram
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/institutoepossivelsonhar/"
                  )
                }
              />
            </Social>
          </Icon>
        </RowStyled>
        <Row>
          <Col>
            <Divider />
          </Col>
        </Row>
        <ContainerStyled fluid>
          <Row>
            <ColLinks xs={12} sm={2}>
              <StyledLinks to='/sobre'>O Instituto</StyledLinks>
            </ColLinks>
            <ColLinks xs={12} sm={3} to='/atendimento'>
              <StyledLinks>Atendimento</StyledLinks>
            </ColLinks>
            <ColLinks xs={12} sm={2} to='/'>
              <StyledLinks>Estatuto</StyledLinks>
            </ColLinks>
            <ColLinks xs={12} sm={3} to='/como-ajudar'>
              <StyledLinks>Como ajudar?</StyledLinks>
            </ColLinks>
            <ColLinks xs={12} sm={2} to='/denuncie'>
              <StyledLinks>Denuncie</StyledLinks>
            </ColLinks>
          </Row>
        </ContainerStyled>
        <RowAdress>
          <Col>
            <Adress>Endereço: Rua dos Rubis, 144 sala 315 Rocha Miranda – Rio de Janeiro – RJ – Cep: 21.510-013
                Telefone: 55 (21) 9 8773-1916/ 9 8621-5069 – CNPJ 35.807.142/0001-40</Adress>
          </Col>
        </RowAdress>
        <LogoSonhar>
          <img src={SonharLogo} />
        </LogoSonhar>
        <CopyrightContainer>
          <Copyright>
            Todos os direitos reservados
          </Copyright>
        </CopyrightContainer>
      </CentralContainer>
    </RodapeContainer>
  );
}
>>>>>>> origin/feature/testimonyText
