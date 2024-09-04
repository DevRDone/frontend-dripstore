import Carousel from "../Components/Carrosel/Carrosel";
import FeaturedCollection from "../Components/FeaturedCollection/FeaturedCollection";
import TrendingProducts from "../Components/TrendingProducts";
import Layout from "./Layout";


function HomePage() {
    return(
        <Layout>
            <Carousel />
            <FeaturedCollection/>
            <TrendingProducts />
        </Layout>            
    )
}
export default HomePage;
