import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-evenly",backgroundColor:"cyan",padding:"10px 0px"}}>
      <Link to={"/productpage"} >Product Page</Link>
      <Link to={"/addproductpage"} >Add Product</Link>
    </div>
  )
}

export default Navbar
