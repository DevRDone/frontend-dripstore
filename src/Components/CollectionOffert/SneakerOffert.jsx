import styled from 'styled-components';
import Jordan from '../../assets/SneakerOffert.svg';

function SneakerOffert() {
    const Container = styled.div`
        position: relative;
        div {
            background: linear-gradient(to bottom, #4200FF40 25%, #FFFFFF00 70%);
            border-radius: 100%;
            padding: 8.5rem;
            position: absolute;
            top: -10%;
            left: 14%;
            z-index: 1;
        }

        @media (min-width: 480px) {
            div {
                padding: 11.5rem;
                left: 8%;
            }
        }
        @media (min-width: 768px) {
            div {
                padding: 13.5rem;
                left: 25%;
            }
        }
        @media (min-width: 1024px) {
            div {
                padding: 11.5rem;
                left: 14%;
            }
        }
        @media (min-width: 1440px) {
            div {
                padding: 14.5rem;
                left: 14%;
            }
        }
    `
    const ImgStyled = styled.img`
        position: relative;
        z-index: 2;
        width: 100%;
        @media (min-width: 480px) {
            width: 93%;
        } 
        @media (min-width: 768px) {
            width: 70%;
            left: 16%;
        } 
        @media (min-width: 1024px) {
            width: 100%;
            left: 0%;
        }
    `
    return (
        <Container>
            <ImgStyled src={Jordan}
                alt="Jordan de Colecionador"
            />
            <div></div>
        </Container>
    )
}

export default SneakerOffert;
