import { useLoaderData } from "react-router-dom"
import ProductDetails from "../components/productDetail/ProductDetails"


const BullitDetailPage = () => {
   const data =   useLoaderData()
  return (
    <ProductDetails data={data} />
  )
}

export default BullitDetailPage