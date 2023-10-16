import { useLoaderData } from "react-router-dom"
import Chameleon from "../components/bikeModelParts/Chameleon"


const ChameleonPage = () => {
   const data =  useLoaderData()
  return (
    <div><Chameleon data={data}/></div>
  )
}

export default ChameleonPage