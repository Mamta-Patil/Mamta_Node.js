import React, { useEffect, useState } from 'react'
import axios from 'axios'

const BlogList = () => {

  const [notesdata, setNotesdata] = useState([])

  const getNotes = () => {
    axios.get(`${import.meta.env.VITE_BASEURL}blog/getallblog`)
      .then((res) => {
        console.log(res.data)
        setNotesdata(res.data.allUserNotes)
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
      <h2>Blogs result:</h2>
      <div className='d-flex flex-wrap gap-4'>
        {
          notesdata.length > 0 ? (notesdata.map((el) =>
          (
            <div key={el.id}>
              <p> {el._id} </p>
              <h4> {el.Title} </h4>
              <h6> {el.Auther} </h6>
              <p> {el.Content} </p>
              <h2> {el.PublishedDate} </h2>
              <button>Edit</button>
              <button onClick={() => handlleDelete(el._id)}>Delete</button>
            </div>
          )
          )) : ("")
        }
      </div>
    </div>
  )
}

export default BlogList

// blog
// 404 = for not found
// 500 =  for error
// 200 = for success message
