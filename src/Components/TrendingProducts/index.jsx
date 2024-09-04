import ArrowRight from "../../assets/icons/ArrowRight";
import ProductCardList from "./ProductCardList";
import { Section, SectionHeader } from "./styles";

const TrendingProducts = () => {
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
        <ProductCardList />
      </div>
    </Section>
  );
};

export default TrendingProducts;
