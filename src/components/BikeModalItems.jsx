

const BikeModalItems = (props) => {
  return (
    <div className="text-center font-pops text-2xl tracking-wide text-black font-bold">
        <img src={props.img} alt="" />
        <p>{props.title}</p>
    </div>
  )
}

export default BikeModalItems