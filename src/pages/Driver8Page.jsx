import { useLoaderData } from "react-router-dom"
import Driver8 from "../components/bikeModelParts/Driver8"
const Driver8Page = () => {
    const data =  useLoaderData()
  return (
    <div><Driver8 data={data} /></div>
  )
}

export default Driver8Page