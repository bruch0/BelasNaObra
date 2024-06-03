import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import styled from "styled-components";
import { AiOutlineWhatsApp } from "react-icons/ai";
import logo from "../assets/logo2.png";

function Header() {
  const history = useHistory();

  const textWhatsApp = encodeURI(
    "Oi, eu acessei o site de vocês, podem me ajudar?"
  );

  return (
    <PageHeader>
      <Container>
        <QuickLinks>
          <a
            onClick={() => {
              history.push("/sobre");
              window.scrollTo(0, 0);
            }}
          >
            Sobre nós
          </a>
          <a
            tabIndex={0}
            onClick={() => {
              if (history.location.pathname !== "/") {
                history.push("/");
              } else {
                scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }
            }}
          >
            Serviços
          </a>
          <Link to="/calculadora">Calculadora</Link>
        </QuickLinks>
        <Contact
          tabIndex={0}
          onClick={() => {
            if (history.location.pathname !== "/") {
              history.push("/");
            }
            setTimeout(
              () => scrollTo({ top: 7500, left: 0, behavior: "smooth" }),
              1
            );
          }}
        >
          Contato
        </Contact>
        <Logo
          tabIndex={0}
          src={logo}
          alt="Logo/suba para o topo da tela"
          onClick={() => {
            if (history.location.pathname !== "/") {
              history.push("/");
            } else {
              scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }
          }}
        />
        <Title>Mão de obra feminina</Title>
      </Container>
      <LinkWhatsApp2
        href={`https://wa.me/5511993100778?text=${textWhatsApp}`}
        target="_blank"
      >
        <AiOutlineWhatsApp />
        <WhatsApp>Entre em contato no Whatsapp</WhatsApp>
      </LinkWhatsApp2>
    </PageHeader>
  );
}

const PageHeader = styled.header`
  width: 100%;
  height: 150px;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
  box-shadow: 0px 4px 4px 0px #00000013;

  @media (max-width: 600px) {
    height: 100px;
  }
`;

const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    align-items: center;
    width: 100%;
  }
`;

const QuickLinks = styled.div`
  display: flex;
  height: 30px;
  position: absolute;
  top: 20px;
  left: 30px;
  font-family: "Spartan", sans-serif;

  * {
    margin-right: 25px;
    cursor: pointer;
  }

  @media (max-width: 800px) {
    height: 55px;
    flex-direction: column;
    justify-content: space-between;
  }
  @media (max-width: 550px) {
    top: 5px;
    left: 5px;
  }
  @media (max-width: 320px) {
    font-size: 12px;
  }
`;

const Contact = styled.a`
  position: absolute;
  font-family: "Spartan", sans-serif;
  top: 20px;
  right: 30px;
  cursor: pointer;

  @media (max-width: 550px) {
    top: 5px;
    right: 5px;
  }
`;

const Logo = styled.img`
  width: 130px;
  border-radius: 25px;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 80px;
    height: 60px;
  }

  @media (max-width: 300px) {
    width: 60px;
    height: 48px;
  }
`;

const Title = styled.p`
  font-size: 18px;
  color: #646262;
  font-weight: bold;
  font-family: "Spartan", sans-serif;

  @media (max-width: 400px) {
    font-size: 15px;
  }
`;

const LinkWhatsApp2 = styled.a`
  display: flex;
  position: fixed;
  top: 80px;
  right: 20px;
  height: 50px;
  width: fit-content;
  align-items: center;
  padding: 8px;
  background-color: #25e625;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  svg {
    height: 35px;
    width: 35px;
    fill: white;
  }
`;

const WhatsApp = styled.p`
  color: white;
`;

export default Header;
