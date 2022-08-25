import React from "react"
import { useSelector } from "react-redux"

const NavbarName = () => {
  const { navbarReducer } = useSelector((state) => state)
  // console.log(navbarReducer.data)
  return (
    <div>
      <h1>{navbarReducer.data.company}</h1>
    </div>
  )
}

export default NavbarName
