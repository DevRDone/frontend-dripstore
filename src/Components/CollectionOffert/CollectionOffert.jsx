import styled from 'styled-components';
import SneakerOffert from './SneakerOffert';
import InfoCollectionOffert from './InfoCollectionOffert';

function CollectionOffert() {
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
    `
    return (
        <Container>
            <SneakerOffert />
            <InfoCollectionOffert />
        </Container>
    )
}

export default CollectionOffert;
