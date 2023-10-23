import { Fragment } from "react"
import { Link } from "react-router-dom"

const ClothModalItems = (props) => {
  return (

    <Fragment>
      <Link to={props.id}>
    <div className="text-center font-pops">
        <img className="w-[12rem] h-[12rem]" src={props.img} alt={props.title} />
        <p className="font-bold text-black">{props.title}</p>
        <p className="text-gray-700">${props.price}</p>
    </div>
    </Link>
    </Fragment>
  )
}

export default ClothModalItems