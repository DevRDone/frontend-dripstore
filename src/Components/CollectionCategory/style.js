import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0rem;
  overflow-y: auto;
  
  h2 {
    font-weight: 700;
    padding: 2rem 0;
    font-size: 24px;
  }

  @media (min-width: 360px) {
    padding: 2rem 0rem;
    align-items: start;
    h2 {
      padding: 2rem 1rem;
    }
  }
  @media (min-width: 480px) {
    padding: 2rem 0;
    align-items: start;
    h2 {
      padding: 2rem 1rem;
    }
  }
  @media (min-width: 768px) {
    padding: 2rem 0;
    align-items: start;
    overflow-y: none;
    h2 {
      padding: 2rem 3rem;
      margin: 0 auto;
    }
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ItemImagem = styled.button`
  border: none;
  outline: none;
  display: flex;
  padding: 20px;
  border-radius: 50%;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  background-color: var(--white);
`;
export const ItemName = styled.h3`
  font-weight: 500;
  padding-top: 1rem;
  display: flex;
`;
export const ContainerWrapper = styled.div`
  display: flex;
  gap: 2.5rem;
  justify-content: space;

  @media (max-width: 480px) {
    gap: 1rem;
    width: 100%;
    padding: 0 1rem;
  }
  @media (min-width: 768px) {
    gap: 2rem;
    width: 100%;
    padding: 0 3rem;
  }
  @media (min-width: 1024px) {
    gap: 2rem;
    justify-content: center;
  }
`;
