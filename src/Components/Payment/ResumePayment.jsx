import { ContainerResume,  } from './style.js'

const ResumePayment = () => {
  return (
    <ContainerResume>
      <h4>Resumo da Compra</h4>
      {/**Foto que já tem */}
      <img src="" alt="" />
      <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>

      <div className='ContainerTotal'>
        <ul>
          <li>
            Total <strong>R$ 219,00</strong>
          </li>
        </ul>
        <p>ou 10x de R$ 21,00 sem juros</p>
      </div>
      <a href="#">Imprimir Recibo</a>
    </ContainerResume>
  );
};

export default ResumePayment;