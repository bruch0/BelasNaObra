import cladding2 from '../../../assets/Cladding/cladding2.jpeg'
import cladding5 from '../../../assets/Cladding/cladding5.jpeg'
import cladding9 from '../../../assets/Cladding/cladding9.jpeg'
import cladding10 from '../../../assets/Cladding/cladding10.jpeg'
import cladding16 from '../../../assets/Cladding/cladding16.jpeg'
import cladding17 from '../../../assets/Cladding/cladding17.jpeg'
import cladding18 from '../../../assets/Cladding/cladding18.jpeg'

import eletric3 from '../../../assets/Eletric/eletric3.jpeg'
import eletric4 from '../../../assets/Eletric/eletric4.jpeg'
import eletric5 from '../../../assets/Eletric/eletric5.jpeg'
import eletric6 from '../../../assets/Eletric/eletric6.jpeg'
import eletric7 from '../../../assets/Eletric/eletric7.jpeg'
import eletric11 from '../../../assets/Eletric/eletric11.jpeg'
import eletric12 from '../../../assets/Eletric/eletric12.jpeg'

import hidraulic2 from '../../../assets/Hidraulic/hidraulic2.jpeg'
import hidraulic3 from '../../../assets/Hidraulic/hidraulic3.jpeg'
import hidraulic4 from '../../../assets/Hidraulic/hidraulic4.jpeg'
import hidraulic5 from '../../../assets/Hidraulic/hidraulic5.jpeg'
import hidraulic6 from '../../../assets/Hidraulic/hidraulic6.jpeg'
import hidraulic9 from '../../../assets/Hidraulic/hidraulic9.jpeg'
import hidraulic10 from '../../../assets/Hidraulic/hidraulic10.jpeg'

import lining2 from '../../../assets/Lining/lining2.jpeg'
import lining3 from '../../../assets/Lining/lining3.jpeg'
import lining4 from '../../../assets/Lining/lining4.jpeg'
import lining5 from '../../../assets/Lining/lining5.jpeg'

import painting1 from '../../../assets/Painting/painting1.jpeg'
import painting2 from '../../../assets/Painting/painting2.jpeg'
import painting4 from '../../../assets/Painting/painting4.jpeg'
import painting5 from '../../../assets/Painting/painting5.jpeg'
import painting6 from '../../../assets/Painting/painting6.jpeg'
import painting7 from '../../../assets/Painting/painting7.jpeg'
import painting9 from '../../../assets/Painting/painting9.jpeg'
import painting10 from '../../../assets/Painting/painting10.jpeg'
import painting11 from '../../../assets/Painting/painting11.jpeg'
import painting12 from '../../../assets/Painting/painting12.jpeg'
import painting15 from '../../../assets/Painting/painting15.jpeg'

const slidesPainting = () => {
	const slides = [
		painting1, painting2, painting4, painting5, painting6, painting7, painting10, painting9, painting11, painting12, painting15
	]
	return slides
}

const slidesCladding = () => {
	const slides = [
		cladding2, cladding5, cladding9, cladding10, cladding16, cladding17, cladding18
	]
	return slides
}

const slidesEletric = () => {
	const slides = [
		eletric3, eletric4, eletric5, eletric6,	eletric7, eletric11, eletric12
	]
	return slides
}

const slidesHidraulic = () => {
	const slides = [
		hidraulic2, hidraulic3, hidraulic4,	hidraulic5, hidraulic6, hidraulic9, hidraulic10,
	]
	return slides
}

const slidesLining = () => {
	const slides = [
		lining2, lining3, lining4,	lining5
	]
	return slides
}

export {
	slidesEletric,
	slidesCladding,
	slidesPainting,
	slidesHidraulic,
	slidesLining,
}