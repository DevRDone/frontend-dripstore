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

        @media screen and (max-width: 768px) {
            height: fit-content;
        }

    `
    const Container = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 4rem;
        align-items: center;
        @media screen and (max-width: 768px) {
            display: none;
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

        @media (min-width: 768px) {
            display: none;
        }
    `
    const ContainerItems = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 0.5rem;
    `
    const ContainerInputMobile = styled.div`
        margin: 0 auto;
        padding-bottom: 1rem;
        display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    `
    const StyledButton = styled.button`
        background-color: transparent;
        border: none;
        outline: none;

        @media (min-width: 768px) {
            display: none;
        }
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