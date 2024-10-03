import styled from "styled-components";
import Buttons from "../Buttons";

const StyledCollection = styled.div`
    width: 100%;
    height: 15.68rem;
    background-image: url(${props => props.src});
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    padding-left: 2rem;
    border-radius: 0.6rem;
`
const H2 = styled.h2`
    color: var(--dark-gray);
    font-weight: 700;
    font-size: 2.25em;
    width: 11.5rem;
`

function CardCollection(props) {

    return (
        <StyledCollection src={props.src} >
            <Buttons
                color="black"
                width="96px"
                height="32px"
                background='#E7FF86'
                text="30% OFF"
                font="700"
                border="20rem"
            />
            <H2>{props.text}</H2>
            <Buttons
                text='Comprar'
                color='var(--primary)'
                background="var(--light-gray-3)"
                width="153px"
                height="48px"
                font="700"
                hoverBG='var(--primary)'
                hoverColor='var(--white)'
            />
        </StyledCollection>
    )
}

export default CardCollection;
