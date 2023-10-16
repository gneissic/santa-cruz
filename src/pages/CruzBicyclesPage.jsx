import CruzBicycles from "../components/santaBicyles/CruzBicycles"
import { useLoaderData } from "react-router-dom";

const CruzBicyclesPage = () => {
    const data = useLoaderData()
  return (
    <div><CruzBicycles data={data} />
    </div>
  )
}

export default CruzBicyclesPage