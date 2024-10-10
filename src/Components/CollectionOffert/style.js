import styled from "styled-components";

export const Container = styled.div`
  padding: 6rem 1rem;
  margin-top: 2rem;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 6rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
export const ContainerInforCollection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  p:nth-child(1) {
    color: var(--primary);
    font-weight: 700;
  } 
  h2:nth-child(2) {
    max-width: 514px; 
    width: 100%;
    font-weight: 700;
    font-size: 48px;
    color: var(--dark-gray-2);
  }
  p:nth-child(3) {
    max-width: 589px;
    width: 100%;
    color: var(--dark-gray-2);
  }
`;
export const ContainerOfert = styled.div`
  position: relative;
  div {
    background: linear-gradient(to bottom, #4200ff40 25%, #ffffff00 70%);
    border-radius: 100%;
    padding: 8.5rem;
    position: absolute;
    top: -10%;
    left: 14%;
    z-index: 1;
  }

  @media (min-width: 480px) {
    div {
      padding: 11.5rem;
      left: 8%;
    }
  }
  @media (min-width: 768px) {
    div {
      padding: 13.5rem;
      left: 25%;
    }
  }
  @media (min-width: 1024px) {
    div {
      padding: 11.5rem;
      left: 14%;
    }
  }
  @media (min-width: 1440px) {
    div {
      padding: 14.5rem;
      left: 14%;
    }
  }
`;
export const ImgStyled = styled.img`
  position: relative;
  z-index: 2;
  width: 100%;
  @media (min-width: 480px) {
    width: 93%;
  }
  @media (min-width: 768px) {
    width: 70%;
    left: 16%;
  }
  @media (min-width: 1024px) {
    width: 100%;
    left: 0%;
  }
`;
