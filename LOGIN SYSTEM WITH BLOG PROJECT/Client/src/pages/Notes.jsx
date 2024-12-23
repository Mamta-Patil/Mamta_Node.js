import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import axios from 'axios'

const Notes = () => {
  //Notes fetch by user
  
  const [notesdata, setNotesdata] = useState([])

  const getNotes = () => {
    const userinfo = JSON.parse(localStorage.getItem("userData"))
    axios.get(`${import.meta.env.VITE_BASEURL}notes/getallnotes/${userinfo._id}`, { withCredentials: true })
      .then((res) => {
        console.log(res)
        setNotesdata(res.data.allUserNotes)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getNotes()
  }, [])

  return (
    <div>
      <h2>Notes result:</h2>
      <div className='d-flex flex-wrap gap-4'>

        {notesdata.length > 0 ? (notesdata.map((el) => <PostCard key={el.id} title={el.title} image={el.noteSImage} discription={el.body} postId={el.id} />)) : (<h2>Notes not found:</h2>)}

      </div>
    </div>
  )
}

export default Notes
