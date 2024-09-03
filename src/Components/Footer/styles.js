import styled from "styled-components";

export const Footer = styled.footer`
  color: var(--white);
  background: var(--dark-gray);
  width: 100%;
  height: fit-content;
  padding: 2.5rem 1rem;

  @media screen and (min-width: 768px) {
    padding: 3rem;
    padding-bottom: 0;
  }
`;

export const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0;
  gap: 2rem;

  @media screen and (min-width: 992px) {
    flex-wrap: nowrap;
    padding: 2rem 0;
  }
`;

export const Container = styled.div`
  && {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: self-start;
  }

  @media screen and (min-width: 992px) {
    && {
      max-width: 300px;
    }
  }
`;

export const Title = styled.h1`
    font-size: 1.2rem;
    font-weight: 600;
    padding-bottom: 1rem;
`;

export const Paragraph = styled.p`
    color: var(--light-gray-3);
    margin-bottom: 1rem;
`;

export const LogoContainer = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: self-start;
  gap: 2rem;

  svg {
    path {
      fill: var(--white);
    }
  }

  p {
    color: var(--light-gray-3);
    max-width: 350px;
  }
`;

export const ContentContainer = styled(ContainerWrapper)`
  padding: 0;
`;

export const InfoCatContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  gap: 2rem;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  a {
    color: var(--light-gray-3);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const Copy = styled.div`
  width: 100%;
  font-size: 0.8rem;
  text-align: center;
  border-top: 1px solid var(--light-gray);
  padding: 1rem;
`;
