import styled from "styled-components";

//    =>  Index <=
export const ContainerIndex = styled.section`
  padding: 1rem;

  .btn-div {
    padding: 2rem 0;
  }

  @media (min-width: 768px) {
    padding: 2rem 3rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem 15rem;
  }
`

//    =>  Sucess <=

export const ContainerSucess = styled.div`
  background-color: var(--white);
  border-radius: 4px;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 5rem;
    text-align: center;

  }
  h1 {
    font-weight: 700;
    text-align: center;
  }
`

export const ContainerInfos = styled.div`
  background-color: var(--white);
  padding: 0.5rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h4 {
    font-weight: 700;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }

  li {
    color: var(--dark-gray-3);
    display: flex;
    gap: 1rem;
  }

  span {
    color: black;
    font-weight: 600;
  }
`
//    =>  ResumePayment <=

export const ContainerResume = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  .ContainerTotal {
    background-color: #F6AA1C0D;
    padding: 2rem;

    li {
      font-weight: 700;
      color: black;
      display: flex;
      justify-content: space-between;
    }
    strong {
      color: black;
      font-weight: 700;
    }

    p {
      text-align: end;
      font-size: 0.9rem;
    }

  }
  a {
    color: black;
    text-align: center;
    padding-bottom: 1rem;
  }
  `

