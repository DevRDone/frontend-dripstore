import styled from "styled-components";
import UseLocalStorage from "../../hooks/UseLocalStorage";
import { CartIcon } from "./CartIcon";

const Container = styled.div`
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const CartCount = styled.span`
    position: absolute;
    top: 10%;
    right: 0;
    width: 17px;
    height: 17px;
    background-color: var(--error);
    color: var(--white);
    border-radius: 100%;
    font-size: 10px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

function CartControl() {
    const { value } = UseLocalStorage('cart-items')

    return (
        <Container>
            {/* {value && <CartCount>{value?.length}</CartCount>} */}
            <CartCount>{value?.length}</CartCount>
            <CartIcon />
        </Container>
    )
}

export default CartControl;
