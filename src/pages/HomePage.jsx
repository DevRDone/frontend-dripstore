import Carousel from "../Components/Carrosel/Carrosel";
import CollectionCategory from "../Components/CollectionCategory/CollectionCategory";
import FeaturedCollection from "../Components/FeaturedCollection/FeaturedCollection";
import TrendingProducts from "../Components/TrendingProducts";
import Layout from "./Layout";


function HomePage() {
    return(
        <Layout>
            <Carousel />
            <FeaturedCollection/>
            <TrendingProducts quantity={8} />
            <CollectionCategory />
            <TrendingProducts quantity={8} />
        </Layout>
    )
}
export default HomePage;
