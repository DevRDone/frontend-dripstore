import { useState } from "react";
import styled from "styled-components";
import Buttons from "../Buttons";

import NavLinks from "./NavLinks";

const Paragraph = styled.p`
  font-weight: 700;
  margin-bottom: 1rem;
`;

const StyledNavLinks = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  background-color: var(--white);

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
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    list-style: none;

    flex-grow: 1;
  }

  .auth-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    justify-self: end;
    padding-top: 1rem;
    border-top: 1px solid var(--light-gray-2);

    #register {
      color: var(--dark-gray);
      text-decoration: underline;
    }
  }
`;

const MobileMenu = () => {
  return (
    <>
      <StyledNavLinks >
        <Paragraph>Páginas</Paragraph>
        <ul>
          <NavLinks />
        </ul>
        {/* auth buttons */}
        <div className="auth-buttons">
          <Buttons text="Entrar" width="100%" id="login" />
          <a href="#" id="register">
            Cadastre-se
          </a>
        </div>
      </StyledNavLinks>
    </>
  );
};

export default MobileMenu;
