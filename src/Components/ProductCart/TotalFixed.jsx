import Buttons from "../Buttons";
import { ContainerFixed } from "./styles";

const TotalFixed = () => {
  return (
    <ContainerFixed>
      <h4>Total <strong>R$ 219,00</strong></h4>
      <p>Ou 10x de R$ 21,00 sem juros</p>
      <Buttons 
        text='Continuar'
        color='var(--white)'
        background='var(--warning)'
        width='100%'
      />
    </ContainerFixed>
  );
};

export default TotalFixed;
