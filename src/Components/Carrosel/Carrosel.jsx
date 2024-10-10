import { Container, H3, TitleMain, Paragraph, Imagem, Effect } from './style.js'
import { useState } from "react";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import sneaker from '../../assets/sneaker.svg';
import effect from '../../assets/effect.svg';
import Buttons from "../UI/Buttons";
register();

const data = [
	{ id: '1', image: sneaker },
	{ id: '2', image: sneaker },
	{ id: '3', image: sneaker },
	{ id: '4', image: sneaker },
]

function Carrosel() {
	const [slidePerView, setSlidePerView] = useState(1);

	return (
		<Swiper
			slidesPerView={slidePerView}
			pagination={{ clickable: true }}
			style={{
				height: '681px',
				backgroundColor: 'var(--white2)',
			}}
		>
			{data.map((item) => (
				<SwiperSlide className="a" key={item.id}>
					<Container>
						<H3>Melhores ofertas personalizadas</H3>
						<TitleMain>Queima de Estoque Nike 🔥</TitleMain>
						<Paragraph>
							Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
						</Paragraph>
						<Buttons
							text='Ver Ofertas'
							width='220px'
							height='48px'
						/>
					</Container>
					<Imagem
						src={item.image}
						alt="Banner promocionais"
					/>
					<Effect
						src={effect}
						alt="Efeito"
					/>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default Carrosel;
