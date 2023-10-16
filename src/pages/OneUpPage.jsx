import { useLoaderData } from "react-router-dom"
import OneUpComponents from "../components/oneUp/OneUpComponents"

const OneUpPage = () => {
    const data = useLoaderData()
  return (
    <div><OneUpComponents data={data}  /></div>
  )
}

export default OneUpPage