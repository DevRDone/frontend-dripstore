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
    padding: 2rem 0 0 5.44rem;
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