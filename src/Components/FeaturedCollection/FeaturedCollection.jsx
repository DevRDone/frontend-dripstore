import styled from "styled-components";
import CardCollection from "./CardCollection";
import card1 from "../../assets/collection1.png";
import card2 from "../../assets/collection2.png";
import card3 from "../../assets/collection3.png";

const Container = styled.div`
  // ?
`;
const H2 = styled.h2`
  font-weight: 700;
  margin: 2rem 0;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 3rem;
  }

  @media (min-width: 1024px) {
    padding: 0 4rem;
  }
`;
const ContainerFlex = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  justify-content: space-between;
  grid-template-columns: 1fr;
  padding: 1rem;
  justify-content: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 3rem;
  }
  @media (min-width: 1024px) {
    padding: 0 4rem;
    grid-template-columns: repeat(3, 1fr);
  }
`;

function FeaturedCollection() {
  return (
    <Container>
      <H2>Coleções em destaque</H2>
      <ContainerFlex>
        <CardCollection src={card1} text="Novo drop Supreme" />
        <CardCollection src={card2} text="Coleção Adidas" />
        <CardCollection src={card3} text="Novo Beats Bass" />
      </ContainerFlex>
    </Container>
  );
}

export default FeaturedCollection;
