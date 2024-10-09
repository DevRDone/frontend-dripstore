import { ContainerIndex, } from "./styles";
import InfosCheckout from "./InfosCheckout";
import SummaryCheckout from "./SummaryCheckout";


const Checkout = () => {
  return (
    <ContainerIndex>
      <InfosCheckout />
      <SummaryCheckout />
    </ContainerIndex>
  );
};

export default Checkout;
