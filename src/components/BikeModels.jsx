
import BannerBody from "./Banner/BannerBody";
import FreeShipping from "./Nav/FreeShipping";
import NavItems from "./Nav/NavItems";
import  Banner2  from "../assets/banner-2.jpg";
import BikeModalItems from "./BikeModalItems";

const BikeModels = ({data}) => {
  return (
    <div>
    <NavItems/>
     <FreeShipping/>
     <BannerBody img={Banner2} />
     <div className=
     "grid gap-7 mt-5">
       {data.map((dat)=>(<BikeModalItems key={dat.id}  id={dat.id} img={dat.bikeImg} title={dat.title} />))} 
     </div>
    </div>
  )
}

export default BikeModels