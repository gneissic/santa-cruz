import BikeModels from "../components/BikeModels"
import { useLoaderData } from "react-router-dom";

const BikeModelsPage = () => {
    const data = useLoaderData()
  return (
    <div><BikeModels data={data}/></div>
  )
}

export default BikeModelsPage