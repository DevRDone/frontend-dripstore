import { Footer, ContainerWrapper, LogoContainer, InfoCatContainer, Copy, ContentContainer } from "./styles";
import Logoicon from "../Logoicon";
import SocialLinks from "./SocialLinks";
import Info from "./Info";
import Categories from "./Categories";
import Contact from "./Contact";

const FooterComponent = () => {
  return (
    <Footer>
      <ContainerWrapper>
        <LogoContainer>
          <Logoicon />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
            blanditiis laborum magnam nostrum! Consequuntur voluptatibus, quia.
          </p>
          <SocialLinks />
        </LogoContainer>
        <ContentContainer>
          <InfoCatContainer>
            <Info />
            <Categories />
          </InfoCatContainer>
          <Contact />
        </ContentContainer>
      </ContainerWrapper>
      <Copy>
        <p>@ 2024 Drip Store</p>
      </Copy>
    </Footer>
  );
};

export default FooterComponent;
