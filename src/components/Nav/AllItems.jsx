import { motion } from "framer-motion";

const AllItems = (props) => {
    const childVariants = {
        hidden: { y: "50vh",  opacity: 0 , },
        visible: { y:0 , opacity: 1, transition:{duration:0.5} },
      }
    
  return (
    <motion.div  variants={childVariants} initial="hidden" animate="visible" className="pt-[2rem] pl-10">
<div className="bg-white text-black font nun font-bold text-lg w-[85%] py-[0.3rem]">
    <h1 className="ml-2 text-2xl font-pops">{props.head}</h1>
</div>
<div className="pt-4 grid gap-2">
    <div>
        <p className="text-2xl font-semibold">{props.title}</p>
        <p className="text-sm">{props.body}</p>
    </div>
    <div>
        <p className="text-2xl  font-semibold">{props.title1}</p>
        <p className="text-sm">{props.body1}</p>
    </div>
    <div>
        <p className="text-2xl font-semibold">{props.title2}</p>
        <p className="text-sm">{props.body2}</p>
    </div>
</div>

    </motion.div>
  )
}

export default AllItems