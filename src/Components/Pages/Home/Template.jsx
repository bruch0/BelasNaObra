import React from "react";
import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import { AiOutlineArrowRight } from "react-icons/ai";
import "react-slideshow-image/dist/styles.css";

function Template({ viewportWidth, logo, slides, name }) {
  const fadeProperties = {
    duration: 2000,
    transitionDuration: 500,
    slidesToShow: viewportWidth < 1150 ? (viewportWidth < 600 ? 1 : 2) : 3,
    slidesToScroll: 1,
    canSwipe: false,
  };

  return (
    <TemplateSection>
      <Title>
        <Icon src={logo} />
        <div>{name}</div>
      </Title>
      {name === "Projetos" ? (
        <>
          <span>O básico inclui:</span>
          <ul>
            <li>
              <AiOutlineArrowRight /> Planta baixa
            </li>
            <li>
              <AiOutlineArrowRight /> Elétrica
            </li>
            <li>
              <AiOutlineArrowRight /> Hidráulica
            </li>
            <li>
              <AiOutlineArrowRight /> Revestimento
            </li>
            <li>
              <AiOutlineArrowRight /> Gesso
            </li>
            <li>
              <AiOutlineArrowRight /> Pintura
            </li>
            <li>
              <AiOutlineArrowRight /> Consultoria (referencias)
            </li>
            <li>
              <AiOutlineArrowRight /> Layout dos móveis (posição)
            </li>
          </ul>
          <span>Já o completo, é tudo do primeiro e mais:</span>
          <ul>
            <li>
              <AiOutlineArrowRight /> - 3D do projeto (onde você o visualiza
              melhor) - ⁠cortes , elevações
            </li>
            <li>
              <AiOutlineArrowRight /> Detalhes de marcenaria (para detalhar um
              móvel , pontos de luz e outros)
            </li>
          </ul>
        </>
      ) : (
        ""
      )}
      <SlideshowContainer>
        <Slide {...fadeProperties}>
          {slides
            ? slides.map((slide, index) => (
                <SlideImg slide={slide} alt="foto" key={index} />
              ))
            : ""}
        </Slide>
      </SlideshowContainer>
    </TemplateSection>
  );
}

const TemplateSection = styled.div`
  width: 100%;
  padding: 2.5% 5%;

  p {
    font-size: 30px;
    color: #646262;
    padding: 1.5% 0px 1.5% 330px;

    @media (max-width: 450px) {
      font-size: 5vw;
    }
  }

  span {
    font-size: 25px;
    color: #646262;
    padding: 1.5% 0px 1.5% 330px;

    @media (max-width: 450px) {
      font-size: 5vw;
    }
  }

  ul {
    padding: 1.5% 0px 1.5% 330px;
  }

  li {
    margin-bottom: 15px;
    font-size: 20px;
  }

  @media (max-width: 800px) {
    ul,
    p,
    span {
      padding: 1.5% 0px 1.5% 50%;
    }
  }

  @media (max-width: 600px) {
    ul,
    p,
    span {
      padding: 1.5% 0px 1.5% 10%;
    }
    padding: 5%;
  }
`;

const Title = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  font-size: 30px;
  color: #646262;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 15px 15px 0px 0px;
  margin-bottom: 15px;

  svg {
    height: 30px;
  }

  @media (max-width: 600px) {
    padding-left: 5px;
    display: flex;
    align-items: center;
  }

  @media (max-width: 450px) {
    font-size: 5vw;
  }
`;

const Icon = styled.img`
  height: 40px;
  width: 40px;
  margin: 0px 10px 5px 10px;
`;

const SlideshowContainer = styled.div`
  width: 100%;
  height: 700px;
  border: 1px solid #dbdbdb;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0px 4px 4px 0px #00000040;
  overflow: hidden;

  .react-slideshow-container,
  .react-slideshow-fade-wrapper {
    width: 100%;
    height: 700px;
  }

  div {
    z-index: 0;
  }

  .default-nav {
    background-color: rgba(0, 0, 0, 0.4);
    height: 70px;
    z-index: 1;

    :hover {
      background-color: rgba(0, 0, 0, 0.4);
    }

    :focus {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }

  .default-nav:nth-of-type(1) {
    border-radius: 0px 10px 10px 0px;
  }

  .default-nav:nth-of-type(2) {
    border-radius: 10px 0px 0px 10px;
    margin-left: -31px;
  }

  svg {
    color: white;
  }

  @media (max-width: 800px) {
    .react-slideshow-container,
    .react-slideshow-fade-wrapper {
      height: 600px;
    }
  }
`;

const SlideImg = styled.div`
  width: 100%;
  height: 800px;
  background-image: ${(props) => (props.slide ? `url(${props.slide})` : "")};
  background-size: cover;
  background-position: center;
  border-right: 1px solid black;

  @media (max-width: 600px) {
    border: none;
  }
`;

export default Template;
