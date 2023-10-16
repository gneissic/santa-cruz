import { useLoaderData } from "react-router-dom"
import Bantam from "../components/bikeModelParts/Bantam"

const BantamPage = () => {
    const data = useLoaderData()
  return (
    <div><Bantam data={data} /></div>
  )
}

export default BantamPage