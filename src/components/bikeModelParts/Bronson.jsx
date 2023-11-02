import BannerBody from "../Banner/BannerBody"

import Banner2 from "../../assets/banner-2.jpg";
import ClothModalItems from "../ClothModalItems";

const Bronson = ({data}) => {
  return (
    <div>
        
    <BannerBody img={Banner2} />
    <div className= "grid grid-cols-2  gap-7 mt-5">
      {data.map((dat)=>(<ClothModalItems key={dat.id}  id={dat.id} img={dat.clothImg} price={dat.price} title={dat.title} />))} 
    </div>
    </div>
  )
}

export default Bronson