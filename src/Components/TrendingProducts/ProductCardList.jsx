import ProductCard from "./ProductCard";
import { ContainerWrapper } from "./styles";

const productList = [
  {
    category: "Tênis",
    name: "K-Swiss V8 - Masculino",
    imgUrl: "./src/assets/products/K-SwissV8-Masculino.png",
    prevPrice: 200,
    promoPercent: 30,
  },
  {
    category: "Tênis",
    name: "K-Swiss V8 - Masculino",
    imgUrl: "./src/assets/products/K-SwissV8-Masculino.png",
    prevPrice: 200,
    promoPercent: 30,
  },
  {
    category: "Tênis",
    name: "K-Swiss V8 - Masculino",
    imgUrl: "./src/assets/products/K-SwissV8-Masculino.png",
    prevPrice: 200,
    promoPercent: 20,
  },
  {
    category: "Tênis",
    name: "K-Swiss V8 - Masculino",
    imgUrl: "./src/assets/products/K-SwissV8-Masculino.png",
    prevPrice: 200,
    promoPercent: 30,
  },
  {
    category: "Tênis",
    name: "K-Swiss V8 - Masculino",
    imgUrl: "./src/assets/products/K-SwissV8-Masculino.png",
    prevPrice: 200,
    promoPercent: 30,
  },
  {
    category: "Tênis",
    name: "K-Swiss V8 - Masculino",
    imgUrl: "./src/assets/products/K-SwissV8-Masculino.png",
    prevPrice: 200,
    promoPercent: 30,
  },
  {
    category: "Tênis",
    name: "K-Swiss V8 - Masculino",
    imgUrl: "./src/assets/products/K-SwissV8-Masculino.png",
    prevPrice: 200,
    promoPercent: 30,
  },
  {
    category: "Tênis",
    name: "K-Swiss V8 - Masculino",
    imgUrl: "./src/assets/products/K-SwissV8-Masculino.png",
    prevPrice: 200,
    promoPercent: 30,
  },
];

const ProductCardList = ({ quantity }) => {
  
  const productsToShow = productList.slice(0, quantity);

  return (
    <ContainerWrapper>
      {productsToShow.map((product, _index) => (
        <ProductCard product={product} key={_index} />
      ))}
    </ContainerWrapper>
  );
};

export default ProductCardList;
