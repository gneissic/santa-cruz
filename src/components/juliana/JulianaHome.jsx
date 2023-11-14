import BannerBody from "../Banner/BannerBody"
import JulianaHomepageItems from "../JulianaHomepageItems";

const JulianaHome = ({data}) => {
  return (
    <div>
        
    <BannerBody img={"https://media.istockphoto.com/id/959028830/photo/happy-mountain-bike-couple-outdoors-have-fun-together-on-a-summer-afternoon-sunset.jpg?s=612x612&w=0&k=20&c=GV4km6KXCj9jzi6eDCFHhOOZ0AHplJhK7qnWP0m7jeE="} />
    <div className= "grid gap-7 mt-5 w-[90%] mx-auto lg:grid-cols-2 lg:py-4 lg:gap-10">
      {data.map((dat)=>(<JulianaHomepageItems key={dat.id} id={dat.id} img={dat.img} title={dat.title} />))} 
    </div> 
    </div>
  )
}

export default JulianaHome