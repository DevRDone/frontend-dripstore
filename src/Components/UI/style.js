import styled from "styled-components";

//   => TotalPrice <=  
export const ContainerTotal = styled.div` 
  background-color: #F6AA1C0D;
  padding: 2rem;

  li {
    font-weight: 700;
    color: black;
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
  }
  strong {
    color: black;
    font-weight: 700;
    font-size: 1.2rem;
  }

  p {
    text-align: end;
    font-size: 0.9rem;
    color: black;
  }
`
//   => TotalPrice <=  
export const ContainerSneaker = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  h3 {
    font-weight: 700;
  }

  img {
    background-color: #E2E3FF;
    padding: 1rem;
    border-radius: 0.2rem;
  }
`