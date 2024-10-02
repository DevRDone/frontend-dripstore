import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { OrderByDiv, Dropdown, DropdownItem, DropdownLabel } from "./styles";

const sortOptions = [
  { value: "1", label: "Mais relevantes" },
  { value: "2", label: "Menor preço" },
  { value: "3", label: "Maior preço" },
  { value: "4", label: "Mais vendidos" },
  { value: "5", label: "Menos vendidos" },
];

const OrderBy = () => {
  const [selectedOption, setSelectedOption] = useState(sortOptions[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSortChange(option.value);
  };

  const onSortChange = (selectedValue) => {
    console.log(`Ordenado por: ${selectedValue}`);
  };

  return (
    <OrderByDiv>
      <DropdownLabel onClick={() => setIsOpen(!isOpen)}>
        <p>
          <strong>Ordenar por: </strong>
          {selectedOption.label}
        </p>
        <span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
      </DropdownLabel>
      {isOpen && (
        <Dropdown>
          {sortOptions.map((option) => (
            <DropdownItem
              key={option.value}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </OrderByDiv>
  );
};

export default OrderBy;
