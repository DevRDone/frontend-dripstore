import styled from "styled-components";

export const StyledPromoBalloon = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: rgb(231, 255, 134);
  border-radius: 25px;
  padding: 0.2rem 0.8rem;

  span {
    font-size: 0.7rem;
    font-weight: bold;
  }
`;

export const StyledOffcanvas = styled.div`
  display: ${(props) => (props.$isopen ? "block" : "none")};
  width: 100%;
  position: fixed;
  top: calc(var(--header-height, 4rem));
  left: 0;
  height: calc(100vh - var(--header-height, 4rem));
  width: 100%;
  background-color: white;
  z-index: 900;
  overflow: hidden;

  background-color: rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const OffcanvasContent = styled.div`
  background-color: var(--white);
  height: 100%;
  width: 100%;
  max-width: 300px;
  padding: 1rem;
  position: relative;

  .close-btn {
    background-color: transparent;
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    border: none;
    cursor: pointer;
  }
`;
