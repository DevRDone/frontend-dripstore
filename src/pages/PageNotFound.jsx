import styled from "styled-components";
import Buttons from "../Components/Buttons";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 1rem;
`;

const H1 = styled.h1`
  font-weight: 700;
`;

function PageNotFound() {
  return (
    <Container>
      <H1>404 - Page Not Found</H1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">
        <Buttons text="Voltar para Home" width="10rem" />
      </Link>
    </Container>
  );
}
export default PageNotFound;
