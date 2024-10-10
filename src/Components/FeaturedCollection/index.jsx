import { Container, H2, ContainerFlex, } from './style.js'
import CardCollection from "./CardCollection";
import card1 from "../../assets/collection1.png";
import card2 from "../../assets/collection2.png";
import card3 from "../../assets/collection3.png";

const FeaturedCollection = () => {
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
};

export default FeaturedCollection;
