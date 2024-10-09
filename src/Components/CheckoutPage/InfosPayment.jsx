import { Form, FormContainer } from "./styles";

const InfosPayment = () => {
  return (
    <FormContainer>
      <div className="Container-forms">
        <h4>Informações de Pagamento</h4>
        <hr />
        <Form action="">
          <label htmlFor="">Forma de Pagamento</label>
          <div>
            <input type="radio" name="radio" checked />
            <label> Cartão de Crédito</label>
          </div>
          <div>
            <input type="radio" name="radio" />
            <label> Boleto Bancário</label>
          </div>

          <label htmlFor="">Nome do Cartão *</label>
          <input type="number" placeholder="insira o Nome do Cartão" />

          <label htmlFor="">Número do Cartão *</label>
          <input type="number" placeholder="insira o número do Cartão" />

          <label htmlFor="">Data de validade do Cartão *</label>
          <input type="data" placeholder="insira a validade do Cartão" />

          <label htmlFor="">CVV *</label>
          <input type="number" placeholder="CVV *" />
        </Form>
      </div>
    </FormContainer>
  );
};

export default InfosPayment;
