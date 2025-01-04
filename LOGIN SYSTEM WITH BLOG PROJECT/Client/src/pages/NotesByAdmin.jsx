import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import axios from 'axios'

const NotesByAdmin = () => {

  const [notesdata, setNotesdata] = useState([])

  const getNotes = () => {

    console.log(notesdata)
    axios.get(`${import.meta.env.VITE_BASEURL}notes/getallnotes`, { withCredentials: true })
      .then((res) => {
        console.log(res)
        const notes = res.data?.notes || [];
        setNotesdata(notes);
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
      <h2>Notes collection:</h2>
      <div className='notes mt-5 mb-5 text-center' >
        {
          notesdata.map((el) => {
            return <div key={el.id} className='' style={{backgroundColor:"cadetblue"}}> 
                        <h5>{el.title}</h5>
                        <img src={el.noteSImage} alt="" width={"200px"} height={"200px"} />
                        <h6 className='pt-3 mb-5'>{el.body} </h6>
              </div>
          })
        }

      </div>
    </div>
  )
}

export default NotesByAdmin
