import BannerBody from "../Banner/BannerBody"

import ClothModalItems from "../ClothModalItems";

const SHopRiding = ({data}) => {
  return (
    <div>
    <BannerBody img={"https://www.intrepidtravel.com/adventures/wp-content/uploads/2023/03/The-Intrepid-Foundation-Zambia-WBR_Economic_Development1-2-Copy-Copy.jpg"} />
    <div className= "grid grid-cols-2 lg:grid-cols-4  gap-7 mt-5">
      {data.map((dat)=>(<ClothModalItems key={dat.id}  id={dat.id} img={dat.clothImg} price={dat.price} title={dat.title} />))} 
    </div></div>
  )
}

export default SHopRiding