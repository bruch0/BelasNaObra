import React from "react";
import styled from "styled-components";
import { IoEye, IoRocket } from 'react-icons/io5'
import { GrDiamond } from 'react-icons/gr'
import { AiFillQuestionCircle, AiOutlineFileDone, AiOutlineWoman } from 'react-icons/ai'
import { RiCompasses2Fill } from 'react-icons/ri'
import { BsFillHouseFill } from 'react-icons/bs'


function About() {
	const infos = 
	[
		{name: 'Missão', icon: <IoRocket />, text: 'A Belas na obra é uma equipe de mulheres que visão a integração de mulheres na construção civil.' },
		{name: 'Visão', icon: <IoEye />, text: 'Quebrar o tabu da construção civil e oferecer ao cliente a melhor experiência de um local completo dirigido por mulheres.'},
		{name: 'Valores', icon: <GrDiamond />, text: 'As Belas visam força de vontade e trabalho em equipe, pois juntas somos um time capaz de transformar espaços em um curto prazo e com o máximo de detalhes.'},
		{name: 'Por que a Belas?', icon: <AiFillQuestionCircle />, text: 'Nós prezamos pela mão de obra feminina e tornamos seu sonho realidade. Aqui nós projetamos, executamos e decoramos sua casa, do zero. Temos disposição de arquitetos que vão fazer de tudo para que seu lar fique do jeito que você planejou!'}
	]
	
	const cardsInfos = 
	[
		{icon: <RiCompasses2Fill />, number: '10+', text: 'arquitetos parceiros'},
		{icon: <AiOutlineFileDone />, number: '100+', text: 'projetos desenvolvidos'},
		{icon: <BsFillHouseFill />, number: '30+', text: 'obras entregues'},
		{icon: <AiOutlineWoman />, number: '30+', text: 'mulheres formadas conosco'},
	]
	
	return (
		<>
		<Title>Sobre a Belas na Obra</Title>
		<Container>
			{infos.map((info, index) => {
				return(
					<Info icon={info.icon} title={info.name} text={info.text} key={index} />
				)
			})}
			<DataSection>
				{cardsInfos.map((card, index) => {
					return (
					<Card key={index}>
						{card.icon}
						<Number>{card.number}</Number>
						{card.text}
					</Card>
					)
				})}
			</DataSection>
		</Container>
		</>
	)
}

function Info({icon, title, text}) {
	return (
		<InfoSection>
			<InfoTitle>
				{icon}
				{title}
			</InfoTitle>
			{text}
		</InfoSection>
	)
}

const Title = styled.p`
	height: 60px;
	font-size: 30px;
	margin: 200px 0px 0px 5%;

	@media (max-width: 600px) {
		margin: 120px 0px 0px 5%;
	}

	@media (max-width: 400px) {
		margin: 110px 0px 0px 5%;
		font-size: 20px;
	}
`

const Container = styled.main`
	width: 100%;
	padding: 0px 5%;
	margin-bottom: 50px;
`

const InfoSection = styled.div`
	width: 100%;
	font-size: 25px;
	margin-bottom: 50px;
`

const InfoTitle = styled.p`
	font-size: 50px;
	height: 50px;
	margin-bottom: 15px;
`

const DataSection = styled.section`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 4%;

	@media (max-width: 600px) {
		grid-template-columns: repeat(2, 1fr);
	}
`

const Card = styled.div`
	width: 20vw;
	height: 15vw;
	border: 1px solid #DBDBDB;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	font-size: 1.8vw;
	text-align: center;


	svg {
		width: 7.5vw;
		height: 5vw;
	}

	@media (max-width: 600px) {
		width: 40vw;
		height: 30vw;
		font-size: 3.5vw;

		svg {
			width: 12vw;
			height: 8vw;
		}
	}
`

const Number = styled.p`
	font-size: 5vw;

	@media (max-width: 600px) {
		font-size: 10vw;
	}
`

export default About