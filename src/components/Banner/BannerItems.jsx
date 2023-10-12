import { Link } from "react-router-dom";
const BannerItems = (props) => {
  return (
    <div>
   <Link to={props.id}> <img src={props.img} className="w-[93%] mx-auto" alt="" /> </Link>
    </div>
  )
}

export default BannerItems