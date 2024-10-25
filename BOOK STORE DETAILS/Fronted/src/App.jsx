import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookList from './components/BookList'
import {Allroutes} from './Route/Allroutes'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar />
    <Allroutes />
{/* <BookList /> */}
    </>
  )
}

export default App
