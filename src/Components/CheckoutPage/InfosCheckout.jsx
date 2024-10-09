import FormCheckout from "./FormCheckout";
import InfosPayment from "./InfosPayment";
import { FormContainer,  } from "./styles";

const InfosCheckout = (props) => {
  return (
    <FormContainer>
      <h1>Finalizar Compra</h1>
      <div className="Container-forms">
        <h4>Informações Pessoais</h4>
        <hr />
        <FormCheckout
          label1='Nome Completo'
          type1='text'
          placeholder1='Insira seu Nome'

          label2='CPF'
          type2='number'
          placeholder2='Insira seu CPF'

          label3='E-mail'
          type3='e-mail'
          placeholder3='Insira seu Email'

          label4='Celular'
          type4='number'
          placeholder4='Insira seu Celular'

          label5='Senha *'
          type5='password'
          placeholder5='Insira sua Senha'
        />
      </div>
      <div className="Container-forms" >
      <h4>Informações de Entrega</h4>
        <hr />
        <FormCheckout
          label1='Endereço'
          type1='text'
          placeholder1='Insira seu Endereço'

          label2='Bairro'
          type2='text'
          placeholder2='Insira seu Bairro'

          label3='Cidade'
          type3='text'
          placeholder3='Insira sua Cidade'

          label4='CEP'
          type4='number'
          placeholder4='Insira seu CEP'

          label5='Complemento'
          type5='text'
          placeholder5='Insira Complemento'
        />
      </div>
      <InfosPayment />
    </FormContainer>
  );
};

export default InfosCheckout;
