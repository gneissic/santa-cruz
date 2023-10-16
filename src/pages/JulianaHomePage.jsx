import { useLoaderData } from "react-router-dom"
import JulianaHome from "../components/juliana/JulianaHome"

const JulianaHomePage = () => {
    const data = useLoaderData()
  return (
    <div>
        <JulianaHome data={data} />
    </div>
  )
}

export default JulianaHomePage