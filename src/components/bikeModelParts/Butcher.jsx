import BannerBody from "../Banner/BannerBody"
import ClothModalItems from "../ClothModalItems";

const Butcher  = ({data})=>{
    return (
        <div>
          
    <BannerBody img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPzlz97Jo-Znw1GqXeKohzN9lsx4Dh4f3gvA&usqp=CAU"} />
    <div className= "grid grid-cols-2  gap-7 lg:flex lg:gap-[10rem] py-10">
      {data.map((dat)=>(<ClothModalItems key={dat.id}  id={dat.id} img={dat.clothImg} price={dat.price} title={dat.title} />))} 
    </div> 
        </div>
    )
}
export default Butcher