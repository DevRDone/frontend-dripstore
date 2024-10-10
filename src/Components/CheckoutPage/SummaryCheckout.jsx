import Buttons from "../UI/Buttons";
import Sneaker from "../UI/Sneaker";
import TotalPrice from "../UI/TotalPrice";
import { ContainerSummary, } from "./styles";

const SummaryCheckout = () => {
  return (
    <ContainerSummary>
      <h4>RESUMO</h4>
      <hr />
      {/* img do product com o nome, já tem em outra branch */}
      <Sneaker />
      <hr />
      <ul className="Prices">
        <li>Subtotal: <span>R$ 219,00</span></li>
        <li>Frete: <span>R$ 0,00</span></li>
        <li>Desconto: <span>R$ 30,00</span></li>
      </ul>
      <TotalPrice />
      <Buttons 
        text='Realizar Pagamento'
        background='var(--warning)'
        width='100%'
        height='3rem'
      />
    </ContainerSummary>
  );
};

export default SummaryCheckout;
