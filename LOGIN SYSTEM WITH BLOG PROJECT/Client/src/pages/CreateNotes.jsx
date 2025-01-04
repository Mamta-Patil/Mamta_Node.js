import axios from 'axios';
import React, { useState } from 'react';

const CreateNotes = () => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);

    axios.post(`${import.meta.env.VITE_BASEURL}notes/create`,formData,{withCredentials:true})
.then((res)=>{
  console.log(res)
  alert(res.data.message)
})

    setFormData({ title: '', body: '', img: '' }); // Reset form after submission
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2 className='pt-5'>Create Note </h2>
      <form onSubmit={handleSubmit} className='mt-5 mb-5 pt-5 pb-5' >
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
          <input
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required
          />
        </div>
   
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
};

export default CreateNotes;
