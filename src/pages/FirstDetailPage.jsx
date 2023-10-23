import { useLoaderData } from "react-router-dom"
import ProductDetails from "../components/productDetail/ProductDetails"


const FirstDetailPage = () => {
     const data  =  useLoaderData()
  return (
    <div>
        <ProductDetails data={data}/>
    </div>
  )
}

export default FirstDetailPage