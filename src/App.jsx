import Header from "./Components/Header/Header";
import FeaturedCollection from "./Components/FeaturedCollection/FeaturedCollection";
import Footer from "./Components/Footer";
import './global.css'
import Carrosel from "./Components/Carrosel/Carrosel";

function App() {
  return (
    <>
      <Header />
      <Carrosel />
      <FeaturedCollection />
      <Footer />
    </>
  );
}

export default App;
