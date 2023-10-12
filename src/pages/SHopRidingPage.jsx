import SHopRiding from "../components/shopRiding/SHopRiding"
import { useLoaderData } from "react-router-dom";

const SHopRidingPage = () => {
    const data = useLoaderData()
  return (
    <div><SHopRiding data={data} /></div>
  )
}

export default SHopRidingPage