import React, { useState } from "react";
import styled from "styled-components";

function ColorsShoes() {
    const [selectedColor, setSelectedColor] = useState(null); 
    const colorShoes = [
        "#6FEEFF", 
        "#FF6969", 
        "#5E5E5E", 
        "#6D70B7"
    ]; 

    const handleColorSelection = (color) => {
        setSelectedColor(color === selectedColor ? null : color);
    };

    const Container = styled.div`
        display: flex;
    `
    const InfoCircle = styled.div`
         width: 30px;
        height: 30px;
        border-Radius: 50%;
        margin: 10px;
        cursor: pointer;
    `

    return (
        <Container>
            {colorShoes.map((color, index) => (
                <InfoCircle
                    key={index}
                    style={{
                        backgroundColor: color,
                        border: selectedColor === color ? "2px solid #C92071" : "none"
                    }}
                    onClick={() => handleColorSelection(color)}
                >
                </InfoCircle>
            ))}
        </Container>
    );
}

export default ColorsShoes;
