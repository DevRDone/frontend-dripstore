import { Container, Title } from "./styles";

const categoryLinks = [
    {
      title: "Camisetas",
      url: "#",
    },
    {
      title: "Calças",
      url: "#",
    },
    {
      title: "Bonés",
      url: "#",
    },
    {
      title: "Headphones",
      url: "#",
    },
    {
      title: "Tênis",
      url: "#",
    },
  ];

const Categories = () => {
  return (
    <>
      <Container>
        <Title>Categorias</Title>
        <ul>
          {categoryLinks.map((link) => (
            <li key={link.title}>
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default Categories;

