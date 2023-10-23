
import { useLoaderData } from 'react-router-dom'
import ProductDetails from '../components/productDetail/ProductDetails'

const DriverDetailPage = () => {
    const data = useLoaderData()
  return (
    <ProductDetails data={data} />
  )
}

export default DriverDetailPage