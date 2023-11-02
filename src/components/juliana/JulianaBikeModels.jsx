import BannerBody from "../Banner/BannerBody"

import Banner2 from "../../assets/banner-2.jpg";
import BikeModalItems from "../BikeModalItems";

const JulianaBikeModels = ({data}) => {
  return (
    <div>
       
    <BannerBody img={Banner2} />
    <div className= "grid gap-7 mt-5">
      {data.map((dat)=>(<BikeModalItems key={dat.id} img={dat.bikeImg} title={dat.title} />))} 
    </div>
    </div>
  )
}

export default JulianaBikeModels