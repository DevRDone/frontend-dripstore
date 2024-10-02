import styled from "styled-components";

export const PageContainer = styled.div`
  position: relative;
  background-color: var(--bg-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  height: fit-content;
  padding: 1rem 1rem 2rem;

  /* background-color: blanchedalmond; */

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 1rem 3rem 4rem;
  }

  @media screen and (min-width: 992px) {
  }

  @media screen and (min-width: 1024px) {
    padding: 1rem 4rem 4rem;
  }
`;

export const Section = styled.section`
  background-color: var(--bg-color);
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;

  & .text-container {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;
    font-size: 14px;
    font-weight: 500;
    color: var(--dark-gray-2);
    width: 100%;
    
    strong {
      font-weight: 700;
    }
  }

  & .filter-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    height: 3rem;
  }

  a {
    text-decoration: none;
    color: var(--primary);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row-reverse;

    & .filter-container {
      justify-content: flex-end;
    }
  }
`;

export const FilterToggle = styled.button`
  display: block;
  color: var(--white);
  background-color: var(--primary);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  height: 100%;
  aspect-ratio: 1 / 1;

  svg {
    width: 22px;
    height: 22px;
    color: var(--white);
    margin: auto;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const OrderByDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 300px;
  border: 1px solid var(--light-gray);
  border-radius: 4px;
  padding: 0 1rem;
  cursor: pointer;
  background-color: var(--bg-color1);
  color: var(--dark-gray-2);
  font-size: 14px;
`;

export const DropdownLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  width: 100%;

  p {
    color: var(--dark-gray-2);
    font-size: 14px;
  }

  strong {
    color: var(--dark-gray-2);
    font-weight: 700;
  }
`;

export const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--bg-color);
  border: 1px solid var(--light-gray);
  border-radius: 5px;
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 1;
`;

export const DropdownItem = styled.li`
  padding: 0.5rem;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: var(--white);
  }
`;
