import Header from "../Components/Header/Header";
import FooterComponent from "../Components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <FooterComponent />
    </>
  );
};

export default Layout;
