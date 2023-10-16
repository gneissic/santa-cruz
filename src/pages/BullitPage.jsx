import { useLoaderData } from "react-router-dom"
import Bullit from "../components/bikeModelParts/Bullit"

const BullitPage = () => {
    const data = useLoaderData()
  return (
    <div>
        <Bullit data={data} />
    </div>
  )
}

export default BullitPage