import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiMail, FiFacebook } from 'react-icons/fi'

function Contact() {
	const contacts = [
		{name: 'contato@belasnaobra.com', icon: <FiMail />, ref: 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=contato@belasnaobra.com'},
		{name: '/belasnaobra', icon: <FiFacebook />, 	ref: 'https://www.facebook.com/belasnaobra'},
		{name: '@belasnaobra', icon: <AiOutlineInstagram />, ref: 'https://www.instagram.com/belasnaobra/'},

	]
	
	return (
		<>
		<Title>
			Entre em contato
		</Title>
		<ContactSection>
			<MapWrapper>
				<Map src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467689.79719810525!2d-46.875492079696244!3d-23.68216038794643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1633095371936!5m2!1spt-BR!2sbr' allowFullScreen={true} loading='lazy' title='Localização'/>
			</MapWrapper>
			<Contacts>
				<span>Dúvidas ou sugestões?</span>
				{contacts.map((contact, index) => {
					return (
						<div key={index} >
							{index === 1 ? <Social>Acompanhe nosso dia a dia nas redes sociais</Social> : ''}
							<Holder href={contact.ref} target='_blank'>
								<Icon alt={contact.name}>
									{contact.icon}
								</Icon>
								<span>{contact.name}</span>
							</Holder>
						</div>
					)
				})}
			</Contacts>
		</ContactSection>
		</>
	)
}

const Title = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	height: 60px;
	font-size: 40px;

	@media (max-width: 600px) {
		font-size: 30px;
	}

	@media (max-width: 320px) {
		font-size: 25px;
	}
`

const ContactSection = styled.section`
	width: 100%;
	display: flex;
	justify-content: space-around;

	@media (max-width: 1050px) {
		flex-direction: column-reverse;
		align-items: center;
		margin-bottom: 25px;
	}
`

const MapWrapper = styled.div`
	height: 450px;
	width: 40%;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 1050px) {
		width: 90%;
		height: 300px;
	}
`

const Map = styled.iframe`
	height: 300px;
	width: 70%;
	border: 0px;
	border-radius: 25px;

	@media (max-width: 1050px) {
		width: 100%;
	}
`

const Contacts = styled.div`
	height: 450px;
	width: 40%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 25px;

	> span {
		width: 60%;
		text-align: center;
		font-weight: bold;
		font-size: 20px;
	}

	@media (max-width: 1050px) {
		width: 90%;
		margin-bottom: 25px;
		height: 300px;
	}

	@media (max-width: 600px) {
		font-size: 15px;
	}
`

const Social = styled.p`
	margin: 50px 0px 10px 0px;
	text-align: center;
	font-weight: bold;
	font-size: 20px;
`

const Holder = styled.a`
	margin-top: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	:hover {
		p {
			background-color: ${props => props.color ?'#5ae0e0' : ''};
		}
	}
`

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
		height: 30px
	}
`

export default Contact