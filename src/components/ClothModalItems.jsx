import { Fragment } from "react"
import { Link } from "react-router-dom"

const ClothModalItems = (props) => {
  const price = props.price.toFixed(2)
  return (

    <Fragment>
      <Link to={props.id}>
    <div className="text-center font-pops lg:grid lg:place-items-center">
        <img className="w-[12rem] h-[12rem]  lg:w-[15rem] lg:h-[15rem]" src={props.img} alt={props.title} />
        <p className="font-bold text-black">{props.title}</p>
        <p className="text-gray-700">${price}</p>
    </div>
    </Link>
    </Fragment>
  )
}

export default ClothModalItems