import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Edit from './Edit'
import Product from "./Product"
import AddProduct from './AddProduct'
export const AllRoutes = () => {
  return (

    <Routes >
        <Route path='/productpage' element={<Product />} />
        <Route path='/addproductpage' element={<AddProduct />} />
        <Route path='/Edit/:id' element={<Edit />} />
    </Routes>

  )
}

