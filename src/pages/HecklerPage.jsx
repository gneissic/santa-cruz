import { useLoaderData } from "react-router-dom"
import Heckler from "../components/bikeModelParts/Heckler"

const HecklerPage = () => {
    const data =  useLoaderData()
  return (
    <div>
        <Heckler data={data}/>
    </div>
  )
}

export default HecklerPage