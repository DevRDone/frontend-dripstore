import styled from "styled-components";
import SneakerOffert from "./SneakerOffert";
import InfoCollectionOffert from "./InfoCollectionOffert";

const Container = styled.div`
  padding: 6rem 1rem;
  margin-top: 2rem;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 6rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

function CollectionOffert() {
  return (
    <Container>
      <SneakerOffert />
      <InfoCollectionOffert />
    </Container>
  );
}

export default CollectionOffert;
