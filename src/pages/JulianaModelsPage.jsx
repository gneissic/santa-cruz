import JulianaBikeModels from "../components/juliana/JulianaBikeModels"
import { useLoaderData } from "react-router-dom";

const JulianaModelsPage = () => {
    const data = useLoaderData()
  return (
    <div>
        <JulianaBikeModels data={data} />
    </div>
  )
}

export default JulianaModelsPage