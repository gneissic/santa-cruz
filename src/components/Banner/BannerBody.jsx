

const BannerBody = (props) => {
  return (
    <div className="relative text-white font-pops  ">
        <div className="bg-black/50 inset-0  absolute"></div>
        <img src={props.img} alt="" className="h-[28rem] lg:w-full lg:h-[35rem]" />
        <div className="absolute  top-[35%] right-4 w-[75%]  grid gap-2 lg:gap-8">
            <div className="flex justify-end lg:block lg:text-end">
            <h1 className="font-bold text-2xl ">Bottles and Cages  <span className="block lg:inline"> Back in stock</span></h1>
            </div>
        
        <p className="text-lg text-gray-200 lg:text-end">The ultimate pairing to keep you going and going</p>
        </div>
    </div>
  )
}

export default BannerBody