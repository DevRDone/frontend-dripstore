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
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        position: absolute;
        top: 20%;
        left: 3%;

        // Media Queries

        @media (max-width: 768px) {
            top: 50%;
            text-align: center;
            align-items: center;
        }
        @media (max-width: 425px) {
            text-align: center;
            align-items: center;
        }
        @media (max-width: 375px) {
            text-align: center;
            align-items: center;
        }
    `

    const H3 = styled.h3`
        color: var(--warning);
        font-weight: 700;
    `
    const TitleMain = styled.h1`
        font-weight: 800;
        font-size: 4rem;
        width: 31.9rem;
        color: var(--dark-gray);
        line-height: 4.5rem;

        // Media Queries

        @media (max-width: 768px) {
            font-size: 50px;
            width: 400px;
            height: 100px;
            line-height: 45px;
        }

        @media (max-width: 425px) {
            font-size: 50px;
            width: 400px;
            height: 100px;
            line-height: 45px;
        }

        @media (max-width: 375px) {
            font-size: 40px;
            width: 350px;
            height: 100px;
            line-height: 45px;
        }
    `
    const Paragraph = styled.p`
        color: var(--dark-gray-2);
        width: 495px;

        @media (max-width: 768px) {
            width: 350px;
        }
    `
    const Imagem = styled.img`
        width: 100%;
        height: 681px;
        position: relative;
        left: 16.5%;

        

        @media (max-width: 768px) {
            width: 70%;
            bottom: 25%;
        }

        @media (max-width: 425px) {
            left: 0;
            width: 110%;
            bottom: 20%;
            left: -4%;
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