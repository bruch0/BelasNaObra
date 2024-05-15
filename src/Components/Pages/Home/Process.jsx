import React from "react";
import styled from "styled-components";

function Process() {
  const processes = [
    "Contate-nos através do whatsapp para um orçamento personalizado",
    "Nos informe se você quer um projeto, obra, ou ambos",
    "Receba seu orçamento e orçamentos de terceiros",
    "Liberação de documentos e contrato",
    "Inicio da obra com cronograma e prazo",
    "Conclusão, limpeza e entrega da obra",
  ];

  return (
    <ProcessSection>
      <Title>Como funciona?</Title>
      <Processes>
        {processes.map((process, index) => {
          return (
            <ProcessCard key={index}>
              <p>{process}</p>
            </ProcessCard>
          );
        })}
      </Processes>
    </ProcessSection>
  );
}

const ProcessSection = styled.section`
  width: 100%;
  padding: 0px 5%;
  margin-bottom: 50px;
`;

const Title = styled.p`
  width: 100%;
  height: 60px;
  font-size: 30px;
  margin-top: 200px;

  @media (max-width: 600px) {
    margin-top: 120px;
    font-size: 30px;
  }

  @media (max-width: 320px) {
    font-size: 25px;
    height: 35px;
  }
`;

const Processes = styled.ol`
  width: 100%;
  list-style: none;
`;

const ProcessCard = styled.li`
  width: calc(100% - 40px);
  padding: 0;
  display: flex;
  align-items: center;
  margin: 0px 0px 20px 0px;
  padding: 5px;
  vertical-align: middle;
  font-size: 1.4vw;
  position: relative;

  :first-child {
    counter-reset: index;
  }

  :before {
    content: counter(index);
    counter-increment: index;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 50%;
    background: #fb8095;
    margin-right: 5px;
    text-align: center;
    color: white;
    font-size: 25px;
    line-height: 28px;
    font-weight: bold;
  }

  @media (max-width: 900px) {
    font-size: 2vw;
  }

  @media (max-width: 600px) {
    align-items: flex-start;
    width: 100%;
    font-size: 4vw;

    :before {
      width: 10vw;
      height: 10vw;
      font-size: 20px;
      line-height: 20px;
      font-weight: bold;
    }
  }
`;

export default Process;
