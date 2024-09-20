import { useLocation } from "react-router-dom";
import styled from "styled-components";

export function Navbar(props) {

    const location = useLocation();

    const isActive = (url) => {
        if (location.pathname === url) {
            return "active";
        }
        return "";
    }

    const Ul = styled.ul`
        display: flex;
        gap: 1.8rem;
        list-style-type: none;

        a.active {
            color: var(--primary);
            border-bottom: solid 3px;
            font-weight: 700;
        }
    `
    const Link = styled.a`
        color: #474747;
        text-decoration: none;
    `
    const Container = styled.div`
        padding: 1rem 4rem 0 4rem;
        
        @media (min-width: 0px) and (max-width: 1023px) {
            display: none;            
        } 
            
    `
    return (
        <>
            <Container>
                <Ul>
                    <li>
                        <Link href="/" className={isActive('/')}>Home</Link>
                    </li>
                    <li>
                        <Link href="/product" className={isActive('/product')}>Produtos</Link>
                    </li>
                    <li>
                        <Link to='/' className={isActive('/category')}>Categorias</Link>
                    </li>
                    <li>
                        <Link to='/' className={isActive('/my-order')}>Meus pedidos</Link>
                    </li>
                </Ul>

            </Container>
        </>
    )
}
export default Navbar;
