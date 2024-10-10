import { ContainerOfert, ImgStyled  } from './style.js'
import Jordan from "../../assets/SneakerOffert.svg";

function SneakerOffert() {
  return (
    <ContainerOfert>
      <ImgStyled src={Jordan} alt="Jordan de Colecionador" />
      <div></div>
    </ContainerOfert>
  );
}

export default SneakerOffert;
