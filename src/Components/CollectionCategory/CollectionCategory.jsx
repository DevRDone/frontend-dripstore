import React, { useState } from 'react';
import styled from 'styled-components';
import Headphones from "./icons-category/headphones";
import Pants from "./icons-category/Pants";
import Tshirt from "./icons-category/Tshirt";
import Sneakers from "./icons-category/Sneakers";

const data = [
    { id: '1', image: Tshirt, name: 'Camiseta' },
    { id: '2', image: Pants, name: 'Calças' },
    { id: '3', image: Pants, name: 'Bonés' },
    { id: '4', image: Headphones, name: 'Headphones' },
    { id: '5', image: Sneakers, name: 'Tênis' },
];

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0rem;
    overflow-y: auto;
    
    h2 {
        font-weight: 700;
        padding: 2rem 0;
        font-size: 24px;
    }

    @media (min-width: 360px) {
        padding: 2rem 0rem;
        align-items: start;
        h2 {
            padding: 2rem 1rem;
        }
    }
    @media (min-width: 480px) {
        padding: 2rem 0;
        align-items: start;
        h2 {
            padding: 2rem 1rem;
        }
    }
    @media (min-width: 768px) {
        padding: 2rem 0;
        align-items: start;
        overflow-y: none;
        h2 {
            padding: 2rem 3rem;
            margin: 0 auto;
        }
    }
`;

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const ItemImagem = styled.button`
    border: none;
    outline: none;
    display: flex;
    padding: 20px;
    border-radius: 50%;
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    background-color: var(--white);
`;
const ItemName = styled.h3`
    font-weight: 500;
    padding-top: 1rem;
    display: flex;
`;
const ContainerWrapper = styled.div`
    display: flex;
    gap: 2.5rem;
    justify-content: space;

    @media (max-width: 480px) {
        gap: 1rem;
        width: 100%;
        padding: 0 1rem;
    }
    @media (min-width: 768px) {
        gap: 2rem;
        width: 100%;
        padding: 0 3rem;
    }
    @media (min-width: 1024px) {
        gap: 2rem;
        justify-content: center;
    }
`;

function CollectionCategory() {
    const [selectedId, setSelectedId] = useState("1");

    const applyColor = (isSelected) => isSelected ? 'var(--primary)' : 'var(--light-gray)';

    return (
        <Container>
            <h2>Coleções em destaque</h2>
            <ContainerWrapper>
                {data.map((item) => {
                    const isSelected = selectedId === item.id;
                    return (
                        <ItemWrapper key={item.id}>
                            <ItemImagem
                                isSelected={isSelected}
                                onClick={() => setSelectedId(item.id)}
                            >
                                <item.image color={applyColor(isSelected)} />
                            </ItemImagem>
                            <ItemName>
                                {item.name}
                            </ItemName>
                        </ItemWrapper>
                    );
                })}
            </ContainerWrapper>
        </Container>
    );
}

export default CollectionCategory;
