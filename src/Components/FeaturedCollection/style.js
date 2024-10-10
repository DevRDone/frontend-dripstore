import styled from "styled-components";

export const Container = styled.div`
  // ?
`;
export const H2 = styled.h2`
  font-weight: 700;
  margin: 2rem 0;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 3rem;
  };

  @media (min-width: 1024px) {
    padding: 0 4rem;
  };
`;
export const ContainerFlex = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  justify-content: space-between;
  grid-template-columns: 1fr;
  padding: 1rem;
  justify-content: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 3rem;
  };
  @media (min-width: 1024px) {
    padding: 0 4rem;
    grid-template-columns: repeat(3, 1fr);
  };
`;

export const StyledCollection = styled.div`
  width: 100%;
  height: 15.68rem;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  padding-left: 2rem;
  border-radius: 0.6rem;
`;
export const H2Card = styled.h2`
  color: var(--dark-gray);
  font-weight: 700;
  font-size: 2.25em;
  width: 11.5rem;
`;
