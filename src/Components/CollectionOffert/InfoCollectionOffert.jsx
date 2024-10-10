import { ContainerInforCollection } from './style.js'
import Buttons from "../Buttons";

function InfoCollectionOffert() {
  return (
    <ContainerInforCollection>
      <p>Oferta Especial</p>
      <h2>Air Jordan edição de colecionador</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
      <Buttons
        text='Ver Oferta'
        width='200px'
      />
    </ContainerInforCollection>
  )
}

export default InfoCollectionOffert;
