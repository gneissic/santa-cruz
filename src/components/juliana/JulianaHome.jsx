import BannerBody from "../Banner/BannerBody"
import FreeShipping from "../Nav/FreeShipping"
import NavItems from "../Nav/NavItems"
import Banner2 from "../../assets/banner-2.jpg";
import JulianaHomepageItems from "../JulianaHomepageItems";

const JulianaHome = ({data}) => {
  return (
    <div>
        <NavItems/>
    <FreeShipping/>
    <BannerBody img={Banner2} />
    <div className= "grid gap-7 mt-5 w-[90%] mx-auto">
      {data.map((dat)=>(<JulianaHomepageItems key={dat.id} id={dat.id} img={dat.img} title={dat.title} />))} 
    </div> 
    </div>
  )
}

export default JulianaHome