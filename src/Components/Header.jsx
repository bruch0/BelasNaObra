import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import styled from "styled-components";
import logo from '../assets/logo2.png'

function Header() {
	const history = useHistory();
	
	return (
		<PageHeader>
			<Container>
				<QuickLinks>
					<Link to='/sobre'>Sobre nós</Link>
					<p onClick = {() => {
						if (history.location.pathname !== '/') {
							history.push('/')
						}
						else {
							scrollTo({top: 0, left: 0, behavior: 'smooth'})
						}
					}}>Serviços</p>
					<Link to='/calculadora'>Calculadora</Link>
				</QuickLinks>
				<Contact onClick={() => {
						if (history.location.pathname !== '/') {
							history.push('/')
						}
						setTimeout(() => scrollTo({top: 9999999, left: 0, behavior: 'smooth'}), 1);
					}}>
					Contato
				</Contact>
				<Logo src={logo} onClick={() => {
					if (history.location.pathname !== '/') {
						history.push('/');
					}
					else {
						scrollTo({top: 0, left: 0, behavior:'smooth'})
					}
				}} />
				<Title>
					De mulher para o mundo
				</Title>
			</Container>
		</PageHeader>
	)
}

const PageHeader = styled.header`
	width: 100%;
	height: 150px;
	background-color: #FFFFFF;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid #DBDBDB;
	box-shadow: 0px 4px 4px 0px #00000013;

	@media (max-width: 600px) {
		height: 100px;
	}
`

const Container = styled.div`
	width: 90%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (max-width: 600px) {
		align-items: center;
		width: 100%;
	}
`

const QuickLinks = styled.div`
	display: flex;
	height: 30px;
	position: absolute;
	top: 20px;
	left: 30px;
	font-family: 'Spartan', sans-serif;

	* {
		margin-right: 25px;
		cursor: pointer;
	}

	@media (max-width: 800px) {
		height: 55px;
		flex-direction: column;
		justify-content: space-between;
	}
	@media (max-width: 550px) {
		top: 5px;
		left: 5px;
	}
	@media (max-width: 320px) {
		font-size: 12px;
	}
`

const Contact = styled.p`
	position: absolute;
	font-family: 'Spartan', sans-serif;
	top: 20px;
	right: 30px;
	cursor: pointer;

	@media (max-width: 550px) {
		top: 5px;
		right: 5px;
	}
`

const Logo = styled.img`
	width: 150px;
	border-radius: 25px;
	cursor: pointer;

	@media (max-width: 600px) {
		width: 100px;
		height: 60px;
	}
	@media (max-width: 400px) {
		width: 80px;
		height: 48px;
	}

	@media (max-width: 300px) {
		width: 80px;
		height: 48px;
	}
`

const Title = styled.p`
	font-size: 18px;
	color: #646262;
	font-weight: bold;
	font-family: 'Spartan', sans-serif;

	@media (max-width: 400px) {
		font-size: 15px;
	}
`

export default Header