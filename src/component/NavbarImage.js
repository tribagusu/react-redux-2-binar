import React from "react"
import { useSelector } from "react-redux"

const NavbarImage = () => {
  const { navbarReducer } = useSelector((state) => state)

  return (
    <div>
      <img src={navbarReducer.data.logo} alt="" />
    </div>
  )
}

export default NavbarImage
