import ProductDetails from "../Components/ProductDetails/ProductDetails";
import TrendingProducts from "../Components/TrendingProducts";
import Layout from "./Layout";

function ProductDetailsPage() {
    return(
        <Layout>
            <ProductDetails 
                stars="4" 
            />
            <TrendingProducts quantity={4}/>
        </Layout>            
    )
}
export default ProductDetailsPage;
