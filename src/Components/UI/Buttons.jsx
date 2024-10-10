import { Children, useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: var(--white);
  width: 114px;
  height: 40px;
  background-color: var(--primary);
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    transition: all 5s ease;
  }

  @media (min-width: 360px) and (max-width: 768px) {
    width: auto;
  }
`;

function Buttons({
  text,
  height,
  color,
  width,
  background,
  font,
  border,
  hoverBG,
  hoverColor,
  display,
}) {
  const [hover, setHover] = useState(false);

  const styles = {
    color: hover ? hoverColor : color,
    backgroundColor: hover ? hoverBG : background,
    width: width,
    height: height,
    fontWeight: font,
    borderRadius: border,
    transition: "2s",
    display: display,
  };

  return (
    <>
      <StyledButton
        style={styles}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {text}
      </StyledButton>
    </>
  );
}

export default Buttons;
