import { Container, Title } from "./styles";

const infoLinks = [
    {
      title: "Sobre Drip Store",
      url: "#",
    },
    {
      title: "Segurança",
      url: "#",
    },
    {
      title: "Wishlist",
      url: "#",
    },
    {
      title: "Blog",
      url: "#",
    },
    {
      title: "Trabalhe conosco",
      url: "#",
    },
    {
      title: "Meus pedidos",
      url: "#",
    },
  ];
  
const Info = () => {
  return (
    <>
      <Container>
        <Title>Informação</Title>
        <ul>
          {infoLinks.map((link) => (
            <li key={link.title}>
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default Info;
