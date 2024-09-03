import styled from "styled-components";

import Navbar from "./Navbar";
import { InputSearch } from "./InputSearch";
import CartControl from "./CartControl";
import Logoicon from "../Logoicon";
import Buttons from "../Buttons";

function Header() {
    const Header = styled.header`
        height: 192px;
        margin: 0 auto;
        background-color: var(--white);
    `
    const Container = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        padding-top: 3%;
        align-items: center;
    `
    const Sign = styled.p`
        color: var(--dark-gray-2);
        cursor: pointer;
        text-decoration: underline;
    `

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
                    <CartControl />
                </Container>
                <Navbar />
            </Header>

        </>
    )
}
export default Header;