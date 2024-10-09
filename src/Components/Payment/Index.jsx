import Buttons from '../Buttons.jsx';
import InfosPayment from './InfosPayment.jsx';
import { ContainerIndex, } from './style.js'
import Sucess from './Sucess.jsx';

const PaymentSucess = () => {
  return (
    <ContainerIndex>
      <Sucess />
      <InfosPayment />
      <div className='btn-div'>
        <Buttons
          text='Voltar para home'
          background='var(--warning)'
          width='100%'
        />
      </div>
    </ContainerIndex>
  );
};

export default PaymentSucess;