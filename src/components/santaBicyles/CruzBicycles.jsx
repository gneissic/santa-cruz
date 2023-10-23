import ClothModalItems from "../ClothModalItems"
import CollectionsNav from "../Nav/CollectionsNav"
import FreeShipping from "../Nav/FreeShipping"
import NavItems from "../Nav/NavItems"

const CruzBicycles = ({data}) => {
  return (
    <div>
        <NavItems/>
    <FreeShipping/>
    <CollectionsNav page="collections" title="Santa Cruz Bicycles" />
    <div className= "grid grid-cols-2 gap-7 mt-5 place-items-center">
      {data.map((dat)=>(<ClothModalItems key={dat.id}  id={dat.id} img={dat.clothImg} price={dat.price} title={dat.title} />))} 
    </div>
    </div>
  )
}

export default CruzBicycles