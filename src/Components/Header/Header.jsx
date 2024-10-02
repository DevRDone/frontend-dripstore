import styled from "styled-components";

import Navbar from "./Navbar";
import { InputSearch } from "./InputSearch";
import CartControl from "./CartControl";
import Logoicon from "../Logoicon";
import Buttons from "../Buttons";
import MenuMobile from "./MenuMobile";
import { useState } from "react";
import IconMobileClick from "./IconMobileClick";
import Offcanvas from "../common/Offcanvas";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";

const StyledHeader = styled.header`
  width: 100%;
  height: fit-content;
  min-height: var(--header-height);
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--white);
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 2rem 0;
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

const Container = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    height: var(--header-height);
    width: 100%;
  }
`;
const Sign = styled.p`
  color: var(--dark-gray-2);
  cursor: pointer;
  text-decoration: underline;
`;

//  ============  Mobile ============
const ContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  min-height: fit-content;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const ContainerItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto 0;
  width: 100%;
  height: var(--header-height);

  .logo-icon {
    min-width: 138px;
    max-width: 250px;
    height: auto;
    max-height: 3rem;
  }

  .icons-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  height: 100%;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const ContainerInputMobile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  width: 100%;
  display: ${(props) => (props.$isopen ? "none" : "flex")};
`;

const AuthLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const StyledButton = styled.button`
  border: none;
  outline: none;
`;

function Header() {
  const [isOpen, setIsOpen] = useState(true);
  const [menuIsVisible, setMenuIsVisible] = useState(true);
  const [isHeaderOffcanvasOpen, setHeaderOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setHeaderOffcanvasOpen((prev) => !prev);
  };

  const toggleInput = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <StyledHeader>
        <Container>
          <Logoicon />
          <InputSearch />
          <AuthLinks>
            <Sign>Cadastre-se</Sign>
            <Buttons text="Entrar" />
          </AuthLinks>
          <IconMobileClick />
          <CartControl />
        </Container>

        <ContainerMobile>
          <ContainerItems>
            <MenuButton onClick={toggleOffcanvas}>
              {isHeaderOffcanvasOpen ? <MdOutlineClose /> : <MdOutlineMenu />}
            </MenuButton>
            <Offcanvas
              title="Páginas"
              content={
                <MenuMobile />
              }
              isOpen={isHeaderOffcanvasOpen}
              onClose={toggleOffcanvas}
            />
            <Logoicon />
            <div className="icons-container">
              <StyledButton onClick={toggleInput}>
                <IconMobileClick />
              </StyledButton>
              <CartControl />
            </div>
          </ContainerItems>

          <ContainerInputMobile $isopen={isOpen ? isOpen : false}>
            <InputSearch />
          </ContainerInputMobile>
        </ContainerMobile>
        <Navbar />
      </StyledHeader>
    </>
  );
}

export default Header;
