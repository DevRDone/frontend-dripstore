import { Form } from "./styles";

const FormCheckout = (props) => {
  return (
    <Form action="" >
      <label >{props.label1} *</label>
      <input type={props.type1} placeholder={props.placeholder1} checked/>

      <label >{props.label2} *</label>
      <input type={props.type2} placeholder={props.placeholder2} checked/>

      <label >{props.label3} *</label>
      <input type={props.type3} placeholder={props.placeholder3} checked/>

      <label >{props.label4} *</label>
      <input type={props.type4} placeholder={props.placeholder4} checked/>

      <label >{props.label5}</label>
      <input type={props.type5} placeholder={props.placeholder5}/>
    </Form>
  );
};

export default FormCheckout;
