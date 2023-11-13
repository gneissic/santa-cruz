

const FooterItems = (props) => {
  return (
    <div className="text-center text-black/95 font-pops">
        <h1 className="p-5 text-2xl tracking-wider font-pops font-semibold text-black/95 border-t mt-4 lg:border-none lg:text-sm">{props.head}</h1>
        <ul className="grid gap-2 cursor-all-scrollfont-semibold text-sm">
            <li>{props.about}</li>
            <li>{props.steward}</li>
            <li>{props.pay}</li>
            <li>{props.carrers}</li>
            <li>{props.privacy}</li>
            <li>{props.policy}</li>
            <li>{props.contact}</li>
            <li>{props.us}</li>
        </ul>
    </div>
  )
}

export default FooterItems