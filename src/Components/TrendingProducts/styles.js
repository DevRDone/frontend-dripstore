import styled from "styled-components";

export const Section = styled.section`
  background-color: var(--bg-color);
  width: 100%;
  height: fit-content;
  padding: 1rem 1rem 2rem;

  @media screen and (min-width: 768px) {
    padding: 1rem 3rem 4rem;
  }

  @media screen and (min-width: 992px) {
    padding: 1rem 4rem 4rem;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  a {
    text-decoration: none;
    color: var(--primary);  
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  a:hover {
    text-decoration: underline;

    svg {
        translate: -.5rem;
    }
  }
`;

export const ContainerWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  justify-content: space-between;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: auto auto auto auto;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  min-height: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImgContainer = styled.div`
  top: 0;
  position: relative;
  background-color: var(--white);
  height: auto;
  width: 100%;
  border-radius: 8px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.05);
  
  img {
    height: auto;
    width: 100%;
    object-fit: contain;
  }
`;

export const TextContainer = styled.div`
  display: block;
  padding: 1rem 0;
`;

export const ProductCategory = styled.p`
    color: var(--light-gray);
    font-size: .8rem;
`;

export const ProductName = styled.p`
    color: var(--dark-gray);
    padding: .8rem 0;
`;

export const PrevPrice = styled.span`
    color: var(--light-gray);
    text-decoration: line-through;
    padding-right: 1rem;
`;

export const NewPrice = styled.span`
    font-weight: bold;
`;
