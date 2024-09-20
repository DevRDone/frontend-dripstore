import styled from "styled-components";

import Navbar from "./Navbar";
import { InputSearch } from "./InputSearch";
import CartControl from "./CartControl";
import Logoicon from "../Logoicon";
import Buttons from "../Buttons";
import MenuMobile from "./MenuMobile";
import { useState } from "react";
import IconMobileClick from "./IconMobileClick";

function Header() {
    const [menuIsVisible, setMenuIsVisible] = useState(true)

    const Header = styled.header`
        width: 100%;
        height: 192px;
        margin: 0 auto;
        background-color: var(--white);

        @media screen and (max-width: 1023px) {
            height: fit-content;
        }
    `
    const Container = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 4rem;
        align-items: center;
        @media (min-width: 0px) and (max-width: 1023px) {
            display: none;
        }
        @media (min-width: 1024px) {
            padding: 1rem 4rem;
        }
    `
    const Sign = styled.p`
        color: var(--dark-gray-2);
        cursor: pointer;
        text-decoration: underline;
    `
    //  ============  Mobile ============
    const ContainerMobile = styled.div`
        display: flex;
        flex-direction: column;

        @media (min-width: 1024px) {
            display: none;
        }
    `
    const ContainerItems = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 1rem;

        svg:nth-child(2) {
            width: 40%;
            margin-left: 1rem;
        }

        @media (min-width: 768px) {
            padding: 1rem 3rem;
        }
        @media (min-width: 1024px) {
            padding: 1rem 4rem;
        }
    `
    const ContainerInputMobile = styled.div`
        padding: 0 1rem;
        padding-bottom: 1rem;
        display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
        
        @media (min-width: 768px) and (max-width: 1023px) {
            position: relative;
            left: 22%;
        }
    `
    const StyledButton = styled.button`
        background-color: transparent;
        border: none;
        outline: none;
        position: absolute;
        right: 18%;
        transform: scale(1);
    `
    const [isOpen, setIsOpen] = useState(false);

    const toggleInput = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Header>
                <Container>
                    <Logoicon />
                    <InputSearch />
                    <Sign>Cadastre-se</Sign>
                    <Buttons
                        text="Entrar"
                    />
                    <IconMobileClick />
                    <CartControl />
                </Container>

                <ContainerMobile>
                    <ContainerItems>
                        <MenuMobile
                            menuIsVisible={menuIsVisible}
                            setMenuIsVisible={setMenuIsVisible}
                        />
                        <Logoicon />
                        <StyledButton onClick={toggleInput}>
                            <IconMobileClick />
                        </StyledButton> 
                        <CartControl />
                    </ContainerItems>

                    <ContainerInputMobile isOpen={isOpen}>
                        <InputSearch />
                    </ContainerInputMobile>
                </ContainerMobile>
                <Navbar />
            </Header>
        </>
    )
}

export default Header;
