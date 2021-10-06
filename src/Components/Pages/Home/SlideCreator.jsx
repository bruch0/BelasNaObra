import cladding2 from '../../../assets/Cladding/cladding2.jpeg'
import cladding5 from '../../../assets/Cladding/cladding5.jpeg'
import cladding9 from '../../../assets/Cladding/cladding9.jpeg'
import cladding10 from '../../../assets/Cladding/cladding10.jpeg'
import cladding16 from '../../../assets/Cladding/cladding16.jpeg'
import cladding17 from '../../../assets/Cladding/cladding17.jpeg'
import cladding18 from '../../../assets/Cladding/cladding18.jpeg'
import cladding19 from '../../../assets/Cladding/cladding19.gif'
import cladding20 from '../../../assets/Cladding/cladding20.jpeg'

import eletric3 from '../../../assets/Eletric/eletric3.jpeg'
import eletric4 from '../../../assets/Eletric/eletric4.jpeg'
import eletric5 from '../../../assets/Eletric/eletric5.jpeg'
import eletric6 from '../../../assets/Eletric/eletric6.jpeg'
import eletric7 from '../../../assets/Eletric/eletric7.jpeg'
import eletric11 from '../../../assets/Eletric/eletric11.jpeg'
import eletric12 from '../../../assets/Eletric/eletric12.jpeg'

import hidraulic2 from '../../../assets/Hidraulic/hidraulic2.jpeg'
import hidraulic4 from '../../../assets/Hidraulic/hidraulic4.jpeg'
import hidraulic5 from '../../../assets/Hidraulic/hidraulic5.jpeg'
import hidraulic6 from '../../../assets/Hidraulic/hidraulic6.jpeg'
import hidraulic7 from '../../../assets/Hidraulic/hidraulic7.jpeg'
import hidraulic8 from '../../../assets/Hidraulic/hidraulic8.jpeg'
import hidraulic9 from '../../../assets/Hidraulic/hidraulic9.jpeg'
import hidraulic10 from '../../../assets/Hidraulic/hidraulic10.jpeg'
import hidraulic11 from '../../../assets/Hidraulic/hidraulic11.gif'

import lining1 from '../../../assets/Lining/lining1.jpeg'
import lining2 from '../../../assets/Lining/lining2.jpeg'
import lining3 from '../../../assets/Lining/lining3.jpeg'
import lining4 from '../../../assets/Lining/lining4.jpeg'
import lining5 from '../../../assets/Lining/lining5.jpeg'
import lining6 from '../../../assets/Lining/lining6.jpeg'
import lining7 from '../../../assets/Lining/lining7.jpeg'
import lining8 from '../../../assets/Lining/lining8.jpeg'
import lining9 from '../../../assets/Lining/lining9.jpeg'

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

import project1 from '../../../assets/Projects/project1.jpeg'
import project2 from '../../../assets/Projects/project2.jpeg'
import project3 from '../../../assets/Projects/project3.jpeg'
import project4 from '../../../assets/Projects/project4.jpeg'
import project5 from '../../../assets/Projects/project5.jpeg'
import project6 from '../../../assets/Projects/project6.jpeg'
import project7 from '../../../assets/Projects/project7.jpeg'
import project8 from '../../../assets/Projects/project8.jpeg'
import project9 from '../../../assets/Projects/project9.jpeg'
import project10 from '../../../assets/Projects/project10.gif'


const slidesPainting = () => {
	const slides = [
		painting1, painting2, painting4, painting5, painting6, painting7, painting10, painting9, painting11, painting12, painting15
	]
	return slides
}

const slidesCladding = () => {
	const slides = [
		cladding2, cladding5, cladding9, cladding10, cladding16, cladding17, cladding18, cladding19, cladding20
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
		hidraulic2, hidraulic4,	hidraulic5, hidraulic6, hidraulic7, hidraulic8, hidraulic9, hidraulic10, hidraulic11
	]
	return slides
}

const slidesLining = () => {
	const slides = [
		lining1,lining2, lining3, lining4,	lining5, lining6, lining7, lining8, lining9
	]
	return slides
}

const slidesProjects = () => {
	const slides = [
		project1, project2, project3, project4, project5, project6, project7, project8, project9, project10
	]
	return slides
}

export {
	slidesEletric,
	slidesCladding,
	slidesPainting,
	slidesHidraulic,
	slidesLining,
	slidesProjects,
}