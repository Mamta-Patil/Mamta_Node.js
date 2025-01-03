import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const BlogList = () => {

  const [notesdata, setNotesdata] = useState([])

  const getNotes = () => {
    axios.get(`${import.meta.env.VITE_BASEURL}blog/getallblog`)
      .then((res) => {
        console.log(res.data)
        setNotesdata(res.data.allblog)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getNotes()
  }, [])

  const handlleDelete = (_id) => {
    console.log(_id)
    axios.delete(`${import.meta.env.VITE_BASEURL}blog/delate/${_id}`)
      .then((res) => {
        console.log(res)
        alert("data deleted successfully")
        getNotes()
        console.log("deleted data sucessfully")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <h2>Blogs : </h2>
      <div className='blogs'>
        {
          notesdata.length > 0 ? (notesdata.map((el) =>
          (
            <div key={el.id} className='blog' >
              {/* <p> {el._id} </p> */}
              <h4> 
                <Link to={`/singleblog/${el._id}`}>
                {el.Title} 
                </Link>
                </h4>
              <h6> {el.Auther} </h6>
              <p> {el.Content} </p>
              <p> {el.Tag} </p>
              <p> {el.PublishedDate} </p>
              <button>
                <Link to={`/edit/${el._id}`} >
                Edit
                </Link>
                </button>
              <button className='ms-5' onClick={() => handlleDelete(el._id)}>Delete</button>
            </div>
          )
          )) : ("")
        }
      </div>
    </div>
  )
}

export default BlogList
