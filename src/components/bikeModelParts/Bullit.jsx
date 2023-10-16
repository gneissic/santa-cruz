import BannerBody from "../Banner/BannerBody"
import ClothModalItems from "../ClothModalItems"
import FreeShipping from "../Nav/FreeShipping"
import NavItems from "../Nav/NavItems"
import Banner2 from "../../assets/banner-2.jpg";

const Bullit = ({data}) => {
  return (
    <div> <NavItems/>
    <FreeShipping/>
    <BannerBody img={Banner2} />
    <div className= "grid grid-cols-2  gap-7 mt-5">
      {data.map((dat)=>(<ClothModalItems key={dat.id} img={dat.clothImg} price={dat.price} title={dat.title} />))} 
    </div></div>
  )
}

export default Bullit