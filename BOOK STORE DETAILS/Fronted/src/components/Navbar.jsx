import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-evenly",backgroundColor:"rgb(158, 132, 54)",color:"#fff",padding:"10px 0px"}}>
      <Link to={"/product"}>Product</Link>
      <Link to="/addproduct">AddProduct</Link>
      {/* <Link>Product</Link> */}

    </div>
  )
}

export default Navbar
