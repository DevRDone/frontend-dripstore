import styled from "styled-components";
//           => Style ProductCart <=
export const ContainerProdutCart = styled.div`
  margin: 2rem 0;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0 3rem;
  }

`
export const HrDesktop = styled.hr`
  @media (min-width: 1024px) {
    width: 63.4%;
    left: 6.5%;
    position: absolute;
  }
  @media (max-width: 1023px) {
    display: none;
  }
`
export const ContainerFlexDesktop = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 1rem;
  }
`
//           => Style MyCart <=

export const ContainerCart = styled.div`
  background-color: var(--white);
  margin: 1rem;
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  h2 {
    font-size: 1rem;
    font-weight: 700;
    padding-bottom: 1rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    margin: 1rem 1rem 0 1rem;
    h2 {
      padding: 0;
    }
  }
`
export const ContainerProduct = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-top: 1rem;
  img {
    background-color: #E2E3FF;
    padding: 1rem;
    border-radius: 4px;
  }

 @media (min-width: 1024px) {
  flex-direction: row;
  padding: 0;

  img {
    padding: 2.3rem;
  }
 }
`
export const MyCartFlex = styled.div`
 @media (min-width: 1024px) {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  hr {
    width: 165%;
  }
 }
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-weight: 700;
  }

  p {
    color: var(--light-gray);
  }

  span {
    font-weight: 700;
    color: black;
  }
`
export const ContainerQuantily = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  h4 {
    font-weight: 600;
  }

  @media (min-width: 1024px) {
    align-items: center;
    gap: 2.1rem;
  }
`
export const Counter = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;

  button {
    padding: 0.4rem 2.9rem;
    border: 1px solid var(--light-gray-2);
    background-color: transparent;
    outline: none;
    border-radius: 4px;
    font-size: 1.2rem;
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    button {
      padding: 0;
      width: 35px;
      height: 35px;
    }
  }
`
export const RemoveItem = styled.button`
  background-color: transparent;
  color: var(--dark-gray-3);
  border: none;
  text-decoration: underline;
  font-weight: 500;
  cursor: pointer;
  padding-bottom: 2rem;
`
export const ContainerPrices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  span {
    color: var(--light-gray-2);
    text-decoration: line-through;
  }
  strong {
    font-weight: 700;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
    ul {
      grid-template-columns: repeat(1, 1fr);
      margin-left: 2.3rem;
      gap: 1rem;
    }

    li {
      text-align: center;
      line-height: 2rem;
      font-weight: 600;

    }

  }
`

export const FlexItemsCard = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    align-items: baseline;
    
  }
`
//           => Style DiscountCoupon and Frete <=

export const ContainerCuponAndFrete = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 2rem;
  background-color: var(--white);
  margin: 1rem 1rem;
  h4 {
    font-weight: 700;
    font-size: 0.9rem;
  }
  input {
    width: 100%;
    padding: 1.3rem;
    border: none;
    background-color: var(--light-gray-3);
    border-radius: 8px;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 1024px) {
    padding: 1rem;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`
export const CuponAndFreteFlex = styled.div`
  
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }
`
//           => Style Sumarry <=

export const StyledSection = styled.section`
  background-color: var(--white);
  padding: 2rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h2 {
    font-size: 1.4rem;
    font-weight: 700;
  }

  h3 {
    display: flex;
    justify-content: space-between;
    color: var(--light-gray);
    font-size: 1.15rem;
  }

  span {
    font-weight: 600;
    color: black;
    font-size: 1rem;
  }

  h4 {
    display: flex;
    justify-content: space-between;
    font-size: 1.3rem;
    font-weight: 700;
  }

  strong {
    color: var(--primary);
    font-weight: 600;
  }
  
  p {
    display: flex;
    justify-content: end;
    color: var(--light-gray);
  }
`
export const DisplayNone = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`
//           => Style TotalFixed <=

export const ContainerFixed = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--white);
  padding: 2rem 1rem;
  width: 100%;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.1);
  z-index: 100;

  h4 {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 1.2rem;
  }
  p {
    display: flex;
    justify-content: end;
    color: var(--light-gray);
    font-size: 0.8rem;
  }

  strong {
    color: var(--primary);
  }

  @media (min-width: 1024px) {
    display: none;
  }
`
