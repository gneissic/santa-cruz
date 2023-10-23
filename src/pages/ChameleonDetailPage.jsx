import { useLoaderData } from "react-router-dom"
import ProductDetails from "../components/productDetail/ProductDetails"

const ChameleonDetailPage = () => {
   const data =  useLoaderData()
  return (
    <ProductDetails data={data} />
  )
}

export default ChameleonDetailPage