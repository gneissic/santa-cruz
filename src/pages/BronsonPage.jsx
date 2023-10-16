import { useLoaderData } from "react-router-dom"
import Bronson from "../components/bikeModelParts/Bronson"


const BronsonPage = () => {
    const data  = useLoaderData()
  return (
    <div><Bronson data={data}/></div>
  )
}

export default BronsonPage