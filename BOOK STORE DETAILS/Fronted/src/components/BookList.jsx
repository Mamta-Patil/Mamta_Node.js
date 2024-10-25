import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const BookList = () => {
  const {id}=useParams()

  const [booklist, setbooklist] = useState([])

  // get request
  const getbookdata = () => {
    // get data
    axios.get("http://localhost:8000/bookroute/getuser")
      .then((res) => {
        console.log(res.data)
        setbooklist(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // delete data
  const handleDelete=(id)=>{
    console.log(id)
    axios.delete(`http://localhost:8000/bookroute/delete/${id}`)
    .then((res)=>{
       console.log(res)
       console.log("product deleted successfully")
       alert("Product Deleted Successfully")
       getbookdata()
    })
    .catch((err)=>{ 
        console.log(err)
    })
}

  
  useEffect(() => {
    getbookdata()
  }, [])

  return (
    <div className='product'>
        {booklist.map((item) => (
          <div key={item.id} style={{ border: "2px solid  rgb(158, 132, 54)", margin: "5px", textAlign: "center" }}>
         <Link to={`/description/${item._id}`}>
            <img src={item.img} height={200} width={200} style={{marginTop:"10px"}} />
         </Link>
            <p>{item.title} </p>
            <p>{item.price} </p>
            <div>
              <button>
                <Link to={`/editproduct/${item._id}`} style={{color:'black'}}>Edit</Link>
              </button>
              <button onClick={()=>handleDelete(item._id)}>Delete</button>
            </div>
          </div>
        ))}
    </div>
  )
}
  
export default BookList
