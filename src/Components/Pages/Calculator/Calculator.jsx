import React from "react";
import { useState } from "react";
import styled from "styled-components";
import ServiceHolder from "./ServiceHolder";
import { calculate } from "./result";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

function Calculator() {
  const [demolition, setDemolition] = useState({
    enabled: false,
    value: [],
    qty: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    price: 0,
  });
  const [construction, setConstruction] = useState({
    enabled: false,
    value: [],
    qty: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    price: 0,
  });
  const [hidraulics, setHidraulics] = useState({
    enabled: false,
    value: 0,
    dropdown: false,
    price: 0,
  });
  const [eletric, setEletric] = useState({
    enabled: false,
    value: 0,
    dropdown: false,
    price: 0,
  });
  const [cladding, setCladding] = useState({
    enabled: false,
    value: [],
    qty: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    price: 0,
  });
  const [painting, setPainting] = useState({
    enabled: false,
    value: [],
    qty: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    price: 0,
  });
  const [area, setArea] = useState("");

  calculate(
    demolition,
    construction,
    hidraulics,
    eletric,
    cladding,
    painting,
    area
  );

  const total =
    demolition.price +
    construction.price +
    eletric.price +
    hidraulics.price +
    cladding.price +
    painting.price;

  const services = [
    { name: "Demolição", state: demolition, setState: setDemolition },
    { name: "Construção", state: construction, setState: setConstruction },
    {
      name: "Hidráulica",
      state: hidraulics,
      setState: setHidraulics,
      numbered: true,
    },
    { name: "Elétrica", state: eletric, setState: setEletric, numbered: true },
    { name: "Revestimento", state: cladding, setState: setCladding },
    { name: "Pintura", state: painting, setState: setPainting },
  ];

  const rooms = [
    "Quarto",
    "Suíte",
    "Sala",
    "Cozinha",
    "Área de serviço",
    "Terraço",
    "Corredor",
    "Banheiro",
    "Lavabo",
  ];

  const handleServices = (index, state, setState, action) => {
    if (action !== undefined) {
      if (state.dropdown !== undefined) {
        setState({
          enabled: action === "uncheck" ? false : true,
          value: action === "uncheck" ? 0 : 1,
          dropdown: false,
          price: 0,
        });
      } else if (state !== undefined) {
        setState({
          enabled: action === "uncheck" ? false : true,
          value: [],
          qty: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          price: 0,
        });
      }
    } else {
      if (state.value.indexOf(index) !== -1) {
        let indexOnState = state.value.indexOf(index);
        let newQty = state.qty;
        state.value.splice(indexOnState, 1);
        newQty[index] = 0;
        setState({
          enabled: true,
          value: [...state.value],
          qty: newQty,
          price: 0,
        });
      } else {
        setState({
          enabled: true,
          value: [...state.value, index],
          qty: state.qty,
          price: 0,
        });
        state.qty[index] = 1;
      }
    }
  };

  const testRegex = (key) => {
    return /^[0-9]+$/.test(key);
  };

  const handleInput = (keyboard) => {
    if (keyboard.target.value.toString().length > 11) {
      return;
    } else if (keyboard.target.value.indexOf(".") !== -1) {
      let fixedValue =
        keyboard.target.value.split(".")[0] +
        keyboard.target.value.split(".")[1];
      setArea(fixedValue);
    } else if (keyboard.target.value.indexOf("-") !== -1) {
      let fixedValue =
        keyboard.target.value.split("-")[0] +
        keyboard.target.value.split("-")[1];
      setArea(fixedValue);
    } else if (keyboard.target.value.indexOf("+") !== -1) {
      let fixedValue =
        keyboard.target.value.split("+")[0] +
        keyboard.target.value.split("+")[1];
      setArea(fixedValue);
    } else if (
      testRegex(keyboard.data) ||
      keyboard.inputType === "deleteContentBackward" ||
      keyboard.inputType === "deleteContentForward"
    ) {
      setArea(keyboard.target.value);
    }
  };

  const contacts = [
    {
      name: "belasnaobra@gmail.com",
      icon: <FiMail />,
      ref: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=someone@gmail.com",
    },
    {
      name: "WhatsApp",
      icon: <AiOutlineWhatsApp />,
      ref: "https://wa.me/5511993100778?text=Ol%C3%A1!%20Fiz%20um%20or%C3%A7amento%20pelo%20seu%20site,%20gostaria%20de%20mais%20detalhes!",
    },
    {
      name: "@belasnaobra",
      icon: <AiOutlineInstagram />,
      ref: "https://www.instagram.com/belasnaobra/",
    },
  ];

  return (
    <CalculatorSection>
      <Title>
        Calculadora
        <UserAreaInput
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Insira a área total em m²"
          value={area}
          onChange={(change) => {
            handleInput(change.nativeEvent);
          }}
        />
      </Title>
      <UserInputs enabled={area !== "" && Number(area) !== 0 ? 1 : 0}>
        {services.map((service, index) => {
          return (
            <ServiceHolder
              key={index}
              service={service}
              isNumbered={service.numbered}
              isSelected={service.state.enabled}
              handleServices={handleServices}
              rooms={rooms}
            />
          );
        })}
      </UserInputs>
      <Total enabled={area !== "" && Number(area) !== 0 && total !== 0 ? 1 : 0}>
        TOTAL
        <UserAreaInput
          readOnly={true}
          value={total < 1500 ? "R$ 1500" : `R$ ${total}`}
        />
      </Total>
      <PriceTitle
        enabled={area !== "" && Number(area) !== 0 && total !== 0 ? 1 : 0}
      >
        Quer um orçamento mais detalhado? Entre em contato com a gente
      </PriceTitle>
      {contacts.map((contact, index) => {
        return (
          <Holder
            href={contact.ref}
            target="_blank"
            enabled={area !== "" && Number(area) !== 0 && total !== 0 ? 1 : 0}
            key={index}
          >
            <Icon alt={contact.name}>{contact.icon}</Icon>
            <span>{contact.name}</span>
          </Holder>
        );
      })}
    </CalculatorSection>
  );
}

