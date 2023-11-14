import BannerBody from "../Banner/BannerBody"
import ClothModalItems from "../ClothModalItems"


const Bantam = ({data}) => {
  return (
    <div>
    <BannerBody img={"data:image/jpeg;base64,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"} />
    <div className= "grid grid-cols-2  gap-7 lg:flex lg:gap-[10rem] py-10 ">
      {data.map((dat)=>(<ClothModalItems key={dat.id} id={dat.id} img={dat.clothImg} price={dat.price} title={dat.title} />))} 
    </div>
    </div>
  )
}

export default Bantam