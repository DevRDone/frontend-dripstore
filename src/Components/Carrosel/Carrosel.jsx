import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import sneaker from '../../assets/sneaker.svg';
import effect from '../../assets/effect.svg';
import styled from "styled-components";
import { useState } from "react";
import Buttons from "../Buttons";
register();

function Carrosel() {
    const data = [
        { id: '1', image: sneaker },
        { id: '2', image: sneaker },
        { id: '3', image: sneaker },
        { id: '4', image: sneaker },
    ]

    const [slidePerView, setSlidePerView] = useState(1);

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        gap: 1rem;
        position: absolute;
        top: 20%;
        left: 3%;
    `
    
    const H3 = styled.h3`
        color: var(--warning);
        font-weight: 700;
    `
    const TitleMain = styled.h1`
        font-weight: 800;
        font-size: 64px;
        width: 510px;
        color: var(--dark-gray);
        line-height: 4.5rem;
    `
    const Paragraph = styled.p`
        color: var(--dark-gray-2);
        width: 495px;

    `
    const Imagem = styled.img`
        width: 100%;
        height: 681px;
        position: relative;
        left: 16.5%;
    `
    const Effect = styled.img`
        position: relative;
        left: 87%;
        bottom: 40rem;
    `
    return (
        <>
            <Swiper
                slidesPerView={slidePerView}
                pagination={{ clickable: true }}
                style={{
                    height: '681px',
                    backgroundColor: 'var(--white2)',
                }}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Container>
                            <H3>Melhores ofertas personalizadas</H3>
                            <TitleMain>Queima de Estoque Nike 🔥</TitleMain>
                            <Paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, commodi nisi neque aut quae accusantium?
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


        </>
    )
}

export default Carrosel;