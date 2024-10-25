import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BookDetails = () => {
  const {id}=useParams()

  const [booklist, setbooklist] = useState([])

  // get request
  const getbookdata = () => {
    // get data
    axios.get(`http://localhost:8000/bookroute/getsingleuser/${id}`)
      .then((res) => {
        console.log(res.data)
        setbooklist(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  
  
  useEffect(() => {
    getbookdata()
  }, [])


  return (
    <div style={{width:"40%",margin:"5% auto"}}>
          <div key={id} style={{ border: "2px solid  rgb(158, 132, 54)", margin: "5px", textAlign: "center" }}>
          <img src={booklist.img} height={200} width={200} style={{marginTop:"20px"}} />
            <p>{booklist.title} </p>
            <p>{booklist.year} </p>
            <p>{booklist.author} </p>
            <p>{booklist.price} </p>
          </div>
    </div>
  )
}

export default BookDetails