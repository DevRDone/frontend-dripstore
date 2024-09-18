import Carousel from "../Components/Carrosel/Carrosel";
import CollectionCategory from "../Components/CollectionCategory/CollectionCategory";
import CollectionOffert  from "../Components/CollectionOffert/CollectionOffert";
import FeaturedCollection from "../Components/FeaturedCollection/FeaturedCollection";
import TrendingProducts from "../Components/TrendingProducts";
import Layout from "./Layout";


function HomePage() {
    return (
        <Layout>
            <Carousel />
            <FeaturedCollection />
            <CollectionCategory />
            <TrendingProducts quantity={8} />
            <CollectionOffert />
        </Layout>
    )
}
export default HomePage;
