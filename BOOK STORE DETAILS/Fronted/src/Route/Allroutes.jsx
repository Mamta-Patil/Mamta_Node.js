import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BookForm from '../components/BookForm'
import BookList from '../components/BookList'
import BookFormEdit from '../components/BookFormEdit.jsx'
import BookDetails from '../components/BookDetails.jsx'

export const Allroutes = () => {
  return (
    <div>
      <Routes>
      <Route path='/product' element={<BookList />} />
        <Route path='/addproduct' element={<BookForm />} />
        <Route path='/editproduct/:id' element={<BookFormEdit />} />
        <Route path='/description/:id' element={<BookDetails />} />
      </Routes>
    </div>
  )
}

// export default Allroutes
