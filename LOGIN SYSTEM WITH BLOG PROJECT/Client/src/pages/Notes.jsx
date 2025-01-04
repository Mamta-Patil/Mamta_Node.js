import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import axios from 'axios'

const Notes = () => {
  
  const [notesdata, setNotesdata] = useState([])

  const getNotes = () => {

    console.log(notesdata)
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
      <h3 className='mt-5'>Notes result:</h3>
      <div className='notes mb-5'>
        {notesdata.length > 0 ? (notesdata.map((el) => <PostCard key={el.id} title={el.title} image={el.noteSImage} discription={el.body} postId={el._id} />)) : (<h2>Notes not found:</h2>)}
      </div>
    </div>
  )
}

export default Notes
