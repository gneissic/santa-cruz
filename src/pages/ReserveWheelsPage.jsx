import ReserveWheels from "../components/reserve/ReserveWheels"
import { useLoaderData } from "react-router-dom";


const ReserveWheelsPage = () => {
    const data = useLoaderData()
  return (
    <div>
        <ReserveWheels data={data} />
    </div>
  )
}

export default ReserveWheelsPage