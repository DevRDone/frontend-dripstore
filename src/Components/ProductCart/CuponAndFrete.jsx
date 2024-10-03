import Buttons from "../Buttons";
import { ContainerCuponAndFrete, CuponAndFreteFlex } from "./styles";

const CuponAndFrete = (props) => {
  return (
    <ContainerCuponAndFrete>
      <h4>{props.text}</h4>
      <CuponAndFreteFlex>
        <input type="text" placeholder={props.place} />
        <Buttons
          text='OK'
          width='100%'
          background='var(--light-gray-3)'
          color='var(--primary)'
          border='8px'
          font='700'
        />
      </CuponAndFreteFlex>
    </ContainerCuponAndFrete>
  );
};

export default CuponAndFrete;
