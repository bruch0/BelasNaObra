import React from "react";
import styled from "styled-components";
import { AiOutlineWhatsApp, AiOutlineInstagram } from 'react-icons/ai'
import { FiMail, FiFacebook } from 'react-icons/fi'

function Contact() {
	const text = encodeURI('Oi, eu acessei o site de vocês, podem me ajudar?');
	const contacts = [
		{name: 'WhatApp', icon: <AiOutlineWhatsApp />, ref: `https://wa.me/5511993100778?text=${text}`, colored: 1},
		{name: 'Facebook', icon: <FiFacebook />, 	ref: 'https://www.facebook.com/belasnaobra'},
		{name: 'Instagram', icon: <AiOutlineInstagram />, ref: 'https://www.instagram.com/belasnaobra/'},
		{name: 'belasnaobra@gmail.com', icon: <FiMail />},

	]
	
	return (
		<>
		<Title>
			Entre em contato
		</Title>
		<ContactSection>
			<Map src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467689.79719810525!2d-46.875492079696244!3d-23.68216038794643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1633095371936!5m2!1spt-BR!2sbr' allowFullScreen={true} loading='lazy'/>
			<Contacts>
				{contacts.map((contact, index) => {
					return (
						<Holder href={contact.ref} key={index} target='_blank' color={contact.colored}>
							<Icon color={contact.colored}>
								{contact.icon}
							</Icon>
							<span>{contact.name}</span>
						</Holder>
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
	height: 500px;
	display: flex;
	justify-content: space-around;

	@media (max-width: 1050px) {
		flex-direction: column-reverse;
		align-items: center;
		margin-bottom: 25px;
	}
`

const Map = styled.iframe`
	height: 450px;
	width: 40%;
	border: 0px;
	border-radius: 25px;

	@media (max-width: 1050px) {
		width: 90%;
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

	@media (max-width: 1050px) {
		width: 90%;
		margin-bottom: 25px;
	}

	@media (max-width: 600px) {
		font-size: 15px;
	}
`

const Holder = styled.a`
	height: 60px;
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
	border: 0px;
	padding: ${props => props.color ?'5px 5px' : '0px'};
	border-radius: 50px;
	background-color: ${props => props.color ?'#49db49' : ''};
	cursor: pointer;
	margin-right: 10px;

	svg {
		width: ${props => props.color ?'20px' : '30px'};
		height: ${props => props.color ?'20px' : '30px'};
	}
`

export default Contact