import NavbarImage from "./NavbarImage"
import NavbarName from "./NavbarName"

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "salmon",
      }}
    >
      <NavbarName />
      <NavbarImage />
    </div>
  )
}

export default Navbar
