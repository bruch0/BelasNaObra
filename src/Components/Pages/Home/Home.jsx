import React from "react";
import styled from "styled-components";
import { useRef } from "react/cjs/react.development";
import { Link } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
import { 
	slidesEletric, 
	slidesCladding,
	slidesPainting,
	slidesHidraulic,
	slidesLining,
} from './SlideCreator'

import projectLogo from '../../../assets/Icons/project.png'
import reportsLogo from '../../../assets/Icons/reports.png'
import eletricLogo from '../../../assets/Icons/eletric.png'
import claddingLogo from '../../../assets/Icons/cladding.png'
import calculatorLogo from '../../../assets/Icons/calculator.png'
import liningLogo from '../../../assets/Icons/lining.png'
import hidraulicLogo from '../../../assets/Icons/hidraulic.png'
import paintingLogo from '../../../assets/Icons/painting.png'

import Template from "./Template";
import Contact from "./Contact";

function Home({viewportWidth}) {
	smoothscroll.polyfill();

	const slideEletric = slidesEletric();
	const slideCladding = slidesCladding();
	const slidePainting = slidesPainting();
	const slideHidraulic = slidesHidraulic();
	const slideLining = slidesLining();

	const reportsRef = useRef()
	const projectsRef = useRef();
	const eletricRef = useRef();
	const claddingRef = useRef();
	const liningRef = useRef();
	const hidraulicsRef = useRef();
	const paintingRef = useRef();


	const services = 
	[
		{icon: reportsLogo, name: 'Laudos e vistorias', ref: reportsRef, slides: slideEletric},
		{icon: projectLogo, name: 'Projetos', ref: projectsRef, slides: slideEletric},
		{icon: eletricLogo, name: 'Elétrica e iluminação', ref: eletricRef, slides: slideEletric},
		{icon: claddingLogo, name: 'Revestimento', ref: claddingRef, slides: slideCladding},
		{icon: calculatorLogo, name: 'Calculadora', link: '/calculadora'},
		{icon: liningLogo, name: 'Gesso (forro ou drywall)', ref: liningRef, slides: slideLining, cut: true},
		{icon: hidraulicLogo, name: 'Hidráulica', ref: hidraulicsRef, slides: slideHidraulic},
		{icon: paintingLogo, name: 'Pintura', ref: paintingRef, slides: slidePainting},
	];

	return (
		<>
			<Title>Serviços</Title>	
			<OptionsContainer>
				{services.map((service, index) => 
					<Card 
						icon={service.icon}
						name={service.name}
						scroll={service.ref ? service.ref : ''}
						link={service.link}
						key={index}
					/>)}
			</OptionsContainer>
			
			{services.map((service, index) => {
				if (service.slides) {
					return (
						<section ref={service.ref} key={index}>
							<Template 
								viewportWidth={viewportWidth} 
								logo={service.icon} 
								slides={service.slides ? service.slides : ''} 
								name={service.cut ? service.name.split(' ')[0] : service.name}
							/>
						</section>
					)
				}
			})}
			<Contact />
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
	margin: 200px 0px 0px 5%;
	height: 60px;
	font-size: 30px;

	@media (max-width: 600px) {
		margin: 120px 0px 0px 5%;
		font-size: 8vw;
	}

	@media (max-width: 400px) {
		margin: 110px 0px 0px 5%;
		font-size: 34px;
		height: 45px;
	}
`

const OptionsContainer = styled.main`
	width: 100%;
	padding: 0px 5%;
	display: grid;
    grid-template-columns: repeat(4, 1fr);
	gap: 4%;

	a {
		height: calc(22vw - 36px);
	}

	@media (max-width: 600px) {
		height: 180vw;
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

const Icon = styled.img`
	height: 50%;
	width: 50%;
	pointer-events: none;
`

const CardName = styled.p`
	font-size: 1.8vw;

	@media (max-width: 600px) {
		font-size: 4.4vw;
	}
`

export default Home