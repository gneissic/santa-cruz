import BannerBody from "../Banner/BannerBody"
import ClothModalItems from "../ClothModalItems"


const FirstPart = ({data}) => {
  
  
  return (
    <div>
        
    <BannerBody img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsWwJ9_mpulBuxlwe_iuCGxQqFyeFEZq2Fw&usqp=CAU"} />
    <div >
    <div  className= "grid grid-cols-2 gap-7 mt-5 lg:grid-cols-4 lg:place-items-center">
      {data.map((dat)=>(<ClothModalItems key={dat.id} img={dat.clothImg} price={dat.price} id={dat.id} title={dat.title} />))} 
    </div>
    </div>
    
    </div>
  )
}

export default FirstPart