import styled from "styled-components";
import CardCollection from "./CardCollection";
import card1 from "../../assets/collection1.png";
import card2 from "../../assets/collection2.png";
import card3 from "../../assets/collection3.png";

function FeaturedCollection() {

    const Container = styled.div`


        @media (max-width: 768px) {
            padding: 0 1rem;
        }
    `
    const H2 = styled.h2`
        font-weight: 700;
        line-height: 1rem;
        font-size: 1.5rem;
        margin: 2rem 0 ;
        padding: 0 4rem;

        @media (max-width: 768px) {
            padding: 0 2rem;
        }
        @media (max-width: 425px) {
            padding: 0 0rem;
        }
    `
    const ContainerFlex = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr; 
        gap: 1rem;
        justify-content: space-between;
        padding: 0 4rem;
        
        // Mobile M e L
        @media (min-width: 768px) and (max-width: 1024px) {
            justify-content: center;
            grid-template-columns: 1fr 1fr; 
            padding: 2rem;
        }
        @media (max-width: 425px) {
            grid-template-columns: 1fr;
            padding: 2rem;
            justify-content: center;
        }
    `

    return (
        <Container>
            <H2>Coleções em destaque</H2>
            <ContainerFlex>
                <CardCollection
                    src={card1}
                    text="Novo drop Supreme"
                />
                <CardCollection
                    src={card2}
                    text="Coleção Adidas"
                />
                <CardCollection 
                    src={card3}
                    text="Novo Beats Bass"
                />
            </ContainerFlex>
        </Container>
    )
}

export default FeaturedCollection;