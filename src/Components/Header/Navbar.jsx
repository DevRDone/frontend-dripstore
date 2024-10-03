import NavLinks from "./NavLinks";

import styled from "styled-components";

const Container = styled.nav`
  display: none;
  width: 100%;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.8rem;
  list-style-type: none;
  height: 2rem;
  width: 100%;

  a {
    color: #474747;
    text-decoration: none;
  }

  a.active {
    color: var(--primary);
    border-bottom: solid 3px;
    font-weight: 700;
  }
`;

export function Navbar(props) {
  return (
    <>
      <Container>
        <Ul>
          <NavLinks />
        </Ul>
      </Container>
    </>
  );
}
export default Navbar;
