import styled from "styled-components";
import CarroselProdDetails from "./CarroselProdDetails";
import Stars from "./Star";
import { FaStar } from 'react-icons/fa';
import ShoeSizeButtons from "./ShoeSizeButtons";
import ColorsShoes from "./ColorsShoes";
import Buttons from "../Buttons";

function ProductDetails(props) {
    const Container = styled.div`
        width: 100%;
        padding: 1rem 4rem;
        span {
            font-weight: 800;
        }
        p {
            padding-bottom: 2rem;
        }

        @media (min-width: 0) and (max-width: 480px){
            padding: 1rem 1rem;
        }
        @media (min-width: 768px){
            padding: 1rem 3rem;
        }
        @media (min-width: 1024px){
            padding: 1rem 4rem;
        }

    `
    const ContainerFlex = styled.div`
        display: flex;
        gap: 2rem;
        width: 100%;
        height: 100%;

        @media screen and (max-width: 1122px){
            flex-direction: column;
        }
    `
    const ContainerSwiper = styled.div`
        max-width: 800px;
        width: 100%;
        max-height: 800px;
        height: 100%;
        max-height: 4;
    `
    const ContainerDetails = styled.div`
        h1 {
            font-size: 36px;
            font-weight: 700;
            width: 100%;
            max-width: 440px;
        }
        p {
            color: var(--dark-gray-2);
        }

    `
    const Price = styled.div`
        display: flex;
        gap: 1rem;
        align-items: center;
        p:nth-child(1) {
            color: var(--dark-gray-2);
        }
        span {
            font-size: 32px;
        }
        p:nth-child(2) {
            color: var(--light-gray-2);
            text-decoration: line-through;
        }
    `
    const Infor = styled.h3`
        color: var(--light-gray);
        font-size: 16px;
        font-weight: 700;
    `
    const Paragraph = styled.p`
        font-size: 14px;
        font-weight: 500;
        color: var(--dark-gray-2);
        width: 100%;
        max-width: 440px;
    `
    const Rating = styled.div`
        display: flex;
        justify-content: start;
        width: 100%;
        align-items: baseline;


        p {
            font-size: 14px;
            font-weight: 500;
            color: var(--light-gray);
        }
    `
    const StarRating = styled.div`
        background-color: var(--warning);
        color: var(--white);
        max-width: 63px;
        width: 100%;
        height: 23px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        margin: 0 1rem;
    `

    /* 
    Melhorar o H1 
    Organização do códico
    e Talvez melhorar um pouco as abordagens usadas do CSS (width e etc)
    */
    return (
        <Container>
            <p> <span>Home</span> / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</p>
            <ContainerFlex>
                <ContainerSwiper>
                    <CarroselProdDetails />
                </ContainerSwiper>
                <ContainerDetails>
                    <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
                    <p>Casual | Nike | REF:38416711</p>
                    <Rating> 
                        <Stars stars={props.stars}/>
                        <StarRating>
                            4.7 <FaStar />
                        </StarRating>
                        <p>(90 avaliações)</p>
                    </Rating>
                    <Price>
                        <p>R$ <span>219,00</span></p>
                        <p>319,00</p>
                    </Price>
                    <Infor>Descrição do Produto</Infor>
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</Paragraph>
                    <Infor>
                        Tamanho
                    </Infor>
                    <ShoeSizeButtons />
                    <Infor>Cores</Infor>
                    <ColorsShoes />
                    <Buttons 
                        text='COMPRAR'
                        color='var(--white)'
                        background='var(--warning)'
                        width='220px'
                        height='48px'
                    />
                </ContainerDetails>
            </ContainerFlex>
        </Container>
    );
}

export default ProductDetails;
