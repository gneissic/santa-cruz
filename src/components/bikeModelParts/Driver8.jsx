import BannerBody from "../Banner/BannerBody"
import ClothModalItems from "../ClothModalItems";

const Driver8 = ({data}) => {
  return (
    <div>
        
    <BannerBody img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1utCLaExc94u87Qe5v6t_Xt2lxqvbCY_RSA&usqp=CAU"} />
    <div className= "grid grid-cols-2  gap-7 mt-5 lg:flex lg:gap-[10rem] py-10">
      {data.map((dat)=>(<ClothModalItems key={dat.id}  id={dat.id} img={dat.clothImg} price={dat.price} title={dat.title} />))} 
    </div>
    </div>
  )
}

export default Driver8