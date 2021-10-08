import React from "react";
import styled from "styled-components";

import { AiOutlineFileDone, AiOutlineWoman } from 'react-icons/ai'
import { RiCompasses2Line } from 'react-icons/ri'
import { BsHouse } from 'react-icons/bs'
import { Slide } from 'react-slideshow-image'

function About({viewportWidth}) {
	const fadeProperties = {
		duration: 3000,
		transitionDuration: 500,
		slidesToShow: viewportWidth < 600 ? viewportWidth < 350 ? 1 : 2 : 3,
		canSwipe: false
	};

	const ratings = 
	[
		{name: 'Ana Carolina', text: 'A planta elétrica é incrível! As Belas se compromete em manter a empresa apenas com mão de obra feminina!'},
		{name: 'Kevin', text: 'A equipe das Belas na obra é muito prestativa, tem muito profissionalismo e seriedade. Agradeço eternamente!'},
		{name: 'Lívia Domingues', text: 'Agradeço pelo trabalho executado em meu apartamento. A mão de obra das Belas é excelente e o atendimento impecável. Obrigada por fazer parte do meu sonho!'},
		{name: 'Bianca', text: 'A gente gostou! Ficou bem bonito e gostamos muito da assistência e ajuda para comprar os materiais!'},
		{name: 'Carla', text: 'O suporte das Belas é incrível!'},
	]

	const infos = 
	[
		{name: 'Missão', text: 'Proporcionar a integração de mulheres na mão de obra da construção civil, quebrando o tabu existente na sociedade atual.' },
		{name: 'Visão', text: 'Revelar o valor de mulheres liderando o ambiente da construção civil, proporcionando ao cliente a melhor experiência e realizando sonhos!'},
		{name: 'Valores', text: 'As belas possuem um grande diferencial, capaz de transformar espaços em curto prazo, sem negociar o trabalho em unidade da equipe, visando finos acabamentos e detalhes da obra.'},
	]
	
	const cardsInfos = 
	[
		{icon: <RiCompasses2Line />, number: '10+', text: 'arquitetos parceiros'},
		{icon: <AiOutlineFileDone />, number: '100+', text: 'projetos desenvolvidos'},
		{icon: <BsHouse />, number: '30+', text: 'obras entregues'},
		{icon: <AiOutlineWoman />, number: '30+', text: 'mulheres formadas com a gente'},
	]
	
	return (
		<>
		<Title>As Belas,</Title>
		<Container>
			<Wrapper>
				{infos.map((info, index) => {
					return (
					<InfoCard key={index}>
						<InfoCardHighlight>{info.name}</InfoCardHighlight>
						{info.text}
					</InfoCard>
					)
				})}
			</Wrapper>
			<InfoSection>
				<InfoTitle>
					Por que contratar as Belas?
				</InfoTitle>
				Nós prezamos pela mão de obra feminina e tornamos seu sonho realidade. Aqui nós projetamos, executamos e decoramos sua casa, do zero. Temos disposição de arquitetos que vão fazer de tudo para que seu lar fique do jeito que você planejou!
			</InfoSection>
			<DataSection>
				{cardsInfos.map((card, index) => {
					return (
					<Card key={index}>
						{card.icon}
						<Highlight>{card.number}</Highlight>
						{card.text}
					</Card>
					)
				})}
			</DataSection>

			<InfoTitle>
				Clientes:
			</InfoTitle>
			<SlideWrapper>
				<Slide {...fadeProperties}>
					{ratings.map((rating, index) => <SlideRating name={rating.name} text={rating.text} key={index} />)}
				</Slide>
			</SlideWrapper>
		</Container>
		</>
	)
}

function SlideRating({name, text}) {
	return (
		<SlideRatingDiv>
			<p>{text}</p>
			<q>{`-${name}`}</q>
		</SlideRatingDiv>
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

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 4%;

	@media (max-width: 600px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`

const InfoCard = styled.div`	
	width: 28vw;
	height: 20vw;
	border: 1px solid #DBDBDB;
	border-radius: 2vw;
	box-shadow: 0px 4px 4px 0px #00000040;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	font-size: 1.5vw;
	text-align: center;
	line-height: 2vw;

	@media (max-width: 600px) {
		width: 90%;
		height: 30vw;
		font-size: 3vw;
		margin-bottom: 15px;
		line-height: 3.2vw;
	}
`

const InfoCardHighlight = styled.p`
	font-size: 2vw;
	color: #fb8095;
	font-weight: bold;

	@media (max-width: 600px) {
		font-size: 6vw;
	}
`

const InfoSection = styled.div`
	width: 100%;
	font-size: 25px;
	margin-bottom: 50px;

	@media (max-width: 800px) {
		font-size: 4vw;
	}

	@media (max-width: 400px) {
		font-size: 5vw;
	}
`

const InfoTitle = styled.p`
	font-size: 30px;
	height: 50px;
	margin: 75px 0px 15px 0px;

	@media (max-width: 800px) {
		font-size: 5.5vw;
		margin: 30px 0px 0px 0px;
	}
`

const DataSection = styled.section`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 4%;
	margin-bottom: 50px;

	@media (max-width: 600px) {
		grid-template-columns: repeat(2, 1fr);
	}
`

const Card = styled.div`
	width: 20vw;
	height: 15vw;
	border: 1px solid #DBDBDB;
	border-radius: 2vw;
	box-shadow: 0px 4px 4px 0px #00000040;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	font-size: 1.5vw;
	text-align: center;


	svg {
		width: 6vw;
		height: 3.5vw;
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

const Highlight = styled.p`
	font-size: 5vw;
		color: #3393AB;


	@media (max-width: 600px) {
		font-size: 10vw;
	}
`

const SlideWrapper = styled.div`
	width: 100%;
	height: 300px;

	.react-slideshow-container, .react-slideshow-fade-wrapper {
		width: 100%;
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
		color: white
	}

	@media (max-width: 600px) {
		height: 200px;
	}
`

const SlideRatingDiv = styled.div`
	width: 100%;
	height: 300px;
	padding: 0px 10%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-right: 1px solid #DBDBDB;
	position: relative;
	font-size: 18px;

	q {
		position: absolute;
		bottom: 15px;
		left: 15px;
		font-weight: bold;
	}

	@media (max-width: 1050px) {
		font-size: 2vw;
	}

	@media (max-width: 600px) {
		border: none;
		height: 200px;
		padding: 0px 16%;
		font-size: 2.5vw;
	}

	@media (max-width: 350px) {
		font-size: 4vw;
	}
`

export default About