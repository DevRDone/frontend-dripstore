import styled from "styled-components"
import { SearchIcon } from "./SearchIcon"

    const ContainerInput = styled.div`
        min-width: 100px;
        width: 100%;
        max-width: 559px;
        height: var(--header-height);
        border-radius: 8px;
        background-color: var(--light-gray-3);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 1rem;
        overflow: hidden;

        @media screen and (min-width: 1024px) {
            width: 40%;
        }
    `

    const Input = styled.input`
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        background-color: transparent;
    `

export function InputSearch() {
    return (
        <ContainerInput>
            <Input placeholder="Pesquisar produto..." />
            <SearchIcon />
        </ContainerInput>
    )
};
