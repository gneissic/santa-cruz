

const ModalMenu = (props) => {
  return (
    <div>
        <div>
   
   <div className="font-pops font-semibold text-white text-3xl grid gap-6 pl-[2rem] pt-[3rem]">
           <p onClick={props.showBikes}>Bikes</p>
           <p onClick={props.showSupport}>Support</p>
           <p onClick={props.showAbout}>About</p>
           <p onClick={props.showGear}>Gear</p>
       </div>
       <div className="grid absolute bottom-4 left-12  font-pops font-semibold text-white gap-5  w-[75%] border-t mx-auto   py-5 text-lg tracking-wider text-center">
           <div><p>Bike Registration</p></div>
           <div className="border-t py-3 mt-2"><p className="pt-4">Find a Dealer</p></div>
           <div className="flex justify-center border-y py-7 items-center">
               <p  className="pr-[2rem] border-r mr-10 font-ken  tracking-[0.5rem] text-2xl font-light text-amber-500">JULIANA</p>
               <p className=" text-xl tracking-[0.3rem] text-white border-y border-red-500  font-pops py-2">Reserve</p>
           </div>
       </div> 
   </div>
    </div>
  )
}

export default ModalMenu