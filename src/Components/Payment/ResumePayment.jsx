import Sneaker from '../UI/Sneaker.jsx';
import TotalPrice from '../UI/TotalPrice.jsx';
import { ContainerResume,  } from './style.js'

const ResumePayment = () => {
  return (
    <ContainerResume>
      <h4>Resumo da Compra</h4>
      {/**Foto que já tem */}
      <Sneaker />
      <TotalPrice />
      <a href="#">Imprimir Recibo</a>
    </ContainerResume>
  );
};

export default ResumePayment;
