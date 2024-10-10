import { ContainerTotal } from './style.js';

const TotalPrice = () => {
  return (
    <>
      <ContainerTotal>
        <ul>
          <li>
            Total <strong>R$ 219,00</strong>
          </li>
        </ul>
        <p>ou 10x de R$ 21,00 sem juros</p>
      </ContainerTotal>
    </>
  );
};

export default TotalPrice;
