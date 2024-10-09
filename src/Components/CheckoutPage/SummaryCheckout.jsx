import Buttons from "../Buttons";
import { ContainerSummary, } from "./styles";

const SummaryCheckout = () => {
  return (
    <ContainerSummary>
      <h4>RESUMO</h4>
      <hr />
      {/* img do product com o nome, já tem em outra branch */}
      <img src="" alt="" />
      <hr />
      <ul className="Prices">
        <li>Subtotal: <span>R$ 219,00</span></li>
        <li>Frete: <span>R$ 0,00</span></li>
        <li>Desconto: <span>R$ 30,00</span></li>
      </ul>
      <div className="TotalPrice">
        <ul>
          <li><strong>Total</strong> <span>R$ 219,00</span></li>
          <p>ou 10x de R$ 21,00 sem juros</p>
        </ul>
      </div>
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
