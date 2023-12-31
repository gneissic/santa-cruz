import { Fragment } from "react";
import { motion } from "framer-motion";
const BIKES = [
  { title: "V10", para: "215mm | MX29", id:1 },
  { title: "Nomad", para: "170mm | MX",  id:2 },
  { title: "Bullit", para: "170 | MX |eMTB" ,  id:3 },
  { title: "Megatower", para: "165mm | 29*" ,  id:4 },
  { title: "Bronson", para: "170mm | MX" ,  id:5 },
  { title: "Heckler", para: "150mm | MX |eMTB" ,  id:6 },
  { title: "Hightower", para: "145mm | 29*" ,  id:7 },
  { title: "5010", para: "135mm | MX" ,  id:8},
  { title: "Tallboy", para: "120mm | 29*"  ,  id:9},
];

const Bikes = () => {
    const childVariants = {
        hidden: { y: "50vh",  opacity: 0 , },
        visible: { y:0 , opacity: 1, transition:{duration:0.5} },
      }
    
  return (
    <Fragment>
      <motion.div  variants={childVariants} initial="hidden" animate="visible" className="pl-5 mt-[2rem] grid gap-4 font-semibold text-white">
        {BIKES.map((item)=>(
         <div key={item.id}>
            <h1 className="text-3xl font-pops">{item.title}</h1>
        <p className="font-pops tracking-wide text-sm">{item.para}</p>
         </div> ))}
      </motion.div>
    </Fragment>
  );
};

export default Bikes;
