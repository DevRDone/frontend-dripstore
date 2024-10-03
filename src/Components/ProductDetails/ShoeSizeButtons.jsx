import React, { useState } from 'react';
import styled from 'styled-components';

const ShoeSizeButtons = () => {
    const sizes = ["39", "40", "41", "42", "43"];
    const [selectedSize, setSelectedSize] = useState("");

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const SizeButton = styled.div`
        width: 100%;
        height: 100%;
        button {
            cursor: pointer;
            width: 48px;
            height: 48px;
            border: none;
            outline: none;
            background-color: var(--white);
            border-radius: 4px;
            border: solid 1px var(--light-gray-2);
            font-weight: 700;
            font-size: 16px;
        }
        button.selected {
            color: white;
            background-color: #C92071;
        }   
    `
    const ResSizeShoes = styled.div `
        color: #474747;
        font-size: 0.9rem;
        span {
            font-size: 1.2rem;
            font-weight: 700;
        }
    `
    return (
        <div>
            <SizeButton>
                {sizes.map((size) => (
                    <button
                        key={size}
                        style={{ margin: "5px" }}
                        onClick={() => handleSizeSelect(size)}
                        className={selectedSize === size ? "selected" : ""}
                    >
                        {size}
                    </button>
                ))}
            </SizeButton>
            <ResSizeShoes >
                {selectedSize && <p>Tamanho selecionado: <span>{selectedSize}</span></p>}
            </ResSizeShoes>
        </div>
    );
};

export default ShoeSizeButtons;
