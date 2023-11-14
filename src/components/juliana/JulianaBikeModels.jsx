import BannerBody from "../Banner/BannerBody"
import BikeModalItems from "../BikeModalItems";

const JulianaBikeModels = ({data}) => {
  return (
    <div>
       
    <BannerBody img={"https://t4.ftcdn.net/jpg/06/07/20/63/360_F_607206365_Ju7EPB7uGuF1jfFYdathS2DbH1dL4B0z.jpg"} />
    <div className= "grid gap-7 mt-5 lg:grid-cols-3 lg:mt-7 lg:gap-y-20">
      {data.map((dat)=>(<BikeModalItems key={dat.id}  id={dat.id} img={dat.bikeImg} title={dat.title} />))} 
    </div>
    </div>
  )
}

export default JulianaBikeModels