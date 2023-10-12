

const BannerBody = (props) => {
  return (
    <div className="relative text-white font-pops  ">
        <div className="bg-black/50 inset-0  absolute"></div>
        <img src={props.img} alt="" className="h-[32rem]" />
        <div className="absolute  top-[35%] right-4 w-[75%]  grid gap-2">
            <div className="flex justify-end">
            <h1 className="font-bold text-2xl">Bottles and Cages  <span className="block"> Back in stock</span></h1>
            </div>
        
        <p className="text-lg text-gray-200">The ultimate pairing to keep you going and going</p>
        <div className="flex justify-end">
        <button className="mr-2 bg-gray-100 text-gray-800 font-pops font-semibold py-2 text-sm w-[65%] rounded-sm">SHOP BOTTLES AND CAGES</button>

        </div>
        </div>
    </div>
  )
}

export default BannerBody