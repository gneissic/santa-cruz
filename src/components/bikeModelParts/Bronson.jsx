import BannerBody from "../Banner/BannerBody"

import ClothModalItems from "../ClothModalItems";

const Bronson = ({data}) => {
  return (
    <div>
        
    <BannerBody img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGsi-GKmjaZeewp3_2_h3pS4QTeHDxg_DSwg&usqp=CAU"} />
    <div className= "grid grid-cols-2  gap-7 lg:flex lg:gap-[10rem] py-10">
      {data.map((dat)=>(<ClothModalItems key={dat.id}  id={dat.id} img={dat.clothImg} price={dat.price} title={dat.title} />))} 
    </div>
    </div>
  )
}

export default Bronson