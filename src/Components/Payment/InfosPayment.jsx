import ResumePayment from './ResumePayment.jsx';
import { ContainerInfos,  } from './style.js'

const InfosPayment = () => {
  return (
    <ContainerInfos>
      <hr />
      <h4>Informações Pessoais</h4>
      <ul>
        <li>Nome: <span>Francisco Antonio Pereira</span></li>
        <li>CPF: <span>12345678-90</span></li>
        <li>Email: <span>francisco123@gmail.com</span></li>
        <li>Celular: <span>(85) 9 9235-3007</span></li>
      </ul>
      <hr />
      <h4>Informações de Entrega</h4>
      <ul>
        <li>Endereço: <span>Rua João Pessoa, 000</span></li>
        <li>Bairro: <span>Centro</span></li>
        <li>Cidade: <span>Fortaleza, Ceará</span></li>
        <li>CEP: <span>433-8800</span></li>
      </ul>
      <hr />
      <h4>Informações de Pagamento</h4>
      <ul>
        <li>Titular do Cartão: <span>Francisco A P</span></li>
        <li>Final: <span>********* 2020</span></li>
      </ul>
      <hr />
      <ResumePayment />
    </ContainerInfos>
  );
};

export default InfosPayment;