import sneaker from '../../assets/products/sneaker-white.svg';
import { ContainerSneaker } from './style.js';

const Sneaker = () => {
  return (
    <ContainerSneaker>
      <img src={sneaker} alt="" />
      <h3>
        Tênis Nike Revolution 6 Next Nature Masculino
      </h3>
    </ContainerSneaker>
  );
};

export default Sneaker;