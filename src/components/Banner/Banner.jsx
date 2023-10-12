import FreeShipping from "../Nav/FreeShipping"
import NavItems from "../Nav/NavItems"
import BannerBody from "./BannerBody"
import BannerItems from "./BannerItems"
import BannerImg from "../../assets/banner-img.jpg";

const Banner = ({data}) => {
  return (
    <div>
    <NavItems/>
     <FreeShipping/>
     <BannerBody img={BannerImg} />
     <div className="grid gap-7 mt-[1rem]">

     {data.map((dat)=>(<BannerItems key={dat.id} img={dat.img} id={dat.id} />))}
     </div>
    
    </div>
  )
}

export default Banner