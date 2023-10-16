import { Fragment } from "react"


const ClothModalItems = (props) => {
  return (

    <Fragment>
    <div className="text-center font-pops">
        <img className="w-[12rem] h-[12rem]" src={props.img} alt={props.title} />
        <p className="font-bold text-black">{props.title}</p>
        <p className="text-gray-700">${props.price}</p>
    </div>
    </Fragment>
  )
}

export default ClothModalItems