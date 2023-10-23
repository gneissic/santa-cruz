
import { useLoaderData } from 'react-router-dom'
import Butcher from '../components/bikeModelParts/Butcher'

const BucherPage = () => {
 const data =    useLoaderData()
  return (
    <div>
        <Butcher data={data} />
    </div>
  )
}

export default BucherPage