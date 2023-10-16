import { useLoaderData } from "react-router-dom"
import Blur from "../components/bikeModelParts/Blur"


const BlurPage = () => {
    const data = useLoaderData()
  return (
    <div>
    <Blur data={data} /></div>
  )
}

export default BlurPage