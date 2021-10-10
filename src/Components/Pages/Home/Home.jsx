import React, { useRef } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
import { 
	slidesEletric, 
	slidesCladding,
	slidesPainting,
	slidesHidraulic,
	slidesLining,
	slidesProjects
} from './SlideCreator'
import { AiOutlineWhatsApp, AiOutlineArrowRight } from 'react-icons/ai'


import projectLogo from '../../../assets/Icons/project.png'
import reportsLogo from '../../../assets/Icons/reports.png'
import eletricLogo from '../../../assets/Icons/eletric.png'
import claddingLogo from '../../../assets/Icons/cladding.png'
import calculatorLogo from '../../../assets/Icons/calculator.png'
import liningLogo from '../../../assets/Icons/lining.png'
import hidraulicLogo from '../../../assets/Icons/hidraulic.png'
import paintingLogo from '../../../assets/Icons/painting.png'

import Process from "./Process";
import Template from "./Template";
import Contact from "./Contact";

function Home({viewportWidth}) {
	smoothscroll.polyfill();

	const slideEletric = slidesEletric();
	const slideCladding = slidesCladding();
	const slidePainting = slidesPainting();
	const slideHidraulic = slidesHidraulic();
	const slideLining = slidesLining();
	const slideProject = slidesProjects();

	const reportsRef = useRef();
	const projectsRef = useRef();
	const eletricRef = useRef();
	const claddingRef = useRef();
	const liningRef = useRef();
	const hidraulicsRef = useRef();
	const paintingRef = useRef();

	const textWhatsApp = encodeURI('Oi, eu acessei o site de vocês, podem me ajudar?');

	const services = 
	[
		{icon: reportsLogo, name: 'Laudos e vistorias', ref: reportsRef},
		{icon: projectLogo, name: 'Projetos', ref: projectsRef, slides: slideProject},
		{icon: eletricLogo, name: 'Elétrica e iluminação', ref: eletricRef, slides: slideEletric},
		{icon: claddingLogo, name: 'Revestimento', ref: claddingRef, slides: slideCladding},
		{icon: calculatorLogo, name: 'Calculadora', link: '/calculadora'},
		{icon: liningLogo, name: 'Gesso (forro e drywall)', ref: liningRef, slides: slideLining},
		{icon: hidraulicLogo, name: 'Hidráulica', ref: hidraulicsRef, slides: slideHidraulic},
		{icon: paintingLogo, name: 'Pintura', ref: paintingRef, slides: slidePainting},
	];

	return (
		<>
			<Process />
			<Title>Serviços</Title>	
			<OptionsContainer>
				{services ? services.map((service, index) => 
					<Card 
						icon={service.icon}
						name={service.name}
						scroll={service.ref ? service.ref : ''}
						link={service.link}
						key={index}
					/>) : ''}
			</OptionsContainer>

			<div ref={reportsRef}></div>
			<ReportsSection>
				<ReportsTitle>
					<ReportsIcon src={services[0].icon} />
					<span>{services[0].name}</span>
				</ReportsTitle>
				<ul>
					<li><AiOutlineArrowRight /> Checklist - Vistoria nas chaves</li>
					<li><AiOutlineArrowRight /> Checklist - Finalização da obra</li>
					<li><AiOutlineArrowRight /> Visita técnica - Avaliação e medição do local</li>
				</ul>
			</ReportsSection>
			
			{services.slice(1).map((service, index) => {
				if (service.slides) {
					return (
						<section ref={service.ref} key={index}>
							<Template 
								viewportWidth={viewportWidth} 
								logo={service.icon} 
								slides={service.slides ? service.slides : ''} 
								name={service.name}
							/>
						</section>
					)
				}
			})}
			<Contact />
			<LinkWhatsApp href={`https://wa.me/5511993100778?text=${textWhatsApp}`} target='_blank'>
				<AiOutlineWhatsApp />
			</LinkWhatsApp>
		</>
	)
}

function Card({icon, name, scroll, link}) {
	if (link) {
		return (
			<Link to={link}>
				<OptionCard onClick={() => scroll !== '' ? scroll.current.scrollIntoView({behavior: 'smooth'}) : ''}>
					<Icon src={icon} alt={`Vá até ${name}`} />
					<CardName>
						{name}
					</CardName>
				</OptionCard>
			</Link>
		)
	}
	return (
		<OptionCard onClick={() => scroll !== '' ? scroll.current.scrollIntoView({behavior: 'smooth'}) : ''}>
			<Icon src={icon} alt={`Vá até ${name}`} />
			<CardName>
				{name}
			</CardName>
		</OptionCard>
	)
}

const Title = styled.p`
	margin: 20px 0px 0px 5%;
	height: 60px;
	font-size: 30px;

	@media (max-width: 600px) {
		margin: 20px 0px 0px 5%;
		font-size: 8vw;
	}

	@media (max-width: 400px) {
		margin: 10px 0px 0px 5%;
		font-size: 34px;
		height: 45px;
	}
`

const OptionsContainer = styled.main`
	width: 100%;
	padding: 0px 5%;
	gap: 6%;
	display: grid;
    grid-template-columns: repeat(4, 1fr);

	a {
		height: calc(22vw - 36px);
	}

	@media (max-width: 600px) {
		height: 200vw;
		grid-template-columns: repeat(2, 1fr);
	}
`

const OptionCard = styled.button`
	width: 100%;
	height: calc(22vw - 36px);
	max-width: 300px;
	max-height: 300px;
	background-color: #FFFFFF;
	border: 1px solid #DBDBDB;
	border-radius: 2vw;
	padding: 0;
	margin: 0px 0px 40px 0px;
	box-shadow: 0px 4px 4px 0px #00000040;
	cursor: pointer;

	@media (max-width: 600px) {
		height: 40vw;
		margin-bottom: 0px;
	}
`

const ReportsSection = styled.div`
	width: 100%;
	padding: 5%;

	ul {
		padding: 1.5% 0px 1.5% 330px;
	}

	li {
		margin-bottom: 15px;
		font-size: 20px;
	}

	@media (max-width: 800px) {
		ul {
			padding: 1.5% 0px 1.5% 50%;
		}
	}

	@media (max-width: 600px) {
		ul {
			padding: 1.5% 0px 1.5% 10%;
		}
	}
`

const ReportsTitle = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
	font-size: 30px;
	color: #646262;
	background: #FFFFFF;
	border: 1px solid #DBDBDB;
	border-radius: 15px 15px 0px 0px;

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
`

const ReportsIcon = styled.img`
	height: 40px;
	width: 40px;
	margin: 0px 10px 5px 10px;
`

const Icon = styled.img`
	height: 50%;
	width: 50%;
	pointer-events: none;
`

const CardName = styled.p`
	font-size: 1.6vw;

	@media (max-width: 600px) {
		font-size: 4.4vw;
	}
`

const LinkWhatsApp = styled.a`
	height: 50px;
	width: 50px;
	padding: 8px;
	position: fixed;
	bottom: 20px;
	right: 20px;
	z-index: 10;
	background-color: green;
	color: white;
	border-radius: 25px;

	svg {
		height: 35px;
		width: 35px;
	}
`

export default Home