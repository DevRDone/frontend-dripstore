import styled from "styled-components"
import { SearchIcon } from "./SearchIcon"

export function InputSearch() {
    const ContainerInput = styled.div`
        position: relative;

        svg {
            position: absolute;
            top: 30%;
            right: 3%;
            transform: translate(-50%);

            @media screen and (max-width: 768px) {
                transform: scale(1) translateX(-60%);
        }}
        @media screen and (max-width: 768px) {
            display: block;
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
        /* display: ${({ isVisible }) => (isVisible ? 'block' : 'none')}; */

        @media screen and (max-width: 768px) {
            width: 315px;
            height: 60px;
        }
    `

    return (
        <ContainerInput>
            <Input placeholder="Pesquisar produto..." />
            <SearchIcon />
        </ContainerInput>
    )
};
