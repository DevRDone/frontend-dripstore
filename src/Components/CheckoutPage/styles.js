import styled from "styled-components";

//    =>  Index <= 
export const ContainerIndex = styled.section`
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 3rem;
  }
  @media (min-width: 1024px) {
    padding: 0 4rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
`

//    =>  InfosCheckout e InfosPayment <= 
export const FormContainer = styled.div`
  .Container-forms {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--white);
    padding: 2rem;
    margin-bottom: 1rem;
    border-radius: 4px;

    input[type=radio] {
      accent-color: var(--primary);
      width: 20px;
      height: 20px;
    }
  }

  h1 {
    font-weight: 700;
    padding: 2rem 0 1rem 0;
  }
  
  h4 {
    font-weight: 700;
  }

  @media (min-width: 1024px) {
    width: 100%;
  }
`
//    =>  FormCheckout e InfosPayment <= 
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    padding: 1.2rem 0;
    outline: none;
    border: none;
    text-indent: 1rem;
    border-radius: 8px;
    background-color: var(--light-gray-3);
  }

  label {
    font-weight: 500;
  }
`
//    =>  SummaryCheckout <= 
export const ContainerSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: var(--white);
  border-radius: 4px;
  margin-bottom: 2rem;
  padding: 2rem;

  h4 {
    font-weight: 700;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  li {
    display: flex;
    justify-content: space-between;
    
  }
  
  .Prices {
    li {
      color: var(--light-gray-2);
    }

    span {
      color: black;
      font-weight: 500;
    }
  }

  .TotalPrice {
    background-color: #F6AA1C26;
    padding: 1rem;
    border-radius: 4px;
    border: solid 1px #F6AA1C26;
    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.1);

    strong {
      font-weight: 700;
      font-size: 1.2rem;
    }
    span {
      font-weight: 700;
      font-size: 1.2rem;
    }

    p {
      font-size: 0.8rem;
      text-align: end;
    }
  }
  
  @media (min-width: 1024px) {
    margin-top: 5rem;
    max-width: 40%;
    width: 100%;
    height: 100%;
  }
`
