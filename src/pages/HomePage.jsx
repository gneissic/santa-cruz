import Banner from "../components/Banner/Banner"
import { useLoaderData } from "react-router-dom";


const HomePage = () => {
    const data = useLoaderData()
    
  return (
   <Banner data={data}/>
  )
}

export default HomePage