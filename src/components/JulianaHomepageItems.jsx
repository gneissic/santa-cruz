import { Link } from "react-router-dom"


const JulianaHomepageItems = (props) => {
  return (
    <div>
        <Link to={props.id}>
    <img src={props.img} alt="" />
    <p className="text-2xl text-center font-pops font-bold text-black pt-3">{props.title}</p>

    

    <button className="border border-slate-200 px-1 py-2  rounded-md w-[60%] ml-[4rem] mt-2">SHOP THE COLLECTION</button>
    </Link>
    </div>
  )
}

export default JulianaHomepageItems