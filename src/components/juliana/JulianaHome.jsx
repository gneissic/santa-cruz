import BannerBody from "../Banner/BannerBody"
import Banner2 from "../../assets/banner-2.jpg";
import JulianaHomepageItems from "../JulianaHomepageItems";

const JulianaHome = ({data}) => {
  return (
    <div>
        
    <BannerBody img={Banner2} />
    <div className= "grid gap-7 mt-5 w-[90%] mx-auto lg:grid-cols-2 lg:py-4 lg:gap-10">
      {data.map((dat)=>(<JulianaHomepageItems key={dat.id} id={dat.id} img={dat.img} title={dat.title} />))} 
    </div> 
    </div>
  )
}

export default JulianaHome