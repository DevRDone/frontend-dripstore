import styled from "styled-components";
import UseLocalStorage from "../../hooks/UseLocalStorage";
import { CartIcon } from "./CartIcon";
import Buttons from "../Buttons";
import Sneaker from "../../assets/products/sneaker-white.svg";
import { useState } from "react";

const data = [
    { id: '1', image: Sneaker, title: 'Tênis Nike Revolution 6 Next Nature Masculino', price: 'R$ 219,00', discount: 'R$ 419,00' },
    { id: '2', image: Sneaker, title: 'Tênis Nike Revolution 6 Next Nature Masculino', price: 'R$ 219,00', discount: 'R$ 419,00' },
    { id: '3', image: Sneaker, title: 'Tênis Nike Revolution 6 Next Nature Masculino', price: 'R$ 219,00', discount: 'R$ 419,00' },
]

const Container = styled.div`
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const CartCount = styled.span`
    position: absolute;
    top: 10%;
    right: 0;
    width: 17px;
    height: 17px;
    background-color: var(--error);
    color: var(--white);
    border-radius: 100%;
    font-size: 10px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`
const DropDown = styled.div`
    background-color: var(--white);
    padding: 2rem;

    border-radius: 4px;
    position: fixed;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    width: 21.5rem;
    top: 5.4%;
    right: 4%;
    z-index: 999;
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.3);
    display: ${(props) => (props.isVisible ? 'flex' : 'none' )};

    @media (min-width: 1024px) {
        top: 10%;
    }
    @media screen and (min-width: 1440px) {
        top: 10%;
    }
    
    h3 {
        font-weight: 700;
    }

    .FlexPriceDrop {
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            color: var(--primary);
            font-weight: 700;
        }
    }

    .FlexBtnDrop {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .Btn-Drop {
            background-color: transparent;
            outline: none;
            cursor: pointer;
            border: none;
            text-decoration: underline;
        }
    }
    // Styled do Conteudo do Array

    .ContainerDropDown {
        display: flex;
        gap: 1rem;

        img {
            background-color: #E2E3FF;
            width: 4.43rem;
            height: 3.62rem;
            padding: 0.5rem;
            border-radius: 4px;
        }

        strong {
            font-weight: 700;
            font-size: 1.2rem;
        }
        span {
            text-decoration: line-through;
            color: var(--light-gray-2);
            font-size: 0.9rem;
        }

        .FlexDropInfo {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            div {
                display: flex;
                align-items: center;
                justify-content: space-between;
             }
        }
    }
`

function CartControl() {
    const { value } = UseLocalStorage('cart-items')

    const [isDropVisible, setIsDropVisible] = useState(false);
    const toggleDropDown = () => {
        setIsDropVisible((prevState) => !prevState);
    };

    return (
        <Container>
            <CartCount>{value?.length}</CartCount>
            <CartIcon onClick={toggleDropDown}/>
            <DropDown isVisible={isDropVisible}>
                <h3 >Meu Carrinho</h3>
                <hr />
                {/* Conteudo com Array*/}
                {data.map((item) => (
                    <div className="ContainerDropDown" key={item.id}>
                        <div>
                            <img src={item.image} alt="" />
                        </div>
                        <div className="FlexDropInfo">
                            <h3>{item.title}</h3>
                            <div>
                                <strong>{item.price}</strong>
                                <span>{item.discount}</span>
                            </div>
                        </div>
                    </div>
                ))}
                <hr />
                <div className="FlexPriceDrop">
                    <h3>Valor Total : </h3>
                    <span>R$ 219, 00</span>
                </div>
                <div className="FlexBtnDrop">
                    <button type="submit" className="Btn-Drop">Esvaziar</button>
                    <Buttons
                        width='8rem'
                        text='Ver Carrinho'
                        background='var(--primary)'
                        color='var(--white)'
                    />
                </div>
            </DropDown>
        </Container>
    )
}

export default CartControl;
