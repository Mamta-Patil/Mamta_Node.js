import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditNotes = (req,res) => {
    
    const {notesId}=useParams()
    console.log(notesId)


    const [title,settitle]=useState("")

    const [body,setbody]=useState("")

    const [notesImage,setnotesImage]=useState(null)

    const getsingledata = () => {
      axios.get(`${import.meta.env.VITE_BASEURL}notes/getsinglenote/${notesId}`, { withCredentials: true })
        .then((res) => {
          // setformData(res.data.notes); 
          console.log(res.data.notes)
          settitle(res.data.notes.title)
          setbody(res.data.notes.body)
        })
        .catch((err) => {
          console.log(err);
        });
    };

    useEffect(() => {
      getsingledata();
    }, []); 


  const handleSubmit = (e) => {
    e.preventDefault();
   
    const formData={title,body,file:notesImage}
    console.log(formData)
   
    axios.patch(`${import.meta.env.VITE_BASEURL}notes/updatenote/${notesId}`,formData, {
      withCredentials:true,
      headers:{
           "Content-Type":"multipart/form-data"
      }
    })
    .then((res) => {
      console.log(res)
      alert("notes updated sucessfully")
    })
    .catch((err) => {
      console.log(err)
     
    })

  };


  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Edit Your Notes</h2>
      <form onSubmit={handleSubmit} className='mt-5 mb-5 pt-5 pb-5'>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="title" style={{ display: 'block', marginBottom: '5px' }}>Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e)=>settitle(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="body" style={{ display: 'block', marginBottom: '5px' }}>Body</label>
            <input
            type="text"
            id="body"
            name="body"
            value={body}
            onChange={(e)=>setbody(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="img" style={{ display: 'block', marginBottom: '5px' }}>Image URL</label>
          <input
            type="file"
            id="notesImage"
            name="notesImage"
            onChange={(e)=>setnotesImage(e.target.files[0])}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Save Changes</button>
      </form>
    </div>
  );
};

export default EditNotes;
