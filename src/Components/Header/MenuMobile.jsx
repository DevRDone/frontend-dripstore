import React, { useState } from 'react';
import styled from 'styled-components';
import Buttons from "../Buttons";

const isActive = (url) => {
  if (location.pathname === url) {
    return "active";
  }
  return "";
}

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media screen and (min-width: 1023px){
    display: none;
  }

`
const Paragraph = styled.p`
    font-weight: 700;
    position: absolute;
    top: 6%;
    left: 5%;
`
const NavLinks = styled.nav`
  width: 308px;
  height: 702px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 12%;
  left: 0;
  background-color: var(--white);
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 5;
  
  a {
    color: black;
    text-decoration: none;
    font-size: 1rem;
  }

  a.active {
    color: var(--primary);
    font-weight: bold;
    border-bottom: 3px solid var(--primary);
    padding-bottom: 1px;
  }
  a:nth-child(5) {
    color: var(--dark-gray);
    text-decoration: underline;
    position: absolute;
    bottom: 5%;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    position: absolute;
    top: 12%;
    left: 5%;
  }

  ul > li {
    list-style-type: none;
  }

  hr {
    width: 80%;
    position: absolute;
    bottom: 19%;
    opacity: 0.4;
  }

  button {
    position: absolute;
    bottom: 10%;
  }
`;

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuContainer>
      <MenuButton onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </MenuButton>
      <NavLinks isOpen={isOpen}>
        <Paragraph>
          Páginas
        </Paragraph>
        <ul>
          <li>
            <a href="/" className={isActive('/')}>Home</a>
          </li>
          <li>
            <a href="/product" className={isActive('/product')}>Produtos</a>
          </li>
          <li>
            <a href="#" className={isActive('')}>Categorias</a>
          </li>
          <li>
            <a href="#" className={isActive('')}>Meus pedidos</a>
          </li>
        </ul>
        <hr />
        <Buttons
          text='Entrar'
          width={248}
        />
        <a href="#">Cadastre-se</a>
      </NavLinks>
    </MenuContainer>
  );
};

export default MobileMenu;
