function calculate(demolition, construction, hidraulics, eletric, cladding, painting, area) {
	const totalArea = Number(area);
	let newDemolitionPrice;
	let newConstructionPrice;
	let newHidraulicsPrice;
	let newEletricPrice;
	let newCladdingPrice;
	let newPaintingPrice;

	const sumTotalRooms = (list) => {
		let sum = 0;
		list.forEach((element) => {
			sum += element
		})

		return sum
	}

	const rooms = [
		{name: 'Bedroom', averageArea: 52},
		{name: 'Suite', averageArea: 52},
		{name: 'LivingRoom', averageArea: 63},
		{name: 'Kitchen', averageArea: 52},
		{name: 'ServiceArea', averageArea: 36},
		{name: 'Terrace', averageArea: 44},
		{name: 'Hall', averageArea: 36},
		{name: 'Bathroom', averageArea: 31},
		{name: 'Toilet', averageArea: 28}
	]
	
	const demolitionValue = 3000;
	const constructionValue = 300;
	const hidraulicsValue = 600;
	const eletricValue = 300;
	const claddingValue = 90;
	const paintingValue = 50;

	const calculateDemolition = () => {
		let aux = sumTotalRooms(demolition.qty) * demolitionValue;
		newDemolitionPrice = aux === 0 ? 0 : `R$ ${aux}`
	}

	const calculateConstruction = () => {
		if (construction.value.length === 9) {
			newConstructionPrice = `R$ ${constructionValue * totalArea * 8}`;
		}
		else {
			let aux = 0;
			construction.value.forEach((element) => { 
				aux += rooms[element].averageArea * construction.qty[element] * constructionValue
			});
			newConstructionPrice = aux === 0 ? 0 : `R$ ${aux}`;
		}
	}

	const calculateHidraulics = () => {
		let aux = hidraulics.value * hidraulicsValue;
		newHidraulicsPrice = aux === 0 ? 0 : `R$ ${aux}`
	}

	const calculateEletric = () => {
		let aux = eletric.value * eletricValue;
		newEletricPrice = aux === 0 ? 0 : `R$ ${aux}`
	}

	const calculateCladding = () => {
		if (cladding.value.length === 9) {
			newCladdingPrice = `R$ ${claddingValue * totalArea * 4}`;
		}
		else {
			let aux = 0
			cladding.value.forEach(element => {
				if (element === 2) {
					aux += Number(((rooms[element].averageArea * cladding.qty[element] * claddingValue) / 21.8).toFixed(0))
				}
				if (element === 3 || element === 4 || element === 7) {
					aux += (rooms[element].averageArea * cladding.qty[element] * claddingValue)
				}
				else {
					aux += Number(((rooms[element].averageArea * cladding.qty[element] * claddingValue) / 5.2).toFixed(0))
				}
			});
			newCladdingPrice = aux === 0 ? 0 : `R$ ${aux}`;
		}
	}

	const calculatePainting = () => {
		if (painting.value.length === 9) {
			newPaintingPrice = `R$ ${paintingValue * totalArea * 6}`;
		}
		else {
			let aux = 0;
			painting.value.forEach(element => {
				if (element === 3) {
					aux += Number(((rooms[element].averageArea * painting.qty[element] * paintingValue) / 5.2).toFixed(0))
				}
				else if (element === 4) {
					aux += Number(((rooms[element].averageArea * painting.qty[element] * paintingValue) / 6).toFixed(0))
				}
				else if (element === 7) {
					aux += Number(((rooms[element].averageArea * painting.qty[element] * paintingValue) / 6.2).toFixed(0))
				}
				else {
					aux += rooms[element].averageArea * painting.qty[element] * paintingValue
				}
			});
			newPaintingPrice = aux === 0 ? 0 : `R$ ${aux}`;
		}
	}

	calculateDemolition();
	calculateConstruction();
	calculateHidraulics();
	calculateEletric();
	calculateCladding();
	calculatePainting();

	demolition.price = newDemolitionPrice;
	construction.price = newConstructionPrice
	hidraulics.price = newHidraulicsPrice;
	eletric.price = newEletricPrice;
	cladding.price = newCladdingPrice;
	painting.price = newPaintingPrice;
}

export { calculate }