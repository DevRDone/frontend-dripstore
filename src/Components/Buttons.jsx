import { Children } from 'react';
import styled from 'styled-components';

function Buttons({ text, height, color, width, background }) {
    const styles = {
        color: color,
        width: width,
        height: height,
        backgroundColor: background,
    }

    const StyledButton = styled.button`
        color: var(--white);
        width: 114px;
        height: 40px;
        background-color: var(--primary);
        border: none;
        border-radius: 8px;
        cursor: pointer;

        &:hover {
        opacity: 0.9;
        }
    `
    return (
        <>
            <StyledButton style={styles}>
                {text}
            </StyledButton>
        </>
    );
}

export default Buttons;
