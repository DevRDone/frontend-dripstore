import { Container, ItemWrapper, ItemImagem, ItemName, ContainerWrapper } from './style.js'
import React, { useState } from 'react';
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

function CollectionCategory() {
  const [selectedId, setSelectedId] = useState("1");

  const applyColor = ($isSelected) => $isSelected ? 'var(--primary)' : 'var(--light-gray)';

  return (
    <Container>
      <h2>Coleções em destaque</h2>
      <ContainerWrapper>
        {data.map((item) => {
          const isSelected = selectedId === item.id;
          return (
            <ItemWrapper key={item.id}>
              <ItemImagem
                $isSelected={isSelected}
                onClick={() => setSelectedId(item.id)}
              >
                <item.image color={applyColor(isSelected)} />
              </ItemImagem>
              <ItemName>
                {item.name}
              </ItemName>
            </ItemWrapper>
          );
        })};
      </ContainerWrapper>
    </Container>
  );
};

export default CollectionCategory;
