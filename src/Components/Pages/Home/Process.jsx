import React from "react";
import styled from "styled-components";
import { AiOutlineArrowRight } from 'react-icons/ai'

function Process() {
	const processes = [
		'Entre em contato por whatsapp ou email e solicite um orçamento: sendo previsto pela calculadora ou com um consultor', 'Nos diga se quer contratar apenas a mão de obra ou se precisa de um projeto', 'Indicaremos entre o projeto básico e o completo com um de nossos arquitetos parceitos através do seu estilo', 'Indicaremos forcenedores, podendo também ser acompanhados outros de fora', 'Iniciaremos a obra com documentação e prazos em cronograma', 'Conclusão da obra e limpeza'
	]
	
	return (
		<ProcessSection>
		<Title>
			Como funciona?
		</Title>
		<Processes>
			{processes.map((process, index) => {
				return (
					<ProcessCard key={index}>
						<AiOutlineArrowRight />
						<p>{process}</p>
					</ProcessCard>
				)
			})}
		</Processes>
		</ProcessSection>
	)
}

const ProcessSection = styled.section`
	width: 100%;
	padding: 0px 5%;
	margin-bottom: 50px;
`

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
`

const Processes = styled.section`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	gap: 4%;

	@media (max-width: 600px) {
		grid-template-columns: repeat(2, 1fr);
	}
`

const ProcessCard = styled.div`
	width: 100%;
	height: 12vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	background-color: #FFFFFF;
	border: 1px solid #DBDBDB;
	border-radius: 2vw;
	box-shadow: 0px 4px 4px 0px #00000040;
	padding: 0;
	margin: 0px 0px 40px 0px;
	padding: 5px;
	font-size: 1.2vw;
	text-align: center;
	position: relative;

	:last-child {
		svg {
			display: none;
		}
	}

	svg {
		position: absolute;
		width: 10%;
		height: 10%;
		top: 50%;
		right: -20%;
	}

	@media (max-width: 900px) {
		svg {
			width: 20%;
			height: 20%;
			right: -25%;
		}
	}

	@media (max-width: 600px) {
		width: 100%;
		height: 30vw;
		font-size: 3vw;
		margin-bottom: 0px;

		svg {
			display: none;
		}
	}
`

export default Process