import { Fragment } from "react"
import NavItems from "./Nav/NavItems"
import FreeShipping from "./Nav/FreeShipping"
import { Outlet } from "react-router-dom"
import NavModal from "./Nav/NavModal"


const Root = () => {
  return (
    <Fragment>
        <NavModal/>
    <NavItems/>
     <FreeShipping/>
     <Outlet/>
    </Fragment>
  )
}

export default Root