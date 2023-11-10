import ClothModalItems from "../ClothModalItems"
import CollectionsNav from "../Nav/CollectionsNav"


const CruzBicycles = ({data}) => {
  return (
    <div>
    <CollectionsNav page="collections" title="Santa Cruz Bicycles" />
    <div className= "grid grid-cols-2  gap-7 mt-5 place-items-center lg:grid lg:grid-cols-4">
      {data.map((dat)=>(<ClothModalItems key={dat.id}  id={dat.id} img={dat.clothImg} price={dat.price} title={dat.title} />))} 
    </div>
    </div>
  )
}
export default CruzBicycles