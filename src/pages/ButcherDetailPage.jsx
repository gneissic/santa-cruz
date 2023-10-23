import { useLoaderData } from "react-router-dom"
import ProductDetails from "../components/productDetail/ProductDetails"


const ButcherDetailPage = () => {
    const data  = useLoaderData()
  return (
<ProductDetails data={data} />
  )
}

export default ButcherDetailPage