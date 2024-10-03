import { useState } from "react";
import Sidebar from "../Components/Products/Sidebar";
import Layout from "./Layout";
import {
  FilterToggle,
  PageContainer,
  Section,
  SectionHeader,
} from "../Components/Products/styles";
import OrderBy from "../Components/Products/OrderBy";
import ProductList from "../Components/Products/ProductList";
import FilterIcon from "../assets/icons/filter-icon.svg?react";
import useIsSmallScreen from "../hooks/useIsSmallScreen";

function ProductPage() {
  const [isOffcanvasOpen, setOffcanvasOpen] = useState(false); 
  const isSmallScreen = useIsSmallScreen();

  const handleOffcanvasToggle = () => {
    setOffcanvasOpen((prev) => !prev);
  }

  return (
    <Layout>
      <PageContainer>
        {/* sidebar */}
        <Sidebar
          isOffcanvasOpen={isOffcanvasOpen}
          onOffcanvasToggle={handleOffcanvasToggle}
        />
        {/* content */}
        <Section>
          {/* content header */}
          <SectionHeader>
            <div className="filter-container">
              {/* sort by */}
              <OrderBy />
              {/* mobile filter toggle */}
              {isSmallScreen && (
                <FilterToggle onClick={handleOffcanvasToggle}>
                  <FilterIcon />
                </FilterToggle>
              )}
            </div>
            <p className="text-container">
              <strong>Produtos </strong>- 484 produtos
            </p>
          </SectionHeader>
          {/* content content */}
          <ProductList />
        </Section>
      </PageContainer>
    </Layout>
  );
}
export default ProductPage;
