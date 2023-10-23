import { useLoaderData } from "react-router-dom"
import ProductDetails from "../components/productDetail/ProductDetails"


const OneupDetailPage = () => {
    const data = useLoaderData()
  return (
    <ProductDetails data={data} />
  )
}

export default OneupDetailPage