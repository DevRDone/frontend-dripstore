import styled from "styled-components";

export const SidebarContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 300px;
  border-radius: 4px;
  overflow: auto;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  h1 {
    font-size: 16px;
    font-weight: 700;
    color: var(--dark-gray);
    border-bottom: 1px solid var(--light-gray);
    padding-bottom: 1rem;
  }

  h2 {
    font-size: 14px;
    font-weight: 700;
    color: var(--dark-gray);
    padding: 1rem 0;
    margin: 0;
  }

  .filters {
    overflow: auto;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0;
    margin: 0;
  }

  li {
    color: var(--dark-gray);
    display: flex;
    cursor: pointer;
  }

  label {
    color: var(--dark-gray);
    font-size: 14px;
    height: 1rem;
  }

  input {
    font-size: 0.8rem;
    margin-right: 0.5rem;
    border: 1px solid var(--light-gray);
    border-radius: 4px;
    accent-color: var(--primary);
    cursor: pointer;
    height: 1rem;
    width: 1rem;

    &:focus {
      outline-color: var(--primary);
    }
  }

  /* scrollbar  */
  &:hover ::-webkit-scrollbar {
    width: 0.2rem;
    height: 0.2rem;
  }

  ::-webkit-scrollbar-track {
    background: var(--white);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--light-gray-3);
    border-radius: 0.5rem;
  }

  @media screen and (min-width: 1024px) {
    position: inherit;
    height: fit-content;
    background-color: var(--white);
    width: 25rem;
    padding: 1rem;
  }
`;
