
import BannerBody from "../Banner/BannerBody"
import ClothModalItems from "../ClothModalItems";


const Heckler = ({data}) => {
  return (
    <div>
    <BannerBody img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV31_s80jROQ-T27_madWb4XSKWKhk5d76Jw&usqp=CAU"} />
    <div className= " grid grid-cols-2 gap-7 lg:flex lg:gap-[10rem] py-10">
      {data.map((dat)=>(<ClothModalItems key={dat.id}  id={dat.id} img={dat.clothImg} price={dat.price} title={dat.title} />))} 
    </div></div>
  )
}

export default Heckler