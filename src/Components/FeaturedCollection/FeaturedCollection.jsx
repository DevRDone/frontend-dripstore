import styled from "styled-components";
import CardCollection from "./CardCollection";
import card1 from "../../assets/collection1.png";
import card2 from "../../assets/collection2.png";
import card3 from "../../assets/collection3.png";

function FeaturedCollection() {
    const Container = styled.div`
        padding: 0 2rem;
        margin: 0 auto;
    `
    const H2 = styled.h2`
        font-weight: 700;
        line-height: 38px;
        font-size: 24px;
        margin: 1rem 0;
    `
    const ContainerFlex = styled.div`
        display: flex;
        flex-direction: row;
        gap: 1rem;
        justify-content: space-between;
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