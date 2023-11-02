

const TransactionCart = (props) => {
    const price = props.price.toFixed(2)
  return (
    <div><div className="flex justify-between mx-[0.5rem] items-center font-pops font-semibold text-gray-700  py-5">
    <div className="flex gap-3 items-center">
        <div className="relative">
            <div className=" absolute -right-2 -top-4 bg-black/80 text-white h-8 w-8 border rounded-full grid place-items-center">

            <p className="text-white font-pops font-bold">{props.quantity}</p>
            </div>
        <img
        className="w-[4rem] h-[4rem] border-2 border-gray-500 rounded-md"
        src={props.img}
        alt=""
      />
        </div>
      
      <p>{props.title}</p>
    </div>
    <p>${price}</p>
  </div></div>
  )
}

export default TransactionCart