

const Input = (props) => {
  return (
    <div className="py-2">
    <input className=" border py-[0.8rem] border-black/50 pl-3 font-pops font-semibold trackig-wide rounded-md w-full" type={props.type} placeholder={props.placeholder}  onChange={props.onChange} name={props.name} />
    </div>
  )
}

export default Input