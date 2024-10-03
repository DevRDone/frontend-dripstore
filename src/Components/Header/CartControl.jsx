import styled from "styled-components";
import UseLocalStorage from "../../hooks/UseLocalStorage";
import { CartIcon } from "./CartIcon";

function CartControl() {
    const { value } = UseLocalStorage('cart-items')

    const CartCount = styled.span`
        width: 20px;
        height: 20px;
        background-color: var(--error);
        color: var(--white);
        border-radius: 100%;
        font-size: 14px;
        padding: 2px 6px;
        margin: 4px 0px -11px -8px;

        @media screen and (max-width: 768px) {
            width: 0.70rem;
            height: 0.70rem;
            font-size: 0.68rem;
        }
    `
    const Container = styled.div`
    position: relative;

    `
    return (
        <Container>
            <CartIcon />
            <CartCount>{length++}</CartCount>
        </Container>
    )
}

export default CartControl;
