import styled from "styled-components"
import { SearchIcon } from "./SearchIcon"

export function InputSearch() {
    const ContainerInput = styled.div`
        position: relative;
        
        svg {
            position: absolute;
            top: 30%;
            left: 95%;
            transform: translate(-50%);
        }
    `
    const Input = styled.input`
        width: 559px;
        height: 60px;
        border-radius: 8px;
        background-color: var(--light-gray-3);
        text-indent: 16px;
        border: none;
        outline: none;
    `
    return (
        <ContainerInput>
            <Input placeholder="Pesquisar produto..." />
            <SearchIcon />
        </ContainerInput>
    )
};
