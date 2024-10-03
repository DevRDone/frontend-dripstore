import { MyCartFlex, FlexItemsCard, ContainerCart, ContainerProduct, Info, ContainerQuantily, Counter, RemoveItem, ContainerPrices } from "./styles";
import NikeRevolution from "../../assets/products/NikeRevolution.svg";

const MyCart = () => {
  return (
    <ContainerCart>
      <MyCartFlex>
        <h2>MEU CARRINHO</h2>
        <hr />
        <ContainerProduct>
          <div>
            <img src={NikeRevolution} alt="" />
          </div>
          <Info>
            <h3>
              Tênis Nike Revolution 6 Next Nature Masculino
            </h3>
            <p>Cor: <span> Vermelho / Branco</span></p>
            <p>Tamanho: <span> 42</span></p>
          </Info>
        </ContainerProduct>
      </MyCartFlex>
      <FlexItemsCard>
        <ContainerQuantily>
          <h4>QUANTIDADE</h4>
          <Counter>
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </Counter>
          <RemoveItem type="submit">
            Remover item
          </RemoveItem>
        </ContainerQuantily>
        <ContainerPrices>
          <ul>
            <li>UNITÁRIO</li>
            <li><span>R$ 219,99</span></li>
            <li><strong>R$ 219,99</strong></li>
          </ul>
          <ul>
            <li>TOTAL</li>
            <li><span>R$ 219,99</span></li>
            <li><strong>R$ 219,99</strong></li>
          </ul>
        </ContainerPrices>
      </FlexItemsCard>
    </ContainerCart>
  );
};

export default MyCart;
