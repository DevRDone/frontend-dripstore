import ProductCart from "../Components/ProductCart";
import TrendingProducts from "../Components/TrendingProducts";
import Layout from "./Layout"

const CartPage = () => {
  return (
    <Layout>
      <ProductCart />
      <TrendingProducts quantity={4}/>
    </Layout>
  )
}

export default CartPage;