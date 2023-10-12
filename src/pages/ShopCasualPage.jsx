import ShopCasual from "../components/shopCasual/ShopCasual"
import { useLoaderData } from "react-router-dom";

const ShopCasualPage = () => {
    const data = useLoaderData()

  return (
    <div>
        <ShopCasual data={data}/>
    </div>
  )
}

export default ShopCasualPage