import React from "react";
import styled from "styled-components";
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import DropdownSelector from "./DropdownInput";
import DropdownQtyInput from "./DropdownQtyInput";

function ServiceHolder({service, isNumbered, isSelected, handleServices, rooms}) {
	const selectAll = () => {
		let aux = service.state.qty;
		aux.forEach((value, index) => {
			if (value === 0) {
				aux[index] = 1
			}
		})
		service.setState({enabled: true, value: [0, 1, 2, 3, 4, 5, 6, 7, 8],qty: aux, price: 0})
	}

	return (
		<ServiceHolderDiv isNumbered={isNumbered} isSelected={isSelected}>
			<Container 
				isActive={service.state.enabled}
				onClick={() => handleServices(-1, service.state, service.setState, service.state.enabled ? 'uncheck' : 'check')}
			>

				<span>{service.name}</span>
				{service.state.enabled ? 
					<ImCheckboxChecked />
				:
					<ImCheckboxUnchecked />
				}
			</Container>

			{service.numbered && service.state.enabled ?
				<DropdownSelector 
					dropdownEnabled={service.state.dropdown}
					setServiceState={service.setState}
					inputValue={service.state.value}
				/>
			:
				<ContainerSelectors 
					isActive={service.state.enabled}
				>
					{rooms.map((room, index) => {
						return(
							<Wrapper key={index}>
								<SelectOption 
									access={index}
									onClick={() => handleServices(index, service.state, service.setState)}
									isSelected={
										(typeof(service.state.value) === 'object') ?
										service.state.value.indexOf(index) !== -1 : false
									}
								>
									<ImCheckboxChecked />
									{room}
								</SelectOption>
								{
								service.state.qty ?
									service.state.qty[index] !== 0 ? <DropdownQtyInput index={index} inputValue={service.state.qty} setInputValue={service.setState} state={service.state} /> : '' : ''
								}
							</Wrapper>
							)
					})}
					<SelectOption 
						onClick={selectAll}
					>
						<ImCheckboxChecked />
						Tudo
					</SelectOption>
				</ContainerSelectors>
			}
			<Value value={service.state.price === 0 ? '' : `R$ ${service.state.price}`} readOnly={true} enabled={service.state.enabled} numbered={service.numbered}/>
		</ServiceHolderDiv>
	)
}

const ServiceHolderDiv = styled.div`
	width: 100%;
	height: ${props => props.isSelected ? '135px' : '70px'};
	display: flex;
	align-items: flex-start;
	position: relative;
	margin-bottom: 15px;

	svg {
		height: 30px;
		width: 30px;
	}

	@media (max-width: 1200px) {
		height: ${props => !props.isNumbered && props.isSelected  ? 'auto' : '70px'};
		justify-content: unset;
		align-items: ${props => props.isNumbered ? 'center' : 'unset'};
		flex-direction:${props => props.isNumbered ? '' : 'column'};
	}

	@media (max-width: 600px) {
		height: ${props => props.isNumbered && props.isSelected  ? '150px' : ''};
		align-items: ${props => props.isNumbered && props.isSelected  ? 'start' : ''};
	}

	@media (max-width: 450px) {
		align-items: unset;
		flex-direction: column;
		justify-content: center;
	}
`

const Container = styled.button`
	width: 180px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	margin-right: 15px;
	background-color: transparent;
	font-family: 'Spartan';
	font-size: 20px;
	
	svg {
		color: ${props => props.isActive ? 'green' : ''};
	}

	@media (max-width: 1200px) {
		margin-bottom: 10px;
	}
`

const ContainerSelectors = styled.div`
	width: calc(100% - 320px);
	height: 70px;
	display: ${props => props.isActive ? 'grid' : 'none'};
    grid-template-columns: repeat(10, 1fr);
	gap: 1%;

	@media (max-width: 1200px) {
		height: unset;
		width: 100%;
		grid-template-columns: repeat(5, 1fr);
	}
`

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`

const SelectOption = styled.button`
	height: 70px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #FFFFFF;
	font-size: 1vw;
	font-family: 'Quicksand';
	border: ${props => props.isSelected ? '1px solid green' : '1px solid #DBDBDB'};
	border-radius: 10px;
	margin: 0px 0px 5px 0px;
	padding: 0px;
	cursor: pointer;
	
	:focus {
		outline: none;
	}

	svg { 
		height: 20px;
		width: 20px;
		margin: 0px;
		color: ${props => props.isSelected ? 'green' : ''};
		pointer-events: none;
	}
	
	@media (max-width: 1200px) {
		font-size: 2vw;
	}

	@media (max-width: 600px) {
		font-size: 3.5vw;
	}
`

const Value = styled.input`
	width: 130px;
	height: 60px;
	margin: 0px 0px 0px 9px;
	display: ${props => props.enabled ? 'block' : 'none'};
	padding: 0px;
	border: 2px solid #DBDBDB;
	border-radius: 15px;
	text-align: center;
	font-size: 20px;
	font-weight: bold;
	cursor: pointer;
	pointer-events: none;

	position: ${props => props.numbered ? 'absolute' : ''};
	top: 0;
	right: 0;
	
	:focus {
		outline: none;
	}

	@media (max-width: 1200px) {
		height: 70px;
		margin: 5px 0px 0px 0px;
		width: 19%;
	}

	@media (max-width: 600px) {
		width: 40%;
		left: 0;
		top: 70px;
	}

	@media (max-width: 450px) {
		width: 40%;
		top: 60px;
		left: 145px;
	}

`

export default ServiceHolder