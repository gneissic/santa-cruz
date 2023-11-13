import { useLoaderData } from "react-router-dom"

import FirstPart from "../components/bikeModelParts/FirstPart"

const FirstPartPage = () => {
    const data  = useLoaderData()
  return (
    <div><FirstPart data={data} />
    </div>
  )
}

export default FirstPartPage