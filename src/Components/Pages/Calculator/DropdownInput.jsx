import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'


function DropdownSelector({dropdownEnabled, setServiceState, inputValue}) {
	const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, '20+'];
	
	return (
		<DropdownContainer
			onClick={() => {
				if (dropdownEnabled) {
					setServiceState({enabled: true, value: inputValue, dropdown: false})
				}
				else {
					setServiceState({enabled: true, value: inputValue, dropdown: true})
				}
			}}
		>
			<UserInput readOnly={true} value={inputValue === 20 ? '20+' : inputValue}/>
			<Dropdown >
				<DropdownButton>
					{dropdownEnabled ? 
						<MdKeyboardArrowUp /> 
						: 
						<MdKeyboardArrowDown/>}
				</DropdownButton>
				
				<DropdownContent enabled={dropdownEnabled ? 1 : 0}>
					{options.map((option, index) => {
						return (
							<DropwdownOption 
								key={index} 
								onClick={(choice) => {choice.stopPropagation(); setServiceState({enabled: true, value: parseInt(choice.target.innerText), dropdown: false})}}>
								{option}
							</DropwdownOption>
						)
					})}
				</DropdownContent>
			</Dropdown>
		</DropdownContainer>
	)
}

const DropdownContainer = styled.div`
	height: 60px;
	width: 150px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: relative;
	cursor: pointer;

	svg {
		height: 50px;
		width: 50px;
	}

	@media (max-width: 450px) {
		width: 100px;
	}
`;

const Dropdown = styled.div`
	width: 50px;
	pointer-events: none;
`;

const DropdownButton = styled.button`
	width: 50px;
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

	@media (max-width: 450px) {
		width: 40px;
	}
`;

const UserInput = styled.input`
	width: 90px;
	height: 60px;
	margin: 0px;
	padding: 0px;
	border: 1px solid #DBDBDB;
	border-radius: 15px;
	text-align: center;
	font-size: 20px;
	font-weight: bold;
	cursor: pointer;
	pointer-events: none;

	:focus {
		outline: none;
	}

	@media (max-width: 450px) {
		width: 60px;
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

	@media (max-width: 420px) {
		top: 30px;
		left: 40px;
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

export default DropdownSelector