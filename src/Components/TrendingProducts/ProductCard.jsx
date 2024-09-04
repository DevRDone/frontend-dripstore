import PromoBalloon from "../common/PromoBalloon";
import {
  CardContainer,
  ImgContainer,
  NewPrice,
  PrevPrice,
  ProductCategory,
  ProductName,
  TextContainer,
} from "./styles";

const ProductCard = ({ product }) => {
  const { imgUrl, name, category, prevPrice, promoPercent } = product;
  const newPrice = calculateNewPrice(prevPrice, promoPercent);

  return (
    <CardContainer>
      <ImgContainer>
        <img src={imgUrl} alt={name} />
        <PromoBalloon promoPercent={promoPercent} />
      </ImgContainer>
      <TextContainer>
        <ProductCategory>{category}</ProductCategory>
        <ProductName>{name}</ProductName>
        <PriceDisplay prevPrice={prevPrice} newPrice={newPrice} />
      </TextContainer>
    </CardContainer>
  );
};

const calculateNewPrice = (prevPrice, promoPercent) => {
  return prevPrice - promoPercent;
};

const PriceDisplay = ({ prevPrice, newPrice }) => (
  <p>
    <PrevPrice>${prevPrice}</PrevPrice>
    <NewPrice>${newPrice}</NewPrice>
  </p>
);

export default ProductCard;
