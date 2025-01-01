import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditBlog = (req,res) => {
    
    const {notesId}=useParams()
    console.log(notesId)

    const initialstate={
      title:"",
      body:"",
      notesImage:""
    }

    const [formData, setformData] = useState(initialstate);

    const getsingledata = () => {
      axios.get(`${import.meta.env.VITE_BASEURL}notes/getsinglenote/${notesId}`, { withCredentials: true })
        .then((res) => {
          setformData(res.data.notes); 
          console.log(res)
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const handleChange = (e) => {
      setformData({ ...formData, [e.target.name]: e.target.value }); 
   
    };

    useEffect(() => {
      getsingledata();
    }, []); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Edited Data:', formData);
   
    axios.patch(`${import.meta.env.VITE_BASEURL}notes/updatenote/${notesId}`,formData, { withCredentials: true })
    .then((res) => {
      console.log(res)
      alert("notes updated sucessfully")
    })
    .catch((err) => {
      console.log(err)
      alert(err.data.message)
    })

  };


  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Edit Your Notes</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="title" style={{ display: 'block', marginBottom: '5px' }}>Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="body" style={{ display: 'block', marginBottom: '5px' }}>Body</label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            rows="4"
            required
          ></textarea>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="img" style={{ display: 'block', marginBottom: '5px' }}>Image URL</label>
          <input
            type="text"
            id="img"
            name="img"
            value={formData.img}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Save Changes</button>
      </form>
    </div>
  );
};

export default EditBlog
