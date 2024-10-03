import styled from "styled-components";
import { useState } from "react";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import sneaker from '../../assets/sneaker.svg';
import effect from '../../assets/effect.svg';
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
        // Mobile First
        width: 100%;
        display: flex;
        position: absolute;
        flex-direction: column;
        top: 45%;
        gap: 1rem;
        text-align: center;
        align-items: center;
        padding: 0 0.7rem;


        @media (min-width: 480px){
            padding: 0 1rem;
            top: 50%;
        } 
        @media (min-width: 768px) {
            top: 52%;
        } 
        @media (min-width: 1024px) {
            text-align: start;
            align-items: start;
            padding: 0 4rem;
            top: 20%;
            gap: 1.7rem;
        }
    `
    const H3 = styled.h3`
        color: var(--warning);
        font-weight: 700;
    `
    const TitleMain = styled.h1`
        // Mobile First
        font-size: 2.4rem;
        font-weight: 800;
        max-width: 350px;
        width: 100%;
        color: var(--dark-gray);

        @media (min-width: 480px) {
            font-size: 2.7rem;
            line-height: 45px;
        }
    `
    const Paragraph = styled.p`
        color: var(--dark-gray-2);
        max-width: 350px;
        width: 100%;
    `
    const Imagem = styled.img`
        width: 100%;
        height: 681px;
        position: relative;
        bottom: 20%;
        left: -0.5%;

        @media (min-width: 559px) and (max-width: 767px) {
            width: 80%;
            bottom: 20%;
        }
        @media (min-width: 768px) {
            width: 70%;
            bottom: 20%;
        }
        @media (min-width: 1024px) {
            width: 70%;
            left: 15%;
            bottom: 4%;
        }
        @media (min-width: 1440px) {
            width: 100%;
            bottom: 7%;
        }
    `
    const Effect = styled.img`
        position: absolute;
        left: 86%;
        bottom: 32rem;
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
        </>
    )
}

export default Carrosel;
