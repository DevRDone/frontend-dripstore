import Buttons from "../Buttons"
import { StyledSection, DisplayNone } from "./styles";

const Summary = () => {
  return (
    <StyledSection>
      <h2>Resumo</h2>
      <hr />
      <h3>Subtotal: <span>R$ 219,00</span></h3>
      <h3>Frete: <span>R$ 0,00</span></h3>
      <h3>Desconto: <span>R$ 30,00</span></h3>
      <h4>Total <strong>R$ 219,00</strong></h4>
      <p>Ou 10x de R$ 21,00 sem juros</p>
      <DisplayNone>
        <Buttons
          width='100%'
          color='var(--white)'
          background='var(--warning)'
          text='Continuar'
        />
      </DisplayNone>
    </StyledSection>
  );
};

export default Summary;
