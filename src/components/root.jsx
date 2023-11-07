import { Fragment, useState,  } from "react"
import NavItems from "./Nav/NavItems"
import FreeShipping from "./Nav/FreeShipping"
import { Outlet } from "react-router-dom"
import NavModal from "./Nav/NavModal"


const Root = () => {
    const [navModal, setNavModal] = useState(false)
    const showNavModal = ()=> {
        setNavModal(true)
    }
    const hideNavModal = ()=> {
        setNavModal(false)
    }
   
  return (
    <Fragment> 
         <NavModal modal={navModal} nav={hideNavModal} />
    <NavItems  nav={showNavModal} />
     <FreeShipping/>
     <Outlet/>
    </Fragment>
  )
}

export default Root