import ArrowRight from "../../assets/icons/ArrowRight";
import ProductCardList from "./ProductCardList";
import { Section, SectionHeader } from "./styles";

const TrendingProducts = ({ quantity } ) => {
  return (
    <Section>
      <SectionHeader>
        <h1>Produtos em alta</h1>
        <a href="#">
          <p>Ver todos</p>
          <ArrowRight />
        </a>
      </SectionHeader>
      <div>
        <ProductCardList quantity={quantity} />
      </div>
    </Section>
  );
};

export default TrendingProducts;