const CalculatorSection = styled.section`
  width: 100%;
  padding: 5%;
  margin-top: 150px;
  position: relative;
`;

const Title = styled.div`
  width: 100%;
  height: 60px;
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  border-radius: 15px 15px 0px 0px;

  @media (max-width: 450px) {
    font-size: 30px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const UserAreaInput = styled.input`
  width: 200px;
  height: 100%;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  text-align: center;
  border: 1px solid #dbdbdb;

  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 15px;
  }

  @media (max-width: 600px) {
    width: 210px;
  }
`;

const UserInputs = styled.div`
  width: 100%;
  display: ${(props) => (props.enabled ? "flex" : "none")};
  flex-direction: column;
  margin: 30px 0px 0px 0px;
  font-size: 20px;

  svg {
    cursor: pointer;
    margin-left: 0px;
  }
`;

const Total = styled.div`
  width: 100%;
  height: 60px;
  font-size: 30px;
  display: ${(props) => (props.enabled ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  padding-left: calc(50% - 50px);
  border-radius: 15px 15px 0px 0px;

  svg {
    height: 30px;
  }

  @media (max-width: 600px) {
    font-size: 30px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const PriceTitle = styled.div`
  width: 100%;
  height: 60px;
  font-size: 30px;
  display: ${(props) => (props.enabled ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  border-radius: 15px 15px 0px 0px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const Holder = styled.a`
  margin-top: 10px;
  display: ${(props) => (props.enabled ? "flex" : "none")};
  align-items: center;
  cursor: pointer;

  :hover {
    p {
      background-color: ${(props) => (props.color ? "#5ae0e0" : "")};
    }
  }
`;

const Icon = styled.p`
  font-weight: bold;
  color: pink;
  border: 0px;
  padding: 0px;
  border-radius: 50px;
  cursor: pointer;
  margin-right: 10px;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export default Calculator;
