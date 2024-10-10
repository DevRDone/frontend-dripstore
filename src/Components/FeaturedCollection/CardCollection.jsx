import { StyledCollection, H2Card } from './style.js'
import Buttons from "../Buttons";

const CardCollection = (props) => {
  return (
    <StyledCollection src={props.src} >
      <Buttons
        color="black"
        width="96px"
        height="32px"
        background='#E7FF86'
        text="30% OFF"
        font="700"
        border="20rem"
      />
      <H2Card>{props.text}</H2Card>
      <Buttons
        text='Comprar'
        color='var(--primary)'
        background="var(--light-gray-3)"
        width="153px"
        height="48px"
        font="700"
        hoverBG='var(--primary)'
        hoverColor='var(--white)'
      />
    </StyledCollection>
  );
};

export default CardCollection;
