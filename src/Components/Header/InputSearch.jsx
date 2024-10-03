import styled from "styled-components"
import { SearchIcon } from "./SearchIcon"

export function InputSearch() {
    const ContainerInput = styled.div`
        position: relative;
        svg {
            position: absolute;
            top: 30%;
            right: 3%;
            @media (max-width: 1023px) {
                position: relative;
                transform: scale(1) translateX(-140%) translateY(30%);
            }
        }
    `

    const Input = styled.input`
        width: 39vw; 
        max-width: 559px;
        height: 20vw;
        max-height: 60px;
        border-radius: 8px;
        background-color: var(--light-gray-3);
        text-indent: 16px;
        border: none;
        outline: none;

        @media (max-width: 479px) {
            width: 19rem;
            height: 60px;
        }
        @media (min-width: 480px) {
            width: 25.4rem;
            height: 60px;
        }
        @media (min-width: 768px) and (max-width: 1023px) {
            width: 30rem;
        }
        @media (min-width: 1024px) {
            width: 20rem;
        }
        @media (min-width: 1440px) {
            width: 39rem;
        }
    `

    return (
        <ContainerInput>
            <Input placeholder="Pesquisar produto..." />
            <SearchIcon />
        </ContainerInput>
    )
};
