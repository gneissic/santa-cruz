import {Link  } from "react-router-dom";

const BikeModalItems = (props) => {
  return (
  <Link to={props.id}>
    <div className="text-center font-pops text-2xl tracking-wide text-black font-bold">
        <img src={props.img} alt="" />
        <p>{props.title}</p>
    </div></Link>
  )
}

export default BikeModalItems