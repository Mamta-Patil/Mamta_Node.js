import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditBlog = (req, res) => {

  const { blogId } = useParams()
  console.log(blogId)

  const initialstate = {
    Title: "",
    Author: "",
    Tag: "",
    Content: "",
    PublishedDate: ""
  }

  const [blogData, setblogData] = useState(initialstate);

  const getsingledata = () => {
    axios.get(`${import.meta.env.VITE_BASEURL}blog/getsingleblog/${blogId}`)
      .then((res) => {
        setblogData(res.data.blogs);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    setblogData({ ...blogData, [e.target.name]: e.target.value });

  };

  useEffect(() => {
    getsingledata();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Edited Data:', blogData);

    axios.patch(`${import.meta.env.VITE_BASEURL}blog/updateblog/${blogId}`, blogData)
      .then((res) => {
        console.log(res)
        alert("blog updated sucessfully")
      })
      .catch((err) => {
        console.log(err)
        alert(err.data.message)
      })

  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Edit Your Blog: </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="Title" style={{ display: 'block', marginBottom: '5px' }}>Title</label>
          <input
            type="text"
            id="Title"
            name="Title"
            value={blogData.Title}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="Author" style={{ display: 'block', marginBottom: '5px' }}>Author</label>
          <input
            type="text"
            id="Author"
            name="Author"
            value={blogData.Author}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="Content" style={{ display: 'block', marginBottom: '5px' }}>Content</label>
          <input
            type="text"
            id="Content"
            name="Content"
            value={blogData.Content}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="Tag" style={{ display: 'block', marginBottom: '5px' }}>Tag</label>
          <input
            type="Tag"
            id="Tag"
            name="Tag"
            value={blogData.Tag}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="img" style={{ display: 'block', marginBottom: '5px' }}>PublishedDate</label>
          <input
            type="date"
            id="PublishedDate"
            name="PublishedDate"
            value={blogData.PublishedDate}
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

export default EditBlog
