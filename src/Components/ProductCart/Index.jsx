import { ContainerProdutCart, ContainerFlexDesktop, HrDesktop } from "./styles";
import CuponAndFrete from "./CuponAndFrete";
import MyCart from "./myCart";
import Summary from "./Summary";
import TotalFixed from "./TotalFixed";

const ProductCart = () => {
  return (
    <ContainerProdutCart>
      <div>
        <MyCart />
        <ContainerFlexDesktop>
          <CuponAndFrete
            text='Cupom de desconto'
            place='Insira seu códico'
          />
          <CuponAndFrete
            text='Calcular frete'
            place='Insira seu CEP'
          />
        </ContainerFlexDesktop>
      </div>
      <Summary />
      <TotalFixed />
    </ContainerProdutCart>
  );
};

export default ProductCart;
