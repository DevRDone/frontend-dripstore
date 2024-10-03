import { StyledPromoBalloon } from "./styles"

const PromoBalloon = ({ promoPercent }) => {
  return (
    <StyledPromoBalloon>
        <span>{promoPercent}% OFF</span>
    </StyledPromoBalloon>
  )
}

export default PromoBalloon;
