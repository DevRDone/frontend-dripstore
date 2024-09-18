import styled from "styled-components";

function IconMobileClick() {
    const StyledSVG = styled.svg`
        @media (min-width: 768px) {
            display: none;
        }
    `
    return (
        <>
            <StyledSVG width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                    <circle cx="11.7666" cy="11.7666" r="8.98856" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18.0183 18.4852L21.5423 22.0001" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
            </StyledSVG>
        </>
    )
}

export default IconMobileClick;