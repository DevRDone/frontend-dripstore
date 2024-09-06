import styled from "styled-components";

export function Navbar(props) {

    const Ul = styled.ul`
        display: flex;
        gap: 1.8rem;
        list-style-type: none;
    `
    const Link = styled.a`
        color: #474747;
        text-decoration: none;
    `
    const Container = styled.div`
        position: relative;
        top: 14%;
        left: 4.2%;
        transform: translateY(-14%);

        @media screen and (max-width: 768px) {
            display: none;
            
        }
    `


    return (
        <>
            <Container>
                <Ul>
                    <li>
                        <Link href="#">Home</Link>
                    </li>
                    <li>
                        <Link href="#">Produtos</Link>
                    </li>
                    <li>
                        <Link href="#">Categorias</Link>
                    </li>
                    <li>
                        <Link href="#">Meus pedidos</Link>
                    </li>
                </Ul>

            </Container>
        </>
    )
}
export default Navbar;