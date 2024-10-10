import ProductCardList from "../TrendingProducts/ProductCardList"
import styled from "styled-components"

const ProductListStyled = styled(ProductCardList)`
  @media screen and (min-width: 768px) {
    grid-template-columns: auto auto auto;
  }
`;

const ProductList = () => {
  return (
    <ProductListStyled quantity={8} />
  )
}

export default ProductList
