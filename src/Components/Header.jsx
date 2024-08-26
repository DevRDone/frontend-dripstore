import styled from "styled-components";
import Buttons from "./Buttons";
import Navbar from "./Navbar";
import { InputSearch } from "./InputSearch";
import CartControl from "./CartControl";
import Logoicon from "./Logoicon";

function Header() {
    const Header = styled.header`
        max-width: 100%;
        height: 192px;
        margin: 0 auto;
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
                    <Logoicon/>
                    <InputSearch/>
                    <Sign>Cadastre-se</Sign>
                    <Buttons
                        text="Entrar"
                    />
                    <CartControl/>
                </Container>
                <Navbar/>
            </Header>

        </>
    )
}
export default Header;