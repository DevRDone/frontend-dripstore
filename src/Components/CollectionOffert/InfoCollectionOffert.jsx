import styled from "styled-components";
import Buttons from "../Buttons";


function InfoCollectionOffert() {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        p:nth-child(1) {
            color: var(--primary);
            font-weight: 700;
        } 
        h2:nth-child(2) {
            max-width: 514px;
            width: 100%;
            font-weight: 700;
            font-size: 48px;
            color: var(--dark-gray-2);
        }
        p:nth-child(3) {
            max-width: 589px;
            width: 100%;
            color: var(--dark-gray-2);
        }
    `
    return (
        <Container>
            <p>Oferta Especial</p>
            <h2>Air Jordan edição de colecionador</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
            <Buttons
                text='Ver Oferta'
                width='200px'
            />
        </Container>
    )
}

export default InfoCollectionOffert;