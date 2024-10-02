import { SidebarContainer } from "./styles";

const filters = [
  {
    filter: "Marca",
    options: ["Adiddas", "Balenciaga", "K-Swiss", "Nick", "Puma"],
    inputType: "checkbox",
  },
  {
    filter: "Categoria",
    options: ["Esporte e lazer", "Casual", "Utilitário", "Corrida"],
    inputType: "checkbox",
  },
  {
    filter: "Gênero",
    options: ["Masculino", "Feminino", "Unissex"],
    inputType: "checkbox",
  },
  {
    filter: "Estado",
    options: ["Novo", "Usado"],
    inputType: "radio",
  },
];

const SidebarContent = () => {
  return (
    <>
      <SidebarContainer>
        <h1>Filtrar por</h1>
        <div className="filters">
        {filters.map((item) => (
          <div key={item.filter} >
            <h2>{item.filter}</h2>
            <ul>
              {item.options.map((option) => (
                <li key={option}>
                  <input id={option} type={item.inputType} />
                  <label htmlFor={option}>{option}</label>
                </li>
              ))}
            </ul>
          </div>
        ))}
        </div>
      </SidebarContainer>
    </>
  );
};

export default SidebarContent;
