import React, { useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

function DropdownQtyInput({index, inputValue, setInputValue, state}) {
	const [enabled, setEnabled] = useState(false);
	const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, '10+'];

	const selectQty = (qty) => {
		let aux = inputValue;
		aux[index] = parseInt(qty);
		state.qty = aux;
		setInputValue({...state})
	}

	return (
		<DropdownContainer
			onClick={() => enabled ? setEnabled(false) : setEnabled(true)}
		>
			<UserInput readOnly={true} value={inputValue[index] === 10 ? '10+' : inputValue[index]}/>
				<DropdownButton>
					{enabled ? 
						<MdKeyboardArrowUp /> 
						: 
						<MdKeyboardArrowDown/>}
				</DropdownButton>
				
				<DropdownContent enabled={enabled ? 1 : 0}>
					{options.map((option, index) => {
						return (
							<DropwdownOption 
								key={index} 
								onClick={(choice) => selectQty(choice.target.innerText)}>
								{option}
							</DropwdownOption>
						)
					})}
				</DropdownContent>
		</DropdownContainer>
	)
}

const DropdownContainer = styled.div`
	position: relative;
	cursor: pointer;

	svg {
		height: 30px;
		width: 30px;
	}
`;

const DropdownButton = styled.button`
	position: absolute;
	top: 15px;
	right: 0;
	border: none;
	background-color: transparent;
	margin: 0px;
	padding: 0px;
	pointer-events: none;

	:focus {
		outline: none;
	}

	svg { 
		margin: 0px;
		pointer-events: none;
	}
	@media (max-width: 400px) {
		svg {
			width: 20px;
			height: 20px;
		}
		top: 20px;
	}
`;

const UserInput = styled.input`
	width: 100%;
	height: 60px;
	margin: 0px;
	padding: 0px 0px 0px 10px;
	border: 1px solid #DBDBDB;
	border-radius: 15px;
	font-size: 18px;
	font-weight: bold;
	cursor: pointer;
	pointer-events: none;

	:focus {
		outline: none;
	}

	@media (max-width: 400px) {
		font-size: 15px;
	}
`

const DropdownContent = styled.ul`
	width: 90px;
	height: 80px;
	background-color: #FFFFFF;
	display: ${props => props.enabled ? 'flex' : 'none'};
	flex-direction: column;
	position: absolute;
	z-index: 1;
	overflow-y: scroll;
	border-radius: 5px;
	border: 1px solid #DBDBDB;
	pointer-events: all;

	&& p {
		display: block;
	}

	* {
		scrollbar-width: 10px;
		scrollbar-color: #6d6767 #ffffff;
	}
	::-webkit-scrollbar {
		width: 10px;
	}
	::-webkit-scrollbar-track {
		background: #ffffff;
	}
	::-webkit-scrollbar-thumb {
		background-color: #6d6767;
		border-radius: 10px;
		border: 3px solid #fafafa;
	}

	:last-child{
		border-bottom: 0px;
  	}

	@media (max-width: 600px) {
		width: 60px;
		top: 35px;
		left: 30px;
	}

	@media (max-width: 400px) {
		top: 40px;
		left: 10px;
	}
`;

const DropwdownOption = styled.li`
	height: 31px;
	flex-shrink: 0;
	font-size: 22px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	text-align: center;
	color: black;
	border-bottom: 1px solid #DBDBDB;
`;

export default DropdownQtyInput